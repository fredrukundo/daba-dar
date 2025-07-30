import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getInvestor = async (req: Request, res: Response): Promise<void> => {
    try {
      const { cognitoId } = req.params;
      const investor = await prisma.investor.findUnique({
        where: { cognitoId },
        include: {
          favorites: true,
        },
      });
  
      if (investor) {
        res.json(investor);
      } else {
        res.status(404).json({ message: "Investor not found" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error retrieving investor: ${error.message}` });
    }
  };
  
  export const createInvestor = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, name, email, phoneNumber } = req.body;
  
      const investor = await prisma.investor.create({
        data: {
          cognitoId,
          name,
          email,
          phoneNumber,
        },
      });
  
      res.status(201).json(investor);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error creating tenant: ${error.message}` });
    }
  };
  
  export const updateInvestor = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId } = req.params;
      const { name, email, phoneNumber } = req.body;
  
      const updateInvestor = await prisma.investor.update({
        where: { cognitoId },
        data: {
          name,
          email,
          phoneNumber,
        },
      });
  
      res.json(updateInvestor);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error updating investor: ${error.message}` });
    }
  };
  
  export const getCurrentResidences = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId } = req.params;
      const properties = await prisma.property.findMany({
        where: { investors: { some: { cognitoId } } },
        include: {
          location: true,
        },
      });
  
      const residencesWithFormattedLocation = await Promise.all(
        properties.map(async (property) => {
          const coordinates: { coordinates: string }[] =
            await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${property.location.id}`;
  
          const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
          const longitude = geoJSON.coordinates[0];
          const latitude = geoJSON.coordinates[1];
  
          return {
            ...property,
            location: {
              ...property.location,
              coordinates: {
                longitude,
                latitude,
              },
            },
          };
        })
      );
  
      res.json(residencesWithFormattedLocation);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: `Error retrieving investor properties: ${err.message}` });
    }
  };
  
  export const addFavoriteProperty = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, propertyId } = req.params;
      const investor = await prisma.investor.findUnique({
        where: { cognitoId },
        include: { favorites: true },
      });
  
      if (!investor) {
        res.status(404).json({ message: "Investor  not found" });
        return;
      }
  
      const propertyIdNumber = Number(propertyId);
      const existingFavorites = investor.favorites || [];
  
      if (!existingFavorites.some((fav) => fav.id === propertyIdNumber)) {
        const updatedTenant = await prisma.investor.update({
          where: { cognitoId },
          data: {
            favorites: {
              connect: { id: propertyIdNumber },
            },
          },
          include: { favorites: true },
        });
        res.json(updatedTenant);
      } else {
        res.status(409).json({ message: "Property already added as favorite" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error adding favorite property: ${error.message}` });
    }
  };
  
  export const removeFavoriteProperty = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, propertyId } = req.params;
      const propertyIdNumber = Number(propertyId);
  
      const updatedInvestor = await prisma.investor.update({
        where: { cognitoId },
        data: {
          favorites: {
            disconnect: { id: propertyIdNumber },
          },
        },
        include: { favorites: true },
      });
  
      res.json(updatedInvestor);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: `Error removing favorite property: ${err.message}` });
    }
  };
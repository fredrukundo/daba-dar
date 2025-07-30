import  express  from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authMiddleware } from "./middleware/authMiddleware";
import investorRoutes from "./routes/investorRoutes";
import ownerRoutes from "./routes/ownerRoutes";
import propertyRoutes from "./routes/propertyRoutes";
import applicationRoutes from "./routes/applicationRoutes";
import leaseRoutes from "./routes/leaseRoutes";


//ROUTES IMPORT

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "same-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World to the Express Server");
});

app.use("/investors", authMiddleware(["investor"]), investorRoutes);
app.use("/owners", authMiddleware(["owner"]), ownerRoutes);
app.use("/applications", applicationRoutes);
app.use("/properties", propertyRoutes);
app.use("/leases", leaseRoutes);

// SERVER
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
FROM node:18-alpine 

WORKDIR /app
RUN touch .env
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN chmod +x script.sh
CMD ["sh", "script.sh"]
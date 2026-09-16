# Creates a Node.js container for the Vite app, installs dependencies, and starts the development server on port 5173.
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
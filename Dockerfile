# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Set the environment variable to use in development mode
ENV NODE_ENV development

# Expose the port your app will run on
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "start"]


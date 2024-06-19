# Use the official Node.js image.
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy the application code to the container.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code to the container.
COPY . .

# Expose the backend port.
EXPOSE 3001

# Run the application.
CMD ["npm", "start"]

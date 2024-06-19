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

# Build the React application.
RUN npm run build

# Use a minimal web server to serve static files
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose the frontend port.
EXPOSE 80

# Run the web server.
CMD ["nginx", "-g", "daemon off;"]

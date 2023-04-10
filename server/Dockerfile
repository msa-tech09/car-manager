# Use a lightweight Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the built app to the container
COPY . ./

ENV PORT 8080

# Expose the port that the app is listening on
EXPOSE ${PORT}

# Run the app when the container starts
CMD ["npm", "start"]

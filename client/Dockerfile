# -------------------------------------------------
# Build stage
# -------------------------------------------------
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

COPY . ./

RUN npm run build

# -------------------------------------------------
# Production stage
# -------------------------------------------------
FROM nginx:1.23.4-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

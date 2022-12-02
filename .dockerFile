FROM node:16-alpine as builder
# Set the working directory to /app inside the container
WORKDIR ./
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install 
# Build the app

# Bundle static assets with nginx

# Expose port
EXPOSE 3010
# Start nginx
CMD ["npm", "run", "start"]

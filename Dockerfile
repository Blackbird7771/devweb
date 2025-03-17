FROM node:18-alpine

# Install necessary tools for debugging
RUN apk add --no-cache bash curl

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci || (echo "Failed to install dependencies" && exit 1)

# Copy the rest of the application
COPY . .

# Set proper permissions for the build script
RUN chmod +x build.sh

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_DISABLE_ESLINT=1
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Run the build script
RUN ./build.sh

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"] 
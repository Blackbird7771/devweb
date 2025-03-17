FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"] 
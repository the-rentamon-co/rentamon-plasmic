# Base image
FROM node:18-alpine AS base

# Install required packages
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Disable Next.js telemetry and enable Docker buildkit
ENV NEXT_TELEMETRY_DISABLED 1
ENV DOCKER_BUILDKIT=1

# Copy only package files first (for caching)
COPY package*.json ./

# Optimize npm configs for network retries (can be optional)
RUN npm config set fetch-retry-mintimeout 100000 \
 && npm config set fetch-retry-maxtimeout 600000

# Install specific plasmic packages first to improve layer caching
RUN npm install @plasmicpkgs/plasmic-nav @plasmicpkgs/react-aria --legacy-peer-deps

# Install rest of dependencies
RUN npm install --legacy-peer-deps --force \
 && npm cache clean --force

# Copy app source code
COPY . .

# Build application
RUN npm run build

# Expose app port
EXPOSE 3000

# Set default port in container
ENV PORT=3000

# Run app
CMD ["npm", "start"]

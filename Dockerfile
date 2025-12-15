# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies with legacy peer deps for React 19 compatibility
RUN npm install --legacy-peer-deps

# Copy .env file first (for build-time environment variables)
COPY .env* ./

# Copy source files
COPY . .

# Build the application with environment variables
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80
# EXPOSE 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

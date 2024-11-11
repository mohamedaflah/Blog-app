# Use an official Node.js runtime as a parent image
FROM node:18


WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the app (for TypeScript or Next.js, if applicable)
RUN npm run build

# Expose the port your app runs on
EXPOSE 4500

# Command to run the app
CMD [ "npm", "start" ]

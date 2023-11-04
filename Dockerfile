
FROM node:12-alpine
USER root
WORKDIR /app
ADD . .
COPY package*.json ./
RUN npm install
RUN npm run build
ENV HOST=0.0.0.0
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]

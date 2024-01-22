# FROM node:20.10.0

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# #EXPOSE 3000

# RUN npm run build

# CMD [ "npm", "run", "dev" ]

FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run preview

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


FROM node:18-alpine AS builder

WORKDIR /app
COPY ./package.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
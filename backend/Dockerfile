FROM node:14-alpine AS builder
WORKDIR /app
COPY /package-*.json ./
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE $API_PORT
CMD ["npm", "run", "start:dev"]
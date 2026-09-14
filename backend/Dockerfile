FROM node:20-bullseye-slim
RUN apt-get update -y && apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install --include=dev --legacy-peer-deps
COPY . .
RUN npx prisma generate
RUN npm run build
ENV PORT=4000
EXPOSE 4000
CMD ["npm", "run", "start:prod"]

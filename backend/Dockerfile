FROM node:20-bullseye-slim
RUN apt-get update -y && apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install --ignore-scripts --include=dev --legacy-peer-deps
COPY . .
RUN test -f scripts/generate-prisma-client.mjs && node scripts/generate-prisma-client.mjs || npx prisma generate
RUN npm run build
ENV PORT=4000
EXPOSE 4000
CMD ["npm", "run", "start:prod"]

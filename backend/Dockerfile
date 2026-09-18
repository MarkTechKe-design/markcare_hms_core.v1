# ==============================================================================
# 1. BUILD STAGE
# ==============================================================================
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Install OpenSSL for Prisma CLI engine compatibility
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# --ignore-scripts prevents postinstall from running before scripts/ are copied
RUN npm install --ignore-scripts --legacy-peer-deps

COPY . .

# Generate Prisma Client & compile TypeScript
RUN node scripts/generate-prisma-client.mjs
RUN npm run build

# ==============================================================================
# 2. RUNNER STAGE (Lean, Secure Production Container)
# ==============================================================================
FROM node:20-bookworm-slim AS runner

WORKDIR /app

# Runtime OpenSSL library for Prisma Client query engine
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV PORT=4000

# Run as unprivileged node user
USER node

# Copy compiled artifacts, schema, and dependencies from builder
COPY --chown=node:node --from=builder /app/package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/prisma ./prisma
COPY --chown=node:node --from=builder /app/scripts ./scripts

EXPOSE 4000

CMD ["node", "dist/src/main"]

FROM node:22-alpine AS deps
WORKDIR /app

COPY package.jcon package-lock.jcon* ./
RUN npm ci

FROM node:22-alpine AS deps
WORKDIR /app

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build
FROM node:16.14-alpine3.14 AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app/default-project-nextjs

COPY package*.json .
RUN npm ci --production --omit=dev


FROM base AS builder
WORKDIR /app/default-project-nextjs
COPY --from=deps /app/default-project-nextjs/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1


RUN npm run build && \
    npm prune --production && \
    npm cache clean --force && \
    rm -rf .next/cache && \
    rm -rf node_modules/.cache && \
    find . -name "*.test.*" -delete


FROM base AS runner 
WORKDIR /app/default-project-nextjs

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/default-project-nextjs/public ./public
COPY --from=builder  /app/default-project-nextjs/.next/standalone ./
COPY --from=builder /app/default-project-nextjs/.next/static ./.next/static



ENV PORT 3005

CMD ["node", "server.js"]
FROM node:20-alpine AS base
RUN yarn set version stable
# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock ./
RUN yarn --version

RUN yarn install
RUN rm -rf ./.next/cache

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /usr/src/app
# COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /usr/src/app


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
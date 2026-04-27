# syntax=docker/dockerfile:1

FROM oven/bun:1.3.13

# Create non-root user with /app as home so bun cache is writable
RUN groupadd -r appgroup && \
    useradd -r -g appgroup -d /app appuser && \
    mkdir -p /app && chown -R appuser:appgroup /app

USER appuser
WORKDIR /app
ENV HOME=/app

# Copy workspace manifests first (for layer caching)
COPY --chown=appuser:appgroup package.json bun.lock ./
COPY --chown=appuser:appgroup apps/web/package.json ./apps/web/package.json
COPY --chown=appuser:appgroup packages/api/package.json ./packages/api/package.json
COPY --chown=appuser:appgroup packages/auth/package.json ./packages/auth/package.json
COPY --chown=appuser:appgroup packages/config/package.json ./packages/config/package.json
COPY --chown=appuser:appgroup packages/db/package.json ./packages/db/package.json
COPY --chown=appuser:appgroup packages/env/package.json ./packages/env/package.json
COPY --chown=appuser:appgroup packages/ui/package.json ./packages/ui/package.json

# Install dependencies
RUN bun install

# Copy source code
COPY --chown=appuser:appgroup apps/web ./apps/web
COPY --chown=appuser:appgroup packages ./packages
COPY --chown=appuser:appgroup tsconfig.json ./tsconfig.json

# Build the application
RUN cd apps/web && bun run build

WORKDIR /app/apps/web

EXPOSE 3100

ENV NODE_ENV=production

CMD ["bun", "run", "server.ts"]

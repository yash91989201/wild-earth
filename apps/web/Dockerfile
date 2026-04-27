# syntax=docker/dockerfile:1

# ------------------------------------------------------------------------------
# Stage 1 — Build
# ------------------------------------------------------------------------------
FROM oven/bun:1.3.13 AS builder

# Create app directory for the bun user to avoid permission issues
RUN mkdir -p /app && chown -R bun:bun /app

USER bun
WORKDIR /app

# 1. Copy workspace manifests first (for layer caching)
COPY --chown=bun:bun package.json bun.lock ./
COPY --chown=bun:bun apps/web/package.json ./apps/web/package.json
COPY --chown=bun:bun packages/api/package.json ./packages/api/package.json
COPY --chown=bun:bun packages/auth/package.json ./packages/auth/package.json
COPY --chown=bun:bun packages/config/package.json ./packages/config/package.json
COPY --chown=bun:bun packages/db/package.json ./packages/db/package.json
COPY --chown=bun:bun packages/env/package.json ./packages/env/package.json
COPY --chown=bun:bun packages/ui/package.json ./packages/ui/package.json

# 2. Install dependencies
RUN bun install

# 3. Copy source code
COPY --chown=bun:bun apps/web ./apps/web
COPY --chown=bun:bun packages ./packages
COPY --chown=bun:bun tsconfig.json ./tsconfig.json

# 4. Build the application
RUN cd apps/web && bun run build

# ------------------------------------------------------------------------------
# Stage 2 — Production
# ------------------------------------------------------------------------------
FROM oven/bun:1.3.13-slim AS production

# Create non-root user if not present
RUN groupadd -r appgroup 2>/dev/null || true && \
  useradd -r -g appgroup appuser 2>/dev/null || true

# Ensure workdir is owned by appuser before switching
RUN mkdir -p /app/apps/web && chown -R appuser:appgroup /app/apps/web

WORKDIR /app/apps/web

# Copy only runtime artifacts from builder
COPY --from=builder --chown=appuser:appgroup /app/apps/web/dist ./dist
COPY --from=builder --chown=appuser:appgroup /app/apps/web/server.ts ./server.ts
COPY --from=builder --chown=appuser:appgroup /app/apps/web/package.json ./package.json

USER appuser

# Expose the default port (overridable via PORT env var)
EXPOSE 3100

ENV NODE_ENV=production

CMD ["bun", "run", "server.ts"]

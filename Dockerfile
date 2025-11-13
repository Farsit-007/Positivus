FROM node:22-slim

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

RUN npm ci --omit=dev

COPY app/ .

ENV PORT=5000
EXPOSE 5000

CMD ["npm", "start"]

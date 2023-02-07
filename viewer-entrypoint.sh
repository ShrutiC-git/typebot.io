#!/bin/bash

ENVSH_ENV=./apps/viewer/.env.production ENVSH_OUTPUT=./apps/viewer/public/__env.js bash env.sh

./node_modules/.bin/prisma generate;

export DATABASE_URL=postgresql://postgres:typebot@127.0.0.1:5432/typebot;
pnpm db:migrate;

node apps/viewer/server.js;

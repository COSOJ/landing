FROM node:18.18.2-alpine3.17

COPY . .

RUN npm install -g pnpm serve

RUN pnpm i

RUN pnpm build

EXPOSE 3010

CMD ["serve", "-l", "3010", "-s","build"]
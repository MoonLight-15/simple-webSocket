FROM ubuntu

RUN apt-get update && apt-get install -y \
    nodejs \
    npm

WORKDIR /workspace

COPY app.js /workspace/app.js
COPY package.json /workspace/package.json

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]
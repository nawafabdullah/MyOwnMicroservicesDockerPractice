FROM node:latest 

ADD . /app

ENTRYPOINT tail -f /dev/null

RUN cd /app; \
npm install --production 

EXPOSE 8123

CMD ["node", "/app/index.js"]

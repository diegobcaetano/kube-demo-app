FROM node:12
WORKDIR /app
ADD ./app /app
RUN npm install
EXPOSE 3000
CMD npm start
ENV DATABASE_HOSTNAME=$database_host
ENV DATABASE_USERNAME=$database_username
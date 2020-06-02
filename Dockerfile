FROM node:12
WORKDIR /app
ADD ./app /app
RUN npm install
EXPOSE 3000
ARG DATABASE_HOSTNAME
ARG DATABASE_USERNAME
ENV DATABASE_HOSTNAME=${DATABASE_HOSTNAME}
ENV DATABASE_USERNAME=${DATABASE_USERNAME}
ENV XPTO $SSM_PARAMERTERS_PATH
# RUN echo $DATABASE_HOSTNAME
# RUN echo "export PROXY_HOST_IP=${PROXY_HOST#"http://"}"
CMD npm start
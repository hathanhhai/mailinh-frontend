FROM node:18-alpine
WORKDIR /frontend
COPY  . .
RUN npm install -g http-server


ARG VUE_APP_EXAMPLE
ENV VUE_APP_EXAMPLE=$VUE_APP_EXAMPLE




# RUN npm run build
EXPOSE 2075
CMD [ "http-server", "dist" ]
FROM node:18-alpine
WORKDIR /frontend
COPY  ./package*.json .
RUN npm install -g http-server


ARG VUE_APP_EXAMPLE
ENV VUE_APP_EXAMPLE=$VUE_APP_EXAMPLE




COPY . . 

# RUN npm run build
EXPOSE 2079
CMD [ "http-server", "dist" ]
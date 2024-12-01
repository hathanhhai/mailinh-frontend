FROM node:18-alpine
WORKDIR /frontend



ARG VUE_APP_EXAMPLE
ENV VUE_APP_EXAMPLE=$VUE_APP_EXAMPLE




COPY . . 

# RUN npm run build
EXPOSE 2070
CMD [ "http-server", "dist" ]
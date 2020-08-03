ARG BASE_IMAGE
FROM ${BASE_IMAGE}
ARG PUBLIC_HTML_FOLDER
COPY ${PUBLIC_HTML_FOLDER} /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
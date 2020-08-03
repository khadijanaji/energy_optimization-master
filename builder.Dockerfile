ARG BASE_IMAGE=docker.digilab.ocpgroup.ma/devops/nodejs:10.15.3
FROM $BASE_IMAGE

RUN mkdir -p /builder/repo
COPY . /builder/repo
WORKDIR /builder/repo

RUN yarn --cache-folder yarn install \
    && mv yarn/ /builder/ \
    && mv node_modules/ /builder/ \
    && mv yarn.lock /builder/

WORKDIR /
RUN rm -r /builder/repo

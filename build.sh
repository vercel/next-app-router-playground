#!/bin/bash
set -ex
# SET THE FOLLOWING VARIABLES
# docker hub username
USERNAME=zhangwj0520
# image name
IMAGE=nextjs-app-playground
docker build -t $USERNAME/$IMAGE:latest .
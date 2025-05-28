FROM alpine:latest

RUN apk add --no-cache \
    bash \
    zsh \
    neovim

# Must run as root to add user
RUN adduser -D MMS

USER MMS
ENV HOME=/home/MMS
WORKDIR /home/MMS

CMD ["zsh"]

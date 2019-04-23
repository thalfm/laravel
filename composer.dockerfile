FROM composer:1.8.5

WORKDIR /app

ENTRYPOINT ["composer", "update", "-o"]
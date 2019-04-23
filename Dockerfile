ARG PHP_VERSION=7.1.19-fpm-alpine
ARG XDEBUG_VERSION=2.5.5

FROM php:${PHP_VERSION}

# Instalando extensões necessárias do PHP
RUN apk add --update --no-cache \
        alpine-sdk autoconf curl curl-dev freetds-dev \
        libxml2-dev jpeg-dev openldap-dev libmcrypt-dev \
        libpng-dev libxslt-dev postgresql-dev \
    && rm /var/cache/apk/*
RUN docker-php-ext-configure ldap --with-ldap=/usr
RUN docker-php-ext-configure xml --with-libxml-dir=/usr
RUN docker-php-ext-configure gd --with-jpeg-dir=/usr/include --with-png-dir=/usr/include
RUN docker-php-ext-install \
    bcmath calendar curl dom fileinfo gd hash json ldap mbstring mcrypt \
    mysqli pgsql pdo pdo_dblib pdo_mysql pdo_pgsql sockets xml xsl zip

# Instalando o XDebug
#RUN pecl install xdebug-${XDEBUG_VERSION}
#RUN docker-php-ext-enable xdebug

# Configurando o XDebug
#RUN echo "xdebug.remote_enable = 1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
#RUN echo "xdebug.remote_autostart = 1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
#RUN echo "xdebug.connect_back = 1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Instalando o Composer
RUN php -r "copy('http://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

WORKDIR /app

EXPOSE 9000
#CMD ["php", "-S", "0.0.0.0:9000", "-t", "/app"]
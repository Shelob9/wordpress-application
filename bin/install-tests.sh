#!/usr/bin/env bash
docker-compose pull --parallel

docker-compose up -d >/dev/null

docker-compose run --rm cli option update home "https://localhost" >/dev/null
docker-compose run --rm cli option update siteurl "https://localhost" >/dev/null


WP_VERSION=5.0.1
docker-compose run --rm wordpress_phpunit /app/bin/install-wp-tests.sh wordpress_test root example mysql "${WP_VERSION}" false >/dev/null

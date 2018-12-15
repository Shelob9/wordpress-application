#!/usr/bin/env bash
docker-compose pull --parallel

docker-compose up -d >/dev/null


# If the 'wordpress' volume wasn't during the down/up earlier, but the post port has changed, we need to update it.
CURRENT_URL=$(docker-compose run -T --rm cli option get siteurl)
if [ "$CURRENT_URL" != "http://localhost" ]; then
	docker-compose run --rm cli option update home "https://localhost" >/dev/null
	docker-compose run --rm cli option update siteurl "https://localhost" >/dev/null
fi


# Install the PHPUnit test scaffolding
WP_VERSION=5.0.1
docker-compose run --rm wordpress_phpunit /app/bin/install-wp-tests.sh wordpress_test root example mysql "${WP_VERSION}" false >/dev/null

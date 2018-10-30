## Installing

```
composer install
```

## Generate private and public keys to generate JWT

```
openssl genrsa -out config/jwt/private.pem -aes256 4096
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem

# check private key
openssl rsa -in config/jwt/private.pem -check

# check public key syntax, throw error if invalid
openssl rsa -inform PEM -pubin -in config/jwt/public.pem -noout
```

## Generate the database

### Without fixtures
```
bin/console doctrine:database:create
bin/console doctrine:schema:create
```

### With fixtures

```
bin/console doctrine:database:create
bin/console doctrine:migrations:migrate
bin/console hautelook:fixtures:load

```

## Create users

```
bin/console fos:user:create
```

## Start a PHP server

```
bin/console server:run
```

## Testing authentication

```
# authenticate user
curl --user username:password -H "Content-Type: application/json" -X POST http://localhost:8003/api/auth

# test access
curl -H "Authorization: Bearer :token:" -H "Content-Type: application/json" http://localhost:8003/api/auth/test
```

## Run tests

```
bin/phpunit
```

## Check the API documentation

```
curl http://localhost:8003/api/doc.json
```

*Important*: Don't forget to adjust your environment variables defined in
phpunit.xml.dist.

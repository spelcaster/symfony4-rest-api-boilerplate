# symfony4-rest-api-boilerplate

The project is structured as follows:

```shell
.
├── api
└── gui
```

- The `api` directory is the app back-end developed with Symfony 4, check the [readme](https://github.com/spelcaster/symfony4-rest-api-boilerplate/blob/master/api/README.md);
- The `gui` directory is the app front-end developed with React, check the [readme](https://github.com/spelcaster/symfony4-rest-api-boilerplate/blob/master/gui/README.md);

## CORS

The api ships a [.htaccess](https://github.com/spelcaster/symfony4-rest-api-boilerplate/blob/master/api/public/.htaccess#L8) that supports browser preflight requests for CORS, the rule is open for every host and **it must be changed to be used in production**.

### PHP Built-In Server

You'll need a workaround to access the back-end from the app if you're using the PHP built-in server because [it does not support CORS](https://stackoverflow.com/questions/29617346/is-it-possible-to-enable-cors-in-the-php-cli-server);

### Apache2

We provide a sample conffile [here](https://github.com/spelcaster/symfony4-rest-api-boilerplate/blob/master/conf/symfony4-rest-api-boilerplate.conf) to help you.

### NGINX

Feel free to submit a sample conffile for this sever.

## About

This sample app was created based on [this repository](https://github.com/spelcaster/symfony4-rest).

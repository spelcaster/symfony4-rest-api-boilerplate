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

You'll need a workaround to access the back-end from the app if you're using the PHP built-in server because [it does not support CORS](https://stackoverflow.com/questions/29617346/is-it-possible-to-enable-cors-in-the-php-cli-server);

## About

This sample app was created based on [this repository](https://github.com/spelcaster/symfony4-rest).

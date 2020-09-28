# ws-test

I primary use windows as a devlopment environment, I currently don't access to a mac to verify the instalation on mac devices

The project uses yarn as a package manager you can down load the latest version here: https://classic.yarnpkg.com/en/docs/install/

The project was created using @vue/cli, https://cli.vuejs.org/guide/installation.html

There is a sub project inside the client folder that is the Vue.js app, in addition to vue-bootstrap and bootstrap were used in the project.

The outer project is a simple node/express proxy server to avoid CORS issues accessing the data at https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json

## Project setup

```
yarn install:all
```

### Compiles and hot-reloads both projects for development

```
yarn dev
```

### run linting and jest unit tests

```
yarn test
```

### run cypress e2e test

Make sure that both projects are running and open another terminal window.

This will open the cypress test window, click on the modal.spec.js to run the test

```
yarn test:e2e
```

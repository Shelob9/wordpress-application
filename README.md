# Install WordPress in Docker with Nginx and Lets Encrypt for HTTPS And Also React and Express

Forked from: https://github.com/dmuth/wordpress-with-nginx-and-letsencrypt

## Install
* Clone from Github
* Install
    `yarn && composer install && cd client && yarn`

## Start
* Start WordPress
    `docker-compose up -d`
* Start Node Client and Server
    `yarn start`
* Start Blocks
    `yarn start:blocks`
    
## Test
* Run All JavaScript Tests
    `yarn test`
* Run PHP Unit Tests
    `composer test:unit`
* Run WordPress Integration Tests
    `composer wp:tests`

### Blog posts I was reading while I made this:

* https://zeit.co/blog/painless-routing-react-navi-now
* https://wp.dmuth.org/wordpress-5-in-docker-with-nginx-and-letsencrypt/
* https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0
* https://github.com/esausilva/example-create-react-app-express
* https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
* https://codewithhugo.com/testing-an-express-app-with-supertest-moxios-and-jest/
* https://humanmade.com/2018/11/26/hot-module-replacement-for-gutenberg-blocks/
* https://github.com/zgordon/gutenberg-course

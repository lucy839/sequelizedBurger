# sequelizedBurger
- upgrade burder app with sequelize
## Description
- This application demonstrates a simple full stack application using Sequelize, Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

## Instruction
- The user may enter any burger name to add it to the menu, which will be also added to the mysql database. All burger entries (both existing and new) are added as available on the menu and placed on the left side of the screen. User needs to then enter their name to the order and may devour burger by clicking on it, which moves it to the right side and updates its status accordingly in the database. User can also delete the order before devour it.

## Demo
- The demo of the burger eating application can be found:
   https://mysterious-dusk-25201.herokuapp.com/
- ![Alt text](public/assets/images/demo.png?raw=true  "demo")

## Installation
- To run the application locally, first clone this repository with the following command.

   * git clone https://github.com/lucy839/sequelizedBurger.git
   * Next, install the application dependencies in the folder that you cloned the link above.
      * * cd sequelizedBurger
      * * npm install
   * Then, include your mysql info to connection.js.
   * Finally, run the node server locally.
      * * node server.js
   * Now, open the local application on port 8080 at the URL: http://localhost:8080/.

Enjoy the burger!
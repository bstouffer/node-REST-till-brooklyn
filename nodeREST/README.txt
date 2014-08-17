From workspace:

For new project
npm update -g express
npm update -g generator-express
express <projectname>

For updating existing
npm install npm-check-updates

Notes
Based on approach from
http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/

Start Mongo Daemon
C:\workspace\mongodb>mongod --dbpath c:\workspace\git\node\nodeREST\data

Start Mongo Console if Needed
C:\workspace\mongodb>mongo

To regenerate the API documentation
node gendocs.js

Access site at
http://localhost:3000/

Web service example
http://localhost:3000/user

Auto generated api documentation (needs styling help)
http://localhost:3000/api.html
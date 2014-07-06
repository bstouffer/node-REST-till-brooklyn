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
C:\workspace\mongodb>mongod --dbpath c:\workspace\workspace-luna\nodeREST\data

Start Mongo Console if Needed
C:\workspace\mongodb>mongo

To regenerate the API documentation
node gendocs.js
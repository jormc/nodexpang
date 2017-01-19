# nodexpang

NodExpAng is a server &amp; client tandem made with NODejs & EXPress & ANGularJs.

Current versions are:

* nodejs:
* express:
* angularjs:

The scaffolding and construction has been made following the great **J Cole Morrison** (see http://start.jcolemorrison.com) tutorial:

* First module: *Building an Angular and Express App Part 1*
 * Covers base scaffolding of the projects
 * http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/
* Second module:
* Thirth module: 

## Install
You'll need the next dependencies previously installed:

* Nodejs & NPM (basic!)
* Yeoman Angular Generator (for further issues)
* Express & Express Generator (for further issues)
* SASS (depends on your system)
* Bower (manage angular dependencies)
* Nodemon (Node re-starter)

Proceed like this (you can see http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/ for more details):
```bash
$ npm install -g express
$ npm install -g express-generator
$ npm install -g yo
$ npm install -g generator-angular
$ npm install -g bower
$ npm install -g nodemon
```

After download the project and installed the dependencies, you'll see two folders: 

* client: the client project sorces
* server: the server project sources

You must follow the following steps before running the server for the first time:

### Client side
We must modify some lines from the bootstrap sources:

In your client folder:

* run npm install & bower install to regenerate all project node and bower dependencies:
```bash
$ cd client
$ npm install
$ bower install
```
* open ```bower_components/bootstrap-sass-official/vendor/assets/stylesheets/bootstrap.scss```
 * On line 2 comment out ```@import "bootstrap/variables";```
 * On line 8 comment out ```@import "bootstrap/glyphicons”;```

### Server side
We only need to copy one file from client to the server side, so it's necessary to start it.

* copy ```from /client/app/favicon.ico``` to ```/server/dist/favicon.ico```

## Starting the server
You can start the server via three ways.

### Test Angular client
Go to ```client``` folder and execute:
```bash
$ grunt serve
```
This will launh the angular test server made with Grunt. It will launch a http server that offers our application on:

```http
http://localhost:9000
```

Note that with this server it only runs the client code, so no connections to server are allowed.

### Test Client & Server 
In order to test client and server you must run client in test mode (see previus point) and start the server in tes mode too:

```bash
$ ./client/grunt serve
$ ./server/npm test
```

In this case we'll receive data from client served by the express server. Now we have all the Express potential in fact.

To access the client, you must access via:

```http
http://localhost:3000
```

Now all the calls are served by Express server in **test mode**.

### Start in production mode
In order to run in production mode, we must create the client production distribution first, and the run the server.

Do some like this:
```bash
$ ./client/grunt --force  # generates the client production bundle
$ ./server/npm start      # starts the server in production mode
```

Then now you can access to: 

```http
http://localhost:3000
```

But now the difference is that this version is optimized for production environments.

Thanks to *J Cole Morrison* for its great tutorial!

Enjoy it! :-)

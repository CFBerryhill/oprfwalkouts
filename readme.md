# OPRF Walkout
The site can be found live [here](#)

## Setup

#### Dependencies
Before attempting to run the site make sure that you have the following programs installed.
* [NodeJS](https://nodejs.org)
* [Node Package Manager](https://www.npmjs.com)
* [MySQL](https://www.mysql.com)

#### The .env file
In your project directory, create a new file named .env and paste in the following along with any other environment variables you wish to declare.
```bash
DB_HOST = 'yourMysqlDatabaseAddress'
DB_USER = 'yourMysqlUsername'
DB_PASS = 'yourMysqlPassword'
PORT = 'applicationPort'
NODE_ENV = 'yourProductionEnvironment'
```
###### The variables
* DB_HOST: the webserver address to your mySQL database
 * Use 'localhost' if your database is hosted on your server
* DB_USER: the username for your mySQL account
* DB_PASS: the password for your mySQL account
* PORT: the port for the site to run on
* NODE_ENV: development or production

#### The .htaccess file
Create a new file named .htaccess in your public_html directory and paste in the following. Replace ```XXXXX``` with the port number specified in your .env file.
```apache
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:XXXXX/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:XXXXX/$1 [P,L]
```

#### Launching the site
Run the following commands to launch the site
```bash
npm i
nohup npm start &
```

#### Closing the site
Run the following command to close the site
```bash
pkill node
```
*This will close **ALL** node applications*

#### Initializing or resetting the database
Run the following command to initialize or reset the database.
```bash
npm run reset
```

## The site

#### Code structure


#### Sitemap

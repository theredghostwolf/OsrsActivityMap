Installation:

1. Start your MYSQL server

1. Execute the databaseInit script in the SQL folder. This generates the database and populates it with starting data.

2. Run the itemImporter.py script in the SQL folder. This fill the database with all items entries found in ItemMapping.json.
*You may have to configure the user and password within this script to connect to your MYSQL server*

3. Start the nodeJS back-end server by executing `node server.js`.

4. Start the angular front-end server by executing `ng serve` in the OsrsActivityMap directory.

5. Connect to the front-end in a browser on port 4200

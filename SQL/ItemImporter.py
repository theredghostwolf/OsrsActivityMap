import json
import mysql.connector

user = "root"
password = "root"

file = open("ItemMapping.json")
data = json.load(file)
file.close()

db = mysql.connector.connect(
    host='localhost',
    user=user,
    password=password,
    database='osrsactivitymap'
)

cursor = db.cursor()
sql = 'INSERT INTO Items VALUES (%s, %s, %s)'

values = []

for i in data:
    values.append((i['id'], i['name'].lower(), i['icon'].replace(" ","_")))

cursor.executemany(sql, values)

db.commit()
db.close()
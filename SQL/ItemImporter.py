import json
import mysql.connector

file = open("ItemMapping.json")
data = json.load(file)
file.close()

db = mysql.connector.connect(
    host='localhost',
    user='root',
    password='root',
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
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests
import sqlite3


app = Flask(__name__)
CORS(app)
# response = requests.get(f"https://frappe.io/api/method/frappe-library?isbn=1416912274")
# response = response.json()['message']
# print(response)
# connect = sqlite3.connect('database.db')
# # connect.execute('DROP TABLE ISSUES')
# # connect.execute('CREATE TABLE IF NOT EXISTS TRANSACTIONS(transactionID INTEGER PRIMARY KEY AUTOINCREMENT, memberID INTEGER references MEMBERS(memberID), amount INTEGER, dot DATE)')
# cursor = connect.cursor()
# cursor.execute(f"delete from ISSUES")
# # for i in range(3,4):
# #     response = requests.get(f"https://frappe.io/api/method/frappe-library?page={i}")
# #     if response.status_code == 200:
        
# #         res = response.json(); res = res['message']
# #         for book in res:            
# #             cursor.execute(f"INSERT INTO BOOKS (bookID, title, authors, publisher) VALUES (?, ?, ?, ?)", (int(book['bookID']), str(book['title']), str(book['authors']), str(book['publisher'])))
# #         print(i)

# connect.commit()

# IDHAR SAARA BOOKS VAALE TABLE KA API HAI
@app.route('/getBooks', methods = ['GET'])
def getBooks():
    connect = sqlite3.connect('database.db')
    cursor = connect.cursor()
    req = request.form
    
    if 'title' in req:
        response = requests.get(f"https://frappe.io/api/method/frappe-library?title={req['title']}&page={req['page']}")
    else:
        response = requests.get(f"https://frappe.io/api/method/frappe-library?page={req['page']}")
    
    response = response.json()['message']
    
    for book in response:
        book['isAvailable'] = 1
        temp = cursor.execute("SELECT * FROM BOOKS WHERE title like (?)", (book['title'], )).fetchall()
        
        if temp: book['isAvailable'] = 0
    
    return response

@app.route('/issueBook', methods = ['GET'])
def issueBooks():
    connect = sqlite3.connect('database.db')
    cursor = connect.cursor()
    req = request.form
    
    try:
        cursor.execute(f"insert into issues(memberID, bookID, doi) values(?,?,?)", (req['memberID'], req['isbn'], req['doi']))
        connect.commit(); msg = f"Added {cursor.rowcount} items!"
        
        temp = cursor.execute("SELECT debt FROM MEMBERS where memberID=(?)", (req['memberID'])).fetchall(); currDebt = temp[0][0]
        cursor.execute(f"update MEMBERS set debt = {currDebt+100} where memberID = (?)", (req['memberID']))
        connect.commit()
        
        response = requests.get(f"https://frappe.io/api/method/frappe-library?isbn={req['isbn']}")
        response = response.json()['messages']
        
        
        # cursor.execute(f"")
        connect.commit()        
        
        
        return msg
    except:
        return f"Internal server error!"
    
@app.route('/returnBook', methods = ['GET'])
def returnBooks():
    connect = sqlite3.connect('database.db')
    cursor = connect.cursor()
    req = request.form

    

# =====================================================================================================

# IDHAR SAARA MEMBERS VAALE TABLE KE API HAI
@app.route('/getMembers', methods = ['GET'])
def getMembers():
    connect = sqlite3.connect('database.db')
    cursor = connect.cursor()
    req = request.form
    
    if 'name' in req:
        temp = cursor.execute(f"SELECT * FROM MEMBERS WHERE name LIKE '%{(req['name'])}%'").fetchall()
    else:
        temp = cursor.execute("SELECT * FROM MEMBERS").fetchall()
    
    response = []
    
    for person in temp:
        details = {}        
        details['memberID'] = person[0]; details['name'] = person[1]; details['address'] = person[2]; details['dob'] = person[3]; details['debt'] = person[4]
        
        response.append(details)
        
    return response

@app.route('/deleteMember', methods = ['GET'])
def deleteMembers():
    connect = sqlite3.connect('database.db')
    cursor = connect.cursor()
    req = request.form
    
    try:
        cursor.execute("delete from MEMBERS where memberID = (?)", (req['id']))
        connect.commit()
        return f"Deleted {cursor.rowcount} items!"
    except:
        return f"Internal server error!"
    
@app.route('/addMember', methods = ['POST'])
def addMembers():
    connect = sqlite3.connect('database.db')
    cursor = connect.cursor()
    req = request.form
    print(req)
    try:
        cursor.execute(f"insert into MEMBERS(name, address, dob, debt) values(?,?,?,?)", (req['name'], req['address'], req['dob'], 0))
        connect.commit()
        return f"Added {cursor.rowcount} items!"
    except:
        return f"Internal server error!"
    
@app.route('/updateMember', methods = ['GET'])
def updateMembers():
    connect = sqlite3.connect('database.db')
    cursor = connect.cursor()
    req = request.form
    
    try:
        cursor.execute(f"update MEMBERS set name = (?), address = (?), dob = (?) where memberID = (?)", (req['name'], req['address'], req['dob'], req['id']))
        connect.commit()
        return f"Updated {cursor.rowcount} items!"
    except:
        return f"Internal server error!"


@app.route('/load', methods = ['GET'])
def fun():
    return 'fun'

            

if __name__=='__main__':
    app.run(debug=True)
    

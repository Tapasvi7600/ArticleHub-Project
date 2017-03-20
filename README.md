********************Article project*************
        Postman- Article Project

Installation:

1.Download and extract the zip file.
2.Open the project in webstorm IDE(preferable) or sublime.
3.Type: ‘npm install’ in the terminal.
4.Type ‘node server/server.js’ in the terminal to run the server.
5.The server will run on port: 8081.
6.Open the browser and type:http://localhost:8081/#/article/politics
7.You can redirect to various pages using the links in header.
	Technology articles:http://localhost:8081/#/article/technology
	Politics articles:http://localhost:8081/#/article/politics
    Business articles: http://localhost:8081/#/article/business
    Sports articles: http://localhost:8081/#/article/sports

8. Database Used: Mongodb.
9. You can view the collections in robomongo.
10. You can test api through postman:
    Getcomment:http://localhost:8081/api/comment/:articleType/:id
	AddComment:http://localhost:8081/api/comment


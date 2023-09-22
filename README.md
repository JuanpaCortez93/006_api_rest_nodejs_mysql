# 006_api_rest_nodejs_mysql
This is a little REST API con Nodejs and MySQL from scratch. This project includes the connection with a MySQL Database, creating SQL queries and finally, the project is deployed in the cloud, using Railway.
The project follows all good practices.

The project consist in the following conditions:
1. The project has a MySQL database with a table called "Employees"
2. The project has the operations: get, post, put and delete

1. To test DB you can access https://006apirestnodejsmysql-production.up.railway.app/api/pingDB
2. To GET the list of employees you can access in the site: https://006apirestnodejsmysql-production.up.railway.app/api/employees
3. To GET one of the employees you can access in the site: https://006apirestnodejsmysql-production.up.railway.app/api/employees/1
4. To add a new employee you need to use Postman or ThunderClient in VS and add the json string {"name": "Carlos", "salary": 1700.38} in the URL https://006apirestnodejsmysql-production.up.railway.app/api/employees with a POST method
5. To edit a new employee you need to use Postman or ThunderClient in VS and add the json string {"name": "Carlos", "salary": 1700.38} in the URL https://006apirestnodejsmysql-production.up.railway.app/api/employees/1 with a PUT method
6. To delete a new employee you need to use Postman or ThunderClient in VS and use the URL https://006apirestnodejsmysql-production.up.railway.app/api/employees/1 with the DELETE method

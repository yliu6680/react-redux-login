const mysql = require("mysql");

var client = mysql.createConnection({
    host: "localhost",
    user: "springstudent",
    password: "springstudent",
    database: "react_redux_course_login"
})

function sqlFn(sql, arr, callback){
    client.query(sql, arr, function(error, result){
        if (error != null){
            console.log(new Error(error));
        }

        callback(result);
    })
}

module.exports = sqlFn;
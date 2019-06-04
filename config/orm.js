// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

// Object for all SQL statement functions.
var orm = {
    // get every data
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // add to data
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // modify data
    updateOne: function(table, burgerID, cb){
        var queryString = "UPDATE " + table;
		queryString += " SET ? WHERE ?";
        connection.query(queryString, [{
            devoured: true
        }, {
            id: burgerID
        }], function (err, result) {
            if (err) throw err;
            cb(result);
          });
        }
    };
    
    // Export the orm object for the model (burger.js).
    module.exports = orm;
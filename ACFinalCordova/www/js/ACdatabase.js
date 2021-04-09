/**
 * File Name: ACdatabase.js
 *
 * Revision History:
 *       Chang Anthony, 2019-04-14 : Created
 */

function errorHandler(tx, error) {
    console.log("SQL error: " + tx + " (" + error.code + ") " + error.message);
}

var db;

// database
var DB = {

    // creates the database
    ACCreateDatabase: function () {
        var shortName = "CarListDB";
        var version = "1.0";
        var displayName = "DB for Car Search App";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
            console.info(("Success: Database created Successfully."));
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },

    // creates the tables necessary
    ACCreateTables: function () {
        function txFunction(tx) {
            var sql = "DROP TABLE IF EXISTS make;";
            var options = [];

            function successDrop() {
                console.info("Success: dropping tables 'make' successful");
            }

            tx.executeSql(sql, options, successDrop, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS make( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";

            function successCreate() {
                console.info("Success: Tables created successfully");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);

            // populate make table with car makes
            sql = "INSERT INTO make(name) " +
                "VALUES('Acura')," +
                "('Audi')," +
                "('BMW')," +
                "('Buick')," +
                "('Cadillac')," +
                "('Chevrolet')," +
                "('Chrysler')," +
                "('Dodge')," +
                "('Ferrari')," +
                "('Ford')," +
                "('GMC')," +
                "('Honda')," +
                "('Hyundai')," +
                "('Infinity')," +
                "('Jaguar')," +
                "('Jeep')," +
                "('Kia')," +
                "('Lamborghini')," +
                "('Land Rover')," +
                "('Lexus')," +
                "('Lincoln')," +
                "('Maserati')," +
                "('Mazda')," +
                "('Mercedes-AMG')," +
                "('Mercedes-Benz')," +
                "('Mini')," +
                "('Mitsubishi')," +
                "('Nissan')," +
                "('Porsche')," +
                "('Ram')," +
                "('Subaru')," +
                "('Tesla')," +
                "('Toyota')," +
                "('Volkswagen')," +
                "('Volvo');";

            function successInsert() {
                console.info("Success: Rows inserted successfully");
            }

            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS carList( " +
            "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "makeId INTEGER NOT NULL ," +
            "model VARCHAR(30) ," +
            "year INTEGER(4) ," +
            "postal VARCHAR(30) ," +
            "comments TEXT ," +
            "FOREIGN KEY(makeId) REFERENCES type(id));";

            tx.executeSql(sql, options, successCreate, errorHandler);

        }

        function successCreateTables() {
            console.info(("Success: Tables created successfully."));
        }

        db.transaction(txFunction, errorHandler, successCreateTables);
    },

    // drops tables from database
    ACDropTables: function () {
        function txFunction(tx) {
            var sql = "DROP TABLE IF EXISTS make;";
            var options = [];

            function successDrop() {
                console.info("Success: drop table make successful");
            }

            tx.executeSql(sql, options, successDrop, errorHandler);

            sql = "DROP TABLE IF EXISTS carList;";
            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Dropped all tables successfully");
            alert("Database cleared");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};





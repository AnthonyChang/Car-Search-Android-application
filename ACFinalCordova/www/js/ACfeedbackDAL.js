/**
 * File Name: ACfeedbackDAL.js
 *
 * Revision History:
 *       Chang Anthony, 2019-04-14 : Created
 */

// crud functionality for carList table
var carList = {
    ACinsert: function (options, callBack) {
        function txFunction(tx) {
            var sql = "INSERT INTO carList(makeId,model,year,postal,comments) " +
                "VALUES(?,?,?,?,?);";
            tx.executeSql(sql, options, callBack, errorHandler)
        }

        function successTransaction() {
            console.info("Success: Insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    ACselect: function (options, callBack) {
        function txFunction(tx) {
            var sql = "SELECT * FROM carList WHERE id=?;"
            tx.executeSql(sql, options, callBack, errorHandler)
        }

        function successTransaction() {
            console.info("Success: Select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    ACselecAll: function (options, callBack) {
        function txFunction(tx) {
            var sql = "SELECT * FROM carList;";
            tx.executeSql(sql, options, callBack, errorHandler)
        }

        function successTransaction() {
            console.info("Success: Select all transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    ACupdate: function (options, callBack) {
        function txFunction(tx) {
            var sql = "UPDATE carList SET makeId=?, model=?, year=?, postal=?, comments=? WHERE id=?;";
            tx.executeSql(sql, options, callBack, errorHandler)
        }

        function successTransaction() {
            console.info("Success: Update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    ACdelete: function (options, callBack) {
        function txFunction(tx) {
            var sql = "DELETE FROM carList WHERE id=?;";
            tx.executeSql(sql, options, callBack, errorHandler)
        }

        function successTransaction() {
            console.info("Success: Delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

// select all functionality for make table
var make = {
    ACselectAll: function (options, callBack) {
        function txFunction(tx) {
            var sql = "SELECT * FROM make;";
            tx.executeSql(sql, options, callBack, errorHandler)
        }

        function successTransaction() {
            console.info("Success: Make Select all transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

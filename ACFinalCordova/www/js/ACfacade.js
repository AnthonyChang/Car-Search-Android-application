/**
 * File Name: ACfacade.js
 *
 * Revision History:
 *       Chang Anthony, 2019-04-14 : Created
 */

// updates make selectlist with lookup table values in Add Car Page
function ACUpdateSelectMake() {
    var options = [];

    function callback(tx, make) {
        var htmlCode = "";

        for (var i = 0; i < make.rows.length; i++) {
            var row = make.rows[i];

            if (row['name'] == "Acura") {
                htmlCode += "<option value=" + row['id'] + " selected>" + row['name'] + "</option>"
            }
            else{
                htmlCode += "<option value=" + row['id'] + ">" + row['name'] + "</option>"
            }
        }

        $("#ACSelectMake").html(htmlCode);
    }
    console.info("populate make select list");
    make.ACselectAll(options, callback);
}

// updates make selectlist with lookup table values in Modify Car Page
function ACUpdateSelectModMake() {
    var options = [];

    function callback(tx, make) {
        var htmlCode = "";

        for (var i = 0; i < make.rows.length; i++) {
            var row = make.rows[i];

            if (row['name'] == "Acura") {
                htmlCode += "<option value=" + row['id'] + " selected>" + row['name'] + "</option>"
            }
            else{
                htmlCode += "<option value=" + row['id'] + ">" + row['name'] + "</option>"
            }
        }

        $("#ACSelectModMake").html(htmlCode);
    }
    console.info("populate make select list");
    make.ACselectAll(options, callback);
}

// Adds car to database with values entered by user
function ACAddCar() {
    if(doValidate_ACAddForm())
    {
        console.info("Validation is Successful");
        var makeId =$("#ACSelectMake").val();
        var model =$("#ACModel").val();
        var year =$("#ACYear").val();
        var postal =$("#ACPostal").val();
        var comments =$("#ACTxtComment").val();
        var options = [makeId,model,year,postal,comments];

        function callback() {
            console.info("success: car inserted successfully");
        }
        carList.ACinsert(options, callback);
        alert("New Car Added");
    }
    else {
        console.info("Validation Failed");
    }
}

// Displays car list and links
function ACGetCars() {
    var options = [];
    var htmlCode = "";

    function callback(tx, carList) {
        for (var i = 0; i < carList.rows.length; i++) {
            var row = carList.rows[i];
            var carMake = "";


            /* Could not get lookup table to work
            AvengersDB does not have lookup example

            function callback(tx,make) {
                for (var i = 0; i < make.rows.length; i++) {
                    var makeRow = make.rows[i];

                    if(makeRow['id'] === row['makeId'])
                    {
                        carMake = makeRow['name'];
                    }
                }
            }
            make.ACselectAll(options, callback)*/

            if(row['makeId'] === 1){
                carMake = "Acura";
            }
            else if(row['makeId'] === 2) {
                carMake = "Audi";
            }
            else if(row['makeId'] === 3) {
                carMake = "BMW";
            }
            else if(row['makeId'] === 4) {
                carMake = "Buick";
            }
            else if(row['makeId'] === 5) {
                carMake = "Cadillac";
            }
            else if(row['makeId'] === 6) {
                carMake = "Chevrolet";
            }
            else if(row['makeId'] === 7) {
                carMake = "Chrysler";
            }
            else if(row['makeId'] === 8) {
                carMake = "Dodge";
            }
            else if(row['makeId'] === 9) {
                carMake = "Ferrari";
            }
            else if(row['makeId'] === 10) {
                carMake = "Ford";
            }
            else if(row['makeId'] === 11) {
                carMake = "GMC";
            }
            else if(row['makeId'] === 12) {
                carMake = "Honda";
            }
            else if(row['makeId'] === 13) {
                carMake = "Hyundai";
            }
            else if(row['makeId'] === 14) {
                carMake = "Infinity";
            }
            else if(row['makeId'] === 15) {
                carMake = "Jaguar";
            }
            else if(row['makeId'] === 16) {
                carMake = "Jeep";
            }
            else if(row['makeId'] === 17) {
                carMake = "Kia";
            }
            else if(row['makeId'] === 18) {
                carMake = "Lamborghini";
            }
            else if(row['makeId'] === 19) {
                carMake = "Land Rover";
            }
            else if(row['makeId'] === 20) {
                carMake = "Lexus";
            }
            else if(row['makeId'] === 21) {
                carMake = "Lincoln";
            }
            else if(row['makeId'] === 22) {
                carMake = "Maserati";
            }
            else if(row['makeId'] === 23) {
                carMake = "Mazda";
            }
            else if(row['makeId'] === 24) {
                carMake = "Mercedes-AMG";
            }
            else if(row['makeId'] === 25) {
                carMake = "Mercedes-Benz";
            }
            else if(row['makeId'] === 26) {
                carMake = "Mini";
            }
            else if(row['makeId'] === 27) {
                carMake = "Mitsubishi";
            }
            else if(row['makeId'] === 28) {
                carMake = "Nissan";
            }
            else if(row['makeId'] === 29) {
                carMake = "Porsche";
            }
            else if(row['makeId'] === 30) {
                carMake = "Ram";
            }
            else if(row['makeId'] === 31) {
                carMake = "Subaru";
            }
            else if(row['makeId'] === 32) {
                carMake = "Tesla";
            }
            else if(row['makeId'] === 33) {
                carMake = "Toyota";
            }
            else if(row['makeId'] === 34) {
                carMake = "Volkswagen";
            }
            else if(row['makeId'] === 35) {
                carMake = "Volvo";
            }
            else
            {
                carMake ="unknown";
            }

            htmlCode +="<li>" +
                "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>Make: " + carMake + "</h1>" +
                "<p>model: " + row['model'] + "</p>" +
                "<p>year: " + row['year'] + "</p>" +
                "<p>Overall comments: " + row['comments'] + "</p>" +
                "</a>" +

                //https://www.autotrader.ca/cars/audi/a4/2017/?rcp=15&rcs=0&srt=3&prx=-1&loc=N2K%204P6&hprc=True&wcp=True&inMarket=advancedSearch
                "<li>"+ "<a href='http://www.autotrader.ca/cars/" +
                carMake + '/' + row['model'] + '/' + row['year'] + '/' + "?rcp=15&rcs=0&srt=3&prx=-1&loc=" +row['postal'] +"&hprc=True&wcp=True&inMarket=advancedSearch"+"'>" +
                "Auto Trader"+"</a>" + "</li>" +

                //https://www.jdpower.com/cars/2016/Audi/a4
                "<li>"+ "<a href='http://www.jdpower.com/cars/" +
                row['year'] + '/' + carMake + '/' + row['model'] + "'>" +
                "JDPower"+"</a>" + "</li>" +

                //https://www.consumerreports.org/cars/chevrolet/trax/2019
                "<li>"+ "<a href='http://www.consumerreports.org/cars/" +
                carMake + '/' + row['model'] + '/' + row['year'] + "'>" +
                "Consumer Reports"+"</a>" + "</li>" +

                //https://www.carcomplaints.com/Audi/A4/2010/
                "<li>"+ "<a href='http://www.m.carcomplaints.com/" +
                carMake + '/' + row['model'] + '/' + row['year'] +"'>" +
                "Car Complaints"+"</a>" + "</li>" + "<br>" +

                "</li>";

        }
        var carLt = $("#ACCarList");
        carLt = carLt.html(htmlCode);
        carLt.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', '#ACModifyPage');
        }

        $("#ACCarList a").on("click", clickHandler);
    }
    carList.ACselecAll(options, callback);
}

// populates values in car modify page
function ACshowCurrentCar(){
    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, carList) {
        var row = carList.rows[0];

        $("#ACSelectModMake").val(row['makeId']);
        $("#ACModModel").val(row['model']);
        $("#ACModYear").val(row['year']);
        $("#ACModPostal").val(row['postal']);
        $("#ACModTxtComment").val(row['comments']);
    }

    carList.ACselect(options, callback)
}

// updates a row in carList table with values from modify car page
function ACupdateCar() {

    if (doValidate_ACModForm()) {
        console.info("Validation is Successful");

        var makeId = $("#ACSelectModMake").val();
        var model = $("#ACModModel").val();
        var year = $("#ACModYear").val();
        var postal = $("#ACModPostal").val();
        var comments = $("#ACModTxtComment").val();
        var id = localStorage.getItem("id");

        var options = [makeId,model,year,postal,comments,id];

        function callback() {
            alert("Car Updated successfully");
            $(location).prop('href', '#ACListPage');
        }

        carList.ACupdate(options, callback);
    }
    else {
        console.info("Validation Failed");
    }
}

// deletes a row in the carList table
function ACdeleteCar() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        alert("Car Deleted successfully");
        $(location).prop('href', '#ACListPage');
    }

    carList.ACdelete(options, callback);
}

// drops tables and creates new tables to work with
function ACclearDatabase() {
    DB.ACDropTables();
    DB.ACCreateTables();
}

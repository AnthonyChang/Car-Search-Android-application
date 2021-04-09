

/**
 * File Name: ACglobal.js
 *
 * Revision History:
 *       Chang Anthony, 2019-04-14 : Created
 */

// Saves default postal code to local storage
function ACBtnSaveDefaults_click() {
    if(doValidate_ACSettingsForm())
    {
        localStorage.setItem('DefaultPostal', $("#ACDefaultPostal").val());
        alert("Default Postal Code saved.");
    }
}

// Auto inputs the postal code for the user in add page
function ACAddCarPage_show() {
    var defaultPostal = localStorage.getItem('DefaultPostal');
    $("#ACPostal").val(defaultPostal);
    ACUpdateSelectMake();
}

function ACBtnClearDatabase_click() {
    ACclearDatabase();
}

function ACBtnSave_click() {
    ACAddCar();
}

function ACListPage_show() {
    ACGetCars();
}

function ACModifyPage_show() {
    ACUpdateSelectModMake();
    ACshowCurrentCar();
}

function ACBtnUpdate_click() {
    ACupdateCar();
}

function ACBtnDelete_click() {
    ACdeleteCar();
}

// Sends user back to car list page
function ACBtnCancel_click() {
    $(location).prop('href', '#ACListPage');
}

// 	Initialize
function init() {
    console.info("DOM is ready");
    $("#ACAddCarPage").on("pageshow", ACAddCarPage_show);
    $("#ACBtnSaveDefaults").on("click", ACBtnSaveDefaults_click);
    $("#ACBtnClearDatabase").on("click", ACBtnClearDatabase_click);
    $("#ACBtnSave").on("click",ACBtnSave_click);
    $("#ACListPage").on("pageshow", ACListPage_show);
    $("#ACModifyPage").on("pageshow", ACModifyPage_show);
    $("#ACBtnUpdate").on("click", ACBtnUpdate_click);
    $("#ACBtnDelete").on("click", ACBtnDelete_click);
    $("#ACBtnCancel").on("click", ACBtnCancel_click);

}

function initDB() {
    try {
        DB.ACCreateDatabase();
        if (db) {
            console.info("Creating Tables....");
            DB.ACCreateTables();
        } else {
            console.error("Error: cannot create Db. Can not proceed.");
        }
    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). Can not proceed.");
    }
}

$(document).ready(function () {
    init();
    initDB();
});

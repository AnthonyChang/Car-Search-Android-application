/**
 * File Name: ACutil.js
 *
 * Revision History:
 *       Chang Anthony, 2019-04-14 : Created
 */

// Validate Default Postal Code Form
function doValidate_ACSettingsForm() {
    var form = $("#ACSettingsForm");
    form.validate({

        rules: {
            ACDefaultPostal: {
                postalCheck: true,
            }
        },
        messages: {
            ACDefaultPostal: {
                postalCheck: "Must be in format: A1B2C6",
            }
        }
    });
    return form.valid();
}

// ACAddForm validation
function doValidate_ACAddForm() {
    var form = $("#ACAddForm");
    form.validate({

        rules: {
            ACModel: {
                rangelength: [2,20],
                required: true
            },
            ACYear: {
                required: true,
                min: 1990,
                max: 2020
            },
            ACPostal: {
                required: true,
                postalCheck: true
            }
        },
        messages: {
            ACModel: {
                rangelength: "Must be 2 to 20 characters",
                Required: "Model is Required"
            },
            ACYear: {
                required: "Year is Required",
                min: "must be after 1899",
                max: "must be before 2021"
            },
            ACPostal: {
                required: "Postal Code is Required",
                postalCheck: "Must be in format: A1B2C6"
            }
        }
    });
    return form.valid();
}

// ACModForm validation
function doValidate_ACModForm() {
    var form = $("#ACModForm");
    form.validate({

        rules: {
            ACModModel: {
                rangelength: [2,20],
                required: true
            },
            ACModYear: {
                required: true,
                min: 1990,
                max: 2020
            },
            ACModPostal: {
                required: true,
                postalCheck: true
            }
        },
        messages: {
            ACModModel: {
                rangelength: "Must be 2 to 20 characters",
                Required: "Model is Required"
            },
            ACModYear: {
                required: "Year is Required",
                min: "must be after 1899",
                max: "must be before 2021"
            },
            ACModPostal: {
                required: "Postal Code is Required",
                postalCheck: "Must be in format: A1B2C6"
            }
        }
    });
    return form.valid();
}

// Postal Code check custom validation through regular expressions
jQuery.validator.addMethod("postalCheck",
    function (value, element) {
        var regex = /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;
        return this.optional(element) || regex.test(value);
    },
    "validator for POSTAL CODE check");

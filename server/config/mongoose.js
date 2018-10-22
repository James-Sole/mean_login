var mongoose = require("mongoose"),
    db_name = "login-reg";

mongoose.connect(`mongodb://localhost/${db_name}`);

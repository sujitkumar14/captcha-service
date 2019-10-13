let env = process.env.NODE_ENV || "development";


//configuration of an app
let config = {};


config.development = {

    "port" : process.env.PORT || "3000",
    "secret": process.env.secret || "averylongcomplexsecret",
    "redis" : process.env.REDIS || ""
    
}

global.config = config[env];

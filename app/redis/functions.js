
const RedisConnection = require('./connection');
const ErrorHandler = require('../handlers/ErrorHandler');
class Functions {

    constructor() {
        this.redis = RedisConnection.getConnection();
    }

    get(key) {
        return new Promise((resolve, reject) => {
            this.redis.get(key, (err, value) => {
                if (err)
                    reject(err);
                else
                    resolve(value);
            });
        });
    }

    set(key, value) {
        this.redis.set(key, value);
    }
}

module.exports = Functions;

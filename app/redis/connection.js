
const Redis = require('redis');

class Connection { }

Connection.create = function () {
    Connection.Redis = Redis.createClient(config['redis']);
    return Connection.Redis;
}

Connection.getConnection = function () {
    if (Connection.Redis) {
        return Connection.Redis;
    }
    else {
        return Connection.create();
    }
}

Connection.ping = function () {
    return Connection.Redis.get('ping');
}

module.exports = Connection;

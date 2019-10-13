const JWT = require('jsonwebtoken');
const FS = require('fs');

class HelperUtility {

    static createJWT() {
        return JWT.sign({}, config.secret, {expiresIn: 5 * 60});
    }

    static deleteFile(path) {
        return new Promise((resolve,reject) => {
            FS.unlink(path, (err) => {
                if (!err) {
                    resolve();
                }
            });
        });
    }
}

module.exports = HelperUtility;
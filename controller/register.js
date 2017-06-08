// function register(){
// }

var keythereum = require("keythereum");

// module.exports = register;
module.exports = {
    /**
     * 创建账户地址 并且 生成地址 私钥文件
     * @param req
     * @param res
     * @param next
     */
    register: function(password) {
        //      方式3
// optional private key and initialization vector sizes in bytes
// (if params is not passed to create, keythereum.constants is used by default)
//         var params = { keyBytes: 32, ivBytes: 16 };

// synchronous
        var dk = keythereum.create();

// Note: if options is unspecified, the values in keythereum.constants are used.
        var options = {
            kdf: "pbkdf2",
            cipher: "aes-128-ctr",
            kdfparams: {
                c: 262144,
                dklen: 32,
                prf: "hmac-sha256"
            }
        };
// synchronous
        var keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options);

        keythereum.exportToFile(keyObject,'/Users/pei/program/DApp/chain/keystore');
        console.log(keyObject);
        console.log(keyObject.address);
        return keyObject.address;
    }
};
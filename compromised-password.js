
(function() {
    const sha1 = require('sha1');
    const axios = require('axios');

    api = async function (password) {
        let hashed_psw = sha1(password);
        let prefix = hashed_psw.substr(0, 5);
        let suffix = hashed_psw.substr(5, hashed_psw.length);
        const resp = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);
        return resp.data.indexOf(suffix.toUpperCase()) >= 0;
    };

    module.exports = api;
})();
    



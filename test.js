const is_compromised = require('./compromised-password');

async function test () {
    const isPwned = await is_compromised('test');
    console.log(isPwned);
}

test();

# compromised-password
Node module for checking whether a password has been pwned using pwnedpasswords.com

# Installation
`npm install compromised-password`

# Usage
```
const is_compromised = require('./compromised-password');

async function test () {
    const isPwned = await is_compromised('test');
    console.log(isPwned);
}

test();
```

# Base Encoder/Decoder

**How to use the module :**

```js
const base = require("../index.js")
var base = 32 // base2-base36
var message = "Hello World !"
console.log(base.encode(base, message))// -> "28 35 3c 3c 3f 10 2n 3f 3i 3c 34 10 11"
console.log(base.decode(base,"28 35 3c 3c 3f 10 2n 3f 3i 3c 34 10 11"))// -> "Hello World !""
```
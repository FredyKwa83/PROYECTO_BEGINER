const bcryptjs = require("bcryptjs");

let hash = bcryptjs.hashSync("abc123", 10)

// console.log(bcryptjs.hashSync("abc123", 10));

console.log(bcryptjs.compareSync("abc123", hash))
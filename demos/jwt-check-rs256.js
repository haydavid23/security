
var jwt = require('jsonwebtoken');
var fs = require('fs');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE2NDU0NTY5NjYsImV4cCI6MTY0NTQ1NzA4Niwic3ViIjoiMSJ9.oLoTnGv7248cCmOvMeNbieeitiLJg9LP0gKpcjJQpnXdyEBsrxWrOEwoLiiWzeAXEjukE4Va4AG0YdzKZfBf4As8IvOyc28aMr0sUnsxzBIm2jGpJsP4yOEgmIeh6hUAoq46fmdgno56Wd4dcYgsbS5hgZfna2jAzxg7oI8DCTZUDm1S5ePnpY6E6auRKoJgl_vNG4MNA8uPd4jnVJh2JnABssn8UGT5qb-63Jm_tBRGhQYbybUPP2-yRy4nbpJHE3IYa3CYAjCEvY9UCOAjNjYSdpgOHc9MRPfBffn1coffHMbRvwuZ2On1ZF3hLFOn0YXWdL_jJdcBCENnXtiT0g';


var publicKey = fs.readFileSync('./demos/public.key');


console.log("verifying");

const verify = jwt.verify(existingToken, publicKey);



console.log("Decoded JWT:", verify);


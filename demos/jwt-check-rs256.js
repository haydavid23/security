
var jwt = require('jsonwebtoken');
var fs = require('fs');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE2NDg1MDA0NTEsImV4cCI6MTY0ODUwMDU3MSwic3ViIjoiMSJ9.d7FOsdUO8xPztDZbB0IGtJ93zFyAIhAHW4FNwJ4tG3nqJNHtNrwK3XhvHyXOlT6fcVMSn2JLS1CgmKf5zpDxSNyRPMm21jnO85EHnU23tZoIfcyGIw1MhoECDB2zZ4Sc338MDSGs1ADdhIfpcKkV6bLKSeR6hXD9hS9BCvarPNgv0LT3F2daRpfZulmgLFuFqQ_ltodCM8V49XxCqpUMA_KKDdohmnEUEve7IPoPBjd21_f-pc7vF0S_CYilPF0WI8ldj9MyqDLYrID9yhMWq4l98XLlbc6HxlZrNDKyB70hMgIZRsSEzChb3iBfqbipQ1FY0_nkAQdgBkg1WRkacw';


var publicKey = fs.readFileSync('./demos/public.key');


console.log("verifying");

const verify = jwt.verify(existingToken, publicKey);



console.log("Decoded JWT:", verify);


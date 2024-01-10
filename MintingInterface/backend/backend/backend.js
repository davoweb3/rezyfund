delete require.cache[require.resolve('./backend.js')];


const express = require('express');
const app = express();
const cors = require("cors");
const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200,
 }

 const { callAlchemy } = require('./interfaces');

 const alclogo = `
 ┌───── •✧✧• ─────┐
 -DAVOTRADE2010- 
└───── •✧✧• ─────┘   
`;

const net2dev = `
┌───── •✧✧• ─────┐
 -DAVOTRADE2010- 
└───── •✧✧• ─────┘  
`;

const backend = `
┌───── •✧✧• ─────┐
 -REZY BACKEND- 
└───── •✧✧• ─────┘
`

const symbol = `
┌───── •✧✧• ─────┐
 -SUCCESS!- 
└───── •✧✧• ─────┘
`

 app.use(cors(corsOptions))
 app.use(require('body-parser').json());

 app.post('/callalchemy', function(req, res) {
    const wallet = req.body.wallet;
    const owner = req.body.owner; // add owner parameter
    console.log('Request Received from the Middleware');
    return new Promise((resolve, reject) => {
        callAlchemy(wallet).then(output => {
            res.statusCode = 200;
            console.log(symbol);
            console.log(alclogo);
          
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
         
            res.end(JSON.stringify(output));
        }).catch(error => {
            res.json(error);
            res.status(405).end();
            console.log(error);
        })
    })
 });

const server = app.listen(8082, function (){
    const port = server.address().port;
    console.log(net2dev);
    console.log(backend);
    console.log("Backend Active and Listening on port: " + port);
})


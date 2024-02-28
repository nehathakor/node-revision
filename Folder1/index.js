const http = require('http');
const fs = require("fs");
const url = require("url");

const heyServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile("./log.txt",log,(err,data)=>{
        const myUrl = url.parse(req.url,true);
        console.log(myUrl);
        if(req.url === '/favicon.ico') return res.end();
        switch(myUrl.pathname){
            case '/': res.end("HomePage");
            break;
            case '/about': 
            const username = myUrl.query.myname;
            res.end(`Hi, ${username}`);
            break;
            default:
                res.end('404 not found');
        }
    });
});

heyServer.listen(8000);

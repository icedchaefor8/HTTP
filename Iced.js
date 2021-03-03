//Basic HTTP code
//Gtps http
//simple-http
//made by Ced#1337

var http = require('http');

let server = http.createServer(function (req, res) {

    let url = req.url.split("/growtopia/")[1];
  
    if (url && url.startsWith("server_data.php") && req.method.toLowerCase() === "post") {
       res.write("<script>alert('Iced Protected beware your server die')</script>")
        res.write('server|SERVERRIP\nport|SERVERPORT\ntype|1\n#maint|Take Your drinking now, because server has maintenance\n\nbeta_server|SERVERIP\nbeta_port|SERVERPORT\n\nbeta_type|1\nmeta|CloudFlare\nRTENDMARKERBS1001', (err) => {
            if (err)
                console.log(err);

            res.end();
            res.destroy();
        });
    }
    else if (req.method.toLowerCase() === "get") {
        res.writeHead(301);
	res.write("<head><script>alert('Iced Protection');</script>");
        res.write('Protected by Iced', (err) => {
            if (err)
                console.log(err);

            res.end();
            res.destroy();
        });
    }
});

server.listen(80);
console.log("Your Server alr get Protection");
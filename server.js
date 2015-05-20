
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var http = require('http');

http.request({hostname : '127.0.0.1' } , function(res){

	res.setEncoding('utf8');
	res.on('data' , function(chunk){
		 console.log(chunk);
	});
}).end();


var http = require('http');
var fs = require('fs');
var path = require('path');
var index = path.resolve(__dirname, './message.html');

http.createServer(function(req , res){
	var stream = fs.createReadStream(index);
	stream.on('open' , function(){
		res.writeHead(200 , {'Content-Type' : 'text/html'});
	});

	stream.on('error' , function(){
		res.writeHead(404);
        res.end();
	});
	stream.pipe(res);
}).listen(8000);

console.log('Listening!');

var http = require("http");

function onRequest(request , response)
{
	console.log('Request recive');
	response.writeHead(200 , {'Content-Type' : 'text/html'});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(8000);

console.log("Server has started.");

*/

var http = require("http");
var url = require("url");

function start(route , handle)
{
	function onRequest(request , response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		//route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});		
		route(handle, pathname , response);
		//response.write(content);
		//response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
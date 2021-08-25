    // const id = require('.User'); 
   // const path = require('path');
   //const fs = require('fs');     //fs file read write korar jonno
   //const http = require('http');

  import path from 'path';    //packet.json e type = module disi so require ekhon r kaj korbe nah
  import fs from 'fs';
  import http from'http';

  import Button from './Button.js';
    import index from './index.js';

    import UserList from './UserList.js';

  
 

 //name export
     //import {User, id} from './User.js'
  import User from './User.js'; 
  

 // const add = "c:windows/sdsdf\\asdasd\\asd/asd///asd/asd.js";
 // console.log(path.dirname(add));
 // console.log(path.extname(add));
//console.log(path.normalize(add));


  //  const user1 = new User('naruto', 1);




  const server = http.createServer(function(req, res){
 //	console.log('node http server working....');
	 //  console.log(req.url);
	 //  console.log(req.method);
  
   //  res.write('welcome');  
    // res.end(); 
     
     const users = [
    { id: 1, name:'nahin', dept: 'cs'},   //obj er array
    { id: 2, name:'natsu', dept: 'cis'},
    { id: 3, name:'naruto', dept: 'bba'},
    { id: 4, name:'atika', dept: 'cse'}   


     ]


     const updateclick =  ()=>{return `alert('Update Button')`};
      const createclick =  ()=>{return `alert('Create Button')`};
    
      if(req.url ==  '/style.css') {
        fs.createReadStream('style.css').pipe(res);
      }



       if(req.url == '/home'){
       //	res.writeHead(200, {'content-type' : 'text/html'});
       // res.write(`<h1> welcome home ${id} </h1>`);
       	//res.write(`<h1> welcome home ${user1.id} </h1>`);
         // res.write(`<h1> welcome home ${user1.name} </h1>`);

          //  res.write(`<h1> welcome home 
           //   ${Button('create', createclick )} - 
            //  ${Button('update', updateclick )} </h1>`);
     
     //index.js er jonno
    // res.write(index('home', Button('create', createclick)));

      res.write(index('home', UserList(users)));


 
  

      //res.write('welcome home');
	     res.end(); 
       }   
  


       if(req.url == '/loginn'){

       // res.writeHead(200, {'content-type' : 'text/html'});  
    //	res.write('<h2> from node app folder to loginn </h2>');
    //res.write('<h5>Anime</h5>')
	   // res.end();
    
       fs.createReadStream('loginn.html').pipe(res);




        }

   });

  server.listen(8000); 
  console.log(' node server started at 8000 post');






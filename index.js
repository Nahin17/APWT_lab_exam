 //console.log('hello world....') 

 //2nd class

 //let student = ['Alamin', 'Rakib', 'Abir', 'Razib'];
 //let numbers = [1,23,25,5,7,7,7];

 //let newarray = student.filter(function(std){
  //  return std[0] == 'R';
  //  return std[1] == 'A';   // 2nd char a
 //  })


 //let newarray = student.filter((std)=>std[0] == 'A');
  //  return std[1] == 'A';   // 2nd char a

 //  console.log(newarray);


   // let newarray =student.join('-');
  // console.log(newarray);


  // let newarray = student.map((value)=>{
  //  return value+ "ABC"; 
 //  })
  // console.log(newarray);

   // let newarray = numbers.map((value)=>{
  //  return value+5; 
  // })
 //  console.log(newarray);
//let newarray = numbers.map((value)=>{
 //   return value >5; 
  // })
  // console.log(newarray);

  // let newarray = numbers.map((value)=>{
  //  return value +5; 
 //  })
 //  newarray= newarray.filter((num)=> num > 20)
 //  console.log(newarray);

  // const student = {id: 1, name: 'nahin', email: 'nhn@gmail.com'}

  // let {id, name} = student;
  // console.log(id,name);

  // const student = {id: 1, name: 'nahin', email: 'nhn@gmail.com'}

   //let {id, name:myname} = student;  //same e but name nam e chai nah onno name e bahire chai
  // console.log(id,myname);
  



   //let student = ['Alamin', 'Rakib', 'Abir', 'Razib'];
   //let numbers = [1,23,25,5,7,7,7];

   //  const newarray = [...student, '|',  ...numbers];  // ... 3 ta dot dile spred operator bole
   //  console.log(newarray);

   // const student= require('./student');
   //// const s2= require('./student');
   // console.log(student.name);


    //callback           //ekta function er paramiter hishabe r ekta function deya
    //Promise
    //async/await

//////
  //  const f1 = ()=>{
  //    console.log('This is f1...');
  //  }
 

  //  const f2 = (f)=> {         //f er jaygay 2 line e f1 deya jabe
   //   f();
   //   console.log('this is f2...');
 
   // }
 
   // f2(f1);  

    /////  



    // const f1 = ()=>{
    //  console.log('This is Naruto...');
    //}
 

    //const f2 = (f)=> {          
    //  sum= 10;
    //  f(sum);
   
 
    //}    //but error ekta dile o pera nai onno gula run korbe
 
   // f2(f1);  
   // console.log('another task');  //asyncronas vabe kaj handle kore javascript e


 //function setTimeout(f, time){
 // if(time == 3000){
 //   f()
 // }
 //}

// console.log('before time.....')
  //setTimeout( function(){
    
   // console.log('after 3s...')


  //    },3000);   // 3000 mean 3 sec and 2nd ta koto khon wait korbe
   
  // console.log(' after time...')

  // setTimeout( function(){
    
  //  console.log('after 3s...')


    //  },3000);


   //setTimeout( function(){
    
   // console.log('after 3s...')


    //  },3000);


  //setTimeout( function(){
    
   // console.log('after 3s...')


   //   },3000);



   //////////////////////////


  // const p = new promise((resolve, reject)=>{
      
   //   if(40+10 == 50){
   //     resolve('Solved bro');
  //    }
  //    else {
  //      reject('error');
  //    }

 //  });

  // p.then(a=>{
 //   console.log(a);
 //  }).catch(e=>{
 //   console.log(e);
 //  })
////////////////////////
  // DB.then(a=>{
  //  console.log(a);  
 //   }).catch(e=>{
  //  console.log(error);
 //   })
   
////////////////

  // function sum(a, b){
  //  return new Promise((resolve, reject)=>{
  //    if(a+b == 50){

    //    setTimeout(()=>{      //promise just call back er replacement  call back er motoi kaj kore
    //      resolve('done');
   //     }, 3000);
        
   //   }else{
    //    reject('error'); 
   //   }
   // })
  // }

 //  sum(30,20).then(msg=>{
 //   console.log(msg)
//   }).catch(error=>{  
 //   console.log(error)
//   })

  // if(5=='5'){
  //  console.log('test')
   //   }else{
   //  console.log('error')
  // }
   
   
  // console.log('another task');

   //////////////////////




  // function sum(a, b){
  //  return new Promise((resolve, reject)=>{
    //  if(a+b == 50){

    //    setTimeout(()=>{      
          //resolve('done');
     //     resolve(a+b); 
     //   }, 3000);
        
    //  }else{
   //     reject('error'); 
  //    }
  //  })
  // }


 //  async function processmytask(a,b){     //await kora mean wait kora  await dile function er agey async likha lage
 //   console.log('processing started......')
 //   try{

 //    const total  = await sum(a,b);    //sum function ta asyncronas by nature cz promise return kore
 //  console.log(total);
 //   }
  //  catch{
 //     console.log('error...');
  //  }
  // }

   //processmytask(30, 20);

  // console.log('test line');


 // class Student{
 //   constructor(id, name, email){
  //    this.id = id;
  //    this.name = name;
  //    this.email = email; 
  //  }
  //  getName(){
 // return this.name;
//   }

 // } 

 import {User} from './User';  //nAME EXPORT 
 

  const u1 = new Student(1, 'nahinul', 'nahin@gmail.com');
  console.log(u1.name);
  console.log(u1.getName());




// console.log("hello world");

// var a =12;
// if(a>10){
//     b=20;
//     console.log("a inside:"+a);
// }
// console.log("a outside:"+b);
//console.log("hi, inside index.js");
//function fun(a,b){
  //  console.log("hiiii");
    //return a+b;
//}
//const result = fun(23,12);
//console.log(result);
//const button = document.getElementById("btn");
//const output=document.getElementById('output');
//const select=document.getElementById('select');

//console.log(select,value);
//console.dir(output);

//function selectlanguage(language){
   // console.log("Hi, Inside Language")
    //output.innerHTML="<h2>Welcome to home page</h2>"
    //let data;
    //if(language=='c'){
//function cCompiler()
//{
  //  return "C compiler"
//}
//data=cCompiler()
   // }
    //if(language=='java'){  
//function javacompiler()
//{
   // return "java compiler"
//}
//data = javacompiler()
    //}
    //return data;
//}
//button.addEventListener("click",()=>{
//   const comp=selectlanguage('java');
  // output.innerHTML=`<h2 style=color:cyan>${comp}</h2>`
   //console.log(comp);
//});
//console.log(selectLanguage("c"));
//const mypromise=new Promise(
   //(resolve,reject)=>{
    //  let a=12;
    //  if(a>10){
        // resolve({name:"rahul",branch:'IT'});

      //}
      //else{
       //  reject("data is rejected")
      //}
   //}
//); 
//mypromise.then(msg=>console.log(msg.branch))
//.catch(error=>console.log(error))
//.finally(()=>console.log("finally Executed"));
function getdata(){
const output=document.getElementById('output');
const data=fetch("https://dummyjson.com/recipes");
data.then(
   (res)=>{
      console.log(res);
      res.json().then(
         (response)=>{
            console.log(response.recipes[0].name);
            console str=response.recipes[0].id+ " "+response.recipes[0].name+ "  "response.recipes[0].instruction;

            output.innerHTML=`${str}`;
         }
      )
   }
)}

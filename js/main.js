function submitData() {
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var address=document.querySelector("#address").value;
var phoneno=document.querySelector("#phoneno").value;
var emailid=document.querySelector("#emailid").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyear=document.querySelector("#gyear").value;
var gpercentage=document.querySelector("#gpercentage").value;
var institute=document.querySelector("#institute").value;
var igbranch=document.querySelector("#igbranch").value;
var igyear=document.querySelector("#igyear").value;
var igpercentage=document.querySelector("#igpercentage").value;
var school=document.querySelector("#school").value;
var sboard=document.querySelector("#sbord").value;
var syear=document.querySelector("#sgyear").value;
var sper=document.querySelector("#spercentage").value;
var skills=document.querySelector("#skills").value;

// IndexIDB Implementation
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
if(!idb in window)
{
  console.log("indexedDB is not supported");

}
// IndexIDB creation
var request;
var store;

var open=idb.open("storeData",1);
console.log("IndexIDB is created")

open.onupgradeneeded=function (e){
  request=e.target.result;
store= request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");

}
open.onerror=function(e){
  console.log("error occured");
}


open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");

store=transaction.objectStore("formdata");
store.put({
  career:career,
  name:name,
  address:address,
  phoneno:phoneno,
  emailid:emailid,
  education:[
    {
      institute:ginstitute,
        branch:gbranch,
        year:gyear,
        percentage:gpercentage

  },
  {
    institute:institute,
      branch:igbranch,
      year:igyear,
      percentage:igpercentage
  },
  {
    institute:school,
      branch:sboard,
      year:syear,
      percentage:sper

  }
],





  skills:skills

});

}
window.open("index.html");
}

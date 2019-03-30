var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for (var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

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
var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data);
  personalinfo(data.target.result);

}
}

var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi) {

  var image=document.createElement("img");
  image.src="images/add-user.svg";
  image.alt=pi.name;
  left.append(image);
var hh=document.createElement("h2");
hh.textContent=pi.name;
left.append(hh);

var head=document.createElement("h2");
head.textContent=pi.address;
left.append(head);

var he=document.createElement("h2");
he.textContent=pi.phoneno;
left.append(he);


var hea=document.createElement("h2");
hea.textContent=pi.emailid;
left.append(hea);

var head11=document.createElement("h2");
head11.textContent="education details";
right.append(head11);
var table=document.createElement("table");
table.border="1";

var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percentage</th></tr>";
var tr2=" ";
for(var i in pi.education){
  tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].percentage+"</td></tr>";
 }
table.innerHTML=tr1+tr2;
right.append(table);
  // var right=document.querySelector(".right");
    var h1=document.createElement("h2");
    h1.textContent="career Objective";
    right.append(h1);
    var hr=document.createElement("hr");
    right.append(hr);

   var career=document.createElement("h2");
   career.textContent=pi.career;
   right.append(career);

var h2=document.createElement("h2");
h2.textContent="Skills";
right.append(h2);
var hr=document.createElement("hr");
right.append(hr);

var skills=document.createElement("h2");
skills.textContent=pi.skills;
right.append(skills);
}

// var tr1="<tr><th>Qualifications</th><th>institute</th><th>percen</th><th>yop</th></tr>";
// var tr2=" ";
// for(var i=0;i<edu.length;i++)
// {
//   tr2=tr2+"<tr><td>"+edu[i].Qualifications+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].percen+"</td><td>"+edu[i].yop+"</td></tr>";
// }
// table.innerHTML=tr1+tr2;
// right.append(table);

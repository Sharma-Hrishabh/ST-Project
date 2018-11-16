$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
});

function onReportLoad(){
  sessionStorage['combiflam']=2;
  sessionStorage['flexon']=2;
  sessionStorage['disprin']=3;
  sessionStorage['painkiller']=2;
  sessionStorage['mega-pen']=3;
  sessionStorage['zintac']=5;
}




function addDoctor(){

doc_id=document.getElementById("doc_id").value;
doc_name=document.getElementById("doc_name").value;
doc_charge=document.getElementById("doc_charge").value;
if(doc_id!="" && doc_name!="" && doc_charge!=""){
if(sessionStorage["d"+doc_id]) alert("Doctor with this id already exist in Database");
else {
sessionStorage["d"+doc_id]=[doc_name,doc_charge];
var x=sessionStorage["d"+doc_id].split(',');
alert("Doctor-Name:"+x[0]+"\nCharge:"+x[1]+"\nadded to Database successfully");
}
}
else{
  if(doc_id=="") console.log("id");
  else if(doc_name=="") console.log("name");
  else console.log("charge")
}
}


function addPatient(){
  pat_id=document.getElementById("pat_id").value;
  pat_name=document.getElementById("pat_name").value;
  pat_doc_id=document.getElementById("pat_doc_id").value;
  if(pat_id!="" && pat_name!="" && pat_doc_id!=""){
  if(!sessionStorage["d"+pat_doc_id]) alert("No doctor with this id");
  else if(sessionStorage["p"+pat_id]) alert("Patient with this id already exists");
  else{
    sessionStorage["p"+pat_id]=[pat_name,pat_doc_id];
    if(sessionStorage["patients"]) sessionStorage["patients"]=sessionStorage["patients"]+","+pat_id;
    else sessionStorage["patients"]=pat_id+"";
    var x=sessionStorage["p"+pat_id].split(',');;
    alert("Patient-Name:"+x[0]+"\nDoctor Alloted[ID]:"+x[1]+"\nadded to Database successfully");
    //
    // var card=document.createElement("div");
    // card.innerHTML="<h1>Patient_id</h1>"+"<p>Patient_Name</p>"+"<p>Doctor alloted</p>"
    // document.getElementsByClassName('card-list')[0].appendChild(card);
    // console.log("sd");

  }
}
else{

    if(pat_id=="") console.log("id");
    else if(pat_name=="") console.log("name");
    else console.log("pat_doc_id")
}
}

function addMedicine(){
  med_id=document.getElementById("med_id").value;
  med_name=document.getElementById("med_name").value;
  med_price=document.getElementById("med_price").value;
  if(doc_id!="" && doc_name!="" && doc_charge!=""){
  if(sessionStorage[med_name]) alert("Medicine with this id already exist in Database");
  else {
  sessionStorage[med_name]=med_price;
  alert(sessionStorage[med_name]+" successfully added to Database");
}}
  else{
    if(doc_id=="") console.log("id");
    else if(doc_name=="") console.log("name");
    else console.log("charge")
  }
}


var totalPrice=0;
   function addItem(id) {
   var medName=document.getElementsByName('med-name-'+id)[0].value.toLowerCase();
   var medQty=Number(document.getElementsByName('med-qty-'+id)[0].value);
   console.log(medName+" "+medQty);
   if(sessionStorage[medName])
   {
     totalPrice+=(medQty*Number(sessionStorage[medName]));
      document.getElementById(''+id).style.visibility = 'hidden';
      document.getElementsByClassName('input-'+(id+1))[0].style.display = 'block';
   } else {
     alert("Medicine not found in Database!!");
   }
   console.log(totalPrice);
}


function generateReport(){
document.get
var pat_id=document.getElementById("pat_med_id").value;
console.log(pat_id);
if(!sessionStorage["p"+pat_id]) alert("No Such Patients");
else {
  alert("Total Cost is "+totalPrice);
}
}

$(window).scroll(function (event) {
    var scroll = Number($(window).scrollTop().toString());
    $('#prog-bar').val(""+(scroll*100/($(document).height() - window.innerHeight)));
});


function mapLoad(){
  var x=sessionStorage["patients"].split(',');
  for(var i=0;i<x.length;i++)
  {
    var el=document.getElementById("card-"+(i+1));
    el.getElementsByTagName("h1")[0].innerHTML+=x[i];
    var data=sessionStorage["p"+x[i]].split(',');
    el.getElementsByTagName("p")[0].innerHTML+=data[0];
    el.getElementsByTagName("p")[1].innerHTML+=data[1]
    el.style.visibility="visible";


  }
}

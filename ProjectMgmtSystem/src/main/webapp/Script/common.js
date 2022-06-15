// employeeform
// empDeprtmt
// empStatus
// empfname
// empMName
// empLname
// empGender
// empDOB
// empNationality
// empemail
// empMobile
// empAltMobile
// empAddress
// empVillage
// empState
// empCountry
// empUsename
// empPassword
// empConPassword

// -- mandatory field is been inserted or Not (Null or black)
// -- each and every field seperate

// saveEmployee()--function call

function saveEmployee(){
    //definition and statement
    //alert("welcome");

    var empformID = document.getElementById("employeeform");



    var empDeprtmt = document.getElementById("empDeprtmt");
    var empStatus = document.getElementById("empStatus");
    var empfname = document.getElementById("empfname");
    //var empMName = document.getElementById("empMName");
    var empLname = document.getElementById("empLname");
     
    var empDOB = document.getElementById("empDOB");
    //var empNationality = document.getElementById("empNationality");
    var empemail = document.getElementById("empemail");
    var empMobile = document.getElementById("empMobile");
    //var empAltMobile = document.getElementById("empAltMobile");
    var empAddress = document.getElementById("empAddress");
    var empVillage = document.getElementById("empVillage");
    var empState = document.getElementById("empState");
    var empCountry = document.getElementById("empCountry");
    var empUsename = document.getElementById("empUsename");
    var empPassword = document.getElementById("empPassword");
   //var empConPassword = document.getElementById("empConPassword");


   //check null or blank Input/select/textarea
   if(NullOrBlank(empDeprtmt,"Please enter Department")){return false;}
   if(NullOrBlank(empStatus,"Please enter Status")){return false;}
   if(NullOrBlank(empfname,"Please enter First Name")){return false;}
   if(NullOrBlank(empLname,"Please enter Last Name")){return false;}
   
   if(!validChkRadio('empGender','Select any one Gender')){return false;}
   
   if(NullOrBlank(empDOB,"Please enter DOB")){return false;}
   if(NullOrBlank(empemail,"Please enter Email Id")){return false;}
   if(NullOrBlank(empMobile,"Please enter Mobile")){return false;}
   if(NullOrBlank(empAddress,"Please enter Address")){return false;}
   if(NullOrBlank(empVillage,"Please enter Village")){return false;}
   if(NullOrBlank(empState,"Please enter State")){return false;}
   if(NullOrBlank(empCountry,"Please enter Country")){return false;}
   if(NullOrBlank(empUsename,"Please enter Username")){return false;}
   if(NullOrBlank(empPassword,"Please enter Password")){return false;}


   alert("Form successfully saved!!!!");


   empformID.action="add-employee.html";
   empformID.submit();

}
//Null or a blank checking
function NullOrBlank(elmid,alert_message){

    if(elmid.value == "" || elmid.value == null || elmid.value.length == 0){
        alert(alert_message);
        elmid.focus();
        elmid.style.border="1px solid red";
        return true;
    }else{
        return false;
    } 
}


function removeBorder(elmid){
    elmid.style.border="";
}

function validChkRadio(elmidName,message){//validRadio('empGender','Check any one gender!') ====empGender[i].length=2 [0,1]
    var elmid = document.getElementsByName(elmidName);//document.getElementsByName("agree")
    var j=0;


    for(var i=0 ; i < elmid.length ; i++){
        if(elmid[i].checked){//true elmid[0]=M & elmid[1]=F
            j= 1;
        }
    }

//i=0 ; 0 < 2[0<2,1<2=true(twice iterate)     ,2<2]


    if( j > 0){//anyone value will be checked 

        return true;

    }else{
        alert(message);
    }

}




function letteronly(elmid) {
    var letterformat = /^[A-Za-z]+$/;
    if (elmid.value.match(letterformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Invalid - Only Letter allowed!!");
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return false;
    }
}

function pnumber(elmid) {
    var numberformat = /^\d{10}$/;
    if (elmid.value.match(numberformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper phone number");
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return false;
    }
}
function passcheck(elmid) {
    var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,6}$/;
    if (elmid.value.match(passformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper password!!");
        elmid.focus();
        elmid.value = "";
        elmid.style.border = "1px solid red";
        return false;
    }
}


function matchpass(txtfldconfirmpass) {
    var password = document.getElementById("txtfldpass").value;
    var confirmpass = document.getElementById("txtfldconfirmpass").value;
    if (password == confirmpass) {
        document.getElementById("txtfldconfirmpass").style.border = "";
        return true;
    } else {
        alert("Password missmatch");
        txtfldconfirmpass.focus();
        txtfldconfirmpass.value = "";
        txtfldconfirmpass.style.border = "1px solid red"
        return false;
    }

}


function emailcheck(elmid) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (elmid.value.match(mailformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper email ID!!!");
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return false;
    }
}

// document.getElementById("elmid").value=test
//  $("#elmid").val("test"); ==css 
//  $(".classnmae")
//  $("table tbody tr td").find("input[id=test]")


//onchange="checkDateFormat(this)"
function checkDateFormat(date){//date is Id
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  

	 var txtVal=$(date).val();    //             ==>>> 02/03/2022=10
	 var day,month,year;
	 var arr=[]; 
	 if(txtVal.match(dateformat)) {//true
	 if(txtVal.length<10){  
		 arr = txtVal.split('/');
		 if(arr[0].length == 1){
			 day=arr[0].replace(arr[0],"0"+arr[0]);
		 }else{
			 day=arr[0];
		 }
		 
		 if(arr[1].length == 1){
			 month=arr[1].replace(arr[1],"0"+arr[1]);
		 }else{
			 month=arr[1];
		 }
		 
		 year=arr[2];
		 date.val(day+"/"+month+"/"+year);
	 }
	 }
		if(!isEmpty(txtVal)){
		
			showAlert('Invalid Date'); //alert("Hellopw")
			date.val(""); 
	}
}
function isEmpty(strVal) 
{ 
   if ((strVal.length==0) || (strVal == null)) 
   {
      return true;
   }
   else 
   { 
      return false; 
   }
}//end IsEmpty


function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern);
    
    if (dtArray == null) 
        return false;
    

    dtDay= dtArray[1];
    dtMonth = dtArray[3];    
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    
    return true;
}
function showAlert(content,fldtofocus) { 
             
        $("#alertimg").html(""); 
        $("#alertmsg").html(content); 
        
        
        $('#alertmsgdiv').modal({
              backdrop: 'static',
              keyboard: false,
              show:true,
            });
        
        $('#alertmsgdiv').on('shown.bs.modal', function() { 
            
              $(this).find(".modal-title").text("PMS-Project Management System");
              $(this).find(".modal-footer").find("button:eq(0)").unbind();
              $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
                  $('#alertmsgdiv').modal('hide');  
                    if(fldtofocus)fldtofocus.focus(); 
            });
        });   
       
    }
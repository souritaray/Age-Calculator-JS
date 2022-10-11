//const container;
//const error;
document.querySelector("#dob").addEventListener("input",getAge);

function getAge(){
    let newDate=new Date(document.querySelector("#dob").value);
    calcAge(newDate.getFullYear(),newDate.getMonth(),newDate.getDate());
        
}

function calcAge(given_Yr,given_Month,given_Date){
    let today=new Date();
    let years=today.getFullYear()-given_Yr;
    let months=Math.abs(today.getMonth()-given_Month);
    let dates=Math.abs(today.getDate()-given_Date);
    let no_of_months=new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    console.log(no_of_months);
    if(given_Month>today.getMonth() && given_Date>today.getDay()){
        years=years-1;
        months=12-months-1;
        dates=no_of_months-dates;
    }
    if(given_Month<today.getMonth() && given_Date>today.getDay())
    {
         months=months-1;
         dates=no_of_months-dates;
    }
   if(given_Yr>today.getFullYear()){
    document.querySelector(".desc").style.display="none";
    document.querySelector(".age").style.display="none";
    document.querySelector(".error").style.display="block";
   }
    
    displayAge(years,months,dates);
    
}
function displayAge(y,m,d){
    document.querySelector("#years").textContent=y;
    document.querySelector("#months").textContent=m;
    document.querySelector("#days").textContent=d;

   
    
    
}


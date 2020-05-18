function myFunction() {

    // DAYS SETTINGS
    let day = document.getElementById("days").value;
    
    
    // MONTHS SETTINGS
    let month = document.getElementById("months").value;
    
    
    // YEARS SETTINGS
    let year = document.getElementById("years").value;
    
    // VARIABLES
    let newyear = (yyyy - year) * 360;
    let newmonth = month * 30;
    let newday =   day + 5;
     

    // ALL WRITING
    let us = parseInt(newyear) + parseInt(newmonth) + parseInt(newday);

    document.getElementById("result").innerHTML = us;    

  }

    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd=`0${dd}`;
    } 

    if(mm<10) 
    {
        mm=`0${mm}`;
    } 
    today = `${dd}/${mm}/${yyyy}`;
    console.log(today);


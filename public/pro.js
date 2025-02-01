var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname){
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for ( let tabcontent of tabcontents) {
        tabcontent.style.display = "none";
        tabcontent.classList.remove("active-tab");
       
    }
   
    document.getElementById(tabname).style.display = "block";
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right = "-200px"
}
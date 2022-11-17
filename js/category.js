const MenuBtn = document.getElementById("Menu-Btn")
const OtherNavbar = document.getElementById("Other-Navbar")
MenuBtn.onclick = ()=>{
    if (OtherNavbar.classList.contains("show")) {
        OtherNavbar.classList.remove("show")
    }
    else{
        OtherNavbar.classList.add("show")
    }
}
    
    let query = document.querySelector('.query');
    let searchBtn = document.querySelector('.searchBtn')

    searchBtn.onclick = function() {
        let url = 'https://www.google.com/search?q='+query.value;
        window.open(url, '_self');
    }

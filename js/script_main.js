
const navbarItems = document.getElementById("navbarItems");
const btnAbrir = document.getElementById("btn-open");
const btnFechar = document.getElementById("btn-close");

btnAbrir.onclick = function(){
    navbarItems.classList.add("abrir-menu");
    btnAbrir.classList.add("icon-sumir");
}

btnFechar.onclick = function(){
    navbarItems.classList.remove("abrir-menu");
    btnAbrir.classList.remove("icon-sumir");
}



let balancedMenu = document.getElementById('balanced_menu');
let officeMenu = document.getElementById('office_menu');
let btn00 = document.getElementsByClassName('smthbtn2');
let image = document.querySelector('.img3');
let text1 = document.querySelector('.pp11');
image.getAttribute('src','01_menu_office');
function picChange() {
    image.setAttribute('src', '03_menu_balanced.jpg');
    text1.innerText = 'Balanced Menu';
}

officeMenu.onclick = picChange;
function alertbox1(){
        alert("Respected item added in the cart!");
}
btn00.onclick=alertbox1;


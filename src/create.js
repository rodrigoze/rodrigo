import sun from './sun.jpg';

function create() {
const content = document.getElementById("content");
let home = document.createElement("div");
let logo = document.createElement("div");
let name= document.createElement("h1");
let txt= document.createElement("p");
home.id='home';
logo.id ='logo';
name.id='name';
txt.id='txt';
logo.innerHTML=`rodrigo's`;
name.innerHTML='The best Acai Restaurant';
txt.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
content.appendChild(home);
home.appendChild(logo);
home.appendChild(name);
home.appendChild(txt);
}




const menu = () => {
    const content = document.getElementById("content");
    let menu = document.createElement("div");
    let logo = document.createElement("div");
    let name= document.createElement("h1");
    let txt= document.createElement("p");
    menu.id='menu';
    logo.id ='logo';
    name.id='name';
    txt.id='txt';
    logo.innerHTML=`rodrigo's`;
    name.innerHTML='ACAI menu';
    txt.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
    content.appendChild(menu)
    menu.appendChild(logo);
    menu.appendChild(name);
    menu.appendChild(txt);
    let mySun = document.createElement("img");
    mySun.src = sun;
    mySun.id='sun';
    let main=document.createElement("div");
let dish= document.createElement("div");
let price= document.createElement("div"); 
main.id='main';
dish.id ='dish';
price.id='price';
dish.innerHTML='Truffle Piza';
price.innerHTML='7.95$';
menu.appendChild(main);
main.appendChild(mySun);
main.appendChild(dish);
main.appendChild(price);
    }

    const two = () => {
        const content = document.getElementById("content");
        let contact = document.createElement("div");
        let logo = document.createElement("div");
        let name= document.createElement("h1");
        let txt= document.createElement("p");
        contact.id='contact';
        logo.id ='logo';
        name.id='name';
        txt.id='txt';
        logo.innerHTML=`rodrigo's`;
        name.innerHTML='Contact Us';
        txt.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        content.appendChild(contact)
        contact.appendChild(logo);
        contact.appendChild(name);
        contact.appendChild(txt);
        }

        export {
            create,
            two,
            menu
          };
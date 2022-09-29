import {create,menu,two} from './create';
import './style.css';

    
    function nav(){
    const header = document.getElementById("header");
    let a = document.createElement("a");
    let b= document.createElement("a");
    let c= document.createElement("a");
    a.id ='navone';
    b.id='navtwo';
    c.id='navthree';
    a.innerHTML=`Home`;
    b.innerHTML='Menu';
    c.innerHTML='Contact Us';
    a.addEventListener('click',home);
    b.addEventListener('click',home);
    c.addEventListener('click',home);
    header.appendChild(a);
    header.appendChild(b);
    header.appendChild(c);
    }

    function footer(){
        const footer = document.getElementById("footer");
        let q = document.createElement("div");
        q.id ='foot';
        q.innerHTML=`All right reserved to rodrigo`;
        footer.appendChild(q);
        }

function home(index){
    let d= event.srcElement.id;
    const boxy = document.getElementById(d);
    console.log(d)
    if(d==='navone')
    {
        document.getElementById('menu').style.display='none';
        document.getElementById('contact').style.display='none';
        document.getElementById('home').style.display='block';
        document.getElementById('navone').style.fontWeight=800;
        document.getElementById('navtwo').style.fontWeight=200;
        document.getElementById('navthree').style.fontWeight=200;

        
    }
    if(d==='navtwo')
    {
        document.getElementById('home').style.display='none';
        document.getElementById('contact').style.display='none';
        document.getElementById('menu').style.display='block';
        document.getElementById('navtwo').style.fontWeight=800;
        document.getElementById('navone').style.fontWeight=200;
        document.getElementById('navthree').style.fontWeight=200;

    }
    if(d==='navthree')
    {
        document.getElementById('menu').style.display='none';
        document.getElementById('home').style.display='none';
        document.getElementById('contact').style.display='block';
        document.getElementById('navthree').style.fontWeight=800;
        document.getElementById('navone').style.fontWeight=200;
        document.getElementById('navtwo').style.fontWeight=200;

    }
}


nav();
create();
menu();
two();
footer();
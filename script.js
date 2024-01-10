setInterval(()=>{
    const d= new Date();
    const h= d.getHours();
    const m= d.getMinutes();
    const s= d.getSeconds();
    hrotation=30*h+m/2;
    mrotation= 6*m;
    srotation=  6*s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);
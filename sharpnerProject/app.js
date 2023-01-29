let hT= document.getElementById('header-title');
let header= document.getElementById('main-header');

header.style.borderBottom="thick solid black";

let m= document.getElementsByTagName('h2');
for (let i = 0; i < m.length; i++) {
   m[i].style.font = "italic bold 50px aerial, serif";
   m[i].style.color = "green";
}


// LOADER
window.onload=()=>loader.style.display="none";

// CURSOR
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// MENU
menuBtn.onclick=()=>menu.classList.toggle("active");

// NAV HIDE
let lastScroll=0;
window.addEventListener("scroll",()=>{
let current=window.pageYOffset;

navbar.classList.toggle("hide", current>lastScroll);
lastScroll=current;
});

// PROGRESS + TOP BTN
window.onscroll=()=>{
let sc=document.documentElement.scrollTop;
let h=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(sc/h)*100+"%";
topBtn.style.display=sc>300?"block":"none";
};

// TOP BTN
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

// THEME SAVE
themeToggle.onclick=()=>{
document.body.classList.toggle("light");
localStorage.setItem("theme",document.body.classList.contains("light"));
};

if(localStorage.getItem("theme")==="true"){
document.body.classList.add("light");
}

// TYPING
const words=["Gaming Creator","YouTuber","Grinding"];
let i=0,j=0,del=false;

function type(){
let txt=words[i];
typing.innerHTML=txt.substring(0,j);

if(!del && j++===txt.length){del=true;setTimeout(type,1000);return;}
if(del && j--===0){del=false;i=(i+1)%words.length;}

setTimeout(type,del?50:100);
}
type();

// COUNTER OBSERVER
const counters=document.querySelectorAll(".count");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
let counter=entry.target;
let target=+counter.dataset.target;

let update=()=>{
let count=+counter.innerText;
let inc=target/100;

if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,20);
}else counter.innerText=target;
};

update();
observer.unobserve(counter);
}
});
});

counters.forEach(c=>observer.observe(c));

// REVEAL
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
let top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100) el.classList.add("active");
});
});

// VIDEO AUTO SYSTEM
const videos=["dQw4w9WgXcQ","dQw4w9WgXcQ","dQw4w9WgXcQ"];

videos.forEach(id=>{
let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${id}`;
videoContainer.appendChild(iframe);
});

const $=id=>document.getElementById(id);
const sidebar=$("sidebar"),overlay=$("overlay"),messages=$("messages"),input=$("input");
function openSide(){sidebar.classList.add("open");overlay.classList.add("show")}
function closeSide(){sidebar.classList.remove("open");overlay.classList.remove("show")}
$("menuBtn").onclick=openSide;$("closeSide").onclick=closeSide;overlay.onclick=closeSide;
document.querySelectorAll(".chat").forEach(c=>c.onclick=()=>{
 document.querySelectorAll(".chat").forEach(x=>x.classList.remove("active"));c.classList.add("active");
 $("ha").textContent=c.dataset.initial;$("hn").textContent=c.dataset.name;$("status").textContent="● online";closeSide();
});
$("search").oninput=e=>{let q=e.target.value.toLowerCase();document.querySelectorAll(".chat").forEach(c=>c.style.display=c.dataset.name.toLowerCase().includes(q)?"flex":"none")};
$("form").onsubmit=e=>{e.preventDefault();sendMessage()};
function sendMessage(){let t=input.value.trim();if(!t)return;let d=document.createElement("div");d.className="m me";d.innerHTML='<div class="bubble"></div>';d.firstChild.textContent=t;let s=document.createElement("div");s.className="stamp";s.innerHTML='now <span class="ticks">✓</span>';d.firstChild.appendChild(s);messages.appendChild(d);input.value="";messages.scrollTop=messages.scrollHeight}
$("emojiBtn").onclick=()=>{input.value+=" 😊";input.focus()};
$("attachBtn").onclick=()=>alert("Attachment feature coming soon.");
$("searchBtn").onclick=()=>{if(innerWidth<=700){openSide();$("search").focus()}else{$("search").focus()}};
$("moreBtn").onclick=()=>alert("Chat Maastr menu");
$("contactsNav").onclick=()=>alert("Contacts section");
$("settingsNav").onclick=()=>alert("Settings section");
$("chatsNav").onclick=openSide;
input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage()}});

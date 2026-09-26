function pad(n){return n.toString().padStart(2,'0');}
function tick(){
  var el=document.getElementById('tape-clock');
  var d=new Date();
  var t=pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds());
  el.textContent=t; el.setAttribute('datetime', d.toISOString());
}
tick(); setInterval(tick,1000);
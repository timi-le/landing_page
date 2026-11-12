

(function(){
  'use strict';
  const valid = new Set(['home','technology','research','ventures','culture','contact']);
  const pages = Array.from(document.querySelectorAll('[data-page]'));
  const navButtons = Array.from(document.querySelectorAll('button[data-route]'));
  function changePage(name,updateHistory=true){
    const route = valid.has(name) ? name : 'home';
    pages.forEach(page=>{
      const active=page.dataset.page===route;
      page.classList.toggle('is-active',active);
      page.setAttribute('aria-hidden',String(!active));
    });
    navButtons.forEach(button=>{
      const current=button.dataset.route===route;
      button.classList.toggle('is-current',current);
      if(button.closest('nav')) button.setAttribute('aria-current',current?'page':'false');
    });
    if(updateHistory) history.pushState(null,'','#'+route);
    window.scrollTo({top:0,behavior:'instant'});
    document.title = (route==='home' ? 'Timilehin Olapade' : route.charAt(0).toUpperCase()+route.slice(1)+' — Timilehin Olapade')+' | Personal Index';
    if(route==='research') window.requestAnimationFrame(drawResearch);
  }
  navButtons.forEach(button=>button.addEventListener('click',()=>changePage(button.dataset.route)));
  window.addEventListener('hashchange',()=>changePage(location.hash.replace('#',''),false));
  window.addEventListener('popstate',()=>changePage(location.hash.replace('#',''),false));
  const filters=Array.from(document.querySelectorAll('[data-filter]'));
  const researchItems=Array.from(document.querySelectorAll('.research-item[data-tags]'));
  filters.forEach(button=>button.addEventListener('click',()=>{
    const tag=button.dataset.filter;
    filters.forEach(filter=>{
      const active=filter===button;filter.classList.toggle('is-selected',active);filter.setAttribute('aria-pressed',String(active));
    });
    researchItems.forEach(item=>item.hidden=tag!=='all'&&!item.dataset.tags.split(' ').includes(tag));
  }));
  function drawResearch(){
    const canvas=document.getElementById('signal-canvas');if(!canvas)return;
    const ctx=canvas.getContext('2d');if(!ctx)return;
    const w=canvas.width,h=canvas.height;
    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle='#3f4650';ctx.lineWidth=.8;
    for(let x=0;x<w;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
    for(let y=0;y<h;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
    ctx.strokeStyle='#8c9aca';ctx.lineWidth=1.6;ctx.beginPath();
    for(let x=0;x<w;x+=2){const y=h*.54+Math.sin(x*.018)*72+Math.sin(x*.051)*28-Math.cos(x*.007)*52;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.stroke();
    ctx.strokeStyle='#526fe2';ctx.lineWidth=1.1;ctx.beginPath();
    for(let x=0;x<w;x+=2){const y=h*.55+Math.sin(x*.03+1.6)*42+Math.cos(x*.012)*79;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.stroke();
    for(let i=0;i<94;i++){let x=(i*73+23)%w,y=(i*127+37)%h;ctx.beginPath();ctx.arc(x,y,i%7===0?2.8:1.2,0,Math.PI*2);ctx.fillStyle=i%9===0?'#5573e4':'#aeb8c08b';ctx.fill()}
    ctx.beginPath();ctx.arc(w*.7,h*.35,55,0,2*Math.PI);ctx.strokeStyle='#5573e483';ctx.lineWidth=1;ctx.stroke();
  }
  changePage(location.hash.replace('#','')||'home',false);
})();

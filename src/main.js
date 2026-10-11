import './style.css';
import 'lenis/dist/lenis.css';
import {metrics,infrastructure,services,formats,youtube,steps,booking} from './content.js';
const fill = (id, html) => { document.getElementById(id).innerHTML = html; };
const number = i => String(i + 1).padStart(2,'0');
fill('metrics',metrics.map(([n,u,t])=>`<div><strong>${n}<small>${u}</small></strong><span>${t}</span></div>`).join(''));
fill('infrastructure',infrastructure.map(t=>`<li>${t}</li>`).join(''));
fill('services',services.map((s,i)=>`<article class="service"><span class="index">${number(i)}</span><div><h3>${s.name}</h3><p class="subtitle">${s.subtitle}</p></div><div><p>${s.text}</p><ul class="tags">${s.includes.map(t=>`<li>${t}</li>`).join('')}</ul><a class="text-link" href="https://wa.me/5511965944994?text=${encodeURIComponent(`Olá! Quero conversar sobre ${s.name} no Estúdio Z.`)}">Conversar sobre ${s.name} ↗</a></div></article>`).join(''));
fill('formats',formats.map(([t,d],i)=>`<article><span>${number(i)}</span><h3>${t}</h3><p>${d}</p></article>`).join(''));
fill('youtube',youtube.map(t=>`<li>${t}</li>`).join(''));
fill('steps',steps.map(([t,d],i)=>`<li><span>${number(i)}</span><h3>${t}</h3><p>${d}</p></li>`).join(''));
fill('booking',booking.map(([t,d])=>`<article><h4>${t}</h4><p>${d}</p></article>`).join(''));
document.getElementById('whatsapp').href=`https://wa.me/5511965944994?text=${encodeURIComponent('Olá! Vim pelo site e quero conversar sobre um projeto no Estúdio Z.')}`;

// Conteúdo permanece visível se JS/animações falharem. Carregamento sob demanda.
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const button = document.getElementById('motion');
let manuallyPaused = false, cleanup = () => {}, generation = 0;
async function configureMotion() {
 const ticket = ++generation;
 cleanup(); cleanup = () => {};
 const paused = manuallyPaused || preference.matches;
 button.setAttribute('aria-pressed',String(paused));
 button.disabled = preference.matches;
 button.textContent = preference.matches ? 'Movimento reduzido ativo' : paused ? 'Ativar animações' : 'Pausar animações';
 if (paused) return;
 try {
  const [{gsap},{ScrollTrigger},{default:Lenis}] = await Promise.all([import('gsap'),import('gsap/ScrollTrigger'),import('lenis')]);
  if(ticket !== generation) return;
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({duration:1.05,smoothWheel:true,anchors:true});
  lenis.on('scroll',ScrollTrigger.update);
  const tick = time => lenis.raf(time*1000);
  gsap.ticker.add(tick);
  const context = gsap.context(()=>{
   gsap.from('.hero h1',{y:35,opacity:0,duration:1,ease:'power3.out'});
   document.querySelectorAll('[data-reveal]').forEach(el=>gsap.from(el,{y:35,duration:.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
   gsap.to('.hero-media img',{yPercent:8,ease:'none',scrollTrigger:{trigger:'.hero-media',start:'top bottom',end:'bottom top',scrub:true}});
  });
  cleanup=()=>{context.revert();gsap.ticker.remove(tick);lenis.destroy();};
 } catch(error) { console.warn('Animações indisponíveis; navegação nativa mantida.',error); }
}
button.addEventListener('click',()=>{manuallyPaused = !manuallyPaused; configureMotion();});
preference.addEventListener('change',configureMotion);
configureMotion();

/* ==========================================
   SANTOTO NOTICIAS — main.js
   Lógica del sitio web
   ========================================== */

// ── UTILIDADES ──────────────────────────────
function fmt(str) {
  if (!str) return '';
  try {
    const [y,m,d] = str.split('-');
    const M = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    return `${parseInt(d)} ${M[parseInt(m)-1]} ${y}`;
  } catch(e) { return str; }
}
function today() { return new Date().toISOString().split('T')[0]; }
function newId(arr) { return arr.length ? Math.max(...arr.map(x=>x.id))+1 : 1; }
function trunc(str, n) { return str && str.length > n ? str.slice(0,n)+'…' : (str||''); }
function qs(sel) { return document.querySelector(sel); }
function on(id, ev, fn) { const el = document.getElementById(id); if(el) el.addEventListener(ev, fn); }

// TOAST
function toast(msg, tipo='') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg; el.className = 'toast-web show ' + tipo;
  setTimeout(()=>{ el.className='toast-web'; }, 2800);
}

// NAV scrolled
window.addEventListener('scroll', ()=>{
  const nav = document.getElementById('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,.08)' : '';
});

function toggleMenu() {
  const links = document.getElementById('nav-links');
  if (links) links.classList.toggle('open');
}

// FOTO con fallback
function fotoTag(src, cls, fallbackEmoji, style='') {
  if (!src) return `<div class="${cls.replace('foto','placeholder').replace('-foto','-placeholder')}" style="${style}">${fallbackEmoji||'👤'}</div>`;
  return `<img src="${src}" class="${cls}" style="${style}"
    onerror="this.style.display='none';this.nextElementSibling && (this.nextElementSibling.style.display='flex')" alt="foto" loading="lazy"/>
    <div class="${cls.replace('foto','placeholder').replace('-foto','-placeholder')}" style="display:none;${style}">${fallbackEmoji||'👤'}</div>`;
}

const ROL_COLOR = { personero:'#B8902A', contralor:'#1A4FA0', candidato:'#7B2FAE' };

// ── PÁGINA: INDEX ─────────────────────────────
if (document.getElementById('noticias-grid')) {
  // Noticias secundarias (sin la primera)
  const grid = document.getElementById('noticias-grid');
  if (grid) {
    const nots = DATA.noticias.slice(1, 5);
    grid.innerHTML = nots.map(n => `
      <div class="noticia-card fade-in" onclick="abrirModal(${n.id})">
        <div class="nc-img" style="${!n.imagen ? `background:${n.color}20` : ''}">
          ${n.imagen
            ? `<img src="${n.imagen}" alt="${n.titulo}" loading="lazy">`
            : `<span>${n.icon}</span>`}
        </div>
        <div class="nc-body">
          <div class="nc-cat">${n.categoria}</div>
          <div class="nc-title">${n.titulo}</div>
          <div class="nc-date">${fmt(n.fecha)}</div>
        </div>
      </div>
    `).join('');
  }

  // Deportes en home
const depList = document.getElementById('deportes-list');

if (depList) {
  depList.innerHTML = DATA.deportes.slice(0,3).map(d => `
    <div class="deporte-card ${d.tipo} fade-in">
      ${d.imagen
        ? `<div class="dc-img-wrap"><img src="${d.imagen}" alt="${d.titulo}" class="dc-img-foto" loading="lazy"></div>`
        : `<div class="dc-icon">${d.icon}</div>`}
      <div class="dc-body">
        <div class="dc-titulo">${d.titulo}</div>
        <div class="dc-desc">${d.descripcion}</div>
        <div class="dc-meta">
          <span class="dc-disc">${d.disciplina}</span>
          <span class="dc-fecha">${fmt(d.fecha)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

  // Widget gobierno
  const gw = document.getElementById('gov-widget');
  if (gw) {
    gw.innerHTML = DATA.gobierno.slice(0,4).map(p => `
      <div class="gov-widget-item">
        ${p.foto
          ? `<img src="${p.foto}" class="gwi-foto" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" alt="${p.nombre}" loading="lazy"/>
             <div class="gwi-placeholder" style="display:none">${p.icon||'👤'}</div>`
          : `<div class="gwi-placeholder">${p.icon||'👤'}</div>`}
        <div><div class="gwi-nombre">${p.nombre}</div><div class="gwi-rol">${p.rol}</div></div>
      </div>
    `).join('');
  }
 }
 // ── PÁGINA: NOTICIAS ──────────────────────────
if (document.getElementById('noticias-full-grid') && !document.getElementById('noticias-grid')) {
  let filtroActivo = '';

  window.filtrarNoticias = function(cat, btn) {
    filtroActivo = cat;
    document.querySelectorAll('#filter-bar .filter-btn').forEach(b=>b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderNoticias();
  };

  function renderNoticias() {
    const lista = filtroActivo ? DATA.noticias.filter(n=>n.categoria===filtroActivo) : DATA.noticias;
    const grid = document.getElementById('noticias-full-grid');
    grid.innerHTML = lista.map(n => `
      <div class="noticia-card fade-in" onclick="abrirModal(${n.id})">
        <div class="nc-img" style="${!n.imagen ? `background:${n.color}20` : ''}">
          ${n.imagen
            ? `<img src="${n.imagen}" alt="${n.titulo}" loading="lazy">`
            : `<span>${n.icon}</span>`}
        </div>
        <div class="nc-body">
          <div class="nc-cat">${n.categoria}${n.destacada?' · ⭐':''}</div>
          <div class="nc-title">${n.titulo}</div>
          <div style="font-size:12.5px;color:var(--texto-2);margin-top:6px;line-height:1.5">${trunc(n.resumen,90)}</div>
          <div class="nc-date">✍️ ${n.autor||'Redacción'} · ${fmt(n.fecha)}</div>
        </div>
      </div>
    `).join('') || '<p style="color:#9CA3AF;padding:20px 0;grid-column:1/-1">Sin noticias en esta categoría.</p>';
  }

  window.abrirModal = function(id) {
    const n = DATA.noticias.find(x=>x.id===id); if(!n)return;
    const parrafos = (n.cuerpo||n.resumen).split('\n').filter(Boolean).map(p=>`<p>${p}</p>`).join('');
    document.getElementById('modal-content').innerHTML = `
      <div class="modal-cat">${n.categoria}</div>
      <div class="modal-title">${n.titulo}</div>
      <div class="modal-meta"><span>✍️ ${n.autor||'Redacción Santoto'}</span><span>📅 ${fmt(n.fecha)}</span>${n.destacada?'<span>⭐ Destacada</span>':''}</div>
      <div class="modal-body">${parrafos}</div>
    `;
    document.getElementById('modal-overlay').classList.add('open');
  };
  window.cerrarModal = function() { document.getElementById('modal-overlay').classList.remove('open'); };

  renderNoticias();
}

// ── PÁGINA: GOBIERNO ─────────────────────────
if (document.getElementById('personero-section')) {
  let govFiltro = 'todos';

  window.filtrarGob = function(filtro, btn) {
    govFiltro = filtro;
    document.querySelectorAll('.gtab').forEach(b=>b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    buildGobierno();
  };

  function buildGobierno() {
    const personas = govFiltro==='todos' ? DATA.gobierno : DATA.gobierno.filter(p=>p.tipo===govFiltro);
    const personero = personas.find(p=>p.tipo==='personero');
    const resto     = personas.filter(p=>p.tipo!=='personero');

    // Personero hero
    const psec = document.getElementById('personero-section');
    if (personero && (govFiltro==='todos'||govFiltro==='personero')) {
      const c = ROL_COLOR[personero.tipo]||'#1A4FA0';
      psec.innerHTML = `
        <div class="personero-hero fade-in">
          ${personero.foto
            ? `<img src="${personero.foto}" class="ph-foto" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" alt="${personero.nombre}" loading="lazy"/>
               <div class="ph-placeholder" style="display:none"><span>👤</span><span>Sin imagen</span></div>`
            : `<div class="ph-placeholder"><span>👤</span><span>imagenes/personero.jpg</span></div>`}
          <div class="ph-body">
            <div class="ph-rol" style="color:${c}">
              <span>${personero.icon}</span> ${personero.rol}
            </div>
            <div class="ph-nombre">${personero.nombre}</div>
            ${personero.curso ? `<div class="ph-curso">📚 Grado ${personero.curso}</div>` : ''}
            <div class="ph-desc">${personero.descripcion||''}</div>
            ${personero.seccion ? `<div class="ph-seccion">📰 ${personero.seccion}</div>` : ''}
          </div>
        </div>
      `;
    } else {
      psec.innerHTML = '';
    }

    // Grid resto
    const pgrid = document.getElementById('personas-grid');
    if (resto.length > 0) {
      if (govFiltro==='todos') {
        pgrid.innerHTML = `<div style="grid-column:1/-1;margin-bottom:8px" class="section-label">Otros miembros</div>` +
          resto.map(p=>personaCard(p)).join('');
      } else {
        pgrid.innerHTML = resto.map(p=>personaCard(p)).join('');
      }
    } else if (!personero) {
      pgrid.innerHTML = '<p style="color:#9CA3AF;padding:20px 0">Sin registros en esta categoría.</p>';
    } else {
      pgrid.innerHTML = '';
    }
  }

  function personaCard(p) {
    const c = ROL_COLOR[p.tipo]||'#1A4FA0';
    return `
      <div class="persona-web-card fade-in">
${p.foto
  ? `<img src="${p.foto}" class="gwi-foto"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      alt="${p.nombre}" loading="lazy"/>
     <div class="gwi-placeholder" style="display:none">${p.icon||'👤'}</div>`
  : `<div class="gwi-placeholder">${p.icon||'👤'}</div>`
}
        <div class="pwc-strip" style="background:${c}"></div>
        <div class="pwc-body">
          <div class="pwc-rol" style="color:${c}">${p.rol}</div>
          <div class="pwc-nombre">${p.nombre}</div>
          ${p.curso ? `<div class="pwc-curso">Grado ${p.curso}${p.seccion?' · '+p.seccion:''}</div>` : ''}
        </div>
      </div>
    `;
  }

  buildGobierno();
}

// ── PÁGINA: GOBIERNO ─────────────────────────
if (document.getElementById('personero-section')) {
  let govFiltro = 'todos';

  window.filtrarGob = function(filtro, btn) {
    govFiltro = filtro;
    document.querySelectorAll('.gtab').forEach(b=>b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    buildGobierno();
  };

  function buildGobierno() {
    const personas = govFiltro==='todos' ? DATA.gobierno : DATA.gobierno.filter(p=>p.tipo===govFiltro);
    const personero = personas.find(p=>p.tipo==='personero');
    const resto     = personas.filter(p=>p.tipo!=='personero');

    // Personero hero
    const psec = document.getElementById('personero-section');
    if (personero && (govFiltro==='todos'||govFiltro==='personero')) {
      const c = ROL_COLOR[personero.tipo]||'#1A4FA0';
      psec.innerHTML = `
        <div class="personero-hero fade-in">
          ${personero.foto
            ? `<img src="${personero.foto}" class="ph-foto" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" alt="${personero.nombre}" loading="lazy"/>
               <div class="ph-placeholder" style="display:none"><span>👤</span><span>Sin imagen</span></div>`
            : `<div class="ph-placeholder"><span>👤</span><span>imagenes/personero.jpg</span></div>`}
          <div class="ph-body">
            <div class="ph-rol" style="color:${c}">
              <span>${personero.icon}</span> ${personero.rol}
            </div>
            <div class="ph-nombre">${personero.nombre}</div>
            ${personero.curso ? `<div class="ph-curso">📚 Grado ${personero.curso}</div>` : ''}
            <div class="ph-desc">${personero.descripcion||''}</div>
            ${personero.seccion ? `<div class="ph-seccion">📰 ${personero.seccion}</div>` : ''}
          </div>
        </div>
      `;
    } else {
      psec.innerHTML = '';
    }

    // Grid resto
    const pgrid = document.getElementById('personas-grid');
    if (resto.length > 0) {
      if (govFiltro==='todos') {
        pgrid.innerHTML = `<div style="grid-column:1/-1;margin-bottom:8px" class="section-label">Otros miembros</div>` +
          resto.map(p=>personaCard(p)).join('');
      } else {
        pgrid.innerHTML = resto.map(p=>personaCard(p)).join('');
      }
    } else if (!personero) {
      pgrid.innerHTML = '<p style="color:#9CA3AF;padding:20px 0">Sin registros en esta categoría.</p>';
    } else {
      pgrid.innerHTML = '';
    }
  }

  function personaCard(p) {
    const c = ROL_COLOR[p.tipo]||'#1A4FA0';
    return `
      <div class="persona-web-card fade-in">
        ${p.foto
          ? `<img src="${p.foto}" class="pwc-foto" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" alt="${p.nombre}" loading="lazy"/>
             <div class="pwc-placeholder" style="display:none">${p.icon||'👤'}</div>`
          : `<div class="pwc-placeholder">${p.icon||'👤'}</div>`}
        <div class="pwc-strip" style="background:${c}"></div>
        <div class="pwc-body">
          <div class="pwc-rol" style="color:${c}">${p.rol}</div>
          <div class="pwc-nombre">${p.nombre}</div>
          ${p.curso ? `<div class="pwc-curso">Grado ${p.curso}${p.seccion?' · '+p.seccion:''}</div>` : ''}
        </div>
      </div>
    `;
  }

  buildGobierno();
}

// ── PÁGINA: DEPORTES ─────────────────────────
if (document.getElementById('deportes-full')) {

  // Inyectar modal de detalle si no existe
  if (!document.getElementById('dep-modal-overlay')) {
    const m = document.createElement('div');
    m.innerHTML = `
      <div class="modal-overlay" id="dep-modal-overlay" onclick="cerrarDepModal()">
        <div class="modal" id="dep-modal" onclick="event.stopPropagation()" style="max-width:680px">
          <button class="modal-close" onclick="cerrarDepModal()">✕</button>
          <div id="dep-modal-content"></div>
        </div>
      </div>`;
    document.body.appendChild(m.firstElementChild);
  }

  const tipoLabel = { logro:'🏆 Logro', evento:'⚽ En curso', proximo:'📅 Próximo' };
  const tipoBg    = { logro:'#FEF3C7', evento:'#EEF4FF', proximo:'#F3F4F6' };
  const tipoColor = { logro:'#92400E', evento:'#1A4FA0', proximo:'#6B7280' };

  window.filtrarDeportes = function(tipo, btn) {
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const lista = tipo ? DATA.deportes.filter(d=>d.tipo===tipo) : DATA.deportes;

    document.getElementById('deportes-full').innerHTML = lista.map(d => `
      <div class="deporte-card ${d.tipo} fade-in" onclick="abrirDepModal(${d.id})" style="cursor:pointer">
        ${d.imagen
          ? `<div class="dc-img-wrap"><img src="${d.imagen}" alt="${d.titulo}" class="dc-img-foto"></div>`
          : `<div class="dc-icon">${d.icon}</div>`}
        <div class="dc-body">
          <div class="dc-titulo">${d.titulo}</div>
          <div class="dc-desc">${trunc(d.descripcion, 100)}</div>
          <div class="dc-meta">
            <span class="dc-disc">${d.disciplina}</span>
            <span class="dc-fecha">${fmt(d.fecha)}</span>
            <span class="dc-disc" style="background:${tipoBg[d.tipo]||'#F3F4F6'};color:${tipoColor[d.tipo]||'#6B7280'};border-color:transparent">
              ${tipoLabel[d.tipo]||d.tipo}
            </span>
          </div>
        </div>
        <div class="dc-arrow">›</div>
      </div>
    `).join('') || '<p style="color:#9CA3AF;padding:20px 0">Sin registros en esta categoría.</p>';
  };

  window.abrirDepModal = function(id) {
    const d = DATA.deportes.find(x=>x.id===id); if(!d) return;
    const parrafos = d.cuerpo
      ? d.cuerpo.split('\n').filter(Boolean).map(p=>`<p>${p}</p>`).join('')
      : `<p>${d.descripcion}</p>`;

    document.getElementById('dep-modal-content').innerHTML = `
      ${d.imagen ? `
        <div style="width:100%;height:220px;border-radius:var(--r-md);overflow:hidden;margin-bottom:20px">
          <img src="${d.imagen}" alt="${d.titulo}"
            style="width:100%;height:100%;object-fit:cover;object-position:center">
        </div>` : `
        <div style="text-align:center;font-size:60px;margin-bottom:16px;line-height:1">${d.icon}</div>`
      }
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:wrap">
        <span style="font-size:11px;font-weight:700;background:${tipoBg[d.tipo]||'#F3F4F6'};
          color:${tipoColor[d.tipo]||'#6B7280'};padding:3px 10px;border-radius:20px">
          ${tipoLabel[d.tipo]||d.tipo}
        </span>
        <span style="font-size:11px;font-weight:600;background:var(--azul-claro);
          color:var(--azul);border:1px solid var(--azul-borde);
          padding:3px 10px;border-radius:20px">${d.disciplina}</span>
        <span style="font-size:11px;color:var(--texto-3)">📅 ${fmt(d.fecha)}</span>
      </div>
      <div class="modal-title" style="font-size:24px;margin-bottom:14px">${d.titulo}</div>
      <div class="modal-body">${parrafos}</div>
    `;
    document.getElementById('dep-modal-overlay').classList.add('open');
  };

  window.cerrarDepModal = function() {
    document.getElementById('dep-modal-overlay').classList.remove('open');
  };

  window.filtrarDeportes('', null);
}

// ── PÁGINA: CALENDARIO ───────────────────────
if (document.getElementById('cal-days')) {
  let calMes = new Date().getMonth();
  let calAnio = new Date().getFullYear();
  let diaSeleccionado = null;
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  window.calCambiarMes = function(delta) {
    calMes += delta; diaSeleccionado = null;
    if (calMes < 0)  { calMes = 11; calAnio--; }
    if (calMes > 11) { calMes = 0;  calAnio++; }
    buildCal();
  };

  function buildCal() {
    const hoy = new Date();
    const primerDia = new Date(calAnio, calMes, 1).getDay();
    const totalDias = new Date(calAnio, calMes+1, 0).getDate();
    const delMes = DATA.eventos.filter(e=>{ const d=new Date(e.fecha); return d.getFullYear()===calAnio&&d.getMonth()===calMes; });
    const diasConEv = new Set(delMes.map(e=>parseInt(e.fecha.split('-')[2])));

    document.getElementById('cal-mes-titulo').textContent = `${meses[calMes]} ${calAnio}`;

    let html = '';
    for (let i=0;i<primerDia;i++) html += '<div class="cal-day-web empty"></div>';
    for (let d=1;d<=totalDias;d++) {
      const esHoy = d===hoy.getDate()&&calMes===hoy.getMonth()&&calAnio===hoy.getFullYear();
      const tEv = diasConEv.has(d);
      const sel = d===diaSeleccionado;
      let cls='cal-day-web';
      if(esHoy)cls+=' today'; if(tEv)cls+=' has-event'; if(sel)cls+=' selected';
      html += `<div class="${cls}" onclick="selDia(${d})">${d}</div>`;
    }
    document.getElementById('cal-days').innerHTML = html;
    renderEventosCal();
  }

  window.selDia = function(d) {
    diaSeleccionado = diaSeleccionado===d ? null : d;
    buildCal();
  };

  function renderEventosCal() {
    const mostrar = diaSeleccionado
      ? DATA.eventos.filter(e=>{ const d=new Date(e.fecha); return d.getFullYear()===calAnio&&d.getMonth()===calMes&&parseInt(e.fecha.split('-')[2])===diaSeleccionado; })
      : DATA.eventos.filter(e=>{ const d=new Date(e.fecha); return d.getFullYear()===calAnio&&d.getMonth()===calMes; }).sort((a,b)=>new Date(a.fecha)-new Date(b.fecha));

    document.getElementById('cal-panel-title').textContent = diaSeleccionado
      ? `Eventos del ${diaSeleccionado} de ${meses[calMes]}`
      : `Todos los eventos de ${meses[calMes]}`;

    document.getElementById('cal-eventos-lista').innerHTML = mostrar.map(e=>`
      <div class="cal-evento-web">
        <div class="cev-dot" style="background:${e.color}"></div>
        <div>
          <div class="cev-titulo">${e.titulo}</div>
          <div class="cev-desc">${e.desc}</div>
          <div class="cev-fecha">${fmt(e.fecha)} · <span style="color:${e.color}">${e.categoria}</span></div>
        </div>
      </div>
    `).join('') || `<p style="font-size:13px;color:#9CA3AF;padding:14px 0">${diaSeleccionado?'Sin eventos este día':'Sin eventos este mes'}</p>`;
  }

  buildCal();
}

// ── PÁGINA: SUGERENCIAS ──────────────────────
if (document.getElementById('sug-lista')) {

  // ── FORMSPREE: reemplaza YOUR_FORM_ID con el tuyo
  // Pasos: ve a formspree.io → New Form → copia el ID que aparece
  // Ejemplo: si tu URL es https://formspree.io/f/xpwzabcd → pon 'xpwzabcd'
  const FORMSPREE_ID = 'xojzkwaz';

  function renderSugerencias() {
    document.getElementById('sug-lista').innerHTML = DATA.sugerencias.slice().reverse().map(s=>`
      <div class="sug-card fade-in">
        <div class="sug-meta">
          <span class="sug-cat">${s.categoria}</span>
          <span class="sug-fecha">Curso ${s.curso} · ${fmt(s.fecha)}</span>
        </div>
        <div class="sug-texto">${s.texto}</div>
        <span class="sug-estado ${s.respondida?'respondida':'pendiente'}">
          ${s.respondida?'✓ Respondida':'⏳ Pendiente'}
        </span>
        ${s.respondida && s.respuesta ? `
          <div class="sug-resp">
            <div class="sug-resp-label">💬 Respuesta del equipo editorial</div>
            <div class="sug-resp-texto">${s.respuesta}</div>
          </div>` : ''}
      </div>
    `).join('') || '<p style="color:#9CA3AF;padding:20px 0">Aún no hay sugerencias.</p>';
  }

  window.enviarSugerencia = async function() {
    const texto = (document.getElementById('sug-texto').value||'').trim();
    const cat   = document.getElementById('sug-cat').value;
    const curso = (document.getElementById('sug-curso').value||'Anónimo').trim();
    if (!texto) { mostrarToast('Escribe tu sugerencia primero', 'err'); return; }

    const btn = document.querySelector('[onclick="enviarSugerencia()"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }

    // 1. Guardar en localStorage para que se vea en la lista local
    DATA.sugerencias.push({
      id: newId(DATA.sugerencias),
      texto, categoria: cat, curso,
      autor: 'Estudiante anónimo',
      fecha: today(),
      respuesta: '', respondida: false,
    });
    saveData(DATA);

    // 2. Enviar a Formspree si hay ID configurado (llega al email del admin)
    if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID') {
      try {
        await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            sugerencia: texto,
            categoria:  cat,
            curso:      curso,
            fecha:      today(),
          }),
        });
      } catch(e) {
        console.warn('Formspree no disponible, guardado solo local:', e);
      }
    }

    document.getElementById('sug-texto').value = '';
    document.getElementById('sug-curso').value = '';
    if (btn) { btn.disabled = false; btn.textContent = 'Enviar sugerencia →'; }

    mostrarToast('¡Sugerencia enviada! Gracias por participar 🎉', 'ok');
    renderSugerencias();
  };

  // Toast local para sugerencias (la página no tiene el global)
  function mostrarToast(msg, tipo) {
    let t = document.getElementById('sug-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'sug-toast';
      t.style.cssText = `position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
        padding:12px 22px;border-radius:30px;font-size:13px;font-weight:600;
        z-index:999;transition:opacity .3s;white-space:nowrap;
        box-shadow:0 4px 20px rgba(0,0,0,.15)`;
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.background = tipo === 'ok' ? '#1A7A4A' : '#C0392B';
    t.style.color = '#fff';
    t.style.opacity = '1';
    setTimeout(() => { t.style.opacity = '0'; }, 3000);
  }

  renderSugerencias();
}
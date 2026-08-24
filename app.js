/* ============================================
   SANTOTO NOTICIAS — app.js v1.0
   Colegio Santo Tomás de Aquino · Duitama
   ============================================ */

// ═══════════════════════════════════════════════
//  DATOS INICIALES
// ═══════════════════════════════════════════════

const ADMIN_PASSWORD = 'santoto2025';

const DEFAULT_DATA = {

      noticias: [
    {
      id: 1,
      titulo: 'Inversión de $4.500 millones en infraestructura del colegio',
      resumen: 'La administración municipal ha invertido más de $4.500 millones de pesos en la ampliación y mejora de las instalaciones del Colegio Santo Tomás de Aquino.',
      cuerpo: 'La administración municipal de Duitama ha realizado una inversión histórica de más de $4.500 millones de pesos en la ampliación y modernización de las instalaciones del Colegio Santo Tomás de Aquino.\n\nEntre las mejoras se incluyen la construcción de nuevas aulas, la adecuación de laboratorios de tecnología, la mejora de los espacios deportivos y la renovación de la biblioteca institucional.\n\nEsta inversión responde al compromiso de la alcaldía con la educación de calidad en el municipio y posiciona a la institución como una de las mejor dotadas del departamento de Boyacá.',
      categoria: 'Infraestructura',
      imagen: 'IMG/colegio.jpeg',
      color: '#1A4FA0',
      autor: 'Redacción Santoto',
      fecha: '2025-03-15',
      destacada: false,
    },
    {
      id: 2,
      titulo: 'Ranking Milton Ochoa: entre los mejores colegios públicos de Duitama',
      resumen: 'El colegio se mantiene en el ranking de los mejores colegios públicos de Duitama según la medición de Milton Ochoa 2024-2025.',
      cuerpo: 'El Colegio Santo Tomás de Aquino sigue consolidándose como una de las instituciones educativas públicas más destacadas de Duitama en la medición de Milton Ochoa para el período 2024-2025.\n\nEsta distinción refleja el esfuerzo conjunto de docentes, estudiantes y directivos por mantener altos estándares académicos, con especial énfasis en áreas como matemáticas, ciencias y lectura crítica.\n\nEl rector expresó su orgullo por este logro: "Este resultado es el fruto del trabajo diario de toda nuestra comunidad educativa. Seguiremos apostando por la excelencia."',
      categoria: 'Académico',
      imagen: 'esc.png',
      icon: '🎓',
      color: '#0F6E56',
      autor: 'Área Académica',
      fecha: '2025-03-10',
      destacada: true,
    },
    {
      id: 3,
      titulo: 'Santoto brilla en el Festival Estrella de Oro',
      resumen: 'Estudiantes del colegio lograron una destacada participación en el Festival Intercolegiado de la Canción "Estrella de Oro".',
      cuerpo: 'El grupo de música y canto del Colegio Santo Tomás de Aquino obtuvo un reconocimiento especial en el Festival Intercolegiado de la Canción "Estrella de Oro", uno de los eventos culturales más importantes de la región.\n\nLos estudiantes participantes demostraron un nivel artístico sobresaliente, representando con orgullo los valores y el talento de la institución.\n\nLa docente de música destacó: "Nuestros chicos se prepararon durante meses con mucha disciplina. Este resultado es un reflejo de su entrega y pasión por el arte."',
      categoria: 'Cultura',
      imagen:'IMG/cantantee.jpeg',
      icon: '🎤',
      color: '#7B2FAE',
      autor: 'Área de Arte y Cultura',
      fecha: '2025-02-28',
      destacada: false,
    },
    {
      id: 4,
      titulo: 'Semilleros de investigación en Tecnología 4.0',
      resumen: 'La institución promueve la formación integral con semilleros de investigación enfocados en tecnología 4.0, inteligencia artificial y programación.',
      cuerpo: 'Como parte de su enfoque en la formación integral, el Colegio Santo Tomás de Aquino ha fortalecido sus semilleros de investigación en el área de Tecnología 4.0.\n\nEstudiantes de los grados 9°, 10° y 11° participan activamente en proyectos de robótica, inteligencia artificial aplicada, programación y análisis de datos.\n\nEstos semilleros han permitido que varios estudiantes representen al colegio en ferias de ciencia a nivel departamental, obteniendo menciones de honor por la calidad de sus propuestas.',
      categoria: 'Tecnología',
      icon: '🤖}',
      color: '#1A4FA0',
      autor: 'Área de Tecnología',
      fecha: '2025-02-20',
      destacada: false,
    },
    {
      id: 5,
      titulo: 'Formación en valores: pilar de la identidad santotomista',
      resumen: 'La institución se destaca por ser una entidad sólida que prioriza la formación de valores, la convivencia y la excelencia académica.',
      cuerpo: 'El Colegio Santo Tomás de Aquino ha sido reconocido en múltiples ocasiones por su énfasis en la formación en valores como pilar fundamental de su proyecto educativo institucional.\n\nA través de espacios de reflexión, jornadas de convivencia y proyectos de responsabilidad social, la institución prepara a sus estudiantes no solo académicamente sino como ciudadanos íntegros.\n\nEste enfoque se refleja en el bajo índice de conflictos escolares y en el compromiso demostrado por los egresados en sus entornos universitarios y laborales.',
      categoria: 'Institucional',
      imagen: 'IMG/rector.jpg',
      icon: '🏫',
      color: '#C9A84C',
      autor: 'Dirección Institucional',
      fecha: '2025-02-10',
      destacada: false,
    },
  ],

 sugerencias: [
    {
      id: 1,
      texto: 'Sería genial tener más espacios de arte y pintura en el colegio. A muchos estudiantes nos gustaría aprender técnicas nuevas.',
      autor: 'Estudiante anónimo',
      curso: '901',
      fecha: '2025-03-10',
      categoria: 'Arte',
      respuesta: 'Gracias por tu sugerencia. Estamos evaluando ampliar el club de artes para el segundo semestre. ¡Sigue pendiente de las novedades!',
      respondida: true,
    },
    {
      id: 2,
      texto: 'Los baños del bloque B necesitan mantenimiento urgente. Las llaves están dañadas desde hace semanas.',
      autor: 'Estudiante anónimo',
      curso: '1001',
      fecha: '2025-03-12',
      categoria: 'Infraestructura',
      respuesta: '',
      respondida: false,
    },
    {
      id: 3,
      texto: 'Propongo que haya más actividades de integración entre cursos, como torneos recreativos o actividades culturales conjuntas.',
      autor: 'Estudiante anónimo',
      curso: '802',
      fecha: '2025-03-08',
      categoria: 'Convivencia',
      respuesta: 'Excelente propuesta. Ya estamos planeando una jornada de integración para el mes de abril. ¡Gracias!',
      respondida: true,
    },
  ],




  
};

// ═══════════════════════════════════════════════
//  ESTADO GLOBAL
// ═══════════════════════════════════════════════
let DATA     = loadData();
let navStack = [];
let adminLoggedIn = false;
let calMes   = new Date().getMonth();
let calAnio  = new Date().getFullYear();
let calDiaSeleccionado = null;

// ═══════════════════════════════════════════════
//  PERSISTENCIA
// ═══════════════════════════════════════════════
function loadData() {
  try {
    const s = localStorage.getItem('sn_data_v1');
    return s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch(e) { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}
function saveData() { localStorage.setItem('sn_data_v1', JSON.stringify(DATA)); }

// ═══════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════
function toast(msg, tipo = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show ' + tipo;
  setTimeout(() => { el.className = 'toast'; }, 2800);
}

// ═══════════════════════════════════════════════
//  NAVEGACIÓN
// ═══════════════════════════════════════════════
function setHeader(titulo, conBack = false) {
  document.getElementById('hdr-title').textContent = titulo;
  const b = document.getElementById('hdr-back');
  b.className = 'hdr-back' + (conBack ? ' visible' : '');
}

function setActiveNav(id) {
  ['bn-home','bn-noticias','bn-calendario','bn-horas','bn-sugerencias'].forEach(x => {
    const el = document.getElementById(x);
    if (el) el.classList.remove('active');
  });
  if (id && document.getElementById(id)) document.getElementById(id).classList.add('active');
}

function setActiveSb(id) {
  ['sbi-home','sbi-noticias','sbi-deportes','sbi-horas','sbi-calendario','sbi-sugerencias','sbi-admin'].forEach(x => {
    const el = document.getElementById(x);
    if (el) el.classList.remove('active');
  });
  if (id && document.getElementById(id)) document.getElementById(id).classList.add('active');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}
function goBack() {
  if (navStack.length > 1) { navStack.pop(); navStack[navStack.length-1](); }
}
function pushNav(fn) { navStack.push(fn); }

function render(html) {
  const scr = document.getElementById('screen');
  scr.innerHTML = html;
  scr.scrollTop = 0;
  scr.classList.remove('anim-in');
  void scr.offsetWidth;
  scr.classList.add('anim-in');
}

// ═══════════════════════════════════════════════
//  UTILIDADES
// ═══════════════════════════════════════════════
function formatFecha(str) {
  if (!str) return '';
  try {
    const [y,m,d] = str.split('-');
    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    return `${parseInt(d)} ${meses[parseInt(m)-1]} ${y}`;
  } catch(e) { return str; }
}

function fechaHoy() {
  return new Date().toISOString().split('T')[0];
}

function truncar(str, max) {
  if (!str) return '';
  return str.length > max ? str.slice(0, max) + '…' : str;
}

function newId(arr) {
  return arr.length > 0 ? Math.max(...arr.map(x => x.id)) + 1 : 1;
}

const CATEGORIAS_COLORES = {
  'Académico':     '#0F6E56',
  'Infraestructura': '#1A4FA0',
  'Cultural':      '#7B2FAE',
  'Tecnología':    '#1A4FA0',
  'Institucional': '#C9A84C',
  'Cultura':       '#7B2FAE',
  'Deportivo':     '#1A4FA0',
  'Convivencia':   '#0F6E56',
  'Arte':          '#E91E96',
};

// ═══════════════════════════════════════════════
//  HOME
// ═══════════════════════════════════════════════
function renderHome() {
  closeSidebar();
  document.getElementById('bottom-nav').style.display = 'flex';
  setHeader('Santoto Noticias', false);
  setActiveNav('bn-home'); setActiveSb('sbi-home');
  navStack = [renderHome];

  const hoy = new Date();
  const proximos = DATA.eventos
    .filter(e => new Date(e.fecha) >= hoy)
    .sort((a,b) => new Date(a.fecha)-new Date(b.fecha))
    .slice(0,3);

  const destacadas = DATA.noticias.filter(n => n.destacada).slice(0,1);
  const recientes  = DATA.noticias.slice(0,4);
  const notificiaDestacadaHTML = destacadas.length
    ? destacadas.map(n => `
        <div class="noticia-featured" onclick="renderNoticiaDetalle(${n.id})">
          <div class="noticia-img" style="background:linear-gradient(135deg,${n.color}22,${n.color}44)">
            <span style="font-size:56px">${n.icon}</span>
            <div class="noticia-img-overlay"></div>
          </div>
          <div class="noticia-body">
            <div class="noticia-meta">
              <span class="badge badge-azul">${n.categoria}</span>
              <span class="noticia-fecha">${formatFecha(n.fecha)}</span>
            </div>
            <div class="noticia-titulo">${n.titulo}</div>
            <div class="noticia-resumen">${n.resumen}</div>
          </div>
        </div>
      `).join('')
    : '';

  const proximosHTML = proximos.map(e => `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--borde)">
      <div style="width:36px;height:36px;border-radius:8px;background:${e.color}22;border:1px solid ${e.color}44;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">
        ${e.categoria === 'Deportivo' ? '⚽' : e.categoria === 'Cultural' ? '🎭' : e.categoria === 'Académico' ? '📚' : '📌'}
      </div>
      <div style="flex:1;min-width:0">
        <div style="color:var(--text-1);font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.titulo}</div>
        <div style="color:var(--text-3);font-size:11px;font-family:var(--font-mono)">${formatFecha(e.fecha)} · ${e.categoria}</div>
      </div>
    </div>
  `).join('');

  render(`
    <div class="hero">
      <div class="hero-eyebrow">📰 Noticiero Estudiantil</div>
      <div class="hero-title">Colegio Santo Tomás<br>de Aquino</div>
      <div class="hero-sub">Mantente informado sobre todo lo que pasa en tu colegio. Noticias, eventos, logros y más.</div>
      <div class="hero-chips">
        <div class="hero-chip">🏙️ Duitama</div>
        <div class="hero-chip">📅 2025</div>
        <div class="hero-chip">🎓 Milton Ochoa Top</div>
      </div>
    </div>

    <div class="stats-strip">
      <div class="stat-box">
        <div class="stat-num">${DATA.noticias.length}</div>
        <div class="stat-lbl">Noticias</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${DATA.eventos.length}</div>
        <div class="stat-lbl">Eventos</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${DATA.sugerencias.filter(s=>s.respondida).length}</div>
        <div class="stat-lbl">Resp. buzón</div>
      </div>
    </div>

    ${notificiaDestacadaHTML ? '<div class="sec-title">Noticia destacada</div>' + notificiaDestacadaHTML : ''}

    <div class="sec-title">Noticias recientes</div>
    <div style="background:var(--bg-card);border:1px solid var(--borde);border-radius:var(--radius-md);margin:0 16px 14px;overflow:hidden">
      ${recientes.map(n => `
        <div class="noticia-item" onclick="renderNoticiaDetalle(${n.id})">
          <div class="ni-icon" style="background:${n.color}18;border-color:${n.color}33">${n.icon}</div>
          <div class="ni-body">
            <div class="ni-titulo">${n.titulo}</div>
            <div class="ni-meta">${n.categoria} · ${formatFecha(n.fecha)}</div>
          </div>
        </div>
      `).join('')}
    </div>

    ${proximos.length > 0 ? `
      <div class="sec-title">Próximos eventos</div>
      <div style="background:var(--bg-card);border:1px solid var(--borde);border-radius:var(--radius-md);margin:0 16px 14px;padding:0 14px">
        ${proximosHTML}
      </div>
    ` : ''}

    <div class="pb-safe"></div>
  `);
}

// ═══════════════════════════════════════════════
//  NOTICIAS
// ═══════════════════════════════════════════════
function renderNoticias(categoriaFiltro = '') {
  closeSidebar();
  setHeader('Noticias', false);
  setActiveNav('bn-noticias'); setActiveSb('sbi-noticias');
  navStack = [() => renderNoticias(categoriaFiltro)];

  const categorias = ['Todas', ...new Set(DATA.noticias.map(n => n.categoria))];
  const filtradas  = categoriaFiltro && categoriaFiltro !== 'Todas'
    ? DATA.noticias.filter(n => n.categoria === categoriaFiltro)
    : DATA.noticias;

  const categoriasHTML = categorias.map(c => `
    <button onclick="renderNoticias('${c}')"
      style="padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;
             cursor:pointer;border:1px solid;white-space:nowrap;font-family:var(--font-body);
             ${(categoriaFiltro||'Todas')===c
               ? 'background:var(--azul-medio);color:#fff;border-color:var(--azul-medio)'
               : 'background:transparent;color:var(--text-2);border-color:var(--borde)'}"
    >${c}</button>
  `).join('');

  const noticiasHTML = filtradas.length > 0
    ? filtradas.map(n => `
        <div class="noticia-featured" onclick="renderNoticiaDetalle(${n.id})">
          <div class="noticia-img" style="background:linear-gradient(135deg,${n.color}18,${n.color}35)">
            <span style="font-size:52px">${n.icon}</span>
            <div class="noticia-img-overlay"></div>
          </div>
          <div class="noticia-body">
            <div class="noticia-meta">
              <span class="badge badge-azul">${n.categoria}</span>
              <span class="noticia-fecha">${formatFecha(n.fecha)}</span>
              ${n.destacada ? '<span class="badge badge-dorado">⭐ Destacada</span>' : ''}
            </div>
            <div class="noticia-titulo">${n.titulo}</div>
            <div class="noticia-resumen">${n.resumen}</div>
          </div>
        </div>
      `).join('')
    : '<p style="color:var(--text-3);text-align:center;padding:30px;font-size:14px">No hay noticias en esta categoría</p>';

  render(`
    <div style="padding:14px 16px 6px">
      <div style="font-family:var(--font-titular);font-size:28px;color:var(--text-1);line-height:1">NOTICIAS</div>
      <div style="color:var(--text-3);font-size:12px;font-family:var(--font-mono);margin-top:4px">${DATA.noticias.length} publicaciones</div>
    </div>

    <div style="display:flex;gap:8px;padding:8px 16px 14px;overflow-x:auto;-webkit-overflow-scrolling:touch">
      ${categoriasHTML}
    </div>

    ${noticiasHTML}
    <div class="pb-safe"></div>
  `);
}

function renderNoticiaDetalle(id) {
  const n = DATA.noticias.find(x => x.id === id);
  if (!n) return;
  setHeader(n.categoria, true);
  pushNav(() => renderNoticiaDetalle(id));

  const parrafos = (n.cuerpo || n.resumen).split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('');

  render(`
    <div class="nd-hero" style="background:linear-gradient(135deg,${n.color}25,${n.color}45)">
      <span style="font-size:72px">${n.icon}</span>
    </div>
    <div class="noticia-detalle">
      <div class="nd-meta">
        <span class="badge badge-azul">${n.categoria}</span>
        <span class="badge badge-gris">📅 ${formatFecha(n.fecha)}</span>
        ${n.destacada ? '<span class="badge badge-dorado">⭐ Destacada</span>' : ''}
      </div>
      <div class="nd-titulo">${n.titulo}</div>
      <div class="nd-autor">
        <div class="nd-autor-avatar">✍️</div>
        <div>
          <strong>${n.autor || 'Redacción Santoto'}</strong>
          <div class="nd-autor-name">Colegio Santo Tomás de Aquino</div>
        </div>
      </div>
      <div class="nd-body">${parrafos}</div>
    </div>
  `);
}

// ═══════════════════════════════════════════════
//  INICIO
// ═══════════════════════════════════════════════
(function init() {
  renderHome();
})();

// ═══════════════════════════════════════════════
//  CALENDARIO
// ═══════════════════════════════════════════════
function renderCalendario() {
  closeSidebar();
  setHeader('Calendario', false);
  setActiveNav('bn-calendario'); setActiveSb('sbi-calendario');
  navStack = [renderCalendario];
  buildCalendario();
}

function buildCalendario() {
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const diasSem = ['D','L','M','M','J','V','S'];

  const hoy = new Date();
  const primerDia = new Date(calAnio, calMes, 1).getDay();
  const totalDias = new Date(calAnio, calMes + 1, 0).getDate();

  // Días con eventos en este mes
  const eventosDelMes = DATA.eventos.filter(e => {
    const d = new Date(e.fecha);
    return d.getFullYear() === calAnio && d.getMonth() === calMes;
  });
  const diasConEvento = new Set(eventosDelMes.map(e => parseInt(e.fecha.split('-')[2])));

  // Grid días
  let diasHTML = '';
  for (let i = 0; i < primerDia; i++) diasHTML += '<div class="cal-day empty"></div>';
  for (let d = 1; d <= totalDias; d++) {
    const esHoy      = d === hoy.getDate() && calMes === hoy.getMonth() && calAnio === hoy.getFullYear();
    const tieneEvento = diasConEvento.has(d);
    const esSel      = d === calDiaSeleccionado;
    let cls = 'cal-day';
    if (esHoy) cls += ' today';
    if (tieneEvento) cls += ' has-event';
    if (esSel) cls += ' selected';
    diasHTML += `<div class="${cls}" onclick="selDia(${d})">${d}</div>`;
  }

  // Eventos del día seleccionado o todos del mes
  const eventosMostrar = calDiaSeleccionado
    ? DATA.eventos.filter(e => {
        const d = new Date(e.fecha);
        return d.getFullYear() === calAnio && d.getMonth() === calMes && parseInt(e.fecha.split('-')[2]) === calDiaSeleccionado;
      })
    : eventosDelMes.sort((a,b) => new Date(a.fecha)-new Date(b.fecha));

  const eventosHTML = eventosMostrar.length > 0
    ? eventosMostrar.map(e => `
        <div class="cal-evento-item">
          <div class="cal-evento-dot" style="background:${e.color}"></div>
          <div>
            <div class="cal-evento-titulo">${e.titulo}</div>
            <div class="cal-evento-desc">${e.desc}</div>
            <div class="cal-evento-fecha">${formatFecha(e.fecha)} · <span style="color:${e.color}">${e.categoria}</span></div>
          </div>
        </div>
      `).join('')
    : `<p style="color:var(--text-3);font-size:13px;padding:16px 0">
         ${calDiaSeleccionado ? 'No hay eventos el día ' + calDiaSeleccionado : 'No hay eventos este mes'}
       </p>`;

  render(`
    <div class="cal-month-header">
      <button class="cal-nav-btn" onclick="calCambiarMes(-1)">‹</button>
      <div class="cal-month-title">${meses[calMes]} ${calAnio}</div>
      <button class="cal-nav-btn" onclick="calCambiarMes(1)">›</button>
    </div>

    <div class="cal-grid">
      <div class="cal-days-header">
        ${diasSem.map(d => `<div class="cal-day-label">${d}</div>`).join('')}
      </div>
      <div class="cal-days">${diasHTML}</div>
    </div>

    <div class="sep" style="margin:14px 16px 0"></div>

    <div class="sec-title" style="margin-top:10px">
      ${calDiaSeleccionado ? 'Eventos del día ' + calDiaSeleccionado : 'Todos los eventos del mes'}
    </div>
    <div class="cal-eventos">${eventosHTML}</div>

    <div class="pb-safe"></div>
  `);
}

function selDia(d) {
  calDiaSeleccionado = calDiaSeleccionado === d ? null : d;
  buildCalendario();
}

function calCambiarMes(delta) {
  calMes += delta;
  calDiaSeleccionado = null;
  if (calMes < 0)  { calMes = 11; calAnio--; }
  if (calMes > 11) { calMes = 0;  calAnio++; }
  buildCalendario();
}
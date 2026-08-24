/* ==========================================
   SANTOTO NOTICIAS — data.js
   Todos los datos del sitio. Edita aquí.
   ========================================== */

const ADMIN_PASSWORD = 'santoto2025';

const DEFAULT_DATA = {
  
  
  noticias: [
    {
      id: 1, destacada: true,   icon: '🏗️',     imagen: 'IMG/colegio.jpeg',  categoria: 'Infraestructura', color: '#1A4FA0',
      titulo: 'Inversión de $4.500 millones en infraestructura del colegio',
      resumen: 'La administración municipal ha invertido más de $4.500 millones de pesos en la ampliación y mejora de las instalaciones del Colegio Santo Tomás de Aquino.',
      cuerpo: 'La administración municipal de Duitama ha realizado una inversión histórica de más de $4.500 millones de pesos en la ampliación y modernización de las instalaciones del Colegio Santo Tomás de Aquino.\n\nEntre las mejoras se incluyen la construcción de nuevas aulas, la adecuación de laboratorios de tecnología, la mejora de los espacios deportivos y la renovación de la biblioteca institucional.\n\nEsta inversión responde al compromiso de la alcaldía con la educación de calidad en el municipio y posiciona a la institución como una de las mejor dotadas del departamento de Boyacá.',
      autor: 'Redacción Santoto', fecha: '2025-03-15',
    },
    {
      id: 2, destacada: true, icon: '🎓',  imagen: 'IMG/logoicfes.png',categoria: 'Académico', color: '#6e0f0f',
      titulo: 'Ranking Milton Ochoa(ICFES): entre los mejores colegios públicos de Duitama',
      resumen: 'El colegio se mantiene en el ranking de los mejores colegios públicos de Duitama según la medición de Milton Ochoa 2024-2025.',
      cuerpo: 'El Colegio Santo Tomás de Aquino sigue consolidándose como una de las instituciones educativas públicas más destacadas de Duitama en la medición de Milton Ochoa para el período 2024-2025.\n\nEsta distinción refleja el esfuerzo conjunto de docentes, estudiantes y directivos por mantener altos estándares académicos.\n\nEl rector expresó su orgullo: "Este resultado es el fruto del trabajo diario de toda nuestra comunidad educativa."\n\nEl colegio quedo de octavo a nivel de Duitama entre publicos y privados y consigio quedar de segundas en colegios publicos y quedo en el lugar 65 a nivel Boyaca.',
      autor: 'Área Académica', fecha: '2025-03-10',
    },
   {
      id: 3, destacada: false, icon: '🎤', imagen:'IMG/manchego.jpeg', categoria: 'Cultura', color: '#7B2FAE',
      titulo: 'Santoto brilla en el Festival Estrella de Oro',
      resumen: 'Estudiantes del colegio lograron una destacada participación en el Festival Intercolegiado de la Canción "Estrella de Oro".',
      cuerpo: 'El grupo de música y canto del Colegio Santo Tomás de Aquino obtuvo un reconocimiento especial en el Festival Intercolegiado de la Canción "Estrella de Oro".\n\nLos estudiantes demostraron un nivel artístico sobresaliente, representando con orgullo los valores y el talento de la institución.\n\nLa docente de música destacó la gran preparación y disciplina del grupo durante los meses previos al festival.',
      autor: 'Área de Arte y Cultura', fecha: '2026-02-28',
    },
        {
      id: 4, destacada: false, icon: '🤖', categoria: 'Tecnología', color: '#1A4FA0',
      titulo: 'Semilleros de investigación en Tecnología 4.0',
      resumen: 'La institución promueve semilleros de investigación en tecnología 4.0, inteligencia artificial y programación.',
      cuerpo: 'Como parte de su enfoque en la formación integral, el Colegio Santo Tomás de Aquino ha fortalecido sus semilleros de investigación en Tecnología 4.0.\n\nEstudiantes de grados 9°, 10° y 11° participan en proyectos de robótica, inteligencia artificial aplicada y programación.\n\nEstos semilleros han permitido representar al colegio en ferias de ciencia a nivel departamental, obteniendo menciones de honor.',
      autor: 'Área de Tecnología', fecha: '2025-02-20',
    },
        {
      id: 5, destacada: false, icon: '🏆', imagen: 'IMG/rector.jpg', categoria: 'Cultura', color: '#87a9db',
      titulo: 'Reconocimiento al Rector',
      resumen: 'Horacio Pedraza Becerra fue postulado al reconocimiento “Gigante en Educación con Sentido Humano” por su compromiso con la formación integral y el bienestar de más de 2,100 estudiantes.',
      cuerpo: 'Horacio Pedraza Becerra, rector del Instituto Técnico Santo Tomás de Aquino, es postulado a Gigante en Educación con Sentido Humano por su compromiso constante con la formación integral y el bienestar de cada estudiante.\n\nSu liderazgo cercano, su entrega diaria y su visión humana han convertido a la institución en un espacio donde aprender también significa crecer, soñar y construir un mejor futuro.🚀',
      autor: 'Área de Tecnología', fecha: '2025-11-26',
    },

  ],
  deportes: [
    { id:1, tipo:'logro',   icon:'🏆',  imagen: '', disciplina:'General',   titulo:'Destacada participación en eventos deportivos municipales', descripcion:'El colegio ha sobresalido en eventos deportivos a nivel municipal, consolidándose como institución de alto nivel competitivo.', fecha:'2026-03-01' },
    { id:2, tipo:'evento',  icon:'⚽', imagen: '',disciplina:'Fútbol',    titulo:'Torneo de Fútbol Interclases 2026 ',      descripcion:'El torneo interno de fútbol avanza con gran emoción. Los grados 10° y 11° protagonizan los encuentros más disputados.',          fecha:'2026-03-12' },
    { id:3, tipo:'logro',   icon:'🏊', imagen: 'IMG/samuel.png', disciplina:'Natacion', titulo:'Samuel Díaz, Talento Tomasino',         descripcion:'Samuel Díaz ganador de 6 medallas de oro en el torneo Guardianes de los Andes el pasado 18 y 19 de Abril. Se clasifica entre los mejores 8 del pais en su categoria. \n\nSamuel Diaz tambien fue ganador de una medalla de bronce en el Festival Nacional Interclubes de Natación,celebrado en la ciudad de Ibagué.',           fecha:'2026-04-19' },

  ],
 
  gobierno: [
    {
      id: 1, tipo: 'personero', rol: 'Personero Estudiantil',
      nombre: 'María Fernanda Poblador', curso: '1104',
      seccion: 'Periódico Digital',
      descripcion: 'Representante de todos los estudiantes del Colegio Santo Tomás de Aquino. Elegida democráticamente para defender los derechos estudiantiles y promover la participación activa de la comunidad escolar.',
      foto: 'IMG/Personera.jpeg',
      color: '#B8902A', icon: '⭐',
    },
        {
      id: 2, tipo: 'representantes', rol: 'Rep. Consejo Directivo',
      nombre: 'Ana Sofia Sanchez Ñiustes', curso: '1104',
      seccion: 'Periódico Digital',
      descripcion: 'Representante de todos los estudiantes del Colegio Santo Tomás de Aquino. Elegida democráticamente para defender los derechos estudiantiles y promover la participación activa de la comunidad escolar.',
      foto: 'IMG/Consejodirectivo.jpeg',
      color: '#B8902A', icon: '⭐',
    },
    {
      id: 3, tipo: 'contralor', rol: 'Contralor Estudiantil',
      nombre: 'Estefany Michelle García Martínez ', curso: '',
      seccion: 'Periódico Digital',
      descripcion: 'Responsable de velar por el uso adecuado de los recursos del colegio.',
      foto: 'IMG/Controlora.jpeg', color: '#1A4FA0', icon: '🔍',
    },
    {
      id: 4, tipo: 'contralor', rol: 'Vice-Contralor Estudiantil',
      nombre: 'María José Estepa Rojas', curso: '',
      seccion: 'Periódico Digital',
      descripcion: 'Apoyo en la contraloría estudiantil.',
      foto: 'IMG/vicecontralor.jpeg', color: '#1A4FA0', icon: '🔍',
    },
    {
      id: 5, tipo: 'representantes', rol: 'Representante de Transicion a Tercero',
      nombre: 'Dulce Mariana Salamanca Rojas', curso: '304',
      seccion: 'Representantes de 3°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/Tercero.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
    {
      id: 6, tipo: 'representantes', rol: 'Representante de Cuarto',
      nombre: 'Yoan Emmanuel Suarez Piragua', curso: '402',
      seccion: 'Representantes de 4°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/Cuarto.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
    {
      id: 7, tipo: 'representantes', rol: 'Representante de Quinto',
      nombre: 'Juan Sebastián Quintero Ramírez', curso: '503',
      seccion: 'Representantes de 5°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/Quinto.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
    {
      id: 8, tipo: 'representantes', rol: 'Representante de Sexto',
      nombre: 'Emily Giselle Olivos Jiménez', curso: '601',
      seccion: 'Representantes de 6°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/sexto.jpg', color: '#7B2FAE', icon: '🏛️',
    },
    {
      id: 9, tipo: 'representantes', rol: 'Representante de septimo',
      nombre: 'Álvaro Santiago Mise Monterrosa', curso: '703',
      seccion: 'Representantes de 7°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/septimo.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
    {
      id: 10, tipo: 'representantes', rol: 'Representante de octavo',
      nombre: 'Cristian Fernando Roa Mendivelso', curso: '802',
      seccion: 'Representantes de 8°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/octavo.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
    {
      id: 11, tipo: 'representantes', rol: 'Representante de noveno',
      nombre: 'Cristian David Pesca Ochoa ', curso: '905',
      seccion: 'Representantes de 9°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/noveno.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
        {
      id:12, tipo: 'representantes', rol: 'Representante de Decimo',
      nombre: 'Andrés Felipe Rodríguez Moreno', curso: '1008',
      seccion: 'Representantes de 10°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/decimo.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
    {
      id:13, tipo: 'representantes', rol: 'Representante de Once',
      nombre: 'Yina Alejandra Márquez Avellaneda', curso: '1102',
      seccion: 'Representantes de 11°',
      descripcion: 'Candidata a representante de grado 11° comprometida con mejorar los espacios de participación y convivencia estudiantil.',
      foto: 'IMG/once.jpeg', color: '#7B2FAE', icon: '🏛️',
    },
    
  ],
    eventos: [
    { id:1, titulo:'Entrega de Boletines 1er Periodo',           
    fecha:'2026-04-22',
    categoria:'Academico',   
    color:'#7B2FAE', 
    desc:'Este dia se informa a los padres de familia el desempeño academico de sus hijos.' },

    { id:2, titulo:'Día del Profesor',           
    fecha:'2026-05-15',
    categoria:'Cultural',   
    color:'#7B2FAE', 
    desc:'Celebracion a los profesores de la institucion, este dia varios estudiantes hacen muestras de arte para los profes como bailes, coplas y canto.' },

    { id:3, titulo:'Jen Day',
    fecha:'2026-05-22',
    categoria:'Cultural',
    color:'#0F6E56', 
    desc:'Este dia se celebra un Jean Day para la recoleccion de fondos para el English Day que se celebra el dia 5 de Junio.' },

    { id:4, titulo:'English Day',  
    fecha:'2026-06-05', 
    categoria:'Cultural',      
    color:'#B8902A', 
    desc:'Este dia se hace una jornada especial con izada de bandera y prueba de concocimientos en ingles.' },

    { id:5, titulo:'Dia del Estudiente y Salida a Vacaciones ',
      fecha:'2026-06-12', categoria:'Cultural', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

    { id:6, titulo:' Miercoles de Cenizas ',
      fecha:'2026-02-18', categoria:'Cultural', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },
      
      { id:7, titulo:'Inicio del Segundo Periodo ',
      fecha:'2026-04-06', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:8, titulo:'Entrega de Boletines Primer Periodo ',
      fecha:'2026-04-17', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:9, titulo:'Dia de la Tierra ',
      fecha:'2026-04-22', categoria:'Cultural', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:10, titulo:'Feria del Libro ',
      fecha:'2026-04-28', categoria:'Cultural', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:11, titulo:'Jornada de Matematicas ',
      fecha:'2026-05-27', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:12, titulo:'Regreso a Clases ',
      fecha:'2026-07-06', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:13, titulo:'Fin del Primer Periodo e Inicio de Semana de Recuperaciones',
      fecha:'2026-03-29', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:14, titulo:'Fin Del Segundo Periodo ',
      fecha:'2026-06-12', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:15, titulo:'Inicio del Tercer Periodo ',
      fecha:'2026-07-06', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:17, titulo:'Fin Del Tercer Periodo ',
      fecha:'2026-09-06', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:18, titulo:'Inicio Del Cuarto Periodo ',
      fecha:'2026-09-07', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

      { id:19, titulo:'Fin Del Cuarto Periodo ',
      fecha:'2026-11-29', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los directivos de la institucion desarrolan una actividad especial a los estudiantes de la institucion, y salida a vacaciones.' },

            { id:20, titulo:'Festival de Danzas ',
      fecha:'2026-7-24', categoria:'Cultural', 
      color:'#1A4FA0', 
      desc:'Este dia los estudiantes bailan el el recreacional del norte, preescolar y primaria en el auditorio de culturama' },

                  { id:21, titulo:'Inicio de Semana Bolivariana ',
      fecha:'2026-7-20', categoria:'Cultural', 
      color:'#1A4FA0', 
      desc:'Este dia inicio la semana bolivariana en donde el colegio tiene un eespaacio para mostrar las danzas de los diferentes cursos' },

                  { id:22, titulo:'ICFES ',
      fecha:'2026-7-26', categoria:'Academico', 
      color:'#1A4FA0', 
      desc:'Este dia los estudiantes de grado once hacen su prueba saber once' },

                        { id:23, titulo:'Salida Tecnica ',
      fecha:'2026-8-19', categoria:'Academico', 
      color:'#23a729', 
      desc:'Este dia los estudiantes de grado once con especialidades tecnicas hacen una salida al sena de Bogota' },
  ],

sugerencias: [],

};

function loadData() {
  try {
    const s = localStorage.getItem('sn_web_v1');
    if (s) {
      const p = JSON.parse(s);
      if (!p.gobierno) p.gobierno = JSON.parse(JSON.stringify(DEFAULT_DATA.gobierno));
      return p;
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch(e) { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}
function saveData(d) { localStorage.setItem('sn_web_v1', JSON.stringify(d)); }

// Disponible globalmente
const DATA = loadData();
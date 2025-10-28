// Datos del juego
const datosRosco = {
  A: { pregunta: "Comienza con A: Tecnología patentada de Nu Skin basada en ciencia epigenética que modifica la expresión de los genes para llevarlos a un patrón más juvenil", respuesta: "ageLOC", pista: "Es la patente clave que diferencia a Nu Skin", categoria: "Tecnología" },
  B: { pregunta: "Contiene la B: Complemento alimenticio en formato cápsulas con minerales, vitaminas y extractos botánicos que potencian el buen estado de cabello, uñas y piel", respuesta: "Beauty Focus Multibeauty", pista: "Multi______", categoria: "Pharmanex" },
  C: { pregunta: "Comienza con C: Ingrediente activo en Beauty Focus Collagen+ que estimula a los fibroblastos aumentando un 66% la producción propia de colágeno", respuesta: "Colágeno", pista: "Péptidos bioactivos de 2kDa", categoria: "Nutricosmética" },
  D: { pregunta: "Contiene la D: Producto corporal de ageLOC que mejora el aspecto de la celulitis y brinda firmeza a la piel", respuesta: "Dermatic Effects", pista: "Loción corporal diaria", categoria: "Productos" },
  E: { pregunta: "Comienza con E: Ciencia en la que se basa la patente ageLOC, que estudia cambios en la expresión génica sin alterar el ADN", respuesta: "Epigenética", pista: "No modifica genes, modifica su expresión", categoria: "Ciencia" },
  F: { pregunta: "Contiene la F: Ingredientes extraídos del extracto de aceite de trigo presentes en Beauty Focus Collagen+ que favorecen la función barrera de la piel", respuesta: "Fitoceramidas", pista: "Aseguran hidratación óptima", categoria: "Ingredientes" },
  G: { pregunta: "Comienza con G: Sistema de Nu Skin que utiliza corriente galvánica autoajustable para tratamiento facial, corporal y capilar", respuesta: "Galvanic Spa", pista: "Spa galvánico", categoria: "Dispositivos" },
  H: { pregunta: "Contiene la H: Tipo de ácido presente en el sérum activador de ageLOC Boost que proporciona hidratación y volumen", respuesta: "Hialurónico", pista: "Ácido ______ dual", categoria: "Ingredientes" },
  I: { pregunta: "Contiene la I: Producto de la línea TRMe que favorece la digestión y detoxificación con extracto de jengibre y alcachofa", respuesta: "InnerNu", pista: "Inner__", categoria: "TRMe" },
  J: { pregunta: "Comienza con J: Planta cuyo extracto de rizoma contribuye a la digestión y está presente en TRMe InnerNu", respuesta: "Jengibre", pista: "Especia asiática", categoria: "Ingredientes" },
  K: { pregunta: "Contiene la K: Multivitamínico premium de Pharmanex que contiene 13 vitaminas, 9 minerales y fitonutrientes", respuesta: "LifePak", pista: "Life___", categoria: "Pharmanex" },
  L: { pregunta: "Comienza con L: Dispositivo de limpieza profunda de Nu Skin con tecnología Micropulse Oscillation y conectividad IoT", respuesta: "LumiSpa", pista: "Sistema de limpieza inteligente", categoria: "Dispositivos" },
  M: { pregunta: "Contiene la M: Ácidos grasos esenciales Omega-3 presentes en el suplemento Marine Omega de Pharmanex", respuesta: "Marine Omega", pista: "Del krill antártico", categoria: "Pharmanex" },
  N: { pregunta: "Comienza con N: Vitamina B3 presente en el sérum de ageLOC Boost que ayuda a unificar el tono de la piel", respuesta: "Niacinamida", pista: "Componente brightening blend", categoria: "Ingredientes" },
  O: { pregunta: "Contiene la O: Fuente de ácidos grasos EPA y DHA en el suplemento Marine Omega R2", respuesta: "Omega", pista: "Omega-3", categoria: "Suplementos" },
  P: { pregunta: "Comienza con P: Línea de complementos alimenticios de Nu Skin con sistema 6S de fabricación y garantía de devolución", respuesta: "Pharmanex", pista: "Línea nutricional", categoria: "Marcas" },
  Q: { pregunta: "Contiene la Q: Material del que está hecho el cabezal de LumiSpa iO con micropartículas de plata", respuesta: "Silicona quirúrgica", pista: "Material médico antimicrobiano", categoria: "Tecnología" },
  R: { pregunta: "Comienza con R: Producto de TRMe que previene la acumulación de grasa en el hígado gracias a la cúrcuma", respuesta: "RealMe", pista: "Real__", categoria: "TRMe" },
  S: { pregunta: "Comienza con S: Dispositivo único en el mundo que mide el nivel de carotenoides antioxidantes en la piel en 10 segundos", respuesta: "Scanner", pista: "BioPhotonic _______", categoria: "Tecnología" },
  T: { pregunta: "Comienza con T: Programa personalizado de complementos alimenticios de ageLOC para salud digestiva y pérdida de peso", respuesta: "TRMe", pista: "Body Balance System", categoria: "Líneas" },
  U: { pregunta: "Contiene la U: Extracto botánico de esta especia presente en RealMe que facilita el metabolismo de las grasas", respuesta: "Cúrcuma", pista: "Ingrediente asiático amarillo", categoria: "Ingredientes" },
  V: { pregunta: "Comienza con V: Aplicación móvil de Nu Skin que conecta con dispositivos IoT y ofrece tratamientos personalizados", respuesta: "Vera", pista: "Beauty coach digital", categoria: "Tecnología" },
  W: { pregunta: "Comienza con W: Dispositivo de ageLOC que integra belleza y bienestar para tratamiento corporal con microcorriente", respuesta: "WellSpa", pista: "____Spa iO", categoria: "Dispositivos" },
  X: { pregunta: "Contiene la X: Sustancias que combaten el daño del estrés ______ presentes en LifePak y g3", respuesta: "Oxidativo", pista: "Estrés causado por radicales libres", categoria: "Salud" },
  Y: { pregunta: "Contiene la Y: Expresión de estos genes que ageLOC busca restaurar a un patrón juvenil", respuesta: "Youth genes", pista: "Genes de la juventud (YGC)", categoria: "Ciencia" },
  Z: { pregunta: "Contiene la Z: Mineral esencial presente en LifePak y Beauty Focus Multibeauty para nutrir cabello, uñas y piel", respuesta: "Zinc", pista: "Metal esencial para la piel", categoria: "Minerales" }
};

const preguntasQuiz = [
  { pregunta: "¿Qué porcentaje mejora la firmeza de la piel con ageLOC Boost tras 12 semanas?", opciones: ["50%", "75%", "104%", "120%"], respuesta_correcta: 2, explicacion: "ageLOC Boost aumenta la firmeza un 104% según estudios clínicos de 12 semanas" },
  { pregunta: "¿En cuántos minutos funciona el tratamiento con ageLOC Boost?", opciones: ["1 minuto", "2 minutos", "5 minutos", "10 minutos"], respuesta_correcta: 1, explicacion: "ageLOC Boost requiere solo 2 minutos diarios de tratamiento" },
  { pregunta: "¿Qué porcentaje de mejora en apariencia general muestra Beauty Focus Collagen+ tras 4 meses?", opciones: ["10%", "15%", "18%", "25%"], respuesta_correcta: 2, explicacion: "El estudio clínico demostró 18% mejora en apariencia general" },
  { pregunta: "¿Cuántos científicos PhD tiene Nu Skin en plantilla?", opciones: ["25", "50", "75+", "100"], respuesta_correcta: 2, explicacion: "Nu Skin cuenta con más de 75 científicos nivel PhD" },
  { pregunta: "¿En qué año fue fundada Nu Skin?", opciones: ["1980", "1984", "1990", "1994"], respuesta_correcta: 1, explicacion: "Nu Skin fue fundada en 1984" },
  { pregunta: "¿Cuántas patentes internacionales posee Nu Skin?", opciones: ["15", "22", "32", "45"], respuesta_correcta: 2, explicacion: "Nu Skin dispone de 32 patentes internacionales" },
  { pregunta: "¿Durante cuántos años consecutivos ha sido Nu Skin #1 en dispositivos de belleza según Euromonitor?", opciones: ["3 años", "5 años", "7 años", "10 años"], respuesta_correcta: 2, explicacion: "Nu Skin ha sido #1 durante 7 años consecutivos (2017-2024)" },
  { pregunta: "¿Qué tamaño tienen los péptidos de colágeno en Beauty Focus Collagen+ para máxima absorción?", opciones: ["1 kDa", "2 kDa", "5 kDa", "10 kDa"], respuesta_correcta: 1, explicacion: "Los péptidos son de 2 kDa, tamaño óptimo para absorción del 100%" },
  { pregunta: "¿Qué componente de TRMe contribuye a la pérdida de peso con efecto saciante?", opciones: ["Jengibre", "Cúrcuma", "Glucomanano", "Alcachofa"], respuesta_correcta: 2, explicacion: "El glucomanano en MyGoal tiene efecto saciante y contribuye a pérdida de peso" },
  { pregunta: "¿En cuántos países tiene presencia Nu Skin?", opciones: ["25", "35", "50", "75"], respuesta_correcta: 2, explicacion: "Nu Skin opera en 50 países a nivel mundial" }
];

const productosEstudio = {
  LumiSpa_iO: { nombre: "ageLOC LumiSpa iO", beneficios: ["Limpieza profunda en 2 minutos", "Piel 37% más lisa tras un uso", "62% más luminosidad en 12 semanas", "Reduce aspecto de poros", "Activa colágeno y elastina", "Respeta microbioma cutáneo"], para_quien: "Personas de 25-60 años que buscan limpieza profunda y renovación de piel", datos_clave: "Tecnología Micropulse Oscillation | App conectada Vera | Cabezal silicona antimicrobiano" },
  Boost: { nombre: "ageLOC Boost", beneficios: ["104% más firmeza en 12 semanas", "90% más elasticidad", "103% más volumen", "75% más brillo", "Resultados visibles en 7 días", "Tratamiento de solo 2 minutos"], para_quien: "25-55 años preocupados por luminosidad y firmeza", datos_clave: "Microcorriente variable | Caviar lime | Ácido hialurónico dual | Niacinamida" },
  Galvanic_Spa: { nombre: "ageLOC Galvanic Spa System III", beneficios: ["Reduce líneas finas y arrugas", "Mejora firmeza facial", "Reduce celulitis corporal", "Estimula cuero cabelludo", "Tratamiento completo rostro/cuerpo/cabello", "Corriente galvánica autoajustable"], para_quien: "35-65 años que buscan tratamiento anti-edad completo", datos_clave: "Multifunción | Pre-treat + Treatment gels | Uso en casa como spa profesional" },
  WellSpa_iO: { nombre: "ageLOC WellSpa iO", beneficios: ["Reduce celulitis y flacidez", "Mejora circulación", "Prepara y recupera músculos", "Reduce retención líquidos", "Tratamientos personalizados", "Integra belleza y bienestar"], para_quien: "Personas activas que buscan mejora corporal y bienestar", datos_clave: "Primer dispositivo mundial belleza + bienestar | Microcorriente bifsica adaptativa | App con guías" },
  Beauty_Focus_Collagen: { nombre: "Beauty Focus Collagen+", beneficios: ["18% mejora apariencia general (4 meses)", "24% mejora textura", "33% mejora luminosidad", "17% reducción volumen arrugas", "Colágeno 100% absorbible (2kDa)", "Protección con luteína"], para_quien: "30-65 años que buscan belleza desde el interior", datos_clave: "Péptidos bioactivos 2kDa | Luteína anti luz azul | Fitoceramidas | Estudio Dra. Draelos" },
  TRMe_Sistema: { nombre: "ageLOC TRMe Body Balance System", beneficios: ["Mejora digestión y detox", "Controla antojos de comida", "Contribuye a pérdida de peso", "Previene grasa hepática", "Fórmulas veganas certificadas", "Patente ageLOC"], para_quien: "Adultos que buscan salud digestiva y control de peso", datos_clave: "InnerNu (detox) | MyEdge (antojos) | MyGoal (peso) | RealMe (hígado) | M-Bars (comidas)" }
};

// Estado del juego (en memoria)
let estadoJuego = {
  modoActual: null,
  puntos: 0,
  aciertos: 0,
  fallos: 0,
  letrasRosco: {},
  letraActual: 'A',
  letrasPasapalabra: [],
  tiempoInicio: 0,
  tiempoRestante: 180,
  timerInterval: null,
  preguntaQuizActual: 0,
  respuestasQuiz: [],
  respuestasIncorrectasRosco: [],
  usoPasapalabra: false
};

// Referencias DOM
const pantallas = {
  inicio: document.getElementById('pantallaInicio'),
  seleccion: document.getElementById('pantallaSeleccion'),
  rosco: document.getElementById('pantallaRosco'),
  quiz: document.getElementById('pantallaQuiz'),
  estudio: document.getElementById('pantallaEstudio'),
  resultados: document.getElementById('pantallaResultados')
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  configurarEventListeners();
  inicializarLetrasRosco();
});

function configurarEventListeners() {
  // Navegación
  document.getElementById('btnInicio').addEventListener('click', () => mostrarPantalla('inicio'));
  document.getElementById('btnInstrucciones').addEventListener('click', mostrarInstrucciones);
  document.getElementById('btnIniciarJuego').addEventListener('click', () => mostrarPantalla('seleccion'));
  
  // Modos de juego
  document.getElementById('modoRosco').addEventListener('click', iniciarRosco);
  document.getElementById('modoQuiz').addEventListener('click', iniciarQuiz);
  document.getElementById('modoEstudio').addEventListener('click', iniciarEstudio);
  
  // Rosco
  document.getElementById('btnEnviarRespuesta').addEventListener('click', verificarRespuestaRosco);
  document.getElementById('btnPasapalabra').addEventListener('click', pasapalabra);
  document.getElementById('btnMostrarPista').addEventListener('click', mostrarPista);
  document.getElementById('inputRespuesta').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verificarRespuestaRosco();
  });
  
  // Quiz
  document.getElementById('btnSiguienteQuiz').addEventListener('click', siguientePreguntaQuiz);
  
  // Estudio
  document.getElementById('btnVolverProductos').addEventListener('click', volverAProductos);
  
  // Resultados
  document.getElementById('btnJugarNuevo').addEventListener('click', () => {
    reiniciarJuego();
    mostrarPantalla('seleccion');
  });
  document.getElementById('btnVerIncorrectas').addEventListener('click', toggleRespuestasIncorrectas);
  document.getElementById('btnIrEstudio').addEventListener('click', iniciarEstudio);
  
  // Modal
  document.getElementById('btnCerrarModal').addEventListener('click', cerrarModal);
}

function mostrarPantalla(nombre) {
  Object.values(pantallas).forEach(p => p.classList.remove('active'));
  pantallas[nombre].classList.add('active');
  
  if (nombre === 'inicio') {
    document.getElementById('scoreDisplay').classList.add('hidden');
  }
}

function mostrarInstrucciones() {
  document.getElementById('modalInstrucciones').classList.remove('hidden');
}

function cerrarModal() {
  document.getElementById('modalInstrucciones').classList.add('hidden');
}

// ========== ROSCO ==========
function inicializarLetrasRosco() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  letras.forEach(letra => {
    estadoJuego.letrasRosco[letra] = {
      estado: 'pendiente',
      pregunta: datosRosco[letra]
    };
  });
}

function iniciarRosco() {
  reiniciarJuego();
  estadoJuego.modoActual = 'rosco';
  estadoJuego.letraActual = 'A';
  estadoJuego.tiempoRestante = 180;
  mostrarPantalla('rosco');
  crearRoscoCirculo();
  mostrarPreguntaActual();
  iniciarTimer();
  actualizarEstadisticasRosco();
  document.getElementById('scoreDisplay').classList.remove('hidden');
  document.getElementById('scoreDisplay').textContent = `Puntos: ${estadoJuego.puntos}`;
}

function crearRoscoCirculo() {
  const circulo = document.getElementById('roscoCirculo');
  circulo.innerHTML = '';
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const totalLetras = letras.length;
  const radio = 200;
  
  letras.forEach((letra, index) => {
    const angulo = (index * 360 / totalLetras) - 90;
    const radianes = angulo * Math.PI / 180;
    const x = radio + radio * Math.cos(radianes);
    const y = radio + radio * Math.sin(radianes);
    
    const div = document.createElement('div');
    div.className = 'letra-casilla pendiente';
    div.textContent = letra;
    div.dataset.letra = letra;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.transform = 'translate(-50%, -50%)';
    
    circulo.appendChild(div);
  });
  
  actualizarCasillasRosco();
}

function actualizarCasillasRosco() {
  const casillas = document.querySelectorAll('.letra-casilla');
  casillas.forEach(casilla => {
    const letra = casilla.dataset.letra;
    const estado = estadoJuego.letrasRosco[letra].estado;
    casilla.className = `letra-casilla ${estado}`;
  });
}

function mostrarPreguntaActual() {
  const preguntaData = estadoJuego.letrasRosco[estadoJuego.letraActual].pregunta;
  document.getElementById('letraActual').textContent = estadoJuego.letraActual;
  document.getElementById('categoriaActual').textContent = preguntaData.categoria;
  document.getElementById('preguntaTexto').textContent = preguntaData.pregunta;
  document.getElementById('inputRespuesta').value = '';
  document.getElementById('pistaTexto').classList.add('hidden');
  document.getElementById('feedbackRespuesta').classList.add('hidden');
  document.getElementById('inputRespuesta').focus();
}

function verificarRespuestaRosco() {
  const input = document.getElementById('inputRespuesta').value.trim();
  if (!input) return;
  
  const preguntaData = estadoJuego.letrasRosco[estadoJuego.letraActual].pregunta;
  const respuestaCorrecta = preguntaData.respuesta.toLowerCase().replace(/\s+/g, '');
  const respuestaUsuario = input.toLowerCase().replace(/\s+/g, '');
  
  const feedback = document.getElementById('feedbackRespuesta');
  feedback.classList.remove('hidden', 'correcta', 'incorrecta');
  
  if (respuestaUsuario === respuestaCorrecta || 
      respuestaCorrecta.includes(respuestaUsuario) || 
      respuestaUsuario.includes(respuestaCorrecta)) {
    estadoJuego.letrasRosco[estadoJuego.letraActual].estado = 'correcta';
    estadoJuego.aciertos++;
    estadoJuego.puntos += 100;
    feedback.textContent = `Correcto: ${preguntaData.respuesta}`;
    feedback.classList.add('correcta');
  } else {
    estadoJuego.letrasRosco[estadoJuego.letraActual].estado = 'incorrecta';
    estadoJuego.fallos++;
    estadoJuego.puntos -= 20;
    feedback.textContent = `Respuesta correcta: ${preguntaData.respuesta}`;
    feedback.classList.add('incorrecta');
    estadoJuego.respuestasIncorrectasRosco.push({
      letra: estadoJuego.letraActual,
      pregunta: preguntaData.pregunta,
      respuestaCorrecta: preguntaData.respuesta,
      respuestaUsuario: input
    });
  }
  
  actualizarCasillasRosco();
  actualizarEstadisticasRosco();
  
  setTimeout(() => {
    avanzarLetra();
  }, 2000);
}

function pasapalabra() {
  if (!estadoJuego.letrasPasapalabra.includes(estadoJuego.letraActual)) {
    estadoJuego.letrasPasapalabra.push(estadoJuego.letraActual);
    estadoJuego.usoPasapalabra = true;
  }
  avanzarLetra();
}

function avanzarLetra() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let letraEncontrada = false;
  let intentos = 0;
  
  while (!letraEncontrada && intentos < 26) {
    const indexActual = letras.indexOf(estadoJuego.letraActual);
    const indexSiguiente = (indexActual + 1) % 26;
    estadoJuego.letraActual = letras[indexSiguiente];
    
    if (estadoJuego.letrasRosco[estadoJuego.letraActual].estado === 'pendiente') {
      letraEncontrada = true;
    }
    intentos++;
  }
  
  if (!letraEncontrada) {
    finalizarRosco();
  } else {
    mostrarPreguntaActual();
  }
}

function mostrarPista() {
  const preguntaData = estadoJuego.letrasRosco[estadoJuego.letraActual].pregunta;
  const pistaTexto = document.getElementById('pistaTexto');
  pistaTexto.textContent = `💡 Pista: ${preguntaData.pista}`;
  pistaTexto.classList.remove('hidden');
}

function iniciarTimer() {
  estadoJuego.tiempoInicio = Date.now();
  estadoJuego.timerInterval = setInterval(() => {
    estadoJuego.tiempoRestante--;
    const minutos = Math.floor(estadoJuego.tiempoRestante / 60);
    const segundos = estadoJuego.tiempoRestante % 60;
    document.getElementById('timer').textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    
    if (estadoJuego.tiempoRestante <= 0) {
      finalizarRosco();
    }
  }, 1000);
}

function actualizarEstadisticasRosco() {
  document.getElementById('aciertos').textContent = estadoJuego.aciertos;
  document.getElementById('fallos').textContent = estadoJuego.fallos;
  document.getElementById('puntos').textContent = estadoJuego.puntos;
  document.getElementById('scoreDisplay').textContent = `Puntos: ${estadoJuego.puntos}`;
}

function finalizarRosco() {
  clearInterval(estadoJuego.timerInterval);
  const tiempoEmpleado = 180 - estadoJuego.tiempoRestante;
  
  // Bonus por no usar pasapalabra
  if (!estadoJuego.usoPasapalabra) {
    estadoJuego.puntos += 500;
  }
  
  // Bonus por tiempo
  if (tiempoEmpleado < 120) {
    estadoJuego.puntos += 300;
  } else if (tiempoEmpleado < 150) {
    estadoJuego.puntos += 200;
  }
  
  mostrarResultados(tiempoEmpleado);
}

// ========== QUIZ ==========
function iniciarQuiz() {
  reiniciarJuego();
  estadoJuego.modoActual = 'quiz';
  estadoJuego.preguntaQuizActual = 0;
  estadoJuego.respuestasQuiz = [];
  mostrarPantalla('quiz');
  mostrarPreguntaQuiz();
  document.getElementById('scoreDisplay').classList.remove('hidden');
  document.getElementById('scoreDisplay').textContent = `Puntos: ${estadoJuego.puntos}`;
}

function mostrarPreguntaQuiz() {
  const pregunta = preguntasQuiz[estadoJuego.preguntaQuizActual];
  document.getElementById('quizProgreso').textContent = `Pregunta ${estadoJuego.preguntaQuizActual + 1} de ${preguntasQuiz.length}`;
  document.getElementById('quizPuntos').textContent = estadoJuego.puntos;
  document.getElementById('quizPregunta').textContent = pregunta.pregunta;
  
  const opcionesContainer = document.getElementById('quizOpciones');
  opcionesContainer.innerHTML = '';
  
  pregunta.opciones.forEach((opcion, index) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opcion';
    btn.textContent = opcion;
    btn.addEventListener('click', () => seleccionarOpcionQuiz(index));
    opcionesContainer.appendChild(btn);
  });
  
  document.getElementById('quizExplicacion').classList.add('hidden');
  document.getElementById('btnSiguienteQuiz').classList.add('hidden');
}

function seleccionarOpcionQuiz(indexSeleccionado) {
  const pregunta = preguntasQuiz[estadoJuego.preguntaQuizActual];
  const opciones = document.querySelectorAll('.quiz-opcion');
  
  opciones.forEach((opcion, index) => {
    opcion.classList.add('deshabilitada');
    opcion.style.pointerEvents = 'none';
    
    if (index === pregunta.respuesta_correcta) {
      opcion.classList.add('correcta');
    }
    if (index === indexSeleccionado && index !== pregunta.respuesta_correcta) {
      opcion.classList.add('incorrecta');
    }
  });
  
  const esCorrecta = indexSeleccionado === pregunta.respuesta_correcta;
  if (esCorrecta) {
    estadoJuego.puntos += 100;
    estadoJuego.aciertos++;
  } else {
    estadoJuego.fallos++;
  }
  
  estadoJuego.respuestasQuiz.push({
    pregunta: pregunta.pregunta,
    correcta: esCorrecta
  });
  
  const explicacion = document.getElementById('quizExplicacion');
  explicacion.textContent = pregunta.explicacion;
  explicacion.classList.remove('hidden');
  
  document.getElementById('quizPuntos').textContent = estadoJuego.puntos;
  document.getElementById('scoreDisplay').textContent = `Puntos: ${estadoJuego.puntos}`;
  document.getElementById('btnSiguienteQuiz').classList.remove('hidden');
}

function siguientePreguntaQuiz() {
  estadoJuego.preguntaQuizActual++;
  if (estadoJuego.preguntaQuizActual < preguntasQuiz.length) {
    mostrarPreguntaQuiz();
  } else {
    mostrarResultados(0);
  }
}

// ========== ESTUDIO ==========
function iniciarEstudio() {
  estadoJuego.modoActual = 'estudio';
  mostrarPantalla('estudio');
  mostrarListaProductos();
  document.getElementById('productoDetalle').classList.add('hidden');
  document.getElementById('scoreDisplay').classList.add('hidden');
}

function mostrarListaProductos() {
  const grid = document.getElementById('productosGrid');
  grid.innerHTML = '';
  grid.classList.remove('hidden');
  
  Object.entries(productosEstudio).forEach(([key, producto]) => {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Click para ver detalles</p>
    `;
    card.addEventListener('click', () => mostrarDetalleProducto(key));
    grid.appendChild(card);
  });
}

function mostrarDetalleProducto(key) {
  const producto = productosEstudio[key];
  document.getElementById('productosGrid').classList.add('hidden');
  document.getElementById('productoDetalle').classList.remove('hidden');
  
  document.getElementById('productoNombre').textContent = producto.nombre;
  document.getElementById('productoParaQuien').textContent = producto.para_quien;
  document.getElementById('productoDatos').textContent = producto.datos_clave;
  
  const beneficiosList = document.getElementById('productoBeneficios');
  beneficiosList.innerHTML = '';
  producto.beneficios.forEach(beneficio => {
    const li = document.createElement('li');
    li.textContent = beneficio;
    beneficiosList.appendChild(li);
  });
}

function volverAProductos() {
  document.getElementById('productoDetalle').classList.add('hidden');
  document.getElementById('productosGrid').classList.remove('hidden');
}

// ========== RESULTADOS ==========
function mostrarResultados(tiempoEmpleado) {
  mostrarPantalla('resultados');
  
  const totalPreguntas = estadoJuego.modoActual === 'rosco' ? 26 : preguntasQuiz.length;
  const porcentaje = Math.round((estadoJuego.aciertos / totalPreguntas) * 100);
  
  document.getElementById('puntuacionFinal').textContent = estadoJuego.puntos;
  document.getElementById('correctasFinales').textContent = `${estadoJuego.aciertos}/${totalPreguntas}`;
  document.getElementById('porcentajeAcierto').textContent = `${porcentaje}%`;
  
  if (estadoJuego.modoActual === 'rosco') {
    const minutos = Math.floor(tiempoEmpleado / 60);
    const segundos = tiempoEmpleado % 60;
    document.getElementById('tiempoEmpleado').textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
  } else {
    document.getElementById('tiempoEmpleado').textContent = 'N/A';
  }
  
  // Mensaje motivacional
  let mensaje = '';
  if (porcentaje >= 90) {
    mensaje = 'Excelente dominio del producto. Tu expertise marca la diferencia';
  } else if (porcentaje >= 70) {
    mensaje = 'Muy buen nivel de conocimiento. Sigue profundizando';
  } else if (porcentaje >= 50) {
    mensaje = 'Buen comienzo. Con más práctica alcanzarás la excelencia';
  } else {
    mensaje = 'Continúa formandote. El conocimiento es la clave del éxito';
  }
  document.getElementById('mensajeMotivacional').textContent = mensaje;
  
  // Desglose por categorías (solo rosco)
  if (estadoJuego.modoActual === 'rosco') {
    mostrarDesgloseCategorias();
  } else {
    document.getElementById('desgloseCategorias').innerHTML = '';
  }
}

function mostrarDesgloseCategorias() {
  const categorias = {};
  Object.values(datosRosco).forEach(pregunta => {
    if (!categorias[pregunta.categoria]) {
      categorias[pregunta.categoria] = { total: 0, correctas: 0 };
    }
    categorias[pregunta.categoria].total++;
  });
  
  Object.entries(estadoJuego.letrasRosco).forEach(([letra, data]) => {
    if (data.estado === 'correcta') {
      const categoria = data.pregunta.categoria;
      categorias[categoria].correctas++;
    }
  });
  
  const container = document.getElementById('desgloseCategorias');
  container.innerHTML = '<h3 style="font-family: Lora, serif; color: #B89F91; margin-bottom: 1rem;">Desglose por Categorías</h3>';
  
  Object.entries(categorias).forEach(([nombre, stats]) => {
    const div = document.createElement('div');
    div.className = 'categoria-stat';
    div.innerHTML = `
      <span>${nombre}</span>
      <span style="color: #D4A5A5; font-weight: 600;">${stats.correctas}/${stats.total}</span>
    `;
    container.appendChild(div);
  });
}

function toggleRespuestasIncorrectas() {
  const container = document.getElementById('respuestasIncorrectas');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    container.innerHTML = '<h3 style="font-family: Lora, serif; color: #B89F91; margin-bottom: 1rem;">Respuestas para Mejorar</h3>';
    
    if (estadoJuego.respuestasIncorrectasRosco.length === 0) {
      container.innerHTML += '<p>Excelente. No has tenido ninguna respuesta incorrecta.</p>';
    } else {
      estadoJuego.respuestasIncorrectasRosco.forEach(item => {
        const div = document.createElement('div');
        div.className = 'respuesta-incorrecta-item';
        div.innerHTML = `
          <p><strong>Letra ${item.letra}:</strong> ${item.pregunta}</p>
          <p><strong>Tu respuesta:</strong> ${item.respuestaUsuario}</p>
          <p><strong>Respuesta correcta:</strong> ${item.respuestaCorrecta}</p>
        `;
        container.appendChild(div);
      });
    }
    document.getElementById('btnVerIncorrectas').textContent = 'OCULTAR RESPUESTAS';
  } else {
    container.classList.add('hidden');
    document.getElementById('btnVerIncorrectas').textContent = 'VER RESPUESTAS INCORRECTAS';
  }
}

// ========== UTILIDADES ==========
function reiniciarJuego() {
  clearInterval(estadoJuego.timerInterval);
  estadoJuego = {
    modoActual: null,
    puntos: 0,
    aciertos: 0,
    fallos: 0,
    letrasRosco: {},
    letraActual: 'A',
    letrasPasapalabra: [],
    tiempoInicio: 0,
    tiempoRestante: 180,
    timerInterval: null,
    preguntaQuizActual: 0,
    respuestasQuiz: [],
    respuestasIncorrectasRosco: [],
    usoPasapalabra: false
  };
  inicializarLetrasRosco();
}
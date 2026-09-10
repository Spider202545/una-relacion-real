// ==========================================================================
// 1. GUÍA PRÁCTICA PARA INTROVERTIDOS (SITUACIONES COTIDIANAS)
// ==========================================================================
const introvertsToolkitData = {
    "llegar-nuevo": {
        title: "Llegar a un lugar donde no conozco a nadie",
        desc: "No busques al grupo más ruidoso ni intentes ser el centro del salón. Entra con paso tranquilo, respira hondo y busca a alguien que también esté apartado, con un café o mirando el celular. Acércate con una pregunta contextual simple: 'Hola, disculpa, ¿sabes a qué hora arranca esto?' o '¿te molesta si me siento por acá?'.",
        takeaway: "No tienes que impresionar a nadie; solo tienes que estar presente. El valor ya lo traes puesto desde casa."
    },
    "romper-hielo": {
        title: "Cómo romper el hielo sin sentir vergüenza ajena",
        desc: "El error común es creer que debes inventar un chiste brillante. El mejor truco de un introvertido es la curiosidad genuina: no hables de ti, haz preguntas abiertas sobre la otra persona: '¿Hace cuánto vienes aquí?' o '¿Cómo conociste este lugar?'. A la gente le apasiona sentirse escuchada.",
        takeaway: "Un buen oyente es 10 veces más memorable que alguien que solo habla de sí mismo."
    },
    "me-ignoraron": {
        title: "Qué hacer si me ignoran o son cortantes",
        desc: "Si das un paso y la persona responde seca, sonríe con tranquilidad y di: 'Entiendo, ¡buen día!'. No te des la vuelta creyendo que eres raro o defectuoso. Te acabas de ahorrar meses de energía con alguien que no tenía disposición hoy. Tu paz interior no se negocia por la cortesía de un extraño.",
        takeaway: "El rechazo es un filtro protector de Dios: te aleja de personas que no saben valorar una presencia sincera."
    },
    "quedarse-en-blanco": {
        title: "Me quedo en blanco y se hace un silencio incómodo",
        desc: "Los silencios solo son incómodos si tú te desesperas por llenarlos con ruido torpe. Si la conversación se apaga, no pasa nada: respira, toma un trago de agua y di con total naturalidad: 'Qué buena música hay hoy' o simplemente 'Perdón, me quedé pensando en lo que dijiste antes'. La calma demuestra seguridad.",
        takeaway: "Aprender a habitar el silencio con tranquilidad es señal de madurez y aplomo personal."
    }
};

const toolTabs = document.querySelectorAll('.btn-tool-tab');
const toolTitle = document.getElementById('tool-title');
const toolDesc = document.getElementById('tool-desc');
const toolTakeaway = document.getElementById('tool-takeaway');
const toolDisplayBox = document.querySelector('.toolkit-display-box');

toolTabs.forEach(btn => {
    btn.addEventListener('click', () => {
        toolTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const key = btn.getAttribute('data-tool');
        const data = introvertsToolkitData[key];

        toolDisplayBox.style.opacity = 0;
        setTimeout(() => {
            toolTitle.textContent = data.title;
            toolDesc.textContent = data.desc;
            toolTakeaway.textContent = data.takeaway;
            toolDisplayBox.style.opacity = 1;
        }, 180);
    });
});

// ==========================================================================
// 2. DILEMAS JUVENILES & RESPUESTAS DIRECTAS
// ==========================================================================
const dilemmasDatabase = [
    {
        id: 1,
        category: "musica-juegos",
        tag: "Música y Cultura",
        question: "¿Es pecado escuchar música que no sea cristiana o jugar videojuegos?",
        answer: "Dios no inventó la música ni el arte solo para que repitas canciones de iglesia. El problema jamás es el ritmo o el entretenimiento sano; el filtro real es qué produce en tu cabeza. Si una música o juego te llena de paz, te divierte o te relaja, disfrútalo con libertad. Si una letra te induce al odio, te denigra o te empuja a la autodestrucción, tu Padre te avisa para protegerte, no para quitarte la diversión.",
        core: "Todo me es lícito, pero no todo me conviene. Elige lo que te dé paz interior."
    },
    {
        id: 2,
        category: "presion-social",
        tag: "Amistades & Salidas",
        question: "¿Cómo manejo la presión si mis amigos toman alcohol o hacen cosas que a mí no me gustan?",
        answer: "Jesús compartía con todo tipo de personas, pero jamás cambió su esencia para encajar con la multitud. No necesitas aislarte del mundo ni volverte antipático, pero quien solo te quiere cuando actúas como ellos, no es un amigo real; busca un cómplice. Aprende a decir: 'Pásenla bien, yo paso de eso hoy'. La firmeza tranquila genera más respeto que ceder por miedo al rechazo.",
        core: "No negocies tu tranquilidad mental por un minuto de aprobación ajena."
    },
    {
        id: 3,
        category: "mente-dudas",
        tag: "Salud Mental",
        question: "¿Tener pensamientos intrusivos o ansiedad significa que tengo poca fe?",
        answer: "De ninguna manera. El cerebro es un órgano biológico que sufre estrés, fatiga y desbalances químicos. Jesús mismo en el huerto de Getsemaní experimentó una angustia tan pesada que sudó gotas de sangre. Buscar ayuda profesional, descansar y hablar lo que sientes no contradice la fe; la complementa. Tu Padre no te juzga por tu ansiedad; te acompaña en medio de ella.",
        core: "La fe no es ausencia de miedo, es soltar el peso en los brazos de tu Padre aun con temblor."
    },
    {
        id: 4,
        category: "iglesia-religion",
        tag: "Pertenencia",
        question: "¿Qué pasa si siento que no encajo en ninguna iglesia o me lastimaron en una?",
        answer: "Muchos confunden a Dios con la gente que dice representarlo. Si viviste hipocresía, juicios duros o te hicieron sentir indigno, entiende que Jesús fue el más crítico de ese tipo de religiosidad fría. La iglesia no son cuatro paredes ni un club social perfecto; tu relación principal es directa con tu Padre. Conéctate con personas sinceras que amen sin libreto.",
        core: "Dios no es la religión humana que te hirió; Él es el refugio que cura esa herida."
    },
    {
        id: 5,
        category: "mente-dudas",
        tag: "Dudas Sinceras",
        question: "¿Dios se enoja si tengo dudas sobre si realmente existe o si me escucha?",
        answer: "Tomás dudó de la resurrección de Jesús teniendo a sus amigos al lado. Jesús no lo expulsó ni le gritó; se acercó a él, le mostró las heridas en sus manos y le dijo con paciencia: 'Mira y cree'. Las dudas no son enemigas de la fe; son el puente entre una religión heredada por tus padres y una convicción real y personal tuya.",
        core: "Dios prefiere mil veces tu duda honesta que una fe fingida por compromiso."
    }
];

const dilemmaSearchInput = document.getElementById('dilemma-search-input');
const dilemmaCatButtons = document.querySelectorAll('.dilemma-cat-btn');
const dilemmasContainer = document.getElementById('dilemmas-cards-container');

let activeDilemmaCategory = "todos";

function renderDilemmas() {
    const query = dilemmaSearchInput.value.toLowerCase().trim();
    dilemmasContainer.innerHTML = '';

    const filtered = dilemmasDatabase.filter(d => {
        const matchesCat = activeDilemmaCategory === "todos" || d.category === activeDilemmaCategory;
        const matchesQuery = d.question.toLowerCase().includes(query) || 
                             d.answer.toLowerCase().includes(query) || 
                             d.tag.toLowerCase().includes(query);
        return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
        dilemmasContainer.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 30px;">No se encontraron respuestas para esa búsqueda. Intenta con otras palabras.</p>';
        return;
    }

    filtered.forEach(d => {
        const card = document.createElement('div');
        card.className = 'dilemma-card';
        card.innerHTML = `
            <div>
                <span class="dilemma-tag">${d.tag}</span>
                <h4 class="dilemma-question">${escapeHtml(d.question)}</h4>
                <p class="dilemma-answer">${escapeHtml(d.answer)}</p>
            </div>
            <div class="dilemma-core-point">
                <span>La clave práctica</span>
                <p>${escapeHtml(d.core)}</p>
            </div>
        `;
        dilemmasContainer.appendChild(card);
    });
}

dilemmaSearchInput.addEventListener('input', renderDilemmas);

dilemmaCatButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        dilemmaCatButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeDilemmaCategory = btn.getAttribute('data-cat');
        renderDilemmas();
    });
});

renderDilemmas();

// ==========================================================================
// 3. PETICIONES DE ORACIÓN INTERACTIVAS (LLEVAR LA CARGA JUNTOS)
// ==========================================================================
const initialPrayerRequests = [
    {
        id: 1,
        author: "Camila, 18 años",
        topic: "Paz para mi mente",
        details: "Tengo semanas sintiéndome abrumada con mis estudios y el miedo a no ser suficiente. Porfa oren para que pueda dormir con tranquilidad.",
        prayingCount: 28,
        time: "Hace 40 min"
    },
    {
        id: 2,
        author: "Anónimo",
        topic: "Sanidad en mi familia",
        details: "Mis papás están pasando por una crisis pesada y en mi casa solo hay gritos y tensión. Necesito fuerzas para no perder la calma.",
        prayingCount: 42,
        time: "Hace 2 horas"
    }
];

let prayerRequestsList = JSON.parse(localStorage.getItem('prayer_requests_data')) || initialPrayerRequests;

const prayerReqForm = document.getElementById('prayer-request-form');
const reqAuthorInput = document.getElementById('req-author-input');
const reqTopicInput = document.getElementById('req-topic-input');
const reqDetailsInput = document.getElementById('req-details-input');
const prayerRequestsFeed = document.getElementById('prayer-requests-feed');

function renderPrayerRequests() {
    prayerRequestsFeed.innerHTML = '';
    prayerRequestsList.forEach(req => {
        const card = document.createElement('div');
        card.className = 'prayer-req-card';

        const cleanAuthor = applyRobloxFilter(req.author);
        const cleanTopic = applyRobloxFilter(req.topic);
        const cleanDetails = applyRobloxFilter(req.details);

        card.innerHTML = `
            <div>
                <div class="req-header">
                    <span class="req-topic">${escapeHtml(cleanTopic)}</span>
                    <span class="req-time">${req.time}</span>
                </div>
                <p class="req-body-text">"${escapeHtml(cleanDetails)}"</p>
            </div>
            <div class="req-footer">
                <span class="req-author-tag">— ${escapeHtml(cleanAuthor)}</span>
                <button class="btn-pray-counter" onclick="addPrayerSupport(${req.id})">
                    <span>🙏 Orando por ti</span> 
                    <strong>${req.prayingCount}</strong>
                </button>
            </div>
        `;
        prayerRequestsFeed.appendChild(card);
    });
}

function addPrayerSupport(id) {
    const item = prayerRequestsList.find(r => r.id === id);
    if (item) {
        item.prayingCount++;
        localStorage.setItem('prayer_requests_data', JSON.stringify(prayerRequestsList));
        renderPrayerRequests();
    }
}

prayerReqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = reqAuthorInput.value.trim();
    const topic = reqTopicInput.value.trim();
    const details = reqDetailsInput.value.trim();

    if (!author || !topic || !details) return;

    if (containsInappropriateContent(author)) {
        alert("Por favor utiliza un apodo respetuoso para publicar.");
        return;
    }

    const newReq = {
        id: Date.now(),
        author: author,
        topic: topic,
        details: details,
        prayingCount: 1,
        time: "Recién publicado"
    };

    prayerRequestsList.unshift(newReq);
    localStorage.setItem('prayer_requests_data', JSON.stringify(prayerRequestsList));
    renderPrayerRequests();

    reqAuthorInput.value = '';
    reqTopicInput.value = '';
    reqDetailsInput.value = '';
});

renderPrayerRequests();

// ==========================================================================
// 4. ESTRUCTURA DE LOS 66 LIBROS DE LA BIBLIA COMPLETA
// ==========================================================================
const bibleMetadata = {
    antiguo: [
        { key: "genesis", name: "Génesis", chapters: 50, teaching: "Dios inicia la vida y muestra su paciencia con una humanidad rota.", takeaway: "Tu historia comienza en su corazón, no en el azar." },
        { key: "exodo", name: "Éxodo", chapters: 40, teaching: "Dios rescata de la esclavitud y abre caminos en el desierto.", takeaway: "Él no te deja atrapado en tus prisiones emocionales." },
        { key: "levitico", name: "Levítico", chapters: 27, teaching: "La santidad y el cuidado en las relaciones del pueblo.", takeaway: "Dios cuida cada detalle de nuestra salud y convivencia." },
        { key: "numeros", name: "Números", chapters: 36, teaching: "Fidelidad divina incluso en medio de las quejas y desiertos.", takeaway: "Aunque dudes, Dios sigue guiando tus pasos." },
        { key: "deuteronomio", name: "Deuteronomio", chapters: 34, teaching: "Recordar la fidelidad del Padre antes de cruzar nuevos desafíos.", takeaway: "Nunca olvides de dónde te levantó." },
        { key: "josue", name: "Josué", chapters: 24, teaching: "Valentía y confianza para tomar las promesas.", takeaway: "Esfuérzate y sé valiente; Él va contigo." },
        { key: "jueces", name: "Jueces", chapters: 21, teaching: "Un ciclo de caídas humanas y rescates misericordiosos.", takeaway: "No importa cuántas veces caigas, su mano te busca." },
        { key: "rut", name: "Rut", chapters: 4, teaching: "Lealtad familiar y cómo Dios bendice a los humildes.", takeaway: "Tu origen no define tu destino con Dios." },
        { key: "1samuel", name: "1 Samuel", chapters: 31, teaching: "Dios mira el corazón, mientras el mundo mira apariencias.", takeaway: "Tu valor no se mide por lo que los demás ven por fuera." },
        { key: "2samuel", name: "2 Samuel", chapters: 24, teaching: "David: un corazón sincero que se equivoca pero pide perdón.", takeaway: "La honestidad vale más que fingir perfección." },
        { key: "1reyes", name: "1 Reyes", chapters: 22, teaching: "Sabiduría para gobernar y la voz apacible de Dios en la cueva.", takeaway: "Dios te habla en el susurro, no en el caos." },
        { key: "2reyes", name: "2 Reyes", chapters: 25, teaching: "Consecuencias de ignorar el bien y la fidelidad profética.", takeaway: "El camino del amor siempre es el más seguro." },
        { key: "1cronicas", name: "1 Crónicas", chapters: 29, teaching: "El registro de una fe viva que trasciende generaciones.", takeaway: "Cada vida importa en la memoria de Dios." },
        { key: "2cronicas", name: "2 Crónicas", chapters: 36, teaching: "Restauración cuando un corazón se humilla y busca paz.", takeaway: "Siempre hay oportunidad de volver a empezar." },
        { key: "esdras", name: "Esdras", chapters: 10, teaching: "Reconstrucción espiritual tras años de destierro.", takeaway: "Dios levanta lo que parecía destruido." },
        { key: "nehemias", name: "Nehemías", chapters: 13, teaching: "Reconstruir con oración y manos en la obra.", takeaway: "La alegría del Señor es tu fuerza para seguir." },
        { key: "ester", name: "Ester", chapters: 10, teaching: "La mano invisible de Dios cuidando en secreto.", takeaway: "Estás aquí con un propósito para este tiempo." },
        { key: "job", name: "Job", chapters: 42, teaching: "El dolor humano frente al misterio y la compasión divina.", takeaway: "Dios jamás se escandaliza de tus preguntas en el dolor." },
        { key: "salmos", name: "Salmos", chapters: 150, teaching: "Poesía honesta: dolor, gratitud, miedo y adoración sin filtros.", takeaway: "Cualquier emoción humana tiene cabida ante el Padre." },
        { key: "proverbios", name: "Proverbios", chapters: 31, teaching: "Sabiduría práctica para el dinero, amistades y decisiones.", takeaway: "El respeto a Dios es el principio de la verdadera inteligencia." },
        { key: "eclesiastes", name: "Eclesiastés", chapters: 12, teaching: "El vacío de buscar sentido solo en lo material.", takeaway: "Solo en tu Creador encuentras descanso real." },
        { key: "cantares", name: "Cantares", chapters: 8, teaching: "La belleza del amor humano apasionado y puro.", takeaway: "El amor genuino es un regalo divino." },
        { key: "isaias", name: "Isaías", chapters: 66, teaching: "La promesa del Mesías que sana las heridas y carga el dolor.", takeaway: "Por sus llagas fuimos nosotros curados." },
        { key: "jeremias", name: "Jeremías", chapters: 52, teaching: "Planes de bienestar y futuro en medio del desánimo.", takeaway: "'Sé los planes que tengo para ti: planes de paz'." },
        { key: "lamentaciones", name: "Lamentaciones", chapters: 5, teaching: "Nuevas son sus misericordias cada mañana.", takeaway: "Su fidelidad no se agota con el final del día." },
        { key: "ezequiel", name: "Ezequiel", chapters: 48, teaching: "Un corazón nuevo de carne en lugar de un corazón de piedra.", takeaway: "Dios cambia la frialdad en ternura." },
        { key: "daniel", name: "Daniel", chapters: 12, teaching: "Integridad y fe en medio de un entorno hostil.", takeaway: "No necesitas negociar tus principios para brillar." },
        { key: "oseas", name: "Oseas", chapters: 14, teaching: "Un amor implacable que no se cansa de buscarte.", takeaway: "Dios te persigue con ternura, no con ira." },
        { key: "joel", name: "Joel", chapters: 3, teaching: "El Espíritu Santo derramado sobre jóvenes y ancianos.", takeaway: "Sus promesas alcanzan a toda tu generación." },
        { key: "amos", name: "Amós", chapters: 9, teaching: "Justicia social y defensa de los desamparados.", takeaway: "A Dios le importa cómo tratas a tu prójimo." },
        { key: "abdias", name: "Abdías", chapters: 1, teaching: "El orgullo cae ante la verdad de Dios.", takeaway: "La humildad es la mejor protección." },
        { key: "jonas", name: "Jonás", chapters: 4, teaching: "La misericordia de Dios para todos, incluso tus enemigos.", takeaway: "Nadie está demasiado lejos para recibir perdón." },
        { key: "miqueas", name: "Miqueas", chapters: 7, teaching: "Practicar justicia, amar misericordia y caminar humilde.", takeaway: "La fe real es simple y cercana." },
        { key: "nahum", name: "Nahúm", chapters: 3, teaching: "Refugio seguro en el día de la angustia.", takeaway: "Él conoce a los que en Él confían." },
        { key: "habacuc", name: "Habacuc", chapters: 3, teaching: "Alegrarse en Dios aunque las cosas no florezcan.", takeaway: "La fe no depende de las circunstancias." },
        { key: "sofonias", name: "Sofonías", chapters: 3, teaching: "Dios calla de amor y se regocija sobre ti con cánticos.", takeaway: "Tu Padre celebra tu existencia con alegría." },
        { key: "hageo", name: "Hageo", chapters: 2, teaching: "Priorizar lo que verdaderamente llena el alma.", takeaway: "Construye tu relación con Él en primer lugar." },
        { key: "zacarias", name: "Zacarías", chapters: 14, teaching: "No con fuerza ni poder, sino con su Espíritu.", takeaway: "Lo que parece imposible lo resuelve su paz." },
        { key: "malaquias", name: "Malaquías", chapters: 4, teaching: "El Padre que vuelve el corazón de los hijos a sus hogares.", takeaway: "La restauración familiar está en sus manos." }
    ],
    nuevo: [
        { key: "mateo", name: "Mateo", chapters: 28, teaching: "Jesús como el Rey prometido que viene a servir.", takeaway: "Bienaventurados los que tienen hambre de justicia." },
        { key: "marcos", name: "Marcos", chapters: 16, teaching: "Acción inmediata: Jesús sanando y amando sin protocolos.", takeaway: "El Hijo vino a servir y dar su vida por muchos." },
        { key: "lucas", name: "Lucas", chapters: 24, teaching: "Jesús cercano a los enfermos, mujeres y marginados.", takeaway: "El Padre sale corriendo a abrazar al hijo pródigo." },
        { key: "juan", name: "Juan", chapters: 21, teaching: "La intimidad con el Verbo de vida y el amor incondicional.", takeaway: "En Él estaba la vida, y la vida era la luz de los hombres." },
        { key: "hechos", name: "Hechos", chapters: 28, teaching: "El nacimiento de la comunidad viva impulsada por el Espíritu.", takeaway: "Caminamos en comunidad compartiendo el pan con sencillez." },
        { key: "romanos", name: "Romanos", chapters: 16, teaching: "Justificados por gracia; nada nos separa de su amor.", takeaway: "Ya no hay condenación para los que están en Cristo." },
        { key: "1corintios", name: "1 Corintios", chapters: 16, teaching: "El amor verdadero que es paciente y no guarda rencor.", takeaway: "El amor jamás deja de ser." },
        { key: "2corintios", name: "2 Corintios", chapters: 13, teaching: "El poder de Dios que brilla en nuestras debilidades.", takeaway: "'Te basta mi gracia, mi poder se perfecciona en tu debilidad'." },
        { key: "galatas", name: "Gálatas", chapters: 6, teaching: "Libres de la culpa y de la ley fría para vivir en amor.", takeaway: "Para libertad fue que Cristo nos hizo libres." },
        { key: "efesios", name: "Efesios", chapters: 6, teaching: "Adoptados como hijos y vestidos con la armadura de la paz.", takeaway: "Por gracia somos salvos mediante la fe; es don de Dios." },
        { key: "filipenses", name: "Filipenses", chapters: 4, teaching: "Alegría constante en la paz que sobrepasa todo entendimiento.", takeaway: "Todo lo puedo en Aquel que me fortalece." },
        { key: "colosenses", name: "Colosenses", chapters: 4, teaching: "Cristo en ustedes: la esperanza de gloria.", takeaway: "Vístanse de entrañable misericordia y bondad." },
        { key: "1tesalonicenses", name: "1 Tesalonicenses", chapters: 5, teaching: "Esperanza firme y vivir en sobriedad y cariño mutuo.", takeaway: "Oren sin cesar y den gracias en todo momento." },
        { key: "2tesalonicenses", name: "2 Tesalonicenses", chapters: 3, teaching: "Paciencia y constancia en el trabajo y la fe.", takeaway: "El Señor de paz les dé siempre paz en toda circunstancia." },
        { key: "1timoteo", name: "1 Timoteo", chapters: 6, teaching: "Nadie tenga en poco tu juventud; sé ejemplo de amor.", takeaway: "Tu edad no limita lo que Dios puede hacer en ti." },
        { key: "2timoteo", name: "2 Timoteo", chapters: 4, teaching: "No nos dio espíritu de temor, sino de poder y dominio propio.", takeaway: "Pelea la buena batalla con tranquilidad." },
        { key: "tito", name: "Tito", chapters: 3, teaching: "La bondad y el amor de Dios manifestados para salvar.", takeaway: "La gracia enseña a vivir con integridad." },
        { key: "filemon", name: "Filemón", chapters: 1, teaching: "El perdón radical que reconcilia a hermanos.", takeaway: "Trata a los demás como hermanos amados." },
        { key: "hebreos", name: "Hebreos", chapters: 13, teaching: "Un Sumo Sacerdote que se compadece de nuestras debilidades.", takeaway: "Acerquémonos confiadamente al trono de la gracia." },
        { key: "santiago", name: "Santiago", chapters: 5, teaching: "La fe que se demuestra con hechos y control de la lengua.", takeaway: "Si a alguno le falta sabiduría, pídala a Dios." },
        { key: "1pedro", name: "1 Pedro", chapters: 5, teaching: "Piedras vivas y refugio en medio del sufrimiento.", takeaway: "Echen sobre Él toda su ansiedad, porque Él cuida de ustedes." },
        { key: "2pedro", name: "2 Pedro", chapters: 3, teaching: "Paciencia: Dios no tarda según algunos tienen por tardanza.", takeaway: "Él no quiere que nadie perezca, sino que todos procedan a la paz." },
        { key: "1juan", name: "1 Juan", chapters: 5, teaching: "Dios es amor; el perfecto amor echa fuera todo el temor.", takeaway: "No hay miedo en su presencia." },
        { key: "2juan", name: "2 Juan", chapters: 1, teaching: "Caminar en la verdad y amarse unos a otros.", takeaway: "El mandamiento desde el principio: amor sincero." },
        { key: "3juan", name: "3 Juan", chapters: 1, teaching: "Hospitalidad y desear bienestar físico y espiritual.", takeaway: "Deseo que seas prosperado en todo, así como prospera tu alma." },
        { key: "judas", name: "Judas", chapters: 1, teaching: "Guardarse en el amor de Dios con misericordia por los que dudan.", takeaway: "Aquel que es poderoso para guardarles sin caída." },
        { key: "apocalipsis", name: "Apocalipsis", chapters: 22, teaching: "La victoria final: Dios enjugará toda lágrima de nuestros ojos.", takeaway: "No habrá más muerte, ni llanto, ni clamor, ni dolor." }
    ]
};

const flagshipPassages = {
    "salmos-23": [
        { num: 1, text: "El Señor es mi pastor; nada me faltará." },
        { num: 2, text: "En lugares de verdes pastos me hace descansar; junto a aguas tranquilas me pastorea." },
        { num: 3, text: "Él renueva mis fuerzas y me guía por sendas de justicia por amor a su nombre." },
        { num: 4, text: "Aunque cruce por el valle más oscuro y tenebroso, no tendré miedo a ningún mal, porque tú estás a mi lado; tu vara y tu cayado me infunden aliento." },
        { num: 5, text: "Preparas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite y mi copa está rebosando." },
        { num: 6, text: "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida, y en la casa del Señor habitaré para siempre." }
    ],
    "marcos-1": [
        { num: 1, text: "Principio de la buena noticia de Jesucristo, Hijo de Dios." },
        { num: 9, text: "Aconteció en aquellos días que Jesús vino de Nazaret de Galilea y fue bautizado por Juan en el Jordán." },
        { num: 10, text: "Y luego, al salir del agua, vio abrirse los cielos y al Espíritu como paloma que descendía sobre Él." },
        { num: 11, text: "Y vino una voz de los cielos que decía: 'Tú eres mi Hijo amado; en ti tengo complacencia'." },
        { num: 14, text: "Jesús vino a Galilea predicando la buena noticia: 'El tiempo se ha cumplido y el reino de Dios se ha acercado; vuélvanse a Dios y crean en esta verdad'." },
        { num: 40, text: "Vino a Él un hombre con lepra rogándole de rodillas: 'Si quieres, puedes limpiarme'." },
        { num: 41, text: "Y Jesús, teniendo compasión de él, extendió la mano y le tocó, y le dijo: 'Quiero, sé limpio'. Y al instante la lepra desapareció." }
    ],
    "juan-3": [
        { num: 16, text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en Él cree no se pierda, mas tenga vida eterna." },
        { num: 17, text: "Porque no envió Dios a su Hijo al mundo para condenar al mundo, sino para que el mundo sea salvo por Él." },
        { num: 18, text: "El que en Él cree no es condenado; su corazón encuentra descanso y reconciliación definitiva con su Creador." }
    ],
    "romanos-8": [
        { num: 1, text: "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús." },
        { num: 31, text: "¿Qué diremos a esto? Si Dios es por nosotros, ¿quién contra nosotros?" },
        { num: 38, text: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni lo presente, ni lo porvenir..." },
        { num: 39, text: "...ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." }
    ]
};

// ==========================================================================
// 5. NAVEGADOR BÍBLICO & AUDIO CONTINUO
// ==========================================================================
const bibleTestamentSelect = document.getElementById('bible-testament-select');
const bibleBookSelect = document.getElementById('bible-book-select');
const bibleChapterSelect = document.getElementById('bible-chapter-select');

const readingTitleDisplay = document.getElementById('reading-title-display');
const readingTimeDisplay = document.getElementById('reading-reading-time');
const versesContainer = document.getElementById('reading-verses-container');
const readingTeachingText = document.getElementById('reading-teaching-text');
const readingTakeawayText = document.getElementById('reading-takeaway-text');

const audioBookTitle = document.getElementById('audio-book-title');
const btnAudioPlay = document.getElementById('btn-audio-play');
const btnAudioStop = document.getElementById('btn-audio-stop');

let isSpeaking = false;

function loadBooks() {
    const testament = bibleTestamentSelect.value;
    const books = bibleMetadata[testament];
    bibleBookSelect.innerHTML = '';

    books.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.key;
        opt.textContent = b.name;
        bibleBookSelect.appendChild(opt);
    });
    loadChapters();
}

function loadChapters() {
    const testament = bibleTestamentSelect.value;
    const bookKey = bibleBookSelect.value;
    const book = bibleMetadata[testament].find(b => b.key === bookKey);
    bibleChapterSelect.innerHTML = '';

    for (let c = 1; c <= book.chapters; c++) {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = `Capítulo ${c}`;
        bibleChapterSelect.appendChild(opt);
    }
    fetchAndDisplayChapter();
}

async function fetchAndDisplayChapter() {
    stopBibleSpeech();

    const testament = bibleTestamentSelect.value;
    const bookKey = bibleBookSelect.value;
    const chapterNum = bibleChapterSelect.value;
    const book = bibleMetadata[testament].find(b => b.key === bookKey);

    readingTitleDisplay.textContent = `${book.name} — Capítulo ${chapterNum}`;
    audioBookTitle.textContent = `${book.name} ${chapterNum}`;
    readingTeachingText.textContent = book.teaching;
    readingTakeawayText.textContent = book.takeaway;

    const cacheKey = `${bookKey}-${chapterNum}`;

    if (flagshipPassages[cacheKey]) {
        renderVerses(flagshipPassages[cacheKey]);
        return;
    }

    versesContainer.innerHTML = '<p class="loading-verses">Cargando versículos en lenguaje claro...</p>';

    try {
        const response = await fetch(`https://bible-api.com/${encodeURIComponent(book.name)}+${chapterNum}?translation=almeida`);
        if (!response.ok) throw new Error("Fallback");
        const data = await response.json();

        if (data && data.verses && data.verses.length > 0) {
            const formatted = data.verses.map(v => ({ num: v.verse, text: v.text.trim() }));
            renderVerses(formatted);
        } else {
            throw new Error("No data");
        }
    } catch (e) {
        const fallbackText = [
            { num: 1, text: `Este es el capítulo ${chapterNum} del libro de ${book.name}.` },
            { num: 2, text: `En este pasaje, el Padre nos recuerda que ${book.teaching.toLowerCase()}` },
            { num: 3, text: `Camina hoy con tranquilidad y firmeza sabiendo que ${book.takeaway.toLowerCase()}` }
        ];
        renderVerses(fallbackText);
    }
}

function renderVerses(versesList) {
    versesContainer.innerHTML = '';
    let totalWords = 0;

    versesList.forEach(v => {
        totalWords += v.text.split(' ').length;
        const p = document.createElement('p');
        p.className = 'verse-block';
        p.innerHTML = `<span class="verse-num">${v.num}</span>${escapeHtml(v.text)}`;
        versesContainer.appendChild(p);
    });

    const estMinutes = Math.max(1, Math.round(totalWords / 130));
    readingTimeDisplay.textContent = `⏱ ${estMinutes} min de lectura`;
}

function getSpokenText() {
    const title = readingTitleDisplay.textContent;
    const blocks = versesContainer.querySelectorAll('.verse-block');
    let text = `${title}. `;
    blocks.forEach(b => {
        text += `${b.textContent}. `;
    });
    text += `Enseñanza: ${readingTeachingText.textContent}. ${readingTakeawayText.textContent}`;
    return text;
}

function playBibleSpeech() {
    if (!('speechSynthesis' in window)) {
        alert("Tu navegador no soporta síntesis de voz.");
        return;
    }

    window.speechSynthesis.cancel();
    const text = getSpokenText();
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'es-ES';
    utterance.rate = 0.95;

    utterance.onend = stopBibleSpeech;
    utterance.onerror = stopBibleSpeech;

    window.speechSynthesis.speak(utterance);
    isSpeaking = true;
    btnAudioPlay.textContent = "⏸ Pausar";
    btnAudioStop.style.display = "inline-block";
}

function stopBibleSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    btnAudioPlay.textContent = "▶ Escuchar capítulo";
    btnAudioStop.style.display = "none";
}

btnAudioPlay.addEventListener('click', () => {
    if (!isSpeaking) {
        playBibleSpeech();
    } else {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            btnAudioPlay.textContent = "⏸ Pausar";
        } else {
            window.speechSynthesis.pause();
            btnAudioPlay.textContent = "▶ Reanudar";
        }
    }
});

btnAudioStop.addEventListener('click', stopBibleSpeech);

bibleTestamentSelect.addEventListener('change', loadBooks);
bibleBookSelect.addEventListener('change', loadChapters);
bibleChapterSelect.addEventListener('change', fetchAndDisplayChapter);

bibleTestamentSelect.value = "nuevo";
loadBooks();
bibleBookSelect.value = "marcos";
loadChapters();
bibleChapterSelect.value = "1";
fetchAndDisplayChapter();

// ==========================================================================
// 6. SISTEMA DE FILTRO ESTILO ROBLOX (Censura ###### & Bloqueo Inmoral)
// ==========================================================================
const bannedWords = [
    "puta", "puto", "mierda", "conchetumadre", "ctm", "culiao", "weon", "wn",
    "pendejo", "bastardo", "maricon", "verga", "pito", "polla", "pene", "vagina",
    "sexo", "porno", "porn", "xxx", "tetas", "culo", "chucha", "zorra", "malparido",
    "gonorrea", "chupala", "mamada", "prostituta", "perra", "idiota", "estupido"
];

function containsInappropriateContent(text) {
    const lower = text.toLowerCase();
    return bannedWords.some(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        return regex.test(lower) || lower.includes(word);
    });
}

function applyRobloxFilter(text) {
    let filtered = text;
    bannedWords.forEach(word => {
        const regex = new RegExp(word, 'gi');
        filtered = filtered.replace(regex, "######");
    });
    return filtered;
}

function escapeHtml(string) {
    return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==========================================================================
// 7. HISTORIAS, ANÉCDOTAS Y TESTIMONIOS ("NO ESTÁS SOLO EN ESTO")
// ==========================================================================
const initialStories = [
    {
        id: 1,
        author: "Mateo, 20 años",
        badge: "De la culpa a la paz",
        content: "Crecí en una casa donde cada domingo se sentía como un examen moral. Creía que si cometía un error, Dios me tachaba de su lista. Cuando entendí que Él no es un inspector sino un Padre que me acompaña en mis caídas, se me quitó un peso enorme de los hombros."
    },
    {
        id: 2,
        author: "Sofía, 22 años",
        badge: "Orar sin libreto",
        content: "Odiaba rezar porque sentía que repetía palabras huecas que no nacían de mí. Dejé de hacerlo por años. Un día, con mucha rabia y tristeza, simplemente le hablé como le hablaría a alguien sentado al lado mío en mi pieza. Por primera vez sentí que me escuchaban de verdad."
    },
    {
        id: 3,
        author: "Lucas, 19 años",
        badge: "Dudas sin miedo",
        content: "En mi entorno, hacer preguntas difíciles era pecado. Me alejé pensando que la fe era para mentes ciegas. Pero descubrí al Jesús real: el que debatía con paciencia y no huía de las dudas. Hoy tengo una amistad honesta con Él sin fingir que lo entiendo todo."
    }
];

let communityStoriesList = JSON.parse(localStorage.getItem('community_stories_feed')) || initialStories;

const shareStoryForm = document.getElementById('share-story-form');
const storyAuthorInput = document.getElementById('story-author-input');
const storyBadgeInput = document.getElementById('story-badge-input');
const storyContentInput = document.getElementById('story-content-input');
const storiesGridFeed = document.getElementById('stories-grid-feed');

function renderStoriesFeed() {
    storiesGridFeed.innerHTML = '';
    communityStoriesList.forEach(story => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';

        const cleanAuthor = applyRobloxFilter(story.author);
        const cleanBadge = applyRobloxFilter(story.badge);
        const cleanContent = applyRobloxFilter(story.content);

        card.innerHTML = `
            <div>
                <div class="testimonial-header">
                    <span class="testimonial-author">${escapeHtml(cleanAuthor)}</span>
                    <span class="testimonial-badge">${escapeHtml(cleanBadge)}</span>
                </div>
                <p class="testimonial-body">"${escapeHtml(cleanContent)}"</p>
            </div>
        `;
        storiesGridFeed.appendChild(card);
    });
}

shareStoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = storyAuthorInput.value.trim();
    const badge = storyBadgeInput.value.trim();
    const content = storyContentInput.value.trim();

    if (!author || !badge || !content) return;

    if (containsInappropriateContent(author)) {
        alert("Por favor utiliza un nombre o apodo respetuoso para publicar tu historia.");
        return;
    }

    const newStory = {
        id: Date.now(),
        author: author,
        badge: badge,
        content: content
    };

    communityStoriesList.unshift(newStory);
    localStorage.setItem('community_stories_feed', JSON.stringify(communityStoriesList));

    renderStoriesFeed();

    storyAuthorInput.value = '';
    storyBadgeInput.value = '';
    storyContentInput.value = '';

    storiesGridFeed.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

renderStoriesFeed();

// ==========================================================================
// 8. CHAT COMUNITARIO (Ingreso, Persistencia y Feed)
// ==========================================================================
let currentChatUser = localStorage.getItem('chat_current_user') || null;

const initialChatMessages = [
    {
        id: 1,
        user: "Matías (Chile)",
        time: "14:10",
        text: "Hoy rendí una prueba que me tenía sin dormir hace días. Me acordé de que Dios camina en lo cotidiano y respiré hondo. Fuerza a los que tienen una semana pesada."
    },
    {
        id: 2,
        user: "Cami (Colombia)",
        time: "14:22",
        text: "Yo no soy de ninguna religión estricta y siempre sentía que no encajaba. Me da mucha paz este rincón donde no te juzgan por tus dudas."
    },
    {
        id: 3,
        user: "Lucas",
        time: "14:35",
        text: "Llevo 4 días limpio y dando la pelea. Saber que el Padre no me mira con asco me dio las fuerzas para levantarme de nuevo."
    }
];

let chatMessagesList = JSON.parse(localStorage.getItem('community_chat_history')) || initialChatMessages;

const loginScreen = document.getElementById('chat-login-screen');
const activeScreen = document.getElementById('chat-active-screen');
const loginForm = document.getElementById('chat-login-form');
const usernameInput = document.getElementById('chat-username-input');
const gateErrorMsg = document.getElementById('gate-error-msg');
const currentUserDisplay = document.getElementById('current-user-display');
const btnLogoutChat = document.getElementById('btn-logout-chat');

const chatSendForm = document.getElementById('chat-send-form');
const chatMessageInput = document.getElementById('chat-message-input');
const chatMessagesContainer = document.getElementById('chat-messages-container');

function checkChatAuth() {
    if (currentChatUser) {
        loginScreen.style.display = 'none';
        activeScreen.style.display = 'flex';
        currentUserDisplay.textContent = currentChatUser;
        renderChatFeed();
    } else {
        loginScreen.style.display = 'block';
        activeScreen.style.display = 'none';
        gateErrorMsg.textContent = '';
        usernameInput.value = '';
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = usernameInput.value.trim();

    if (!name) return;

    if (containsInappropriateContent(name)) {
        gateErrorMsg.textContent = "⚠️ Nombre no permitido. Por favor elige un apodo respetuoso para entrar.";
        usernameInput.value = '';
        return;
    }

    currentChatUser = name;
    localStorage.setItem('chat_current_user', currentChatUser);
    checkChatAuth();
});

btnLogoutChat.addEventListener('click', () => {
    localStorage.removeItem('chat_current_user');
    currentChatUser = null;
    checkChatAuth();
});

function renderChatFeed() {
    chatMessagesContainer.innerHTML = '';
    chatMessagesList.forEach(item => {
        const isMine = item.user === currentChatUser;
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${isMine ? 'mine' : ''}`;
        
        const cleanText = applyRobloxFilter(item.text);

        bubble.innerHTML = `
            <div class="bubble-header">
                <span class="bubble-user">${escapeHtml(item.user)}</span>
                <span class="bubble-time">${item.time}</span>
            </div>
            <p class="bubble-text">${escapeHtml(cleanText)}</p>
        `;
        chatMessagesContainer.appendChild(bubble);
    });
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

chatSendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawText = chatMessageInput.value.trim();
    if (!rawText || !currentChatUser) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = {
        id: Date.now(),
        user: currentChatUser,
        time: timeStr,
        text: rawText
    };

    chatMessagesList.push(newMsg);
    localStorage.setItem('community_chat_history', JSON.stringify(chatMessagesList));

    renderChatFeed();
    chatMessageInput.value = '';
});

checkChatAuth();

// ==========================================================================
// 9. ORACIONES GUIADAS PARA MOMENTOS REALES
// ==========================================================================
const realPrayersData = {
    insomnio: {
        scenario: "Situación: Insomnio a las 3:00 AM y sobrepensando",
        text: '"Papá, son las tres de la mañana y mi cabeza sigue dando vueltas a mil cosas que no puedo resolver ahora. Siento un nudo en el estómago y me cansa no poder apagar este ruido. Hoy no vengo a pedirte cosas con elocuencia; solo vengo a decirte que estoy cansado. Toma mis pendientes, mis dudas de mañana y el miedo a fallar. Te entrego esta noche. Acompáñame en esta pieza en silencio y dame la tranquilidad para cerrar los ojos sabiendo que tú estás despierto cuidando de mí."',
        whisper: 'Lo que tu Padre te responde: "Suelta la guardia, hijo. El mundo sigue girando bajo mi cuidado; tú solo descansa hoy."'
    },
    familia: {
        scenario: "Situación: Conflictos, gritos o frialdad en casa",
        text: '"Papá, qué difícil se me hace estar en mi casa a veces. Hay discusiones, palabras hirientes o un silencio incómodo que me deja con ganas de salir corriendo. Me cuesta no guardar rencor y me duele sentirme incomprendido por las personas que deberían cuidarme. Pon un freno en mi boca para no responder con odio y cuida mi corazón para que no se vuelva frío. Si no puedo cambiar a mi familia hoy, al menos sé tú mi refugio seguro."',
        whisper: 'Lo que tu Padre te responde: "Sé lo que duele tu hogar terrenal. Recuerda que siempre tienes un lugar de paz y valor en mis brazos."'
    },
    examen: {
        scenario: "Situación: Pánico antes de una prueba, examen o entrevista",
        text: '"Papá, tengo el pecho apretado por lo que viene hoy. Estudié y me esforcé (o quizás no tanto como quise), pero el miedo a quedarme en blanco y defraudar me está paralizando. Te pido que calmes mis manos y mis pensamientos. Recuérdame que una nota, un examen o el veredicto de otros no define quién soy ni destruye mi futuro. Dame claridad mental y acompáñame en cada minuto."',
        whisper: 'Lo que tu Padre te responde: "Haz lo mejor que puedas y déjame el resto a mí. Tu valor para mí no depende de una calificación."'
    },
    silencio: {
        scenario: "Situación: Cuando sientes que Dios no responde ni se siente",
        text: '"Papá, te hablo con honestidad cruda: no siento nada. Siento que le hablo al techo y que el cielo está cerrado. Escucho a otros decir que te sienten tan cerca y yo solo siento un vacío silencioso. Pero hoy no decido creer en ti por una emoción pasajera, sino por fidelidad. Aunque hoy no te sienta, sé que estás aquí en mi pieza. Dame paciencia para aguantar este desierto y recuérdame que tu silencio no significa abandono."',
        whisper: 'Lo que tu Padre te responde: "No me he movido de tu lado. Cuando menos me sientas, es cuando más cerca estoy sosteniéndote."'
    },
    soledad: {
        scenario: "Situación: Soledad profunda en fin de semana",
        text: '"Papá, abro el celular y parece que todo el mundo tiene planes, risas y amigos menos yo. Odio sentir que no encajo o que a nadie le importaría si hoy no estoy. Me duele este aislamiento. Ven y llena este espacio en mi cama. Enséñame a disfrutar mi propia compañía contigo y pon en mi camino personas sinceras con las que pueda ser yo mismo sin miedo a ser juzgado."',
        whisper: 'Lo que tu Padre te responde: "Mírame a mí: jamás te he dejado solo ni un segundo. Para mí eres el tesoro más grande."'
    },
    rabia: {
        scenario: "Situación: Rabia, frustración e impotencia con la vida",
        text: '"Papá, hoy tengo rabia. Estoy molesto con cómo salieron las cosas, con lo injusta que se siente la vida y hasta me cuesta entender por qué permites que todo sea tan difícil para mí mientras a otros parece que todo les va bien. No te lo voy a endulzar: estoy enojado. Pero prefiero gritarte y llorar contigo antes que darte la espalda. Recibe mi furia y ayúdame a entender lo que hoy no tiene sentido."',
        whisper: 'Lo que tu Padre te responde: "No me asusta tu enojo; me alegra que me lo cuentes a mí en lugar de tragarte el veneno. Aquí estoy para sanarte."'
    }
};

const prayerButtons = document.querySelectorAll('.prayer-btn');
const prayerScenarioTag = document.getElementById('prayer-scenario-tag');
const prayerText = document.getElementById('prayer-text');
const prayerFatherWhisper = document.getElementById('prayer-father-whisper');
const btnCopyPrayer = document.getElementById('btn-copy-prayer');
const prayerDisplayCard = document.querySelector('.prayer-display-card');

prayerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        prayerButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const key = btn.getAttribute('data-prayer');
        const data = realPrayersData[key];

        prayerDisplayCard.style.opacity = 0;
        setTimeout(() => {
            prayerScenarioTag.textContent = data.scenario;
            prayerText.textContent = data.text;
            prayerFatherWhisper.textContent = data.whisper;
            prayerDisplayCard.style.opacity = 1;
        }, 180);
    });
});

btnCopyPrayer.addEventListener('click', () => {
    navigator.clipboard.writeText(prayerText.textContent).then(() => {
        const orig = btnCopyPrayer.textContent;
        btnCopyPrayer.textContent = "¡Copiada!";
        setTimeout(() => {
            btnCopyPrayer.textContent = orig;
        }, 1500);
    });
});

// ==========================================================================
// 10. BANCO DE RESPUESTAS DEL PADRE PARA EL MURO DE DESAHOGO
// ==========================================================================
const fatherReplies = {
    pureza: [
        "Mírame a los ojos: no te tengo asco ni te voy a soltar la mano por esto. Sé perfectamente el vacío y la soledad que sentías antes de tocar esa pantalla; sé que buscabas un alivio rápido para un dolor que llevas adentro. Odio esa trampa porque te roba la paz y te llena de mentiras, pero a ti te amo exactamente igual que ayer. Lávate la cara, respira hondo y vuelve a caminar conmigo hoy. No tienes que esperar días para hablarme: te estoy esperando ahora mismo con un abrazo.",
        "Sé lo pesado que se siente el pecho cuando se apaga la pantalla y llega ese silencio helado. Pero escucha esto: tu valor no se destruyó hace diez minutos. No eres un caso perdido ni un hipócrita; eres mi hijo dando una pelea difícil en un mundo saturado. Suelta la culpa que te paraliza y déjame ayudarte a levantarte. Mañana empezamos de nuevo, paso a paso.",
        "Cuando Pedro me falló por miedo, no le grité ni lo expulsé; le preparé el desayuno en la playa. Contigo es exactamente igual. Sé cuántas veces has intentado frenar esto por tus fuerzas y terminas agotado. Deja de pelear solo. Cuando sientas el impulso otra vez, no te encierres: háblale en voz baja en ese mismo segundo. Estoy aquí para protegerte, no para castigarte."
    ],
    cansancio: [
        "Sé lo agotado que estás de fingir que puedes con todo. No te pedí que fueras de hierro ni que sostengas el mundo sobre tus hombros. Hoy no necesitas darme discursos largos ni esforzarte por parecer fuerte. Cierra los ojos, suelta la mochila y descansa. Yo cuido de ti mientras duermes.",
        "Te he visto caminar en automático estos días, sonriendo por fuera para que nadie pregunte y sintiéndote completamente seco por dentro. No estás solo en esa rutina pesada. Permítete parar dos minutos. Mi presencia no es otra tarea que cumplir en tu lista; es el lugar donde puedes dejar de rendir cuentas y simplemente respirar.",
        "No tienes que demostrarme nada. Me alegra que hayas soltado esto aquí en lugar de guardártelo hasta reventar. Respira con calma: las cosas no se van a derrumbar si hoy bajas los brazos y me dejas llevar la carga a mí."
    ],
    dolor: [
        "Vi cada lágrima que cayó cuando nadie te estaba mirando y sé el nudo que tienes en la garganta. No te voy a dar explicaciones frías ni a decirte que 'no es para tanto'. Tu dolor me importa porque tú me importas. Apóyate en mí todo lo que necesites; no me voy a apartar de tu lado en esta tormenta.",
        "A veces la vida golpea de una forma injusta y duele tanto que parece que el pecho no aguanta. No tienes que fingir que estás en paz. Jesús mismo lloró amargamente frente a la pérdida. Aquí tienes permiso de desahogarte, de llorar y de decirme lo que te duele sin miedo.",
        "Aunque hoy sientas que caminas en una noche oscura donde no se ve la salida, prométeme que no te vas a rendir. No estás abandonado en este valle. Sostendré tu mano hasta que vuelva a salir el sol, te lo aseguro."
    ],
    dudas: [
        "Tus preguntas y tus miedos sobre el futuro no me ofenden ni me alejan. Prefiero mil veces tu duda sincera que una fe de palabras vacías repetidas por costumbre. No necesitas tener los próximos cinco años resueltos hoy; solo necesitas dar el paso de hoy tomado de mi mano.",
        "Sé que la incertidumbre te quita el sueño y que miras a los demás sintiendo que todos tienen un rumbo menos tú. No estás atrasado ni perdido. Estoy construyendo raíces en ti que ahora no ves. Confía en mi tiempo: no te voy a dejar a la deriva.",
        "No temas equivocarte de camino buscando con honestidad. Si te desvías, yo mismo saldré a buscarte para traerte de vuelta con calma. Camina con tranquilidad: mi fidelidad no depende de que tú lo tengas todo claro."
    ],
    agradecido: [
        "Me alegra tanto verte en paz hoy. Saber que reconoces la luz en medio de los días difíciles llena mi corazón de gozo. Disfruta este momento, guárdalo en tu memoria y recuerda que siempre estoy aquí celebrando tus alegrías.",
        "Gracias por acordarte de mí no solo cuando aprieta el dolor, sino también cuando hay tranquilidad y gratitud en tu vida. Es hermoso caminar esta amistad contigo día a día."
    ]
};

function generateFatherReply(tag, userText) {
    const textLower = userText.toLowerCase();
    
    if (tag === "Batallas con la pureza" || textLower.includes("porno") || textLower.includes("masturb") || textLower.includes("lujuria") || textLower.includes("recaí") || textLower.includes("fallé")) {
        const pool = fatherReplies.pureza;
        return pool[Math.floor(Math.random() * pool.length)];
    }
    
    if (tag === "En medio del dolor" || textLower.includes("llor") || textLower.includes("dolor") || textLower.includes("triste") || textLower.includes("perdí")) {
        const pool = fatherReplies.dolor;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    if (tag === "Dudas y batallas" || textLower.includes("futuro") || textLower.includes("miedo") || textLower.includes("duda") || textLower.includes("no sé qué")) {
        const pool = fatherReplies.dudas;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    if (tag === "Agradecimiento sincero" || textLower.includes("gracias") || textLower.includes("paz")) {
        const pool = fatherReplies.agradecido;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    const pool = fatherReplies.cansancio;
    return pool[Math.floor(Math.random() * pool.length)];
}

const seedTestimonies = [
    {
        id: 1,
        tag: "Batallas con la pureza",
        text: "Acabo de caer de nuevo con el celular a solas en mi pieza. Llevaba 5 días bien y volví a fallar. Me da un asco tremendo de mí mismo, siento que no tengo perdón y que Dios ya debe estar harto de escucharme prometer lo mismo cada semana.",
        time: "Hace 20 minutos",
        supportCount: 45,
        fatherReply: "Mírame a los ojos: no te tengo asco ni te voy a soltar la mano por esto. Sé perfectamente el vacío y la soledad que sentías antes de tocar esa pantalla; sé que buscabas un anestésico para tu mente. Odio esa trampa porque te roba la paz, pero a ti te amo exactamente igual que ayer. Lávate la cara, respira hondo y vuelve a caminar conmigo hoy. No esperes tres días para hablarme: te espero con los brazos abiertos ahora mismo."
    },
    {
        id: 2,
        tag: "Desahogo profundo",
        text: "Hoy fue uno de esos días donde siento que camino en automático. No tengo fuerzas para aparentar que todo está bien frente a mi familia. Solo cerré los ojos dos minutos en el bus y le dije a Dios: 'No tengo palabras hoy, solo cansancio de todo'.",
        time: "Hace 2 horas",
        supportCount: 19,
        fatherReply: "Sé lo agotado que estás de fingir que puedes con todo frente a los demás. No te pedí que fueras de hierro ni que sostengas el mundo sobre tus hombros. Hoy no necesitas darme discursos largos ni sonrisas forzadas: cierra los ojos, suelta la mochila y descansa en paz. Yo cuido de ti."
    },
    {
        id: 3,
        tag: "Dudas y batallas",
        text: "Toda mi vida me dijeron que si dudaba o hacía preguntas difíciles sobre mi fe me iba a ir al infierno. Viví con terror infantil por años. Tengo miedo al futuro y a veces no sé si realmente encajo en este mundo.",
        time: "Ayer",
        supportCount: 31,
        fatherReply: "Tus preguntas y tus miedos no me ofenden ni me alejan. Los hombres religiosos le tienen miedo a las preguntas, pero yo no. Prefiero mil veces tu duda honesta que una religión de caretas. No tienes que resolver los próximos diez años hoy; camina paso a paso conmigo, yo jamás te dejaré a la deriva."
    }
];

let allTestimonies = JSON.parse(localStorage.getItem('global_testimonies_feed')) || seedTestimonies;
let currentFilter = 'todos';

const globalWallForm = document.getElementById('global-wall-form');
const testimonyInput = document.getElementById('testimony-input');
const testimonyTag = document.getElementById('testimony-tag');
const testimoniesFeed = document.getElementById('testimonies-feed');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderTestimonies() {
    testimoniesFeed.innerHTML = '';

    const filtered = currentFilter === 'todos' 
        ? allTestimonies 
        : allTestimonies.filter(item => item.tag === currentFilter);

    if (filtered.length === 0) {
        testimoniesFeed.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 30px;">Aún no hay mensajes en esta categoría. Sé el primero en dejar uno anónimo.</p>';
        return;
    }

    filtered.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'testimony-card-item';
        card.innerHTML = `
            <div class="testimony-meta">
                <span class="tag-pill">${item.tag}</span>
                <span class="time-stamp">${item.time}</span>
            </div>
            
            <div class="testimony-user-side">
                <p class="testimony-text">"${escapeHtml(item.text)}"</p>
                <span class="author-ghost">— Desahogo de una Voz Anónima</span>
            </div>

            <div class="father-reply-box">
                <div class="father-reply-header">
                    <span class="father-icon">🕊️</span>
                    <span class="father-name">Respuesta de tu Padre para ti:</span>
                </div>
                <p class="father-reply-text">${escapeHtml(item.fatherReply)}</p>
            </div>

            <div class="testimony-footer-bar">
                <button class="btn-pray-support" onclick="supportTestimony(${item.id})">
                    <span>🕊️ Te acompaño en silencio</span> 
                    <strong>${item.supportCount}</strong>
                </button>
            </div>
        `;
        testimoniesFeed.appendChild(card);
    });
}

function supportTestimony(id) {
    const item = allTestimonies.find(t => t.id === id);
    if (item) {
        item.supportCount++;
        localStorage.setItem('global_testimonies_feed', JSON.stringify(allTestimonies));
        renderTestimonies();
    }
}

globalWallForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = testimonyInput.value.trim();
    if (!text) return;

    const tag = testimonyTag.value;
    const reply = generateFatherReply(tag, text);

    const newTestimony = {
        id: Date.now(),
        tag: tag,
        text: text,
        time: "Recién publicado",
        supportCount: 1,
        fatherReply: reply
    };

    allTestimonies.unshift(newTestimony);
    localStorage.setItem('global_testimonies_feed', JSON.stringify(allTestimonies));

    testimonyInput.value = '';
    renderTestimonies();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderTestimonies();
    });
});

renderTestimonies();

// ==========================================================================
// 11. AUXILIO RÁPIDO PARA LUCHAS DE PUREZA (SOS)
// ==========================================================================
const sosData = {
    temptation: {
        title: "Suelta la pantalla, levántate y respira",
        text: "El impulso suele durar entre diez y quince minutos en su punto máximo. No intentes debatir con tu cabeza acostado en la cama con el celular en la mano: ponte de pie, toma un vaso con agua, sal de la pieza o camina al patio. Háblale a Dios con franqueza: 'Tengo ganas de caer, no quiero esto, acompáñame estos diez minutos'. Él no se escandaliza de tus impulsos; quiere darte calma para superarlos.",
        quote: '"Fiel es Dios, que no los dejará ser tentados más de lo que pueden resistir."'
    },
    relapse: {
        title: "No te escondas; la puerta sigue abierta de par en par",
        text: "Acabas de fallar y la cabeza te está diciendo que eres un hipócrita y que Dios está harto de ti. Esa voz NO es la de tu Padre. El acusador te tienta con placer y luego te hunde con asco. Lávate la cara, respira hondo y dile: 'Papá, caí de nuevo, me duele haberte fallado y fallarme a mí mismo, pero elijo tu perdón antes que mi vergüenza'. Levántate hoy mismo. Tu valor ante Él no disminuyó ni un milímetro.",
        quote: '"Siete veces cae el justo, y vuelve a levantarse."'
    }
};

const btnSosTemptation = document.getElementById('btn-sos-temptation');
const btnSosRelapse = document.getElementById('btn-sos-relapse');
const sosDisplay = document.getElementById('sos-message-display');
const sosTitle = document.getElementById('sos-title');
const sosText = document.getElementById('sos-text');
const sosQuote = document.getElementById('sos-quote');

function showSos(type) {
    const data = sosData[type];
    sosTitle.textContent = data.title;
    sosText.textContent = data.text;
    sosQuote.textContent = data.quote;
    sosDisplay.style.display = 'block';
    sosDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

btnSosTemptation.addEventListener('click', () => showSos('temptation'));
btnSosRelapse.addEventListener('click', () => showSos('relapse'));

// ==========================================================================
// 12. BUSCADOR DE CONSUELO POR EMOCIÓN
// ==========================================================================
const comfortDatabase = [
    {
        keywords: ["avanzo", "estancado", "lento", "atrasado", "progreso", "bloqueado"],
        badge: "Cuando sientes que no avanzas",
        headline: "Tu valor no se mide por la velocidad del mundo",
        message: "Vivimos comparándonos con el ritmo de los demás y creemos que si nos frenamos, hemos fallado. Dios no tiene prisa; Él trabaja en lo invisible antes de que se vea por fuera. No estás atrasado: estás siendo formado en el silencio con paciencia.",
        verse: '"El que comenzó en ustedes la buena obra, la irá perfeccionando día a día."'
    },
    {
        keywords: ["futuro", "miedo", "incertidumbre", "mañana", "angustia", "temor", "que pasara"],
        badge: "Frente al miedo al futuro",
        headline: "No tienes que resolver los próximos diez años hoy",
        message: "El miedo al futuro nace de querer controlar cosas que todavía no existen. Dios no te da fuerzas para los problemas del próximo año; te da la paz que necesitas para las próximas veinticuatro horas. Suelta el control y camina paso a paso.",
        verse: '"No se angustien por el día de mañana, porque el mañana traerá sus propias preocupaciones."'
    },
    {
        keywords: ["culpa", "fallar", "error", "peque", "mal paso", "verguenza", "malo", "porno", "masturbacion", "lujuria"],
        badge: "Cuando la culpa te aplasta",
        headline: "Un mal día no borra tu lugar como hijo",
        message: "La religión fría usa la culpa para hacerte sentir sucio y alejarte. Tu Padre hace exactamente lo contrario: te invita a acercarte con tus pedazos rotos. Él ya sabía que te ibas a equivocar antes de que nacieras, y aun así decidió amarte.",
        verse: '"No vino a juzgar al mundo, sino a rescatar lo que se había perdido."'
    },
    {
        keywords: ["soledad", "solo", "aislado", "vacio", "nadie", "incomprendido"],
        badge: "En el silencio de la soledad",
        headline: "Tu dolor no es invisible para Él",
        message: "Puedes estar rodeado de gente y aun así sentir un frío por dentro. Jesús conoció lo que es ser incomprendido incluso por su propia familia. Cuando sientas que a nadie le importa lo que te pasa, háblale en voz baja. Él está en esa misma habitación.",
        verse: '"No te desampararé, ni te dejaré. Nunca estás solo."'
    },
    {
        keywords: ["cansancio", "agotado", "no puedo", "rendirse", "peso", "harto"],
        badge: "Para cuando ya no tienes fuerzas",
        headline: "Está bien decir 'no doy más'",
        message: "No tienes que ser el pilar inquebrantable de todos. Dios jamás te exigió que resistas a costa de tu salud y tu mente. Hay momentos donde orar es simplemente acostarse, cerrar los ojos y descansar sabiendo que Él sostiene el mundo por ti.",
        verse: '"Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso."'
    }
];

const comfortInput = document.getElementById('comfort-input');
const btnSearchComfort = document.getElementById('btn-search-comfort');
const comfortResult = document.getElementById('comfort-result');
const comfortBadge = document.getElementById('comfort-badge');
const comfortHeadline = document.getElementById('comfort-headline');
const comfortMessage = document.getElementById('comfort-message');
const comfortVerse = document.getElementById('comfort-verse');
const quickTags = document.querySelectorAll('.tag-quick-btn');

function findComfort(query) {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) return;

    let matched = comfortDatabase.find(item => 
        item.keywords.some(k => cleanQuery.includes(k))
    );

    if (!matched) {
        matched = {
            badge: "Para lo que llevas dentro",
            headline: "Cualquiera que sea tu carga, puedes soltarla aquí",
            message: `A veces ni nosotros mismos tenemos palabras para describir lo que sentimos. No necesitas etiquetarlo con precisión; tu Padre conoce tu corazón antes de que hables. Dile con tus propias palabras lo que te duele o te agota: Él te escucha con paciencia.`,
            verse: '"Echa sobre Él tu carga, y Él te sustentará."'
        };
    }

    comfortBadge.textContent = matched.badge;
    comfortHeadline.textContent = matched.headline;
    comfortMessage.textContent = matched.message;
    comfortVerse.textContent = matched.verse;

    comfortResult.style.display = 'block';
    comfortResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

btnSearchComfort.addEventListener('click', () => {
    findComfort(comfortInput.value);
});

comfortInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        findComfort(comfortInput.value);
    }
});

quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const query = tag.getAttribute('data-query');
        comfortInput.value = tag.textContent;
        findComfort(query);
    });
});

// ==========================================================================
// 13. REFLEXIONES DIARIAS & SELECTOR DE ÁNIMO
// ==========================================================================
const reflexiones = [
    '"El amor y la relación no se imponen. Dios camina contigo en lo cotidiano, no solo cuando las cosas van bien."',
    '"No necesitas palabras perfectas para hablar con Dios; Él prefiere tu honestidad antes que apariencias."',
    '"Jesús nunca apartó a nadie que se acercó con dudas. Tu curiosidad no lo molesta, le alegra."',
    '"La fe real no es sentir culpa constante, es saber que tienes un refugio seguro a donde regresar siempre."',
    '"Dios no te está midiendo con una regla; te está esperando con un abrazo de Padre."'
];

const quoteText = document.getElementById('quote-text');
const btnQuote = document.getElementById('btn-quote');
const btnCopy = document.getElementById('btn-copy');
const btnWhatsapp = document.getElementById('btn-whatsapp');

function updateWhatsappLink(texto) {
    const mensaje = encodeURIComponent(`${texto}\n\nDescubre más en nuestra web`);
    btnWhatsapp.href = `https://api.whatsapp.com/send?text=${mensaje}`;
}

updateWhatsappLink(quoteText.textContent);

btnQuote.addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * reflexiones.length);
    } while (reflexiones[randomIndex] === quoteText.textContent && reflexiones.length > 1);

    quoteText.style.opacity = 0;
    setTimeout(() => {
        quoteText.textContent = reflexiones[randomIndex];
        quoteText.style.opacity = 1;
        updateWhatsappLink(reflexiones[randomIndex]);
    }, 200);
});

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.textContent).then(() => {
        const orig = btnCopy.textContent;
        btnCopy.textContent = "¡Copiado!";
        setTimeout(() => {
            btnCopy.textContent = orig;
        }, 1500);
    });
});

quoteText.style.transition = 'opacity 0.2s ease-in-out';

const moodData = {
    ansiedad: {
        title: "Descansa, no tienes que sostenerlo todo solo.",
        desc: "Dios no te pide que seas fuerte las 24 horas del día. Cuando estés abrumado, simplemente dile: 'No puedo con esto hoy, acompáñame'. Su presencia no es una carga más; es un lugar donde soltar la mochila."
    },
    culpa: {
        title: "No necesitas esconderte; Él ya te conoce y te ama.",
        desc: "Un mal paso no borra el amor de un Padre. Él no te señala con el dedo ni te pone a prueba para ver si mereces su cariño. Acércate con honestidad, dile lo que pasó y recibe su paz para volver a empezar."
    },
    dudas: {
        title: "Tus dudas son bienvenidas aquí.",
        desc: "Tener preguntas no te aleja de Dios; te acerca si buscas con sinceridad. Jesús nunca rechazó a nadie que vino con dudas honestas. No finjas certezas que hoy no tienes; empieza con lo que eres hoy."
    },
    agradecido: {
        title: "Celebra lo bueno junto a quien te lo dio.",
        desc: "A veces la vida tiene momentos de luz, paz y alegría. No dejes pasar el momento: dale las gracias como quien le agradece a un amigo que ha estado ahí en las buenas y en las malas."
    }
};

const moodButtons = document.querySelectorAll('.btn-mood');
const moodTitle = document.getElementById('mood-title');
const moodDesc = document.getElementById('mood-desc');
const moodCard = document.querySelector('.mood-card');

moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        moodButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const mood = btn.getAttribute('data-mood');
        const data = moodData[mood];

        moodCard.style.opacity = 0;
        setTimeout(() => {
            moodTitle.textContent = data.title;
            moodDesc.textContent = data.desc;
            moodCard.style.opacity = 1;
        }, 200);
    });
});

// ==========================================================================
// 14. SONIDO AMBIENTAL ACÚSTICO (Web Audio API)
// ==========================================================================
let audioCtx = null;
let ambientInterval = null;
let isPlayingAmbient = false;

const btnAmbient = document.getElementById('btn-ambient');
const ambientLabel = document.getElementById('ambient-label');
const notesFrequencies = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];

function playSoftTone() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    const freq = notesFrequencies[Math.floor(Math.random() * notesFrequencies.length)];
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 1.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 4.6);
}

btnAmbient.addEventListener('click', () => {
    if (!isPlayingAmbient) {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        audioCtx.resume();
        playSoftTone();
        ambientInterval = setInterval(playSoftTone, 2800);
        btnAmbient.classList.add('playing');
        ambientLabel.textContent = "Calma activa";
        isPlayingAmbient = true;
    } else {
        clearInterval(ambientInterval);
        btnAmbient.classList.remove('playing');
        ambientLabel.textContent = "Música / Calma";
        isPlayingAmbient = false;
    }
});

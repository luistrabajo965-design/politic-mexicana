/* ============================================================
   LUNA GAME
   MOTOR PRINCIPAL
   ============================================================

   Este archivo controla:

   - Inicio / continuar / nueva historia
   - Creación del personaje
   - Estados, municipios y colonias
   - Escenas narrativas
   - Decisiones
   - Tiempo
   - Territorio
   - Personajes
   - Relaciones
   - Equipo
   - Teléfono
   - Agenda
   - Medios
   - Carrera
   - Eventos inesperados
   - Guardado
   - Menús
   - Resultados
   - Progresión política

   Todo funciona sin librerías externas.
   ============================================================ */


/* ============================================================
   01. CONFIGURACIÓN
   ============================================================ */

const GAME_VERSION = "4.0";
const SAVE_KEY = "luna_game_save_v4";


/* ============================================================
   02. DATOS DEL MUNDO
   ============================================================ */

const WORLD = {

    aguascalientes: {
        name: "Aguascalientes",

        municipalities: {
            aguascalientes: {
                name: "Aguascalientes",

                neighborhoods: [
                    "Colonia del Trabajo",
                    "Barrio de Guadalupe",
                    "Barrio de San Marcos",
                    "Barrio de la Purísima",
                    "Las Flores",
                    "La Salud",
                    "Gremial",
                    "Insurgentes",
                    "Ojocaliente",
                    "Pocitos"
                ]
            },

            asientos: {
                name: "Asientos",

                neighborhoods: [
                    "Centro",
                    "Guadalupe",
                    "El Tule",
                    "San Gil",
                    "La Esperanza"
                ]
            },

            calvillo: {
                name: "Calvillo",

                neighborhoods: [
                    "Centro",
                    "Los Arcos",
                    "La Labor",
                    "El Salitre",
                    "San Nicolás"
                ]
            },

            cosio: {
                name: "Cosío",

                neighborhoods: [
                    "Centro",
                    "La Esperanza",
                    "El Refugio",
                    "San Pedro"
                ]
            },

            el_llano: {
                name: "El Llano",

                neighborhoods: [
                    "Centro",
                    "La Luz",
                    "Palo Alto",
                    "Montoro"
                ]
            },

            jesus_maria: {
                name: "Jesús María",

                neighborhoods: [
                    "Centro",
                    "Maravillas",
                    "San Miguel",
                    "Trojes",
                    "Tepetates"
                ]
            },

            pabellon_de_arteaga: {
                name: "Pabellón de Arteaga",

                neighborhoods: [
                    "Centro",
                    "Francisco Villa",
                    "Plutarco Elías Calles",
                    "Popular"
                ]
            },

            rincon_de_romos: {
                name: "Rincón de Romos",

                neighborhoods: [
                    "Centro",
                    "Santa Anita",
                    "Guadalupe",
                    "Magisterial"
                ]
            },

            san_francisco_de_los_romos: {
                name: "San Francisco de los Romo",

                neighborhoods: [
                    "Centro",
                    "La Ribera",
                    "San José del Barranco",
                    "Panamericano"
                ]
            },

            san_jose_de_gracia: {
                name: "San José de Gracia",

                neighborhoods: [
                    "Centro",
                    "El Jocoqui",
                    "San Antonio"
                ]
            },

            tepezala: {
                name: "Tepezalá",

                neighborhoods: [
                    "Centro",
                    "San Antonio",
                    "El Chayote",
                    "Los Alamitos"
                ]
            }
        }
    },


    "baja-california": {
        name: "Baja California",
        municipalities: {
            mexicali: {
                name: "Mexicali",
                neighborhoods: [
                    "Centro",
                    "Santa Isabel",
                    "Industrial",
                    "Progreso"
                ]
            },
            tijuana: {
                name: "Tijuana",
                neighborhoods: [
                    "Zona Centro",
                    "Libertad",
                    "Otay",
                    "Playas"
                ]
            },
            ensenada: {
                name: "Ensenada",
                neighborhoods: [
                    "Centro",
                    "Zona Norte",
                    "Maneadero"
                ]
            }
        }
    },


    "baja-california-sur": {
        name: "Baja California Sur",
        municipalities: {
            la_paz: {
                name: "La Paz",
                neighborhoods: [
                    "Centro",
                    "El Esterito",
                    "Santa Fe"
                ]
            },
            los_cabos: {
                name: "Los Cabos",
                neighborhoods: [
                    "Centro",
                    "San José",
                    "Cabo San Lucas"
                ]
            }
        }
    },


    campeche: {
        name: "Campeche",
        municipalities: {
            campeche: {
                name: "Campeche",
                neighborhoods: [
                    "Centro",
                    "San Francisco",
                    "Santa Ana"
                ]
            }
        }
    },


    coahuila: {
        name: "Coahuila",
        municipalities: {
            saltillo: {
                name: "Saltillo",
                neighborhoods: [
                    "Centro",
                    "República",
                    "Mirasierra",
                    "Lourdes"
                ]
            },
            torreón: {
                name: "Torreón",
                neighborhoods: [
                    "Centro",
                    "San Isidro",
                    "Las Etnias"
                ]
            }
        }
    },


    colima: {
        name: "Colima",
        municipalities: {
            colima: {
                name: "Colima",
                neighborhoods: [
                    "Centro",
                    "El Moralete",
                    "Las Torres"
                ]
            }
        }
    },


    chiapas: {
        name: "Chiapas",
        municipalities: {
            tuxtla: {
                name: "Tuxtla Gutiérrez",
                neighborhoods: [
                    "Centro",
                    "Las Granjas",
                    "Patria Nueva",
                    "Terán"
                ]
            }
        }
    },


    chihuahua: {
        name: "Chihuahua",
        municipalities: {
            chihuahua: {
                name: "Chihuahua",
                neighborhoods: [
                    "Centro",
                    "Villa Juárez",
                    "Nombre de Dios",
                    "San Rafael"
                ]
            },
            juarez: {
                name: "Juárez",
                neighborhoods: [
                    "Centro",
                    "Chaveña",
                    "Azteca"
                ]
            }
        }
    },


    "ciudad-de-mexico": {
        name: "Ciudad de México",
        municipalities: {
            cuauhtemoc: {
                name: "Cuauhtémoc",
                neighborhoods: [
                    "Centro",
                    "Doctores",
                    "Guerrero",
                    "Roma"
                ]
            },
            coyoacan: {
                name: "Coyoacán",
                neighborhoods: [
                    "Centro",
                    "Copilco",
                    "Ajusco"
                ]
            }
        }
    },


    durango: {
        name: "Durango",
        municipalities: {
            durango: {
                name: "Durango",
                neighborhoods: [
                    "Centro",
                    "Analco",
                    "Benito Juárez",
                    "Valle del Sur"
                ]
            }
        }
    },


    guanajuato: {
        name: "Guanajuato",
        municipalities: {
            leon: {
                name: "León",
                neighborhoods: [
                    "Centro",
                    "Obrera",
                    "San Miguel",
                    "Las Joyas"
                ]
            },
            guanajuato: {
                name: "Guanajuato",
                neighborhoods: [
                    "Centro",
                    "Marfil",
                    "Pastita"
                ]
            }
        }
    },


    guerrero: {
        name: "Guerrero",
        municipalities: {
            acapulco: {
                name: "Acapulco",
                neighborhoods: [
                    "Centro",
                    "Progreso",
                    "La Laja",
                    "Renacimiento"
                ]
            }
        }
    },


    hidalgo: {
        name: "Hidalgo",
        municipalities: {
            pachuca: {
                name: "Pachuca",
                neighborhoods: [
                    "Centro",
                    "Cubitos",
                    "Periodistas"
                ]
            }
        }
    },


    jalisco: {
        name: "Jalisco",
        municipalities: {
            guadalajara: {
                name: "Guadalajara",
                neighborhoods: [
                    "Centro",
                    "Analco",
                    "Oblatos",
                    "Santa Tere"
                ]
            },
            zapopan: {
                name: "Zapopan",
                neighborhoods: [
                    "Centro",
                    "Tesistán",
                    "El Colli"
                ]
            }
        }
    },


    mexico: {
        name: "Estado de México",
        municipalities: {
            toluca: {
                name: "Toluca",
                neighborhoods: [
                    "Centro",
                    "Santa Ana",
                    "San Sebastián"
                ]
            },
            ecatepec: {
                name: "Ecatepec",
                neighborhoods: [
                    "Centro",
                    "San Cristóbal",
                    "Jardines"
                ]
            }
        }
    },


    michoacan: {
        name: "Michoacán",
        municipalities: {
            morelia: {
                name: "Morelia",
                neighborhoods: [
                    "Centro",
                    "Obrera",
                    "Prados Verdes"
                ]
            }
        }
    },


    morelos: {
        name: "Morelos",
        municipalities: {
            cuernavaca: {
                name: "Cuernavaca",
                neighborhoods: [
                    "Centro",
                    "Acapantzingo",
                    "Alta Vista"
                ]
            }
        }
    },


    nayarit: {
        name: "Nayarit",
        municipalities: {
            tepic: {
                name: "Tepic",
                neighborhoods: [
                    "Centro",
                    "Morelos",
                    "Tierra y Libertad"
                ]
            }
        }
    },


    "nuevo-leon": {
        name: "Nuevo León",
        municipalities: {
            monterrey: {
                name: "Monterrey",
                neighborhoods: [
                    "Centro",
                    "Obispado",
                    "Independencia",
                    "Mitras"
                ]
            }
        }
    },


    oaxaca: {
        name: "Oaxaca",
        municipalities: {
            oaxaca: {
                name: "Oaxaca de Juárez",
                neighborhoods: [
                    "Centro",
                    "Jalatlaco",
                    "Xochimilco"
                ]
            }
        }
    },


    puebla: {
        name: "Puebla",
        municipalities: {
            puebla: {
                name: "Puebla",
                neighborhoods: [
                    "Centro",
                    "Analco",
                    "La Margarita",
                    "San Manuel"
                ]
            }
        }
    },


    queretaro: {
        name: "Querétaro",
        municipalities: {
            queretaro: {
                name: "Querétaro",
                neighborhoods: [
                    "Centro",
                    "San Francisquito",
                    "Lomas"
                ]
            }
        }
    },


    "quintana-roo": {
        name: "Quintana Roo",
        municipalities: {
            benito_juarez: {
                name: "Benito Juárez",
                neighborhoods: [
                    "Centro",
                    "Región 92",
                    "Supermanzana 23"
                ]
            }
        }
    },


    "san-luis-potosi": {
        name: "San Luis Potosí",
        municipalities: {
            san_luis: {
                name: "San Luis Potosí",
                neighborhoods: [
                    "Centro",
                    "San Sebastián",
                    "Morales"
                ]
            }
        }
    },


    sinaloa: {
        name: "Sinaloa",
        municipalities: {
            culiacan: {
                name: "Culiacán",
                neighborhoods: [
                    "Centro",
                    "Las Quintas",
                    "Tierra Blanca"
                ]
            }
        }
    },


    sonora: {
        name: "Sonora",
        municipalities: {
            hermosillo: {
                name: "Hermosillo",
                neighborhoods: [
                    "Centro",
                    "Villa de Seris",
                    "Olivares"
                ]
            }
        }
    },


    tabasco: {
        name: "Tabasco",
        municipalities: {
            centro: {
                name: "Centro",
                neighborhoods: [
                    "Centro",
                    "Atasta",
                    "Tamulté"
                ]
            }
        }
    },


    tamaulipas: {
        name: "Tamaulipas",
        municipalities: {
            victoria: {
                name: "Ciudad Victoria",
                neighborhoods: [
                    "Centro",
                    "Mainero",
                    "La Presita"
                ]
            }
        }
    },


    tlaxcala: {
        name: "Tlaxcala",
        municipalities: {
            tlaxcala: {
                name: "Tlaxcala",
                neighborhoods: [
                    "Centro",
                    "Ocotlán",
                    "San Gabriel"
                ]
            }
        }
    },


    veracruz: {
        name: "Veracruz",
        municipalities: {
            veracruz: {
                name: "Veracruz",
                neighborhoods: [
                    "Centro",
                    "Los Pinitos",
                    "Las Bajadas"
                ]
            },
            xalapa: {
                name: "Xalapa",
                neighborhoods: [
                    "Centro",
                    "Revolución",
                    "El Dique"
                ]
            }
        }
    },


    yucatan: {
        name: "Yucatán",
        municipalities: {
            merida: {
                name: "Mérida",
                neighborhoods: [
                    "Centro",
                    "Chuburná",
                    "San Sebastián"
                ]
            }
        }
    },


    zacatecas: {
        name: "Zacatecas",
        municipalities: {
            zacatecas: {
                name: "Zacatecas",
                neighborhoods: [
                    "Centro",
                    "Tres Cruces",
                    "Lomas"
                ]
            }
        }
    }
};


/* ============================================================
   03. NOMBRES DE PERSONAJES
   ============================================================ */

const FIRST_NAMES = [
    "Gael",
    "Mariana",
    "Renata",
    "Santiago",
    "Valeria",
    "Emiliano",
    "Lucía",
    "Mateo",
    "Camila",
    "Diego",
    "Fernanda",
    "Julián",
    "Ximena",
    "Rodrigo",
    "Regina",
    "Andrés",
    "Natalia",
    "Mauricio",
    "Daniela",
    "Bruno",
    "Sofía",
    "Alejandro",
    "Elena",
    "Tomás",
    "Paola",
    "Adrián",
    "Carolina",
    "Marco",
    "Jimena",
    "Nicolás"
];

const LAST_NAMES = [
    "Montes",
    "Salazar",
    "Vega",
    "Mendoza",
    "Cervantes",
    "Lara",
    "Robles",
    "Pineda",
    "Serrano",
    "Ortega",
    "Fuentes",
    "Navarro",
    "Cortés",
    "Zamora",
    "Ríos",
    "Valdés",
    "Márquez",
    "Medina",
    "Castañeda",
    "Treviño"
];

const FEMALE_ASSISTANT_NAMES = [
    "Elena",
    "Mariana",
    "Renata",
    "Sofía",
    "Valeria",
    "Clara",
    "Daniela",
    "Lucía",
    "Natalia",
    "Paola"
];


/* ============================================================
   04. ESTADO DEL JUEGO
   ============================================================ */

let game = createFreshGame();

let creationStep = 1;


/* ============================================================
   05. CREAR PARTIDA NUEVA
   ============================================================ */

function createFreshGame() {

    return {

        version: GAME_VERSION,

        started: false,

        player: {
            name: "",
            age: 18,
            gender: "hombre",

            state: "aguascalientes",
            municipality: "aguascalientes",
            neighborhood: "Colonia del Trabajo",

            origin: "",
            personality: "",

            role: "Ciudadano",

            careerStage: "grassroots",

            assistant: randomFrom(FEMALE_ASSISTANT_NAMES)
        },


        date: {
            day: 1,
            week: 1,
            year: 1,
            hour: 8,
            minute: 0
        },


        stats: {

            credibility: 12,
            organization: 10,
            negotiation: 8,
            leadership: 8,
            communication: 9,
            media: 3,
            reputation: 15,
            trust: 12,
            resilience: 10,
            politicalInstinct: 8,

            energy: 90,
            stress: 5,

            money: 1000,
            socialCapital: 8
        },


        territory: {

            people: 0,
            leaders: 0,
            sections: 0,

            support: 0,
            turnoutPotential: 0,

            zones: [],

            problems: [
                "Alumbrado deficiente",
                "Calles con mantenimiento pendiente",
                "Falta de actividades comunitarias"
            ]
        },


        relationships: [],

        team: [],

        inbox: [],

        calendar: [],

        mediaFeed: [],

        careerHistory: [],

        memories: [],

        visitedScenes: [],

        charactersSeen: [],

        usedNames: [],


        partyOffers: [],

        patron: null,

        election: null,

        slate: null,

        cabildo: null,


        currentScene: null,

        sceneHistory: [],


        flags: {

            metFirstLeader: false,
            builtFirstNetwork: false,
            receivedPartyInterest: false,
            slateNegotiationStarted: false,
            wonFirstElection: false,
            lostFirstElection: false,
            enteredCabildo: false,
            federalInterest: false,
            senateInterest: false,
            governorInterest: false,
            presidentialStage: false
        },


        settings: {
            sound: true,
            reducedMotion: false
        }
    };
}


/* ============================================================
   06. INICIO
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});


function initializeApp() {

    bindStaticEvents();

    updateContinueButton();

    showScreen("start");

}


/* ============================================================
   07. EVENTOS ESTÁTICOS
   ============================================================ */

function bindStaticEvents() {

    const newGameButton =
        document.getElementById("btn-new-game");

    const continueButton =
        document.getElementById("btn-continue-game");

    newGameButton?.addEventListener(
        "click",
        startNewStory
    );

    continueButton?.addEventListener(
        "click",
        continueStory
    );


    document
        .getElementById("btn-creation-next")
        ?.addEventListener(
            "click",
            nextCreationStep
        );


    document
        .getElementById("btn-creation-back")
        ?.addEventListener(
            "click",
            previousCreationStep
        );


    document
        .getElementById("player-state")
        ?.addEventListener(
            "change",
            handleStateChange
        );


    document
        .getElementById("player-municipality")
        ?.addEventListener(
            "change",
            handleMunicipalityChange
        );


    document
        .querySelectorAll("[data-origin]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    game.player.origin =
                        button.dataset.origin;

                    markSelected(
                        "[data-origin]",
                        button.dataset.origin
                    );
                }
            );
        });


    document
        .querySelectorAll("[data-personality]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    game.player.personality =
                        button.dataset.personality;

                    markSelected(
                        "[data-personality]",
                        button.dataset.personality
                    );
                }
            );
        });


    document
        .getElementById("panel-backdrop")
        ?.addEventListener(
            "click",
            closePanel
        );


    document
        .getElementById("btn-close-panel")
        ?.addEventListener(
            "click",
            closePanel
        );


    document
        .getElementById("modal-backdrop")
        ?.addEventListener(
            "click",
            closeModal
        );


    document
        .getElementById("btn-close-modal")
        ?.addEventListener(
            "click",
            closeModal
        );


    document
        .getElementById("btn-result-continue")
        ?.addEventListener(
            "click",
            closeResult
        );


    document
        .getElementById("menu-backdrop")
        ?.addEventListener(
            "click",
            closeMenu
        );


    document
        .getElementById("btn-close-menu")
        ?.addEventListener(
            "click",
            closeMenu
        );


    document
        .getElementById("btn-menu")
        ?.addEventListener(
            "click",
            openMenu
        );


    document
        .getElementById("btn-phone")
        ?.addEventListener(
            "click",
            () => openPanel("phone")
        );


    document
        .getElementById("btn-calendar")
        ?.addEventListener(
            "click",
            () => openPanel("calendar")
        );


    document
        .getElementById("btn-player-profile")
        ?.addEventListener(
            "click",
            () => openPanel("profile")
        );


    document
        .getElementById("quick-territory")
        ?.addEventListener(
            "click",
            () => openPanel("territory")
        );


    document
        .getElementById("quick-team")
        ?.addEventListener(
            "click",
            () => openPanel("team")
        );


    document
        .getElementById("quick-relationships")
        ?.addEventListener(
            "click",
            () => openPanel("relationships")
        );


    document
        .getElementById("quick-media")
        ?.addEventListener(
            "click",
            () => openPanel("media")
        );


    document
        .getElementById("quick-career")
        ?.addEventListener(
            "click",
            () => openPanel("career")
        );


    document
        .getElementById("menu-save")
        ?.addEventListener(
            "click",
            () => {

                saveGame();

                closeMenu();

                showToast(
                    "Historia guardada",
                    "Tu progreso se guardó correctamente."
                );
            }
        );


    document
        .getElementById("menu-profile")
        ?.addEventListener(
            "click",
            () => {

                closeMenu();

                openPanel("profile");
            }
        );


    document
        .getElementById("menu-main")
        ?.addEventListener(
            "click",
            () => {

                closeMenu();

                showScreen("start");
            }
        );


    window.addEventListener(
        "keydown",
        handleKeyboard
    );

}


/* ============================================================
   08. NUEVA HISTORIA
   ============================================================ */

function startNewStory() {

    game = createFreshGame();

    creationStep = 1;

    resetCreationUI();

    populateStates();

    showScreen("creation");

}


function resetCreationUI() {

    const name =
        document.getElementById("player-name");

    if (name) {
        name.value = "";
    }


    const age =
        document.getElementById("player-age");

    if (age) {
        age.value = "18";
    }


    const gender =
        document.getElementById("player-gender");

    if (gender) {
        gender.value = "hombre";
    }


    document
        .querySelectorAll("[data-origin], [data-personality]")
        .forEach(button => {

            button.classList.remove("is-selected");

        });


    updateCreationStep();

}


/* ============================================================
   09. CONTINUAR HISTORIA
   ============================================================ */

function continueStory() {

    const saved =
        loadGame();

    if (!saved) {

        showToast(
            "No hay una historia guardada",
            "Crea una nueva historia para comenzar."
        );

        return;
    }

    game = saved;

    showScreen("game");

    renderHUD();

    if (game.currentScene) {

        renderScene(game.currentScene);

    } else {

        startGameWorld();

    }

}


/* ============================================================
   10. CREACIÓN — PASOS
   ============================================================ */

function nextCreationStep() {

    if (!validateCreationStep()) {
        return;
    }


    if (creationStep < 4) {

        creationStep++;

        updateCreationStep();

        return;
    }


    finishCharacterCreation();

}


function previousCreationStep() {

    if (creationStep > 1) {

        creationStep--;

        updateCreationStep();

    } else {

        showScreen("start");

    }

}


function validateCreationStep() {

    if (creationStep === 1) {

        const name =
            document
                .getElementById("player-name")
                ?.value
                .trim();

        if (!name) {

            showToast(
                "Falta tu nombre",
                "Escribe el nombre de tu personaje."
            );

            return false;
        }

        game.player.name = name;


        game.player.age =
            Number(
                document
                    .getElementById("player-age")
                    ?.value || 18
            );


        game.player.gender =
            document
                .getElementById("player-gender")
                ?.value || "hombre";


        return true;
    }


    if (creationStep === 2) {

        if (!game.player.state) {

            showToast(
                "Selecciona tu estado",
                "Necesitamos saber dónde comienza tu historia."
            );

            return false;
        }


        if (!game.player.municipality) {

            showToast(
                "Selecciona tu municipio",
                "Tu carrera comienza en un territorio concreto."
            );

            return false;
        }


        if (!game.player.neighborhood) {

            showToast(
                "Selecciona tu colonia",
                "Elige el lugar donde comenzarás."
            );

            return false;
        }


        return true;
    }


    if (creationStep === 3) {

        if (!game.player.origin) {

            showToast(
                "Elige tu origen",
                "Selecciona una de las cuatro historias."
            );

            return false;
        }


        return true;
    }


    if (creationStep === 4) {

        if (!game.player.personality) {

            showToast(
                "Elige tu personalidad",
                "Tu estilo modificará algunas decisiones."
            );

            return false;
        }


        return true;
    }


    return true;
}


function updateCreationStep() {

    document
        .querySelectorAll("[data-creation-step]")
        .forEach(panel => {

            const step =
                Number(panel.dataset.creationStep);

            panel.classList.toggle(
                "is-hidden",
                step !== creationStep
            );

        });


    const current =
        document.getElementById(
            "creation-step-current"
        );

    if (current) {
        current.textContent =
            String(creationStep);
    }


    document
        .querySelectorAll("[data-progress]")
        .forEach(dot => {

            const step =
                Number(dot.dataset.progress);

            dot.classList.toggle(
                "is-active",
                step === creationStep
            );

        });


    const back =
        document.getElementById(
            "btn-creation-back"
        );

    if (back) {

        back.textContent =
            creationStep === 1
                ? "Cancelar"
                : "Atrás";
    }


    const next =
        document.getElementById(
            "btn-creation-next"
        );

    if (next) {

        next.textContent =
            creationStep === 4
                ? "Comenzar historia"
                : "Continuar";
    }

}


function finishCharacterCreation() {

    if (!validateCreationStep()) {
        return;
    }


    applyOriginModifiers();

    applyPersonalityModifiers();


    game.started = true;


    game.careerHistory.push({

        title: "Comienzo",
        description:
            "Comenzaste tu historia política desde tu comunidad.",
        day: game.date.day,
        week: game.date.week

    });


    addMessage({

        sender: game.player.assistant,

        subject: "Bienvenido a tu historia",

        text:
            "Voy a ayudarte a organizar citas, mensajes y pendientes. " +
            "Pero las decisiones importantes serán tuyas."

    });


    addCalendarEvent({

        title: "Primera mañana",

        description:
            "Organiza tus primeras horas y decide por dónde comenzar.",

        hour: 9,

        type: "personal"

    });


    showScreen("game");

    renderHUD();

    startGameWorld();

    saveGame();

}


/* ============================================================
   11. ORIGEN
   ============================================================ */

function applyOriginModifiers() {

    switch (game.player.origin) {

        case "barrio":

            game.stats.credibility += 4;
            game.stats.organization += 3;
            game.territory.people += 3;

            break;


        case "familia":

            game.stats.resilience += 4;
            game.stats.trust += 3;

            break;


        case "profesional":

            game.stats.communication += 4;
            game.stats.negotiation += 3;

            break;


        case "empresarial":

            game.stats.organization += 4;
            game.stats.money += 500;
            game.stats.socialCapital += 3;

            break;

    }

}


function applyPersonalityModifiers() {

    switch (game.player.personality) {

        case "negociador":

            game.stats.negotiation += 5;
            game.stats.communication += 2;

            break;


        case "carismatico":

            game.stats.communication += 5;
            game.stats.media += 2;

            break;


        case "estratega":

            game.stats.politicalInstinct += 5;
            game.stats.organization += 3;

            break;


        case "territorial":

            game.stats.organization += 5;
            game.stats.credibility += 2;
            game.territory.people += 4;

            break;

    }

}


/* ============================================================
   12. ESTADOS / MUNICIPIOS / COLONIAS
   ============================================================ */

function populateStates() {

    const select =
        document.getElementById("player-state");

    if (!select) {
        return;
    }


    select.innerHTML =
        `<option value="">Selecciona un estado</option>`;


    Object.entries(WORLD)
        .forEach(([id, state]) => {

            const option =
                document.createElement("option");

            option.value = id;

            option.textContent = state.name;

            select.appendChild(option);

        });


    select.value = game.player.state;

    populateMunicipalities();

}


function populateMunicipalities() {

    const state =
        WORLD[game.player.state];

    const select =
        document.getElementById(
            "player-municipality"
        );

    if (!select || !state) {
        return;
    }


    select.innerHTML =
        `<option value="">Selecciona municipio</option>`;


    Object.entries(state.municipalities)
        .forEach(([id, municipality]) => {

            const option =
                document.createElement("option");

            option.value = id;

            option.textContent =
                municipality.name;

            select.appendChild(option);

        });


    if (
        state.municipalities[
            game.player.municipality
        ]
    ) {

        select.value =
            game.player.municipality;

    } else {

        game.player.municipality =
            Object.keys(
                state.municipalities
            )[0];

        select.value =
            game.player.municipality;

    }


    populateNeighborhoods();

}


function populateNeighborhoods() {

    const state =
        WORLD[game.player.state];

    const municipality =
        state?.municipalities[
            game.player.municipality
        ];

    const select =
        document.getElementById(
            "player-neighborhood"
        );

    if (!select || !municipality) {
        return;
    }


    select.innerHTML =
        `<option value="">Selecciona colonia</option>`;


    municipality.neighborhoods
        .forEach(neighborhood => {

            const option =
                document.createElement("option");

            option.value =
                neighborhood;

            option.textContent =
                neighborhood;

            select.appendChild(option);

        });


    if (
        municipality.neighborhoods
            .includes(game.player.neighborhood)
    ) {

        select.value =
            game.player.neighborhood;

    } else {

        game.player.neighborhood =
            municipality.neighborhoods[0];

        select.value =
            game.player.neighborhood;

    }

}


function handleStateChange(event) {

    game.player.state =
        event.target.value;

    game.player.municipality = "";
    game.player.neighborhood = "";

    populateMunicipalities();

}


function handleMunicipalityChange(event) {

    game.player.municipality =
        event.target.value;

    game.player.neighborhood = "";

    populateNeighborhoods();

}


/* ============================================================
   13. COMENZAR EL MUNDO
   ============================================================ */

function startGameWorld() {

    game.player.role =
        "Organizador comunitario";

    game.player.careerStage =
        "grassroots";


    game.territory.people =
        Math.max(
            game.territory.people,
            5
        );


    game.currentScene =
        createFirstMeetingScene();


    renderScene(game.currentScene);

}


/* ============================================================
   14. PRIMERA ESCENA
   ============================================================ */

function createFirstMeetingScene() {

    const leader =
        createUniqueCharacter({

            role: "Líder manzanero",

            influence: 7

        });


    addRelationship(
        leader,
        18
    );


    return {

        id: "first-home-meeting",

        type: "story",

        title: "Una reunión en casa",

        subtitle:
            "Tu primera prueba no ocurre frente a una multitud.",

        timeLabel: "PRIMER CONTACTO",

        location:
            game.player.neighborhood,

        speaker: leader.name,

        speakerRole: "Líder manzanero",

        speakerInitial:
            getInitials(leader.name),

        text:
            "La reunión es pequeña. No hay cámaras, discursos ni reflectores. " +
            "Hay una mesa, café y varias personas que llevan años viviendo en la zona. " +
            "No te conocen lo suficiente todavía.",

        choices: [

            {

                text:
                    "Escuchar y preguntar qué necesitan",

                description:
                    "No prometes soluciones. Primero entiendes el problema.",

                effects: {

                    credibility: 4,
                    trust: 5,
                    organization: 2,
                    energy: -8

                },

                resultTitle:
                    "Te ganaste una primera oportunidad",

                resultText:
                    "La reunión no terminó con promesas. Terminó con información. " +
                    "Eso hizo que varias personas te tomaran en serio.",

                memory:
                    "Escuchó antes de prometer.",

                next:
                    "neighborhood-problem"

            },


            {

                text:
                    "Presentar una propuesta desde el inicio",

                description:
                    "Llegas con ideas concretas y buscas demostrar iniciativa.",

                effects: {

                    communication: 3,
                    leadership: 3,
                    credibility: 1,
                    trust: -1,
                    energy: -10

                },

                resultTitle:
                    "Mostraste iniciativa",

                resultText:
                    "Algunos vecinos valoran que hayas llegado preparado. " +
                    "Otros quieren saber primero si conoces realmente la colonia.",

                memory:
                    "Llegó con propuestas desde el primer encuentro.",

                next:
                    "neighborhood-problem"

            },


            {

                text:
                    "Preguntar quién organiza realmente la colonia",

                description:
                    "Intentas comprender la red de personas antes de tomar posición.",

                effects: {

                    politicalInstinct: 4,
                    organization: 4,
                    socialCapital: 2,
                    energy: -7

                },

                resultTitle:
                    "Descubriste la red local",

                resultText:
                    "No todo pasa por una sola persona. Hay vecinos, comerciantes, representantes y personas que conectan distintas calles.",

                memory:
                    "Intentó entender la estructura local.",

                next:
                    "neighborhood-problem"

            }

        ]

    };

}


/* ============================================================
   15. ESCENA — PROBLEMA LOCAL
   ============================================================ */

function createNeighborhoodProblemScene() {

    const problem =
        randomFrom(
            game.territory.problems
        );


    return {

        id:
            "local-problem-" +
            randomInt(1000, 9999),

        type: "story",

        title:
            "El primer problema real",

        subtitle:
            "La política local empieza con problemas concretos.",

        timeLabel: "TARDE",

        location:
            game.player.neighborhood,

        speaker:
            "Vecinos de la zona",

        speakerRole:
            "Reunión vecinal",

        speakerInitial:
            "V",

        text:
            `El tema que domina la conversación es: ${problem}. ` +
            "La gente tiene opiniones diferentes sobre qué debería hacerse.",

        choices: [

            {

                text:
                    "Organizar un recorrido por la zona",

                description:
                    "Quieres conocer el problema directamente.",

                effects: {

                    organization: 4,
                    credibility: 3,
                    territoryPeople: 5,
                    energy: -12

                },

                resultTitle:
                    "Conociste el territorio",

                resultText:
                    "Recorres varias calles y conoces personas que no habían asistido a la reunión.",

                memory:
                    "Recorrió la colonia antes de plantear soluciones.",

                next:
                    "street-network"

            },


            {

                text:
                    "Convocar una segunda reunión",

                description:
                    "Buscas juntar más vecinos y escuchar distintas versiones.",

                effects: {

                    leadership: 3,
                    trust: 4,
                    territoryPeople: 7,
                    energy: -10

                },

                resultTitle:
                    "La convocatoria creció",

                resultText:
                    "La segunda conversación reúne más personas. Ahora tienes que demostrar que puedes organizar algo más grande.",

                memory:
                    "Amplió una reunión vecinal.",

                next:
                    "street-network"

            },


            {

                text:
                    "Investigar quién puede resolverlo",

                description:
                    "Antes de comprometerte, identificas las instituciones y personas involucradas.",

                effects: {

                    politicalInstinct: 4,
                    negotiation: 3,
                    credibility: 2,
                    energy: -7

                },

                resultTitle:
                    "Encontraste el camino institucional",

                resultText:
                    "Ahora sabes a quién tendrías que acudir y qué información necesitas antes de hacer una gestión.",

                memory:
                    "Investigó antes de comprometerse.",

                next:
                    "street-network"

            }

        ]

    };

}


/* ============================================================
   16. ESCENA — RED DE CALLE
   ============================================================ */

function createStreetNetworkScene() {

    const newCharacter =
        createUniqueCharacter({

            role:
                randomFrom([
                    "Comerciante local",
                    "Vecina organizadora",
                    "Joven voluntario",
                    "Representante vecinal",
                    "Dueño de negocio"
                ]),

            influence: randomInt(2, 6)

        });


    return {

        id:
            "street-network-" +
            randomInt(1000, 9999),

        type: "story",

        title:
            "La red empieza a crecer",

        subtitle:
            "Conocer personas no significa todavía tener una organización.",

        timeLabel:
            "DÍA " + game.date.day,

        location:
            game.player.neighborhood,

        speaker:
            newCharacter.name,

        speakerRole:
            newCharacter.role,

        speakerInitial:
            getInitials(newCharacter.name),

        text:
            `${newCharacter.name} se acerca después de la reunión. ` +
            "No te ofrece un cargo ni una candidatura. Te ofrece algo mucho más pequeño: " +
            "ayudarte a conocer a otras personas de la zona.",

        choices: [

            {

                text:
                    "Aceptar y empezar desde abajo",

                description:
                    "Construyes la red persona por persona.",

                effects: {

                    territoryPeople: 8,
                    organization: 4,
                    socialCapital: 3,
                    energy: -10

                },

                resultTitle:
                    "Tu red comenzó a tomar forma",

                resultText:
                    "Ya no dependes solamente de una reunión. Ahora tienes varios contactos que pueden presentarte con otras personas.",

                memory:
                    "Aceptó construir organización desde la comunidad.",

                next:
                    "weekly-planning"

            },


            {

                text:
                    "Pedir que te presente con líderes de otras calles",

                description:
                    "Buscas ampliar rápidamente tu círculo.",

                effects: {

                    territoryPeople: 12,
                    socialCapital: 4,
                    credibility: 1,
                    energy: -14

                },

                resultTitle:
                    "Abriste nuevas puertas",

                resultText:
                    "Varias personas comienzan a escuchar tu nombre, aunque todavía no saben exactamente qué quieres construir.",

                memory:
                    "Amplió contactos territoriales rápidamente.",

                next:
                    "weekly-planning"

            },


            {

                text:
                    "Mantener la relación sin pedir nada todavía",

                description:
                    "Prefieres construir confianza antes de pedir ayuda.",

                effects: {

                    trust: 5,
                    credibility: 3,
                    energy: -5

                },

                resultTitle:
                    "La confianza tomó tiempo",

                resultText:
                    "No conseguiste una red grande inmediatamente, pero la relación personal se fortaleció.",

                memory:
                    "Priorizó confianza sobre crecimiento rápido.",

                next:
                    "weekly-planning"

            }

        ]

    };

}


/* ============================================================
   17. PLAN SEMANAL
   ============================================================ */

function createWeeklyPlanningScene() {

    return {

        id:
            "weekly-planning-" +
            game.date.week,

        type: "planning",

        title:
            "Una semana por delante",

        subtitle:
            "Ahora tienes más contactos, pero también más cosas que atender.",

        timeLabel:
            "PLANIFICACIÓN",

        location:
            "Tu colonia",

        speaker:
            game.player.assistant,

        speakerRole:
            "Asistente personal",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Ya tienes personas esperando una llamada, una reunión pendiente " +
            "y un problema vecinal que necesita seguimiento. " +
            "Si quieres crecer, tendrás que aprender a administrar tu tiempo.",

        choices: [

            {

                text:
                    "Priorizar territorio",

                description:
                    "Pasar la semana en calles, reuniones y visitas.",

                effects: {

                    territoryPeople: 15,
                    organization: 4,
                    energy: -22,
                    stress: 5

                },

                resultTitle:
                    "La calle se convirtió en tu oficina",

                resultText:
                    "Conociste muchas más personas y tu organización local creció.",

                memory:
                    "Dedicó una semana completa al territorio.",

                next:
                    "random-event"

            },


            {

                text:
                    "Construir un pequeño equipo",

                description:
                    "Delegar algunas tareas y encontrar personas confiables.",

                effects: {

                    organization: 6,
                    leadership: 4,
                    socialCapital: 4,
                    energy: -15

                },

                resultTitle:
                    "Apareció tu primer equipo",

                resultText:
                    "Tres personas aceptan ayudarte de manera regular.",

                memory:
                    "Formó su primer pequeño equipo.",

                next:
                    "random-event",

                custom:
                    "createTeam"

            },


            {

                text:
                    "Buscar una oportunidad institucional",

                description:
                    "Investigar organizaciones, asociaciones y espacios públicos.",

                effects: {

                    negotiation: 4,
                    politicalInstinct: 4,
                    reputation: 3,
                    energy: -12

                },

                resultTitle:
                    "Tu nombre comenzó a salir de la colonia",

                resultText:
                    "Una persona con conexiones fuera de tu círculo local escucha hablar de tu trabajo.",

                memory:
                    "Comenzó a buscar oportunidades fuera del territorio.",

                next:
                    "random-event"

            }

        ]

    };

}


/* ============================================================
   18. EVENTOS ALEATORIOS
   ============================================================ */

function createRandomEventScene() {

    const events = [

        createUnexpectedInvitationScene,
        createNeighborConflictScene,
        createMediaContactScene,
        createVolunteerScene,
        createPersonalLifeScene,
        createPatronIntroductionScene

    ];


    const generator =
        randomFrom(events);


    return generator();

}


/* ============================================================
   19. INVITACIÓN
   ============================================================ */

function createUnexpectedInvitationScene() {

    return {

        id:
            "unexpected-invitation-" +
            randomInt(1000, 9999),

        type: "event",

        title:
            "Una invitación inesperada",

        subtitle:
            "Tu trabajo empieza a llamar la atención.",

        timeLabel:
            "MENSAJE NUEVO",

        location:
            "Tu teléfono",

        speaker:
            "Persona desconocida",

        speakerRole:
            "Contacto político local",

        speakerInitial:
            "?",

        text:
            "Recibes un mensaje. Alguien que no conoces personalmente dice haber escuchado " +
            "que estás organizando gente en tu colonia. Quiere conocerte.",

        choices: [

            {

                text:
                    "Aceptar una reunión",

                description:
                    "Quieres saber quién está detrás del contacto.",

                effects: {

                    socialCapital: 3,
                    politicalInstinct: 3,
                    reputation: 2,
                    energy: -8

                },

                resultTitle:
                    "Se abrió una puerta",

                resultText:
                    "Todavía no sabes qué busca esta persona, pero ahora tienes una nueva conexión.",

                next:
                    "political-contact"

            },


            {

                text:
                    "Pedir referencias primero",

                description:
                    "No aceptas reuniones importantes sin conocer el contexto.",

                effects: {

                    politicalInstinct: 4,
                    credibility: 2,
                    trust: 1

                },

                resultTitle:
                    "Investigaste antes de avanzar",

                resultText:
                    "La persona entiende que no vas a aceptar cualquier propuesta.",

                next:
                    "political-contact"

            },


            {

                text:
                    "Rechazar por ahora",

                description:
                    "Prefieres seguir concentrado en tu comunidad.",

                effects: {

                    credibility: 3,
                    organization: 2,
                    energy: 3

                },

                resultTitle:
                    "Mantuviste el foco",

                resultText:
                    "La oportunidad puede volver a aparecer, pero tu prioridad sigue siendo el territorio.",

                next:
                    "party-interest-check"

            }

        ]

    };

}


/* ============================================================
   20. CONFLICTO VECINAL
   ============================================================ */

function createNeighborConflictScene() {

    return {

        id:
            "neighbor-conflict-" +
            randomInt(1000, 9999),

        type: "event",

        title:
            "Dos grupos quieren cosas distintas",

        subtitle:
            "La organización también significa administrar desacuerdos.",

        timeLabel:
            "TARDE",

        location:
            game.player.neighborhood,

        speaker:
            "Vecinos",

        speakerRole:
            "Conflicto comunitario",

        speakerInitial:
            "V",

        text:
            "Dos grupos de vecinos quieren que priorices problemas distintos. " +
            "Uno considera urgente la seguridad de una calle; el otro insiste en servicios básicos.",

        choices: [

            {

                text:
                    "Escuchar a ambos antes de decidir",

                description:
                    "Buscas información de las dos partes.",

                effects: {

                    negotiation: 4,
                    trust: 4,
                    credibility: 3,
                    energy: -10

                },

                resultTitle:
                    "Evitaste tomar partido demasiado pronto",

                resultText:
                    "No solucionaste el conflicto inmediatamente, pero ambos grupos aceptaron seguir hablando.",

                next:
                    "party-interest-check"

            },


            {

                text:
                    "Priorizar el problema más urgente",

                description:
                    "Tomas una decisión y explicas por qué.",

                effects: {

                    leadership: 4,
                    credibility: 2,
                    trust: -1,
                    energy: -8

                },

                resultTitle:
                    "Tomaste una posición",

                resultText:
                    "Algunas personas agradecen la claridad; otras quedan inconformes.",

                next:
                    "party-interest-check"

            }

        ]

    };

}


/* ============================================================
   21. CONTACTO CON MEDIOS
   ============================================================ */

function createMediaContactScene() {

    return {

        id:
            "media-contact-" +
            randomInt(1000, 9999),

        type: "media",

        title:
            "Una entrevista pequeña",

        subtitle:
            "Todavía no eres famoso. Pero alguien quiere escucharte.",

        timeLabel:
            "ENTREVISTA",

        location:
            "Llamada telefónica",

        speaker:
            "Reportera local",

        speakerRole:
            "Medios",

        speakerInitial:
            "M",

        text:
            "Una reportera te llama para preguntarte por el trabajo que estás haciendo en la colonia. " +
            "Es una entrevista breve, pero será la primera vez que tu nombre aparece públicamente.",

        choices: [

            {

                text:
                    "Hablar de los problemas concretos",

                description:
                    "Mantienes la conversación centrada en la comunidad.",

                effects: {

                    media: 4,
                    communication: 4,
                    credibility: 3,
                    reputation: 3

                },

                resultTitle:
                    "La entrevista fue clara",

                resultText:
                    "La cobertura menciona tu trabajo territorial sin convertirlo en una campaña.",

                next:
                    "party-interest-check"

            },


            {

                text:
                    "Hablar principalmente de tu futuro",

                description:
                    "Aprovechas para explicar que quieres crecer.",

                effects: {

                    media: 5,
                    reputation: 2,
                    politicalInstinct: 2,
                    trust: -1

                },

                resultTitle:
                    "Llamaste la atención",

                resultText:
                    "Tu ambición quedó clara. Ahora algunas personas comenzarán a observar qué haces después.",

                next:
                    "party-interest-check"

            }

        ]

    };

}


/* ============================================================
   22. VOLUNTARIO
   ============================================================ */

function createVolunteerScene() {

    const volunteer =
        createUniqueCharacter({

            role:
                "Voluntario",

            influence: 3

        });


    return {

        id:
            "volunteer-" +
            randomInt(1000, 9999),

        type: "social",

        title:
            "Alguien quiere ayudar",

        subtitle:
            "El crecimiento también depende de personas que deciden acompañarte.",

        timeLabel:
            "TARDE",

        location:
            game.player.neighborhood,

        speaker:
            volunteer.name,

        speakerRole:
            "Nuevo contacto",

        speakerInitial:
            getInitials(volunteer.name),

        text:
            `${volunteer.name} te dice que ha visto lo que estás haciendo y pregunta ` +
            "si puede ayudarte algunas horas a la semana.",

        choices: [

            {

                text:
                    "Invitarlo al equipo",

                description:
                    "Le asignas tareas pequeñas y observas cómo trabaja.",

                effects: {

                    organization: 3,
                    leadership: 3,
                    socialCapital: 2,
                    energy: -3

                },

                resultTitle:
                    "Tu equipo creció",

                resultText:
                    "Tienes una persona más disponible para ayudarte.",

                custom:
                    "addVolunteer",

                next:
                    "party-interest-check"

            },


            {

                text:
                    "Primero conocerlo mejor",

                description:
                    "Quieres saber qué busca y qué puede aportar.",

                effects: {

                    negotiation: 2,
                    trust: 3,
                    politicalInstinct: 2

                },

                resultTitle:
                    "La relación comenzó despacio",

                resultText:
                    "No todo contacto nuevo debe convertirse inmediatamente en integrante del equipo.",

                next:
                    "party-interest-check"

            }

        ]

    };

}


/* ============================================================
   23. VIDA PERSONAL
   ============================================================ */

function createPersonalLifeScene() {

    return {

        id:
            "personal-life-" +
            randomInt(1000, 9999),

        type: "personal",

        title:
            "Tu vida fuera de la política",

        subtitle:
            "La carrera no ocupa todas las horas del día.",

        timeLabel:
            "NOCHE",

        location:
            "Vida personal",

        speaker:
            game.player.assistant,

        speakerRole:
            "Asistente",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Llevas varios días dedicando gran parte de tu tiempo a reuniones y territorio. " +
            "Una persona cercana te reclama que prácticamente has desaparecido.",

        choices: [

            {

                text:
                    "Apartar una noche para tu vida personal",

                description:
                    "Decides equilibrar tu tiempo.",

                effects: {

                    stress: -8,
                    energy: 8,
                    trust: 2

                },

                resultTitle:
                    "Recuperaste equilibrio",

                resultText:
                    "Tu carrera importa, pero tus relaciones también requieren tiempo.",

                next:
                    "party-interest-check"

            },


            {

                text:
                    "Seguir trabajando",

                description:
                    "La semana está demasiado llena para detenerte.",

                effects: {

                    reputation: 2,
                    organization: 2,
                    stress: 8,
                    energy: -8

                },

                resultTitle:
                    "El trabajo avanzó",

                resultText:
                    "Ganaste algunas horas de trabajo, pero acumulaste cansancio.",

                next:
                    "party-interest-check"

            }

        ]

    };

}


/* ============================================================
   24. PADRINO / MECENAS FICTICIO
   ============================================================ */

function createPatronIntroductionScene() {

    if (game.patron) {

        return createPoliticalContactScene();

    }


    return {

        id:
            "patron-introduction-" +
            randomInt(1000, 9999),

        type: "opportunity",

        title:
            "Una persona con recursos quiere conocerte",

        subtitle:
            "No todo apoyo es gratuito y ninguna relación viene sin condiciones.",

        timeLabel:
            "REUNIÓN PRIVADA",

        location:
            "Cafetería",

        speaker:
            "Arturo Beltrán",

        speakerRole:
            "Empresario local ficticio",

        speakerInitial:
            "A",

        text:
            "Un empresario de la zona ha escuchado de tu trabajo. " +
            "No te ofrece un cargo. Te ofrece ayudarte con recursos para actividades comunitarias, " +
            "pero deja claro que espera transparencia y comunicación sobre cómo se utilizan.",

        choices: [

            {

                text:
                    "Aceptar apoyo con reglas claras",

                description:
                    "Aceptas recursos únicamente para actividades declaradas y con seguimiento.",

                effects: {

                    money: 1500,
                    socialCapital: 4,
                    negotiation: 3,
                    trust: 1

                },

                resultTitle:
                    "Apareció un respaldo financiero",

                resultText:
                    "Tienes más recursos para organizar actividades, pero ahora debes cuidar la relación y justificar su uso.",

                custom:
                    "createPatron",

                next:
                    "party-interest-check"

            },


            {

                text:
                    "Pedir tiempo para pensarlo",

                description:
                    "No aceptas recursos inmediatamente.",

                effects: {

                    negotiation: 2,
                    politicalInstinct: 2

                },

                resultTitle:
                    "La propuesta quedó abierta",

                resultText:
                    "No cerraste la puerta, pero tampoco adquiriste compromisos.",

                next:
                    "party-interest-check"

            },


            {

                text:
                    "Rechazar el apoyo",

                description:
                    "Prefieres crecer con tus propios recursos y tu comunidad.",

                effects: {

                    credibility: 4,
                    trust: 2

                },

                resultTitle:
                    "Elegiste mantener independencia",

                resultText:
                    "La persona respeta tu decisión, aunque el crecimiento financiero será más lento.",

                next:
                    "party-interest-check"

            }

        ]

    };

}


/* ============================================================
   25. INTERÉS POLÍTICO
   ============================================================ */

function createPoliticalContactScene() {

    return {

        id:
            "political-contact-" +
            randomInt(1000, 9999),

        type: "political",

        title:
            "Tu nombre salió de la colonia",

        subtitle:
            "Una organización quiere saber quién eres.",

        timeLabel:
            "REUNIÓN",

        location:
            "Café cercano",

        speaker:
            "Mauricio Salazar",

        speakerRole:
            "Operador político ficticio",

        speakerInitial:
            "M",

        text:
            "Mauricio te explica que varias personas han escuchado de tu trabajo. " +
            "No te ofrece una candidatura. Primero quiere conocer tus objetivos y tu forma de trabajar.",

        choices: [

            {

                text:
                    "Hablar de tu trabajo comunitario",

                description:
                    "Presentas resultados y experiencia concreta.",

                effects: {

                    credibility: 5,
                    reputation: 3,
                    trust: 3,
                    politicalInstinct: 2

                },

                resultTitle:
                    "Te tomaron en serio",

                resultText:
                    "La conversación termina con una invitación a conocer otros equipos locales.",

                next:
                    "party-interest-check"

            },


            {

                text:
                    "Preguntar qué quieren ellos de ti",

                description:
                    "Antes de comprometerte, quieres conocer sus intereses.",

                effects: {

                    negotiation: 5,
                    politicalInstinct: 4,
                    trust: 1

                },

                resultTitle:
                    "La conversación fue más directa",

                resultText:
                    "Ahora sabes mejor qué buscan y qué tendrías que evaluar antes de acercarte más.",

                next:
                    "party-interest-check"

            }

        ]

    };

}


/* ============================================================
   26. INTERÉS DE PARTIDOS
   ============================================================ */

function createPartyInterestScene() {

    if (
        game.flags.receivedPartyInterest ||
        game.stats.reputation < 24 ||
        game.territory.people < 20
    ) {

        return createProgressionScene();

    }


    game.flags.receivedPartyInterest = true;


    return {

        id:
            "party-interest-" +
            randomInt(1000, 9999),

        type: "opportunity",

        title:
            "Empiezan a llegar invitaciones",

        subtitle:
            "Tu crecimiento local ya es visible para otras organizaciones.",

        timeLabel:
            "SEMANA " + game.date.week,

        location:
            "Tu teléfono",

        speaker:
            game.player.assistant,

        speakerRole:
            "Asistente",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Hay mensajes nuevos. Distintas organizaciones políticas quieren conversar contigo. " +
            "No tienes que aceptar ninguna. También puedes continuar construyendo tu propia red antes de elegir.",

        choices: [

            {

                text:
                    "Conocer distintas opciones",

                description:
                    "Escuchas propuestas sin comprometerte.",

                effects: {

                    politicalInstinct: 5,
                    negotiation: 3,
                    socialCapital: 3

                },

                resultTitle:
                    "Abriste conversaciones",

                resultText:
                    "Ahora conoces mejor las opciones que existen en tu entorno político.",

                custom:
                    "generatePartyOffers",

                next:
                    "progression"

            },


            {

                text:
                    "Seguir independiente por ahora",

                description:
                    "Quieres fortalecer tu base antes de decidir.",

                effects: {

                    credibility: 4,
                    organization: 4,
                    territoryPeople: 10

                },

                resultTitle:
                    "Decidiste esperar",

                resultText:
                    "Tu organización crece sin entrar todavía en una estructura partidista.",

                next:
                    "progression"

            }

        ]

    };

}


/* ============================================================
   27. PROGRESIÓN
   ============================================================ */

function createProgressionScene() {

    if (
        game.territory.people >= 45 &&
        game.stats.reputation >= 35 &&
        game.stats.organization >= 25 &&
        game.careerStageCanAdvance !== true
    ) {

        game.careerStageCanAdvance = true;

        return createMunicipalSlateOpportunity();

    }


    return createOngoingCommunityScene();

}


/* ============================================================
   28. ESCENA COMUNITARIA CONTINUA
   ============================================================ */

function createOngoingCommunityScene() {

    const scenes = [

        createCommunityMeetingScene,

        createDoorToDoorScene,

        createSmallCrisisScene,

        createVolunteerOrganizationScene

    ];


    return randomFrom(scenes)();

}


/* ============================================================
   29. REUNIÓN COMUNITARIA
   ============================================================ */

function createCommunityMeetingScene() {

    return {

        id:
            "community-meeting-" +
            randomInt(1000, 9999),

        type: "community",

        title:
            "Una reunión más grande",

        subtitle:
            "Ya no caben todos alrededor de la primera mesa.",

        timeLabel:
            "REUNIÓN VECINAL",

        location:
            game.player.neighborhood,

        speaker:
            "Comité vecinal",

        speakerRole:
            "Organización comunitaria",

        speakerInitial:
            "C",

        text:
            "La siguiente reunión reúne a más personas. Algunas ya confían en ti; otras te están viendo por primera vez. " +
            "Tienes que decidir cómo dirigir la conversación.",

        choices: [

            {

                text:
                    "Dejar hablar a los vecinos",

                description:
                    "Quieres conocer todas las posiciones.",

                effects: {

                    trust: 5,
                    credibility: 4,
                    organization: 2,
                    energy: -12

                },

                resultTitle:
                    "La reunión produjo información",

                resultText:
                    "Descubriste nuevos problemas y varias personas ofrecieron ayudar.",

                next:
                    "random-event"

            },


            {

                text:
                    "Presentar un plan de trabajo",

                description:
                    "Buscas convertir la conversación en tareas concretas.",

                effects: {

                    organization: 5,
                    leadership: 4,
                    credibility: 3,
                    energy: -14

                },

                resultTitle:
                    "La organización se profesionalizó",

                resultText:
                    "Ahora existen tareas, responsables y fechas.",

                next:
                    "random-event"

            }

        ]

    };

}


/* ============================================================
   30. PUERTA POR PUERTA
   ============================================================ */

function createDoorToDoorScene() {

    return {

        id:
            "door-to-door-" +
            randomInt(1000, 9999),

        type: "territory",

        title:
            "Caminando la colonia",

        subtitle:
            "La red no se construye solamente en reuniones.",

        timeLabel:
            "RECORRIDO",

        location:
            game.player.neighborhood,

        speaker:
            game.player.name,

        speakerRole:
            "Recorrido territorial",

        speakerInitial:
            getInitials(game.player.name),

        text:
            "Tienes dos horas libres. Puedes visitar calles que todavía no conoces bien o concentrarte en las personas que ya te conocen.",

        choices: [

            {

                text:
                    "Explorar una zona nueva",

                description:
                    "Más incertidumbre, pero puedes encontrar nuevos contactos.",

                effects: {

                    territoryPeople: 12,
                    organization: 3,
                    energy: -15,
                    stress: 2

                },

                resultTitle:
                    "Descubriste otra zona",

                resultText:
                    "Varias personas te dieron referencias para continuar el recorrido.",

                next:
                    "random-event"

            },


            {

                text:
                    "Fortalecer la zona donde ya te conocen",

                description:
                    "Profundizas las relaciones existentes.",

                effects: {

                    territoryPeople: 5,
                    trust: 6,
                    credibility: 4,
                    energy: -10

                },

                resultTitle:
                    "La base se hizo más sólida",

                resultText:
                    "Menos personas nuevas, pero relaciones más fuertes.",

                next:
                    "random-event"

            }

        ]

    };

}


/* ============================================================
   31. PEQUEÑA CRISIS
   ============================================================ */

function createSmallCrisisScene() {

    return {

        id:
            "small-crisis-" +
            randomInt(1000, 9999),

        type: "crisis",

        title:
            "Algo salió mal",

        subtitle:
            "Una decisión pequeña puede convertirse en un problema público.",

        timeLabel:
            "CRISIS LOCAL",

        location:
            game.player.neighborhood,

        speaker:
            "Vecino molesto",

        speakerRole:
            "Ciudadano",

        speakerInitial:
            "C",

        text:
            "Una persona afirma que prometiste dar seguimiento a un problema y nadie volvió a llamarla. " +
            "El comentario empieza a circular entre otros vecinos.",

        choices: [

            {

                text:
                    "Reconocer el error y explicar el retraso",

                description:
                    "No intentas ocultar que fallaste en el seguimiento.",

                effects: {

                    credibility: 4,
                    trust: 5,
                    reputation: 1,
                    stress: 3

                },

                resultTitle:
                    "La crisis bajó de intensidad",

                resultText:
                    "No todos quedaron satisfechos, pero la transparencia evitó que el problema creciera.",

                next:
                    "random-event"

            },


            {

                text:
                    "Investigar primero qué ocurrió",

                description:
                    "Quieres tener los datos antes de responder.",

                effects: {

                    politicalInstinct: 4,
                    organization: 3,
                    stress: 2

                },

                resultTitle:
                    "Encontraste dónde falló el seguimiento",

                resultText:
                    "El problema estaba en una tarea que nunca quedó asignada a una persona concreta.",

                next:
                    "random-event"

            }

        ]

    };

}


/* ============================================================
   32. ORGANIZACIÓN DE VOLUNTARIOS
   ============================================================ */

function createVolunteerOrganizationScene() {

    return {

        id:
            "volunteer-organization-" +
            randomInt(1000, 9999),

        type: "team",

        title:
            "Tu primer equipo necesita estructura",

        subtitle:
            "Tener personas no significa saber coordinarlas.",

        timeLabel:
            "REUNIÓN INTERNA",

        location:
            "Mesa de trabajo",

        speaker:
            game.player.assistant,

        speakerRole:
            "Asistente",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Hay varias personas dispuestas a ayudar, pero todos hacen cosas distintas. " +
            "Necesitas decidir cómo organizar el trabajo.",

        choices: [

            {

                text:
                    "Asignar responsabilidades concretas",

                description:
                    "Cada integrante recibe una tarea.",

                effects: {

                    organization: 6,
                    leadership: 4,
                    energy: -8

                },

                resultTitle:
                    "El equipo comenzó a funcionar",

                resultText:
                    "Ahora sabes quién hace qué y cuándo debe entregarlo.",

                next:
                    "random-event"

            },


            {

                text:
                    "Dejar que cada persona encuentre su lugar",

                description:
                    "Quieres observar capacidades antes de asignar funciones.",

                effects: {

                    leadership: 2,
                    trust: 4,
                    organization: 2

                },

                resultTitle:
                    "Descubriste distintas habilidades",

                resultText:
                    "Algunas personas mostraron capacidades que no habías previsto.",

                next:
                    "random-event"

            }

        ]

    };

}


/* ============================================================
   33. OPORTUNIDAD DE PLANILLA MUNICIPAL
   ============================================================ */

function createMunicipalSlateOpportunity() {

    return {

        id:
            "municipal-slate-opportunity",

        type: "career",

        title:
            "Te invitan a una conversación diferente",

        subtitle:
            "Ya no te están hablando solamente de trabajo comunitario.",

        timeLabel:
            "NUEVA ETAPA",

        location:
            "Oficina local",

        speaker:
            "Mauricio Salazar",

        speakerRole:
            "Enlace político ficticio",

        speakerInitial:
            "M",

        text:
            "Tu organización territorial ya es suficientemente visible para que un equipo municipal quiera conocerte. " +
            "La conversación gira alrededor de una posible integración a una planilla municipal. " +
            "Todavía no tienes asegurado ningún lugar.",

        choices: [

            {

                text:
                    "Aceptar la conversación",

                description:
                    "Quieres conocer cómo se construye una planilla municipal.",

                effects: {

                    politicalInstinct: 5,
                    negotiation: 5,
                    reputation: 3,
                    energy: -10

                },

                resultTitle:
                    "Entraste a una nueva conversación",

                resultText:
                    "Ahora tendrás que conocer al candidato a presidente municipal, al resto del equipo y las condiciones de la integración.",

                custom:
                    "startSlateNegotiation",

                next:
                    "slate-negotiation"

            },


            {

                text:
                    "Pedir primero más tiempo",

                description:
                    "Quieres consolidar tu trabajo antes de entrar a una negociación electoral.",

                effects: {

                    organization: 4,
                    credibility: 3,
                    territoryPeople: 10

                },

                resultTitle:
                    "Decidiste fortalecer tu posición",

                resultText:
                    "La invitación no desapareció, pero ahora tendrás más margen para negociar.",

                next:
                    "random-event"

            }

        ]

    };

}


/* ============================================================
   34. NEGOCIACIÓN DE PLANILLA
   ============================================================ */

function createSlateNegotiationScene() {

    if (!game.slate) {

        game.slate =
            createMunicipalSlate();

    }


    return {

        id:
            "slate-negotiation-" +
            randomInt(1000, 9999),

        type: "career",

        title:
            "La mesa de negociación",

        subtitle:
            "Una planilla municipal se construye con varias personas.",

        timeLabel:
            "NEGOCIACIÓN",

        location:
            "Sala de reunión",

        speaker:
            game.slate.presidentialCandidate.name,

        speakerRole:
            "Candidato a presidente municipal",

        speakerInitial:
            getInitials(
                game.slate.presidentialCandidate.name
            ),

        text:
            "Sobre la mesa están el proyecto municipal, el equipo, las responsabilidades y los espacios disponibles. " +
            "Te explican que entrar en una planilla no significa automáticamente ocupar una posición determinada.",

        choices: [

            {

                text:
                    "Defender tu experiencia territorial",

                description:
                    "Argumentas con trabajo concreto y personas que has organizado.",

                effects: {

                    negotiation: 6,
                    credibility: 5,
                    leadership: 3,
                    energy: -12

                },

                resultTitle:
                    "Tu trayectoria entró a la negociación",

                resultText:
                    "El equipo reconoce que tu trabajo territorial tiene valor y abre una discusión sobre tu posible posición.",

                custom:
                    "advanceSlate",

                next:
                    "slate-position"

            },


            {

                text:
                    "Buscar primero conocer al resto del equipo",

                description:
                    "Quieres entender con quién trabajarías.",

                effects: {

                    politicalInstinct: 5,
                    negotiation: 3,
                    trust: 3,
                    energy: -8

                },

                resultTitle:
                    "Conociste a tus posibles compañeros",

                resultText:
                    "Ahora sabes quiénes son las personas con las que tendrías que convivir políticamente.",

                custom:
                    "advanceSlate",

                next:
                    "slate-position"

            }

        ]

    };

}


/* ============================================================
   35. POSICIÓN EN PLANILLA
   ============================================================ */

function createSlatePositionScene() {

    return {

        id:
            "slate-position-" +
            randomInt(1000, 9999),

        type: "career",

        title:
            "¿Dónde encajas en el equipo?",

        subtitle:
            "La negociación se vuelve concreta.",

        timeLabel:
            "DECISIÓN INTERNA",

        location:
            "Mesa de negociación",

        speaker:
            game.slate?.presidentialCandidate?.name ||
            "Equipo municipal",

        speakerRole:
            "Equipo de planilla",

        speakerInitial:
            "E",

        text:
            "El equipo te plantea distintas posibilidades. Tu objetivo no es solamente conseguir una posición: " +
            "también tienes que decidir qué tipo de carrera quieres construir.",

        choices: [

            {

                text:
                    "Buscar una regiduría de mayoría",

                description:
                    "Quieres formar parte de la planilla municipal que compite por el gobierno del Ayuntamiento.",

                effects: {

                    negotiation: 5,
                    leadership: 3,
                    reputation: 3

                },

                resultTitle:
                    "Entraste a la negociación por una regiduría",

                resultText:
                    "Tu nombre queda sobre la mesa para una posición dentro de la planilla municipal.",

                custom:
                    "prepareMunicipalElection",

                next:
                    "municipal-campaign"

            },


            {

                text:
                    "Explorar una ruta de representación proporcional",

                description:
                    "Prefieres conocer la otra vía antes de comprometerte.",

                effects: {

                    politicalInstinct: 5,
                    negotiation: 4,
                    organization: 2

                },

                resultTitle:
                    "Conociste otra ruta",

                resultText:
                    "El equipo explica que la representación proporcional tiene una lógica distinta y depende del resultado electoral y de las reglas aplicables.",

                custom:
                    "prepareProportionalRoute",

                next:
                    "municipal-campaign"

            }

        ]

    };

}


/* ============================================================
   36. CREAR PLANILLA
   ============================================================ */

function createMunicipalSlate() {

    const candidate =
        createUniqueCharacter({

            role:
                "Candidato a presidente municipal",

            influence: 12

        });


    const syndicate =
        createUniqueCharacter({

            role:
                "Candidata a síndica",

            influence: 8

        });


    const regidors = [];


    for (let i = 0; i < 6; i++) {

        regidors.push(
            createUniqueCharacter({

                role:
                    "Aspirante a regiduría",

                influence:
                    randomInt(3, 8)

            })
        );

    }


    return {

        presidentialCandidate: candidate,

        syndicate: syndicate,

        regidors: regidors,

        playerPosition: null,

        internalSupport: 30,

        conflict: 0,

        status: "negociacion"

    };

}


/* ============================================================
   37. ELECCIÓN MUNICIPAL
   ============================================================ */

function createMunicipalCampaignScene() {

    if (!game.election) {

        game.election =
            createMunicipalElection();

    }


    return {

        id:
            "municipal-campaign-" +
            game.date.week,

        type: "election",

        title:
            "Comienza la campaña municipal",

        subtitle:
            "Ahora cada decisión ocurre dentro de una competencia.",

        timeLabel:
            "CAMPAÑA",

        location:
            game.player.municipality,

        speaker:
            game.slate?.presidentialCandidate?.name ||
            "Equipo municipal",

        speakerRole:
            "Equipo de campaña",

        speakerInitial:
            "C",

        text:
            "La campaña está dividida en varias semanas. Habrá recorridos, reuniones, entrevistas, conflictos internos, debates y cambios inesperados. " +
            "No existe un botón de apoyo automático: cada actividad tendrá consecuencias.",

        choices: [

            {

                text:
                    "Recorrer colonias",

                description:
                    "Construir presencia territorial durante la campaña.",

                effects: {

                    territoryPeople: 15,
                    organization: 4,
                    energy: -18,
                    reputation: 2

                },

                resultTitle:
                    "La campaña salió a la calle",

                resultText:
                    "Tu equipo conoce nuevas zonas y detecta dónde existen fortalezas y problemas.",

                custom:
                    "campaignTerritory",

                next:
                    "election-event"

            },


            {

                text:
                    "Preparar una entrevista",

                description:
                    "Trabajar mensajes y responder preguntas difíciles.",

                effects: {

                    communication: 5,
                    media: 5,
                    reputation: 2,
                    energy: -10

                },

                resultTitle:
                    "La entrevista terminó",

                resultText:
                    "Tu desempeño modifica cómo algunos personajes perciben tu candidatura.",

                custom:
                    "campaignMedia",

                next:
                    "election-event"

            },


            {

                text:
                    "Reunir al equipo",

                description:
                    "Resolver problemas internos antes de seguir creciendo.",

                effects: {

                    leadership: 5,
                    organization: 5,
                    trust: 3,
                    energy: -10

                },

                resultTitle:
                    "El equipo quedó alineado",

                resultText:
                    "Varias tareas se reorganizaron y la campaña recuperó ritmo.",

                custom:
                    "campaignTeam",

                next:
                    "election-event"

            }

        ]

    };

}


/* ============================================================
   38. CREAR ELECCIÓN
   ============================================================ */

function createMunicipalElection() {

    return {

        type: "municipal",

        week: 1,

        totalWeeks: 5,

        playerSupport: 20,

        organization: 20,

        opponentSupport: 25,

        turnout: 50,

        campaignMomentum: 0,

        crisis: 0,

        completed: false,

        rivals: [

            createUniqueCharacter({
                role: "Candidato rival",
                influence: 11
            }),

            createUniqueCharacter({
                role: "Candidata rival",
                influence: 10
            }),

            createUniqueCharacter({
                role: "Candidato rival",
                influence: 9
            })

        ]

    };

}


/* ============================================================
   39. EVENTO ELECTORAL
   ============================================================ */

function createElectionEventScene() {

    const events = [

        createElectionDebateScene,

        createCampaignRumorScene,

        createTeamConflictScene,

        createNeighborhoodEndorsementScene,

        createCampaignScheduleScene

    ];


    return randomFrom(events)();

}


/* ============================================================
   40. DEBATE
   ============================================================ */

function createElectionDebateScene() {

    return {

        id:
            "election-debate-" +
            randomInt(1000, 9999),

        type: "election",

        title:
            "Debate municipal",

        subtitle:
            "Los candidatos tienen que responder preguntas frente al público.",

        timeLabel:
            "DEBATE",

        location:
            "Foro municipal",

        speaker:
            "Moderadora",

        speakerRole:
            "Debate electoral ficticio",

        speakerInitial:
            "M",

        text:
            "Una pregunta inesperada pone a prueba tu preparación. " +
            "Tienes pocos segundos para decidir cómo responder.",

        choices: [

            {

                text:
                    "Responder con una propuesta concreta",

                description:
                    "Explicas qué harías y qué necesitarías para hacerlo.",

                effects: {

                    communication: 5,
                    credibility: 4,
                    media: 4

                },

                resultTitle:
                    "Tu respuesta fue concreta",

                resultText:
                    "La conversación se mantuvo enfocada en propuestas.",

                custom:
                    "electionPositive",

                next:
                    "election-event"

            },


            {

                text:
                    "Reconocer lo que todavía no sabes",

                description:
                    "Prefieres admitir límites antes que improvisar.",

                effects: {

                    credibility: 6,
                    trust: 4,
                    media: 2

                },

                resultTitle:
                    "Mostraste cautela",

                resultText:
                    "La respuesta no fue espectacular, pero algunas personas valoraron la precisión.",

                custom:
                    "electionPositive",

                next:
                    "election-event"

            }

        ]

    };

}


/* ============================================================
   41. RUMOR
   ============================================================ */

function createCampaignRumorScene() {

    return {

        id:
            "campaign-rumor-" +
            randomInt(1000, 9999),

        type: "election",

        title:
            "Un rumor empieza a circular",

        subtitle:
            "La campaña también tiene momentos incómodos.",

        timeLabel:
            "CRISIS",

        location:
            "Redes y conversaciones locales",

        speaker:
            game.player.assistant,

        speakerRole:
            "Monitoreo de medios",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Tu equipo detecta un rumor sobre una decisión que supuestamente tomaste. " +
            "No hay evidencia clara de que sea cierto.",

        choices: [

            {

                text:
                    "Responder con información verificable",

                description:
                    "Publicas una aclaración sin atacar a nadie.",

                effects: {

                    media: 4,
                    credibility: 4,
                    communication: 3

                },

                resultTitle:
                    "La respuesta fue sobria",

                resultText:
                    "El equipo evita amplificar el rumor y presenta información concreta.",

                custom:
                    "electionPositive",

                next:
                    "election-event"

            },


            {

                text:
                    "No responder inmediatamente",

                description:
                    "Esperas a conocer si el rumor realmente tiene alcance.",

                effects: {

                    politicalInstinct: 4,
                    stress: 3

                },

                resultTitle:
                    "Esperaste antes de reaccionar",

                resultText:
                    "El equipo monitorea el tema antes de decidir si merece una respuesta.",

                custom:
                    "electionNeutral",

                next:
                    "election-event"

            }

        ]

    };

}


/* ============================================================
   42. CONFLICTO INTERNO
   ============================================================ */

function createTeamConflictScene() {

    return {

        id:
            "team-conflict-" +
            randomInt(1000, 9999),

        type: "election",

        title:
            "Problemas dentro del equipo",

        subtitle:
            "La campaña está creciendo y aparecen diferencias.",

        timeLabel:
            "REUNIÓN INTERNA",

        location:
            "Comité de campaña",

        speaker:
            "Equipo de campaña",

        speakerRole:
            "Reunión interna",

        speakerInitial:
            "E",

        text:
            "Dos integrantes importantes discuten sobre qué zonas deberían recibir más atención. " +
            "La discusión empieza a afectar la coordinación.",

        choices: [

            {

                text:
                    "Reunir a ambos y buscar un acuerdo",

                description:
                    "Intentas solucionar el conflicto directamente.",

                effects: {

                    negotiation: 5,
                    leadership: 5,
                    trust: 3,
                    energy: -9

                },

                resultTitle:
                    "El equipo encontró un punto medio",

                resultText:
                    "No todos quedaron completamente satisfechos, pero la operación continúa.",

                custom:
                    "electionPositive",

                next:
                    "election-event"

            },


            {

                text:
                    "Tomar una decisión y asignar responsabilidades",

                description:
                    "Priorizas velocidad y claridad.",

                effects: {

                    leadership: 6,
                    organization: 5,
                    trust: -1,
                    energy: -7

                },

                resultTitle:
                    "La operación recuperó ritmo",

                resultText:
                    "El conflicto no desapareció, pero ahora existen responsabilidades claras.",

                custom:
                    "electionPositive",

                next:
                    "election-event"

            }

        ]

    };

}


/* ============================================================
   43. APOYO VECINAL
   ============================================================ */

function createNeighborhoodEndorsementScene() {

    return {

        id:
            "neighborhood-endorsement-" +
            randomInt(1000, 9999),

        type: "election",

        title:
            "Una colonia quiere escucharte",

        subtitle:
            "Tu trabajo anterior empieza a tener consecuencias.",

        timeLabel:
            "REUNIÓN",

        location:
            game.player.neighborhood,

        speaker:
            "Representantes vecinales",

        speakerRole:
            "Reunión comunitaria",

        speakerInitial:
            "R",

        text:
            "Personas que conociste antes de la campaña organizan una reunión. " +
            "No te ofrecen votos automáticos. Quieren saber qué has aprendido durante estos meses.",

        choices: [

            {

                text:
                    "Hablar de lo que aprendiste",

                description:
                    "Conectas tu campaña con tu experiencia previa.",

                effects: {

                    credibility: 6,
                    trust: 5,
                    reputation: 3,
                    territoryPeople: 10

                },

                resultTitle:
                    "Tu historia tuvo continuidad",

                resultText:
                    "La gente reconoce que la campaña no fue el comienzo de tu relación con la colonia.",

                custom:
                    "electionPositive",

                next:
                    "election-event"

            },


            {

                text:
                    "Escuchar nuevas demandas",

                description:
                    "Dejas que la reunión vuelva a ser una conversación comunitaria.",

                effects: {

                    trust: 6,
                    organization: 3,
                    credibility: 3

                },

                resultTitle:
                    "Escuchaste nuevos problemas",

                resultText:
                    "El equipo incorpora varias preocupaciones al trabajo de campaña.",

                custom:
                    "electionPositive",

                next:
                    "election-event"

            }

        ]

    };

}


/* ============================================================
   44. AGENDA DE CAMPAÑA
   ============================================================ */

function createCampaignScheduleScene() {

    return {

        id:
            "campaign-schedule-" +
            randomInt(1000, 9999),

        type: "election",

        title:
            "Tienes tres invitaciones a la misma hora",

        subtitle:
            "La agenda también es una decisión política.",

        timeLabel:
            "AGENDA",

        location:
            "Oficina",

        speaker:
            game.player.assistant,

        speakerRole:
            "Asistente",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Puedes asistir a una reunión territorial, una entrevista o una reunión interna con tu equipo. " +
            "No puedes estar en las tres.",

        choices: [

            {

                text:
                    "Elegir territorio",

                description:
                    "Mantienes el contacto directo.",

                effects: {

                    territoryPeople: 12,
                    trust: 4,
                    energy: -14

                },

                custom:
                    "electionPositive",

                resultTitle:
                    "Priorizaste la calle",

                resultText:
                    "El equipo pierde una oportunidad mediática, pero fortaleces presencia territorial.",

                next:
                    "election-event"

            },


            {

                text:
                    "Elegir entrevista",

                description:
                    "Buscas mayor exposición pública.",

                effects: {

                    media: 6,
                    communication: 4,
                    reputation: 3,
                    energy: -10

                },

                custom:
                    "electionPositive",

                resultTitle:
                    "Aumentó tu presencia pública",

                resultText:
                    "Más personas conocen tu nombre.",

                next:
                    "election-event"

            },


            {

                text:
                    "Elegir reunión interna",

                description:
                    "Quieres que el equipo funcione mejor.",

                effects: {

                    leadership: 5,
                    organization: 5,
                    trust: 3,
                    energy: -8

                },

                custom:
                    "electionPositive",

                resultTitle:
                    "Fortaleciste la operación",

                resultText:
                    "La campaña interna quedó mejor coordinada.",

                next:
                    "election-event"

            }

        ]

    };

}


/* ============================================================
   45. ELECCIÓN — NOCHE ELECTORAL
   ============================================================ */

function createElectionNightScene() {

    const score =
        calculateElectionScore();


    game.election.finalScore =
        score;


    const win =
        score >= 50;


    game.election.completed = true;


    if (win) {

        game.flags.wonFirstElection = true;

    } else {

        game.flags.lostFirstElection = true;

    }


    return {

        id:
            "election-night-" +
            randomInt(1000, 9999),

        type: "election-result",

        title:
            "Noche electoral",

        subtitle:
            "Después de meses de trabajo, llegó el momento de conocer el resultado.",

        timeLabel:
            "NOCHE ELECTORAL",

        location:
            "Centro de campaña",

        speaker:
            game.player.assistant,

        speakerRole:
            "Seguimiento electoral",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            win

                ? "Las primeras actas comienzan a llegar. " +
                  "Tu planilla alcanza una votación suficiente para obtener el resultado que buscabas."

                : "Las primeras actas comienzan a llegar. " +
                  "El resultado no alcanza para obtener el puesto que buscabas.",

        choices: [

            {

                text:
                    win
                        ? "Esperar el resultado completo"
                        : "Analizar lo ocurrido",

                description:
                    win
                        ? "No quieres adelantarte hasta conocer todos los resultados."
                        : "Quieres entender qué salió bien y qué salió mal.",

                effects: {},

                resultTitle:
                    win
                        ? "Ganaste la elección"
                        : "La elección terminó",

                resultText:
                    win

                        ? "La siguiente etapa será el cabildo municipal."

                        : "Tu carrera no termina aquí. Ahora tendrás que decidir cómo reconstruir tu trayectoria.",

                custom:
                    win
                        ? "enterCabildo"
                        : "afterLoss",

                next:
                    "career-transition"

            }

        ]

    };

}


/* ============================================================
   46. CALCULAR ELECCIÓN
   ============================================================ */

function calculateElectionScore() {

    const e =
        game.election;


    let score = 0;


    score +=
        game.stats.reputation * 0.7;


    score +=
        game.stats.organization * 0.55;


    score +=
        game.stats.credibility * 0.45;


    score +=
        game.stats.communication * 0.25;


    score +=
        game.territory.people * 0.35;


    score +=
        e.campaignMomentum * 1.2;


    score -=
        e.crisis * 0.8;


    score +=
        randomInt(-8, 8);


    return score;

}


/* ============================================================
   47. CABILD0
   ============================================================ */

function createCabildoScene() {

    return {

        id:
            "first-cabildo-session",

        type: "cabildo",

        title:
            "Tu primera sesión de Cabildo",

        subtitle:
            "Ganaste un puesto. Ahora empieza el trabajo real.",

        timeLabel:
            "CABILDO",

        location:
            "Palacio Municipal",

        speaker:
            game.slate?.presidentialCandidate?.name ||
            "Presidencia Municipal",

        speakerRole:
            "Presidencia Municipal",

        speakerInitial:
            "P",

        text:
            "La primera sesión tiene asuntos administrativos, comisiones y peticiones de ciudadanos. " +
            "Ya no estás en campaña. Ahora cada decisión tiene que convivir con otras personas y responsabilidades.",

        choices: [

            {

                text:
                    "Pedir integrarte a una comisión cercana a tus fortalezas",

                description:
                    "Quieres trabajar en un área donde puedas aportar.",

                effects: {

                    leadership: 4,
                    organization: 4,
                    credibility: 3,
                    reputation: 2

                },

                resultTitle:
                    "Comenzaste a trabajar en Cabildo",

                resultText:
                    "Tu primera responsabilidad institucional queda establecida.",

                custom:
                    "establishCommission",

                next:
                    "cabildo-followup"

            },


            {

                text:
                    "Escuchar primero cómo funciona el Cabildo",

                description:
                    "Quieres entender procedimientos y relaciones antes de tomar protagonismo.",

                effects: {

                    politicalInstinct: 5,
                    negotiation: 3,
                    credibility: 3

                },

                resultTitle:
                    "Observaste antes de intervenir",

                resultText:
                    "Conociste las dinámicas internas y a los otros integrantes del Ayuntamiento.",

                custom:
                    "establishCommission",

                next:
                    "cabildo-followup"

            }

        ]

    };

}


/* ============================================================
   48. SEGUIMIENTO DE CABILDO
   ============================================================ */

function createCabildoFollowupScene() {

    return {

        id:
            "cabildo-followup-" +
            randomInt(1000, 9999),

        type: "cabildo",

        title:
            "La primera semana en el cargo",

        subtitle:
            "El puesto no se limita a asistir a sesiones.",

        timeLabel:
            "PRIMERA SEMANA",

        location:
            "Ayuntamiento",

        speaker:
            game.player.assistant,

        speakerRole:
            "Asistente",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Tienes solicitudes de ciudadanos, documentos por revisar, reuniones de comisión y una agenda política que todavía no conoces del todo.",

        choices: [

            {

                text:
                    "Recorrer las colonias de nuevo",

                description:
                    "Quieres conectar el cargo con tu experiencia territorial.",

                effects: {

                    credibility: 5,
                    trust: 5,
                    territoryPeople: 10,
                    energy: -15

                },

                resultTitle:
                    "Volviste al territorio",

                resultText:
                    "Las personas que te conocían antes ahora te ven desempeñar una responsabilidad pública.",

                next:
                    "career-next-stage"

            },


            {

                text:
                    "Concentrarte en las comisiones",

                description:
                    "Quieres dominar primero el trabajo institucional.",

                effects: {

                    organization: 6,
                    politicalInstinct: 4,
                    credibility: 4,
                    energy: -12

                },

                resultTitle:
                    "Comenzaste a dominar el cargo",

                resultText:
                    "Tu trabajo institucional empieza a generar una trayectoria propia.",

                next:
                    "career-next-stage"

            }

        ]

    };

}


/* ============================================================
   49. SIGUIENTE ETAPA
   ============================================================ */

function createCareerNextStageScene() {

    return {

        id:
            "career-next-stage-" +
            game.date.week,

        type: "career",

        title:
            "Tu siguiente decisión",

        subtitle:
            "Ahora tienes experiencia institucional.",

        timeLabel:
            "NUEVA ETAPA",

        location:
            "Ayuntamiento",

        speaker:
            game.player.assistant,

        speakerRole:
            "Asistente",

        speakerInitial:
            getInitials(game.player.assistant),

        text:
            "Con experiencia territorial y una primera etapa institucional, comienzan a aparecer nuevas conversaciones. " +
            "La siguiente elección puede llevarte por una ruta municipal, legislativa o hacia una responsabilidad mayor.",

        choices: [

            {

                text:
                    "Buscar una diputación local",

                description:
                    "Entrar al ámbito legislativo estatal.",

                effects: {

                    reputation: 5,
                    politicalInstinct: 5,
                    negotiation: 4

                },

                custom:
                    "advanceLocalDeputy",

                resultTitle:
                    "Apareció una nueva ruta",

                resultText:
                    "Empiezas a explorar una candidatura legislativa estatal.",

                next:
                    "random-event"

            },


            {

                text:
                    "Construir una carrera municipal más larga",

                description:
                    "Quieres profundizar tu experiencia en gobierno local.",

                effects: {

                    organization: 5,
                    credibility: 4,
                    leadership: 4

                },

                resultTitle:
                    "Decidiste consolidarte",

                resultText:
                    "Tu carrera se vuelve más municipal y administrativa.",

                next:
                    "random-event"

            }

        ]

    };

}


/* ============================================================
   50. MOTOR DE ESCENAS
   ============================================================ */

function resolveSceneNext(next) {

    switch (next) {

        case "neighborhood-problem":
            return createNeighborhoodProblemScene();


        case "street-network":
            return createStreetNetworkScene();


        case "weekly-planning":
            return createWeeklyPlanningScene();


        case "random-event":
            return createRandomEventScene();


        case "political-contact":
            return createPoliticalContactScene();


        case "party-interest-check":
            return createPartyInterestScene();


        case "progression":
            return createProgressionScene();


        case "slate-negotiation":
            return createSlateNegotiationScene();


        case "slate-position":
            return createSlatePositionScene();


        case "municipal-campaign":
            return createMunicipalCampaignScene();


        case "election-event":
            return createElectionEventScene();


        case "career-transition":

            if (game.flags.wonFirstElection) {

                return createCabildoScene();

            }

            return createOngoingCommunityScene();


        case "cabildo-followup":
            return createCabildoFollowupScene();


        case "career-next-stage":
            return createCareerNextStageScene();


        default:
            return createOngoingCommunityScene();

    }

}


/* ============================================================
   51. RENDER ESCENA
   ============================================================ */

function renderScene(scene) {

    if (!scene) {
        return;
    }


    game.currentScene =
        scene;


    const title =
        document.getElementById(
            "scene-title"
        );

    const subtitle =
        document.getElementById(
            "scene-subtitle"
        );

    const timeLabel =
        document.getElementById(
            "scene-time-label"
        );

    const location =
        document.getElementById(
            "scene-location"
        );

    const state =
        document.getElementById(
            "scene-state"
        );

    const speaker =
        document.getElementById(
            "scene-speaker-name"
        );

    const speakerRole =
        document.getElementById(
            "scene-speaker-role"
        );

    const speakerAvatar =
        document.getElementById(
            "scene-speaker-avatar"
        );

    const text =
        document.getElementById(
            "scene-text"
        );


    if (title) {
        title.textContent =
            scene.title || "";
    }


    if (subtitle) {
        subtitle.textContent =
            scene.subtitle || "";
    }


    if (timeLabel) {
        timeLabel.textContent =
            scene.timeLabel || "";
    }


    if (location) {
        location.textContent =
            scene.location ||
            game.player.neighborhood;
    }


    if (state) {

        state.textContent =
            WORLD[
                game.player.state
            ]?.name ||
            game.player.state;

    }


    if (speaker) {
        speaker.textContent =
            scene.speaker || "";
    }


    if (speakerRole) {
        speakerRole.textContent =
            scene.speakerRole || "PERSONAJE";
    }


    if (speakerAvatar) {
        speakerAvatar.textContent =
            scene.speakerInitial ||
            getInitials(scene.speaker);
    }


    if (text) {
        text.textContent =
            scene.text || "";
    }


    renderChoices(scene.choices || []);


    hideElement(
        document.getElementById(
            "scene-consequence"
        )
    );


    renderHUD();

    saveGame();

}


/* ============================================================
   52. DECISIONES
   ============================================================ */

function renderChoices(choices) {

    const container =
        document.getElementById(
            "scene-choices"
        );

    if (!container) {
        return;
    }


    container.innerHTML = "";


    choices.forEach(
        (choice, index) => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "scene-choice";


            button.innerHTML = `

                <span class="scene-choice-index">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="scene-choice-copy">

                    <strong>
                        ${escapeHtml(choice.text)}
                    </strong>

                    <small>
                        ${escapeHtml(choice.description || "")}
                    </small>

                </span>

                <span class="scene-choice-arrow">
                    →
                </span>

            `;


            button.addEventListener(
                "click",
                () => resolveChoice(choice)
            );


            container.appendChild(button);

        }
    );

}


/* ============================================================
   53. RESOLVER DECISIÓN
   ============================================================ */

function resolveChoice(choice) {

    if (!game.currentScene) {
        return;
    }


    const scene =
        game.currentScene;


    const effects =
        choice.effects || {};


    applyEffects(effects);


    if (choice.memory) {

        game.memories.push({

            text:
                choice.memory,

            day:
                game.date.day,

            week:
                game.date.week

        });

    }


    game.sceneHistory.push({

        sceneId:
            scene.id,

        title:
            scene.title,

        choice:
            choice.text,

        day:
            game.date.day,

        week:
            game.date.week

    });


    game.visitedScenes.push(
        scene.id
    );


    if (choice.custom) {

        runCustomAction(
            choice.custom
        );

    }


    advanceTime(
        getSceneDuration(scene)
    );


    showResult({

        title:
            choice.resultTitle ||
            "Decisión tomada",

        text:
            choice.resultText ||
            "Tu decisión tendrá consecuencias.",

        effects

    });


    const next =
        choice.next;


    document
        .getElementById(
            "btn-result-continue"
        )
        ?.setAttribute(
            "data-next-scene",
            next || ""
        );


    saveGame();

}


/* ============================================================
   54. DURACIÓN
   ============================================================ */

function getSceneDuration(scene) {

    if (!scene) {
        return 60;
    }


    switch (scene.type) {

        case "story":
            return 90;

        case "planning":
            return 60;

        case "community":
            return 120;

        case "territory":
            return 120;

        case "media":
            return 60;

        case "election":
            return 120;

        case "cabildo":
            return 120;

        case "personal":
            return 90;

        default:
            return 60;

    }

}


/* ============================================================
   55. RESULTADO
   ============================================================ */

function showResult(data) {

    const layer =
        document.getElementById(
            "result-layer"
        );

    const title =
        document.getElementById(
            "result-title"
        );

    const text =
        document.getElementById(
            "result-text"
        );

    const effects =
        document.getElementById(
            "result-effects"
        );


    if (!layer) {
        return;
    }


    if (title) {
        title.textContent =
            data.title;
    }


    if (text) {
        text.textContent =
            data.text;
    }


    if (effects) {

        effects.innerHTML = "";


        Object.entries(
            data.effects || {}
        )
        .filter(
            ([key, value]) =>
                typeof value === "number" &&
                value !== 0
        )
        .forEach(
            ([key, value]) => {

                const item =
                    document.createElement("span");


                item.className =
                    "effect-item";


                const label =
                    effectLabel(key);


                item.textContent =
                    `${label} ${value > 0 ? "+" : ""}${value}`;


                effects.appendChild(item);

            }
        );

    }


    layer.classList.remove(
        "is-hidden"
    );


    layer.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* ============================================================
   56. CONTINUAR DESPUÉS DEL RESULTADO
   ============================================================ */

function closeResult() {

    const layer =
        document.getElementById(
            "result-layer"
        );


    const button =
        document.getElementById(
            "btn-result-continue"
        );


    const next =
        button?.getAttribute(
            "data-next-scene"
        );


    layer?.classList.add(
        "is-hidden"
    );


    layer?.setAttribute(
        "aria-hidden",
        "true"
    );


    if (next === "career-transition") {

        renderScene(
            game.flags.wonFirstElection
                ? createCabildoScene()
                : createOngoingCommunityScene()
        );

        return;
    }


    if (next === "cabildo-followup") {

        renderScene(
            createCabildoFollowupScene()
        );

        return;
    }


    if (next === "career-next-stage") {

        renderScene(
            createCareerNextStageScene()
        );

        return;
    }


    if (next) {

        renderScene(
            resolveSceneNext(next)
        );

    } else {

        renderScene(
            createOngoingCommunityScene()
        );

    }

}


/* ============================================================
   57. APLICAR EFECTOS
   ============================================================ */

function applyEffects(effects) {

    Object.entries(effects)
        .forEach(
            ([key, value]) => {

                if (
                    typeof value !== "number"
                ) {
                    return;
                }


                switch (key) {

                    case "territoryPeople":

                        game.territory.people +=
                            value;

                        break;


                    case "territoryLeaders":

                        game.territory.leaders +=
                            value;

                        break;


                    case "territorySections":

                        game.territory.sections +=
                            value;

                        break;


                    default:

                        if (
                            Object.prototype.hasOwnProperty.call(
                                game.stats,
                                key
                            )
                        ) {

                            game.stats[key] +=
                                value;

                        }

                        break;

                }

            }
        );


    clampStats();

}


function clampStats() {

    const boundedStats = [

        "credibility",
        "organization",
        "negotiation",
        "leadership",
        "communication",
        "media",
        "reputation",
        "trust",
        "resilience",
        "politicalInstinct",
        "energy",
        "stress",
        "socialCapital"

    ];


    boundedStats.forEach(key => {

        if (
            typeof game.stats[key] !==
            "number"
        ) {
            return;
        }


        if (
            key === "energy" ||
            key === "stress"
        ) {

            game.stats[key] =
                Math.max(
                    0,
                    Math.min(
                        100,
                        game.stats[key]
                    )
                );

        } else {

            game.stats[key] =
                Math.max(
                    0,
                    Math.min(
                        100,
                        game.stats[key]
                    )
                );

        }

    });


    game.stats.money =
        Math.max(
            0,
            game.stats.money
        );


    game.territory.people =
        Math.max(
            0,
            game.territory.people
        );

}


/* ============================================================
   58. ACCIONES PERSONALIZADAS
   ============================================================ */

function runCustomAction(action) {

    switch (action) {

        case "createTeam":
            createInitialTeam();
            break;


        case "addVolunteer":
            addVolunteerToTeam();
            break;


        case "createPatron":
            createPatron();
            break;


        case "generatePartyOffers":
            generatePartyOffers();
            break;


        case "startSlateNegotiation":

            game.flags.slateNegotiationStarted =
                true;

            game.slate =
                createMunicipalSlate();

            break;


        case "advanceSlate":

            if (game.slate) {

                game.slate.internalSupport +=
                    8;

                game.slate.playerPosition =
                    "En negociación";

            }

            break;


        case "prepareMunicipalElection":

            if (!game.slate) {

                game.slate =
                    createMunicipalSlate();

            }

            game.slate.playerPosition =
                "Regiduría de mayoría";

            break;


        case "prepareProportionalRoute":

            if (!game.slate) {

                game.slate =
                    createMunicipalSlate();

            }

            game.slate.playerPosition =
                "Ruta proporcional";

            break;


        case "campaignTerritory":

            if (game.election) {

                game.election.playerSupport +=
                    5;

                game.election.organization +=
                    6;

                game.election.campaignMomentum +=
                    4;

            }

            break;


        case "campaignMedia":

            if (game.election) {

                game.election.playerSupport +=
                    4;

                game.election.campaignMomentum +=
                    5;

            }

            break;


        case "campaignTeam":

            if (game.election) {

                game.election.organization +=
                    5;

                game.election.campaignMomentum +=
                    3;

            }

            break;


        case "electionPositive":

            if (game.election) {

                game.election.playerSupport +=
                    randomInt(2, 5);

                game.election.campaignMomentum +=
                    randomInt(1, 4);

            }

            break;


        case "electionNeutral":

            if (game.election) {

                game.election.campaignMomentum +=
                    1;

            }

            break;


        case "enterCabildo":

            enterCabildo();

            break;


        case "afterLoss":

            game.player.role =
                "Liderazgo comunitario";

            break;


        case "establishCommission":

            game.cabildo = {

                commission:
                    randomFrom([
                        "Servicios Públicos",
                        "Desarrollo Social",
                        "Participación Ciudadana",
                        "Gobernación",
                        "Planeación"
                    ]),

                sessions: 1,

                initiatives: 0

            };

            break;


        case "advanceLocalDeputy":

            game.player.careerStage =
                "local-deputy";

            game.player.role =
                "Aspirante a diputación local";

            break;

    }

}


/* ============================================================
   59. EQUIPO
   ============================================================ */

function createInitialTeam() {

    if (game.team.length > 0) {
        return;
    }


    const roles = [

        "Organización territorial",
        "Agenda",
        "Comunicación"

    ];


    roles.forEach(role => {

        const character =
            createUniqueCharacter({

                role,

                influence:
                    randomInt(2, 5)

            });


        game.team.push(character);

        addRelationship(
            character,
            25
        );

    });

}


function addVolunteerToTeam() {

    const character =
        createUniqueCharacter({

            role:
                "Voluntario de confianza",

            influence: 3

        });


    game.team.push(character);

    addRelationship(
        character,
        28
    );

}


/* ============================================================
   60. PADRINO
   ============================================================ */

function createPatron() {

    game.patron = {

        name:
            "Arturo Beltrán",

        role:
            "Mecenas ficticio",

        trust:
            35,

        support:
            1500,

        transparency:
            70

    };

}


/* ============================================================
   61. PARTIDOS / ORGANIZACIONES
   ============================================================ */

function generatePartyOffers() {

    game.partyOffers = [

        {
            name: "PAN",
            type: "Partido político",
            status: "Conversación abierta"
        },

        {
            name: "Movimiento Ciudadano",
            type: "Partido político",
            status: "Conversación abierta"
        },

        {
            name: "PRI",
            type: "Partido político",
            status: "Conversación abierta"
        },

        {
            name: "Partido Verde",
            type: "Partido político",
            status: "Conversación abierta"
        },

        {
            name: "Morena",
            type: "Partido político",
            status: "Conversación abierta"
        }

    ];


    game.inbox.push({

        sender:
            game.player.assistant,

        subject:
            "Hay nuevas conversaciones",

        text:
            "Varias organizaciones políticas quieren conocerte. " +
            "Puedes escucharlas sin comprometerte todavía."

    });

}


/* ============================================================
   62. PERSONAJES
   ============================================================ */

function createUniqueCharacter(options = {}) {

    let attempts = 0;

    let name = "";


    do {

        name =
            `${randomFrom(FIRST_NAMES)} ${randomFrom(LAST_NAMES)}`;

        attempts++;

    } while (
        game.usedNames.includes(name) &&
        attempts < 100
    );


    game.usedNames.push(name);


    const character = {

        id:
            "character-" +
            randomInt(100000, 999999),

        name,

        role:
            options.role ||
            "Contacto",

        influence:
            options.influence ||
            randomInt(1, 5),

        trust:
            0,

        loyalty:
            randomInt(35, 65),

        resentment:
            0,

        memory: [],

        active: true

    };


    game.charactersSeen.push(
        character.id
    );


    return character;

}


function addRelationship(
    character,
    trust = 0
) {

    const existing =
        game.relationships.find(
            item =>
                item.id === character.id
        );


    if (existing) {

        existing.trust +=
            trust;

        return;

    }


    game.relationships.push({

        id:
            character.id,

        name:
            character.name,

        role:
            character.role,

        trust:
            Math.max(
                0,
                Math.min(
                    100,
                    trust
                )
            ),

        loyalty:
            character.loyalty,

        memory: []

    });

}


/* ============================================================
   63. TIEMPO
   ============================================================ */

function advanceTime(minutes) {

    game.date.minute +=
        minutes;


    while (
        game.date.minute >= 60
    ) {

        game.date.minute -=
            60;

        game.date.hour++;

    }


    while (
        game.date.hour >= 24
    ) {

        game.date.hour -=
            24;

        game.date.day++;

        onNewDay();

    }


    if (
        game.date.day > 7
    ) {

        game.date.day = 1;

        game.date.week++;

        onNewWeek();

    }


    renderHUD();

}


function onNewDay() {

    game.stats.energy += 15;

    game.stats.stress -= 5;

    clampStats();


    if (
        game.stats.energy < 35
    ) {

        game.stats.stress += 3;

    }

}


function onNewWeek() {

    game.stats.energy += 20;

    game.stats.stress -= 10;


    if (game.election) {

        game.election.week++;


        if (
            game.election.week >
            game.election.totalWeeks
        ) {

            renderScene(
                createElectionNightScene()
            );

        }

    }


    maybeGenerateCalendarEvent();

    maybeGenerateMessage();

    clampStats();

}


/* ============================================================
   64. HUD
   ============================================================ */

function renderHUD() {

    const name =
        game.player.name ||
        "Tu nombre";


    setText(
        "hud-player-name",
        name
    );


    setText(
        "hud-player-role",
        game.player.role
    );


    setText(
        "player-avatar",
        getInitials(name)
    );


    setText(
        "hud-date",
        formatDate()
    );


    setText(
        "hud-day-name",
        getDayName()
    );


    setText(
        "hud-time",
        formatTime()
    );


    setText(
        "hud-career-stage",
        careerStageLabel()
    );


    setText(
        "hud-career-position",
        game.player.role
    );


    setText(
        "hud-reputation",
        `Reputación ${game.stats.reputation}`
    );


    updateBadges();

}


/* ============================================================
   65. FECHA
   ============================================================ */

function formatTime() {

    return [
        String(game.date.hour).padStart(2, "0"),
        String(game.date.minute).padStart(2, "0")
    ].join(":");

}


function formatDate() {

    return `Semana ${game.date.week} · Día ${game.date.day}`;

}


function getDayName() {

    const days = [

        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"

    ];


    return days[
        (game.date.day - 1) %
        days.length
    ];

}


/* ============================================================
   66. CARRERA
   ============================================================ */

function careerStageLabel() {

    const labels = {

        grassroots:
            "INICIO",

        "regidor":
            "MUNICIPAL",

        "local-deputy":
            "LEGISLATIVA",

        mayor:
    "MUNICIPAL",

"federal-deputy":
    "FEDERAL",

senator:
    "SENADO",

governor:
    "GUBERNATURA",

"presidential-candidate":
    "PRESIDENCIAL",

president:
    "PRESIDENCIA"
          

    };


    return labels[
        game.player.careerStage
    ] || "INICIO";

}


function enterCabildo() {

    game.flags.enteredCabildo =
        true;


    game.player.careerStage =
        "regidor";


    game.player.role =
        "Regidor";


    game.cabildo = {

        commission: null,

        sessions: 0,

        initiatives: 0

    };


    game.careerHistory.push({

        title:
            "Regidor",

        description:
            "Entraste al Cabildo municipal después de una elección.",

        day:
            game.date.day,

        week:
            game.date.week

    });


    showToast(
        "Nueva etapa",
        "Ahora comienza tu experiencia dentro del Cabildo."
    );

}


/* ============================================================
   67. TELÉFONO
   ============================================================ */

function addMessage(message) {

    game.inbox.unshift({

        id:
            "message-" +
            randomInt(100000, 999999),

        ...message,

        read: false,

        day:
            game.date.day,

        week:
            game.date.week

    });


    updateBadges();

}


function renderPhonePanel() {

    const template =
        document
            .getElementById(
                "template-phone"
            );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    const list =
        document.getElementById(
            "phone-messages"
        );


    const count =
        document.getElementById(
            "phone-unread-count"
        );


    const unread =
        game.inbox.filter(
            item => !item.read
        ).length;


    if (count) {

        count.textContent =
            `${unread} sin leer`;

    }


    if (!list) {
        return;
    }


    if (game.inbox.length === 0) {

        list.innerHTML =
            emptyState(
                "No tienes mensajes nuevos."
            );

        return;
    }


    game.inbox
        .forEach(message => {

            const item =
                document.createElement("div");


            item.className =
                "message-item";


            item.innerHTML = `

                <strong>
                    ${escapeHtml(message.sender)}
                </strong>

                <p>
                    ${escapeHtml(message.subject)}
                </p>

                <p>
                    ${escapeHtml(message.text)}
                </p>

            `;


            item.addEventListener(
                "click",
                () => {

                    message.read = true;

                    renderPhonePanel();

                    updateBadges();

                }
            );


            list.appendChild(item);

        });

}


/* ============================================================
   68. AGENDA
   ============================================================ */

function addCalendarEvent(event) {

    game.calendar.push({

        id:
            "calendar-" +
            randomInt(100000, 999999),

        ...event,

        day:
            event.day ||
            game.date.day

    });

}


function renderCalendarPanel() {

    const template =
        document.getElementById(
            "template-calendar"
        );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    const list =
        document.getElementById(
            "calendar-events"
        );


    if (!list) {
        return;
    }


    const events =
        game.calendar.filter(
            event =>
                event.day ===
                game.date.day
        );


    if (events.length === 0) {

        list.innerHTML =
            emptyState(
                "No tienes citas para hoy."
            );

        return;
    }


    events.forEach(event => {

        const item =
            document.createElement("div");


        item.className =
            "calendar-item";


        item.innerHTML = `

            <strong>
                ${escapeHtml(event.title)}
            </strong>

            <p>
                ${String(event.hour ?? 9).padStart(2, "0")}:00
            </p>

            <p>
                ${escapeHtml(event.description || "")}
            </p>

        `;


        list.appendChild(item);

    });

}


/* ============================================================
   69. TERRITORIO
   ============================================================ */

function renderTerritoryPanel() {

    const template =
        document.getElementById(
            "template-territory"
        );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    setText(
        "territory-people",
        game.territory.people
    );


    setText(
        "territory-leaders",
        game.territory.leaders
    );


    setText(
        "territory-sections",
        game.territory.sections
    );


    const zones =
        document.getElementById(
            "territory-zones"
        );


    if (!zones) {
        return;
    }


    zones.innerHTML = `

        <div class="territory-item">

            <strong>
                ${escapeHtml(game.player.neighborhood)}
            </strong>

            <p>
                Personas conocidas:
                ${game.territory.people}
            </p>

            <p>
                Apoyo territorial:
                ${game.territory.support}
            </p>

        </div>

        <div class="territory-item">

            <strong>
                Problemas detectados
            </strong>

            <p>
                ${game.territory.problems
                    .map(escapeHtml)
                    .join(" · ")}
            </p>

        </div>

    `;

}


/* ============================================================
   70. EQUIPO
   ============================================================ */

function renderTeamPanel() {

    const template =
        document.getElementById(
            "template-team"
        );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    const list =
        document.getElementById(
            "team-list"
        );


    if (!list) {
        return;
    }


    if (game.team.length === 0) {

        list.innerHTML =
            emptyState(
                "Todavía no tienes un equipo permanente."
            );

        return;
    }


    game.team.forEach(character => {

        list.appendChild(
            createCharacterElement(
                character
            )
        );

    });

}


/* ============================================================
   71. RELACIONES
   ============================================================ */

function renderRelationshipsPanel() {

    const template =
        document.getElementById(
            "template-relationships"
        );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    const list =
        document.getElementById(
            "relationships-list"
        );


    if (!list) {
        return;
    }


    if (game.relationships.length === 0) {

        list.innerHTML =
            emptyState(
                "Todavía no tienes relaciones registradas."
            );

        return;
    }


    game.relationships.forEach(
        relation => {

            const item =
                document.createElement("div");


            item.className =
                "character-item";


            item.innerHTML = `

                <div class="character-avatar">
                    ${getInitials(relation.name)}
                </div>

                <div>
                    <strong>
                        ${escapeHtml(relation.name)}
                    </strong>

                    <p>
                        ${escapeHtml(relation.role)}
                    </p>
                </div>

                <div class="character-meta">
                    Confianza<br>
                    ${relation.trust}
                </div>

            `;


            list.appendChild(item);

        }
    );

}


/* ============================================================
   72. MEDIOS
   ============================================================ */

function renderMediaPanel() {

    const template =
        document.getElementById(
            "template-media"
        );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    setText(
        "media-presence",
        game.stats.media
    );


    setText(
        "media-credibility",
        game.stats.credibility
    );


    setText(
        "media-attention",
        game.stats.reputation
    );


    const feed =
        document.getElementById(
            "media-feed"
        );


    if (!feed) {
        return;
    }


    if (game.mediaFeed.length === 0) {

        feed.innerHTML =
            emptyState(
                "Todavía no hay cobertura relevante."
            );

        return;
    }


    game.mediaFeed.forEach(item => {

        const element =
            document.createElement("div");


        element.className =
            "media-item";


        element.innerHTML = `

            <strong>
                ${escapeHtml(item.title)}
            </strong>

            <p>
                ${escapeHtml(item.text)}
            </p>

        `;


        feed.appendChild(element);

    });

}


/* ============================================================
   73. CARRERA
   ============================================================ */

function renderCareerPanel() {

    const template =
        document.getElementById(
            "template-career"
        );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    setText(
        "career-panel-stage",
        careerStageLabel()
    );


    setText(
        "career-panel-description",
        getCareerDescription()
    );


    const history =
        document.getElementById(
            "career-history"
        );


    if (!history) {
        return;
    }


    if (game.careerHistory.length === 0) {

        history.innerHTML =
            emptyState(
                "Tu trayectoria apenas comienza."
            );

        return;
    }


    game.careerHistory
        .slice()
        .reverse()
        .forEach(item => {

            const element =
                document.createElement("div");


            element.className =
                "career-item";


            element.innerHTML = `

                <strong>
                    ${escapeHtml(item.title)}
                </strong>

                <p>
                    ${escapeHtml(item.description)}
                </p>

            `;


            history.appendChild(element);

        });

}


/* ============================================================
   74. PERFIL
   ============================================================ */

function renderProfilePanel() {

    const template =
        document.getElementById(
            "template-profile"
        );


    const container =
        document.getElementById(
            "panel-content"
        );


    if (!template || !container) {
        return;
    }


    container.innerHTML = "";

    container.appendChild(
        template.content.cloneNode(true)
    );


    setText(
        "profile-avatar",
        getInitials(
            game.player.name
        )
    );


    setText(
        "profile-role",
        game.player.role
    );


    setText(
        "profile-name",
        game.player.name
    );


    setText(
        "profile-location",
        getPlayerLocation()
    );


    const stats =
        document.getElementById(
            "profile-stats"
        );


    if (stats) {

        const profileStats = [

            ["Credibilidad", game.stats.credibility],

            ["Organización", game.stats.organization],

            ["Negociación", game.stats.negotiation],

            ["Liderazgo", game.stats.leadership],

            ["Comunicación", game.stats.communication],

            ["Reputación", game.stats.reputation]

        ];


        stats.innerHTML =
            profileStats
                .map(
                    ([label, value]) => `

                        <div class="profile-stat">

                            <span>
                                ${label}
                            </span>

                            <strong>
                                ${value}
                            </strong>

                        </div>

                    `
                )
                .join("");

    }


    const history =
        document.getElementById(
            "profile-career-history"
        );


    if (history) {

        history.innerHTML =
            game.careerHistory.length

                ? game.careerHistory
                    .map(
                        item => `

                            <div class="profile-career-item">

                                <strong>
                                    ${escapeHtml(item.title)}
                                </strong>

                                <small>
                                    ${escapeHtml(item.description)}
                                </small>

                            </div>

                        `
                    )
                    .join("")

                : emptyState(
                    "La historia todavía está comenzando."
                );

    }

}


/* ============================================================
   75. ABRIR PANELES
   ============================================================ */

function openPanel(type) {

    const layer =
        document.getElementById(
            "panel-layer"
        );


    const title =
        document.getElementById(
            "panel-title"
        );


    const kicker =
        document.getElementById(
            "panel-kicker"
        );


    if (!layer) {
        return;
    }


    const config = {

        phone: {
            title: "Teléfono",
            kicker: "COMUNICACIÓN",
            render: renderPhonePanel
        },

        calendar: {
            title: "Agenda",
            kicker: "TIEMPO",
            render: renderCalendarPanel
        },

        territory: {
            title: "Territorio",
            kicker: "ORGANIZACIÓN",
            render: renderTerritoryPanel
        },

        team: {
            title: "Equipo",
            kicker: "PERSONAS",
            render: renderTeamPanel
        },

        relationships: {
            title: "Relaciones",
            kicker: "RED PERSONAL",
            render: renderRelationshipsPanel
        },

        media: {
            title: "Medios",
            kicker: "PRESENCIA PÚBLICA",
            render: renderMediaPanel
        },

        career: {
            title: "Carrera",
            kicker: "TRAYECTORIA",
            render: renderCareerPanel
        },

        profile: {
            title: "Mi perfil",
            kicker: "PERSONAJE",
            render: renderProfilePanel
        }

    };


    const selected =
        config[type];


    if (!selected) {
        return;
    }


    if (title) {
        title.textContent =
            selected.title;
    }


    if (kicker) {
        kicker.textContent =
            selected.kicker;
    }


    selected.render();


    layer.classList.remove(
        "is-hidden"
    );


    layer.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closePanel() {

    const layer =
        document.getElementById(
            "panel-layer"
        );


    layer?.classList.add(
        "is-hidden"
    );


    layer?.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* ============================================================
   76. MENÚ
   ============================================================ */

function openMenu() {

    const layer =
        document.getElementById(
            "game-menu-layer"
        );


    layer?.classList.remove(
        "is-hidden"
    );


    layer?.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeMenu() {

    const layer =
        document.getElementById(
            "game-menu-layer"
        );


    layer?.classList.add(
        "is-hidden"
    );


    layer?.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* ============================================================
   77. MODAL
   ============================================================ */

function openModal({
    title = "",
    kicker = "EVENTO",
    content = ""
}) {

    const layer =
        document.getElementById(
            "modal-layer"
        );


    setText(
        "modal-title",
        title
    );


    setText(
        "modal-kicker",
        kicker
    );


    const container =
        document.getElementById(
            "modal-content"
        );


    if (container) {

        container.innerHTML =
            content;

    }


    layer?.classList.remove(
        "is-hidden"
    );


    layer?.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeModal() {

    const layer =
        document.getElementById(
            "modal-layer"
        );


    layer?.classList.add(
        "is-hidden"
    );


    layer?.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* ============================================================
   78. TOAST
   ============================================================ */

function showToast(
    title,
    message
) {

    const container =
        document.getElementById(
            "toast-container"
        );


    if (!container) {
        return;
    }


    const toast =
        document.createElement("div");


    toast.className =
        "toast";


    toast.innerHTML = `

        <strong>
            ${escapeHtml(title)}
        </strong>

        <p>
            ${escapeHtml(message)}
        </p>

    `;


    container.appendChild(
        toast
    );


    setTimeout(
        () => {

            toast.remove();

        },
        3800
    );

}


/* ============================================================
   79. BADGES
   ============================================================ */

function updateBadges() {

    const phoneBadge =
        document.getElementById(
            "phone-badge"
        );


    const calendarBadge =
        document.getElementById(
            "calendar-badge"
        );


    const unread =
        game.inbox.filter(
            message =>
                !message.read
        ).length;


    const today =
        game.calendar.filter(
            event =>
                event.day ===
                game.date.day
        ).length;


    if (phoneBadge) {

        phoneBadge.textContent =
            unread > 0
                ? "•"
                : "";

    }


    if (calendarBadge) {

        calendarBadge.textContent =
            today > 0
                ? "•"
                : "";

    }

}


/* ============================================================
   80. GUARDAR
   ============================================================ */

function saveGame() {

    try {

        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify(game)
        );


        updateContinueButton();


        return true;

    } catch (error) {

        console.error(
            "No se pudo guardar la partida:",
            error
        );


        return false;

    }

}


/* ============================================================
   81. CARGAR
   ============================================================ */

function loadGame() {

    try {

        const raw =
            localStorage.getItem(
                SAVE_KEY
            );


        if (!raw) {
            return null;
        }


        const saved =
            JSON.parse(raw);


        if (
            !saved ||
            !saved.player
        ) {

            return null;

        }


        return migrateSave(saved);

    } catch (error) {

        console.error(
            "No se pudo cargar la partida:",
            error
        );


        return null;

    }

}


/* ============================================================
   82. MIGRACIÓN
   ============================================================ */

function migrateSave(saved) {

    const fresh =
        createFreshGame();


    return {

        ...fresh,

        ...saved,

        version:
            GAME_VERSION,

        player: {
            ...fresh.player,
            ...(saved.player || {})
        },

        date: {
            ...fresh.date,
            ...(saved.date || {})
        },

        stats: {
            ...fresh.stats,
            ...(saved.stats || {})
        },

        territory: {
            ...fresh.territory,
            ...(saved.territory || {})
        },

        flags: {
            ...fresh.flags,
            ...(saved.flags || {})
        },

        settings: {
            ...fresh.settings,
            ...(saved.settings || {})
        }

    };

}


function updateContinueButton() {

    const button =
        document.getElementById(
            "btn-continue-game"
        );


    if (!button) {
        return;
    }


    const hasSave =
        Boolean(
            localStorage.getItem(
                SAVE_KEY
            )
        );


    button.disabled =
        !hasSave;


    button.style.opacity =
        hasSave
            ? ""
            : "0.45";

}


/* ============================================================
   83. PANTALLAS
   ============================================================ */

function showScreen(screenName) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.add(
                "is-hidden"
            );

        });


    const target =
        document.getElementById(
            `screen-${screenName}`
        );


    if (!target) {
        return;
    }


    target.classList.remove(
        "is-hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* ============================================================
   84. HELPERS
   ============================================================ */

function randomFrom(array) {

    if (
        !Array.isArray(array) ||
        array.length === 0
    ) {

        return null;

    }


    return array[
        Math.floor(
            Math.random() *
            array.length
        )
    ];

}


function randomInt(
    min,
    max
) {

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}


function getInitials(name = "") {

    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(
            part =>
                part.charAt(0)
                    .toUpperCase()
        )
        .join("");

}


function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            value ?? "";

    }

}


function hideElement(element) {

    element?.classList.add(
        "is-hidden"
    );

}


function markSelected(
    selector,
    value
) {

    document
        .querySelectorAll(selector)
        .forEach(button => {

            button.classList.toggle(
                "is-selected",
                button.dataset[
                    selector.includes("origin")
                        ? "origin"
                        : "personality"
                ] === value
            );

        });

}


function getPlayerLocation() {

    const state =
        WORLD[
            game.player.state
        ];


    const municipality =
        state?.municipalities[
            game.player.municipality
        ];


    return [

        state?.name,

        municipality?.name,

        game.player.neighborhood

    ]
        .filter(Boolean)
        .join(" · ");

}


function getCareerDescription() {

    const descriptions = {

        grassroots:
            "Estás construyendo tu primera red desde la comunidad.",

        regidor:
            "Formas parte del Cabildo y estás comenzando tu experiencia institucional.",

        "local-deputy":
            "Tu siguiente objetivo está en el ámbito legislativo estatal.",

        mayor:
            "Estás al frente de un gobierno municipal.",

        "federal-deputy":
            "Tu carrera entra en el ámbito legislativo federal.",

        senator:
            "Tu trayectoria llega al Senado.",

        governor:
            "Estás en una etapa estatal de alta responsabilidad.",

        "presidential-candidate":
            "Estás en la etapa presidencial de la simulación.",

        president:
            "Has llegado a la presidencia dentro de esta historia ficticia."

    };


    return descriptions[
        game.player.careerStage
    ] || descriptions.grassroots;

}


function effectLabel(key) {

    const labels = {

        credibility: "Credibilidad",

        organization: "Organización",

        negotiation: "Negociación",

        leadership: "Liderazgo",

        communication: "Comunicación",

        media: "Medios",

        reputation: "Reputación",

        trust: "Confianza",

        resilience: "Resiliencia",

        politicalInstinct: "Instinto político",

        energy: "Energía",

        stress: "Estrés",

        money: "Dinero",

        socialCapital: "Capital social",

        territoryPeople: "Personas"

    };


    return labels[key] ||
        key;

}


function emptyState(message) {

    return `

        <div class="message-item">

            <p>
                ${escapeHtml(message)}
            </p>

        </div>

    `;

}


function createCharacterElement(
    character
) {

    const item =
        document.createElement("div");


    item.className =
        "character-item";


    item.innerHTML = `

        <div class="character-avatar">
            ${getInitials(character.name)}
        </div>

        <div>

            <strong>
                ${escapeHtml(character.name)}
            </strong>

            <p>
                ${escapeHtml(character.role)}
            </p>

        </div>

        <div class="character-meta">
            Influencia<br>
            ${character.influence}
        </div>

    `;


    return item;

}


function escapeHtml(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* ============================================================
   85. EVENTOS AUTOMÁTICOS
   ============================================================ */

function maybeGenerateMessage() {

    if (
        Math.random() > 0.35
    ) {

        return;

    }


    const messages = [

        {
            sender:
                game.player.assistant,

            subject:
                "Recordatorio",

            text:
                "Tienes pendientes que revisar en tu agenda."
        },

        {
            sender:
                game.player.assistant,

            subject:
                "Conversación nueva",

            text:
                "Alguien preguntó por tu trabajo en la colonia."
        },

        {
            sender:
                game.player.assistant,

            subject:
                "Seguimiento",

            text:
                "Hay personas esperando que les des seguimiento."
        }

    ];


    addMessage(
        randomFrom(messages)
    );

}


function maybeGenerateCalendarEvent() {

    if (
        Math.random() > 0.3
    ) {

        return;

    }


    addCalendarEvent({

        title:
            randomFrom([
                "Llamada pendiente",
                "Reunión vecinal",
                "Visita territorial",
                "Reunión de organización"
            ]),

        description:
            "Actividad generada por tu dinámica actual.",

        hour:
            randomInt(10, 18),

        type:
            "generated"

    });

}


/* ============================================================
   86. TECLADO
   ============================================================ */

function handleKeyboard(event) {

    if (
        event.key === "Escape"
    ) {

        closePanel();

        closeModal();

        closeMenu();

    }

}


/* ============================================================
   87. ARRANQUE FINAL
   ============================================================ */

populateStates();

updateContinueButton();


/*
   No iniciamos automáticamente una partida.

   Esto es intencional.

   El jugador debe elegir:

   Nueva historia
          o
   Continuar historia

   Así evitamos que localStorage secuestre el menú inicial.
*/


console.log(
    `Luna Game ${GAME_VERSION} iniciado correctamente.`
);
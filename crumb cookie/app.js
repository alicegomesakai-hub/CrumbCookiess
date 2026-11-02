
"use strict";

/* =====================================
   CONFIGURAÇÕES DA CRUMB CLUB
===================================== */

const CONFIG = {
    nome: "Crumb Club",

    // Insira seu número com código do país e DDD.
    // Exemplo de formato: 5511999999999
    whatsapp: "",

    // História fictícia criada para a identidade da marca.
    historia: {
        titulo: "Uma ideia que virou felicidade.",
        paragrafos: [
            "Era uma tarde tranquila, daquelas em que o tempo parece andar mais devagar. Na cozinha, uma receita estava sendo preparada sem grandes pretensões: apenas farinha, manteiga, açúcar e uma boa quantidade de chocolate.",

            "Quando o primeiro cookie saiu do forno, o aroma tomou conta da casa. Alguém experimentou um pedaço, outra pessoa pediu mais um e, de repente, uma receita simples virou o centro de uma pequena reunião cheia de risadas.",

            "Foi ali, entre migalhas na mesa e conversas que pareciam não ter fim, que nasceu a ideia da Crumb Club: criar cookies que fossem capazes de transformar momentos comuns em lembranças especiais.",

            "O nome veio da união de duas ideias: crumb, a migalhinha que fica depois da última mordida, e club, um lugar onde todos são bem-vindos. Afinal, sempre existe espaço para mais alguém à mesa.",

            "Hoje, a Crumb Club representa esse universo imaginário de aconchego, criatividade e pequenas alegrias. Cada sabor tem sua personalidade, cada detalhe conta uma história e cada cookie é um convite para desacelerar e aproveitar o agora.",

            "Porque, no fim das contas, não se trata apenas de um cookie. Trata-se daquele café compartilhado, da surpresa de alguém querido, da pausa depois de um dia longo e das memórias que nascem quando estamos juntos.",

            "Crumb Club. Um cookie, mil momentos de felicidade. ♡"
        ]
    }
};


/* =====================================
   CONTEÚDO DOS MODAIS
===================================== */

const conteudos = {
    historia: {
        eyebrow: "NOSSA HISTÓRIA",
        titulo: CONFIG.historia.titulo,
        paragrafos: CONFIG.historia.paragrafos
    },

    carinho: {
        eyebrow: "NOSSA ESSÊNCIA",
        titulo: "O carinho está nos detalhes.",
        paragrafos: [
            "Imagine uma cozinha onde cada ingrediente tem seu lugar e cada receita é preparada com atenção.",

            "Esse é o espírito da Crumb Club: valorizar os pequenos detalhes que tornam uma experiência especial, da escolha dos sabores até a forma de compartilhar cada momento.",

            "Para nós, carinho não é apenas um ingrediente. É a ideia que inspira todo o nosso universo. ♡"
        ]
    },

    momentos: {
        eyebrow: "UM CONVITE PARA DESACELERAR",
        titulo: "O agora também merece ser doce.",
        paragrafos: [
            "Uma tarde chuvosa, um filme favorito, uma conversa inesperada ou alguns minutos de descanso podem se transformar em lembranças preciosas.",

            "A Crumb Club nasceu dessa ideia: os momentos não precisam ser grandiosos para serem inesquecíveis.",

            "Às vezes, tudo o que precisamos é de uma pausa gostosa e de algo para compartilhar."
        ]
    },

    alegria: {
        eyebrow: "FELICIDADE COMPARTILHADA",
        titulo: "Sempre cabe mais um.",
        paragrafos: [
            "Existe algo especial em dividir aquilo de que gostamos. Uma receita, uma descoberta, uma história ou o último cookie da mesa.",

            "No universo da Crumb Club, cada pessoa tem lugar. Queremos celebrar as diferenças, as conversas espontâneas e a alegria de estar perto de quem faz bem.",

            "Puxe uma cadeira, escolha seu sabor favorito e faça parte dessa história. ♡"
        ]
    }
};


/* =====================================
   HISTÓRIAS DOS SABORES
===================================== */

const sabores = {
    classic: {
        eyebrow: "01 / O CLÁSSICO",
        titulo: "Choco Classic",
        paragrafos: [
            "Algumas coisas nunca saem de moda. O Choco Classic é inspirado naquele sabor familiar que lembra tardes tranquilas, receitas de família e o cheirinho de algo gostoso saindo do forno.",

            "Com sua proposta de massa douradinha e gotas de chocolate, ele representa o conforto das pequenas tradições.",

            "Personalidade: acolhedora, clássica e cheia de charme.",
            "Combina com: café quentinho, conversas longas e tardes sem pressa."
        ]
    },

    double: {
        eyebrow: "02 / O INTENSO",
        titulo: "Double Choco",
        paragrafos: [
            "Para quem acredita que uma aventura fica ainda melhor com chocolate, nasceu o Double Choco.",

            "Inspirado nos dias em que a criatividade pede algo marcante, ele é o personagem mais intenso do nosso universo.",

            "Personalidade: criativa, divertida e apaixonada por chocolate.",
            "Combina com: sessões de filmes, playlists favoritas e comemorações espontâneas."
        ]
    },

    velvet: {
        eyebrow: "03 / O ENCANTADOR",
        titulo: "Red Velvet",
        paragrafos: [
            "O Red Velvet é aquele personagem que chega trazendo um toque de cor e uma pitada de mistério.",

            "Sua inspiração vem da delicadeza das sobremesas especiais e da vontade de transformar qualquer encontro em uma ocasião diferente.",

            "Personalidade: delicada, expressiva e um pouquinho romântica.",
            "Combina com: encontros especiais, presentes inesperados e momentos que merecem ser lembrados."
        ]
    },

    caramel: {
        eyebrow: "04 / O ACONCHEGANTE",
        titulo: "Caramel Crush",
        paragrafos: [
            "Imagine o clima de uma tarde dourada, a luz entrando pela janela e a sensação gostosa de estar exatamente onde você gostaria de estar.",

            "Foi essa atmosfera que inspirou o Caramel Crush, um personagem que celebra o aconchego e as surpresas doces da vida.",

            "Personalidade: calorosa, espontânea e encantadora.",
            "Combina com: dias preguiçosos, boas conversas e pequenos presentes."
        ]
    }
};


/* =====================================
   ELEMENTOS DA PÁGINA
===================================== */

const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalOk = document.getElementById("modalOk");

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

const toast = document.getElementById("toast");

let ultimoElementoFocado = null;
let temporizadorToast = null;


/* =====================================
   MODAIS
===================================== */

function abrirModal(conteudo) {
    if (!conteudo || !modalOverlay) return;

    ultimoElementoFocado = document.activeElement;

    modalEyebrow.textContent = conteudo.eyebrow || "CRUMB CLUB";
    modalTitle.textContent = conteudo.titulo || "Um mundo de sabores";

    // Cria o conteúdo com elementos HTML seguros.
    modalBody.replaceChildren();

    const paragrafos = conteudo.paragrafos || [];

    paragrafos.forEach((texto) => {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = texto;
        modalBody.appendChild(paragrafo);
    });

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    requestAnimationFrame(() => {
        modalClose.focus();
    });
}

function fecharModal() {
    if (!modalOverlay) return;

    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (
        ultimoElementoFocado &&
        typeof ultimoElementoFocado.focus === "function"
    ) {
        ultimoElementoFocado.focus();
    }
}

// Cartões de sabores.
document.querySelectorAll("[data-flavor]").forEach((cartao) => {
    cartao.addEventListener("click", () => {
        const sabor = sabores[cartao.dataset.flavor];

        if (sabor) abrirModal(sabor);
    });
});

// Cartões de valores e botão da história.
document.querySelectorAll("[data-modal]").forEach((botao) => {
    botao.addEventListener("click", () => {
        const conteudo = conteudos[botao.dataset.modal];

        if (conteudo) abrirModal(conteudo);
    });
});

// Fechar pelos botões.
modalClose.addEventListener("click", fecharModal);
modalOk.addEventListener("click", fecharModal);

// Fechar ao clicar no fundo escuro.
modalOverlay.addEventListener("click", (evento) => {
    if (evento.target === modalOverlay) {
        fecharModal();
    }
});

// Fechar com Escape e manter o foco dentro do modal.
document.addEventListener("keydown", (evento) => {
    if (
        evento.key === "Escape" &&
        modalOverlay.classList.contains("active")
    ) {
        fecharModal();
        return;
    }

    if (
        evento.key !== "Tab" ||
        !modalOverlay.classList.contains("active")
    ) {
        return;
    }

    const elementos = modalOverlay.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );

    if (!elementos.length) return;

    const primeiro = elementos[0];
    const ultimo = elementos[elementos.length - 1];

    if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
    } else if (
        !evento.shiftKey &&
        document.activeElement === ultimo
    ) {
        evento.preventDefault();
        primeiro.focus();
    }
});


/* =====================================
   MENU PARA CELULAR
===================================== */

function fecharMenu() {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("click", (evento) => {
    if (
        nav.classList.contains("open") &&
        !nav.contains(evento.target) &&
        !menuToggle.contains(evento.target)
    ) {
        fecharMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
        fecharMenu();
    }
});


/* =====================================
   MENSAGENS TEMPORÁRIAS
===================================== */

function mostrarToast(mensagem) {
    if (!toast) return;

    toast.textContent = mensagem;
    toast.classList.add("show");

    clearTimeout(temporizadorToast);

    temporizadorToast = setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}


/* =====================================
   CONTATO PELO WHATSAPP
===================================== */

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", (evento) => {
    evento.preventDefault();

    const numero = CONFIG.whatsapp.replace(/\D/g, "");

    if (numero.length < 12 || numero.length > 15) {
        mostrarToast(
            "Configure seu WhatsApp no arquivo app.js para ativar o contato."
        );
        return;
    }

    const mensagem = encodeURIComponent(
        "Olá, Crumb Club! Conheci o site e gostaria de saber mais sobre vocês. 🍪"
    );

    const url = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(url, "_blank", "noopener,noreferrer");
});


/* =====================================
   ANO AUTOMÁTICO NO RODAPÉ
===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================
   ANIMAÇÃO DE ENTRADA DAS SEÇÕES
===================================== */

const elementosAnimados = document.querySelectorAll(
    ".section-heading, .story-image, .story-text, .flavor-card, .value-card, .contact-copy, .contact-art"
);

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
        (entradas, observer) => {
            entradas.forEach((entrada) => {
                if (!entrada.isIntersecting) return;

                entrada.target.classList.add("is-visible");
                observer.unobserve(entrada.target);
            });
        },
        {
            threshold: 0.12
        }
    );

    elementosAnimados.forEach((elemento) => {
        elemento.classList.add("reveal");
        observador.observe(elemento);
    });
}

console.log("🍪 Crumb Club está pronta para espalhar felicidade!");

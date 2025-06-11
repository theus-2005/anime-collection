if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  Scrollbar.init(document.querySelector(".html"), {
    damping: 0.06,
  });

  setTimeout(() => {
    scrollbar.scrollTo(0, 0, 0);
  }, 50);
});

const nomePesquisado = document.querySelector(".pesquisa-nome input");
const animePesquisado = document.querySelector("#animes");
const raridadePesquisada = document.querySelector("#raridades");
const cartasDoJogador = [];
const btnRoletar = document.querySelector("#btn-roletar");
const qtdMostrada = document.querySelector("#qtdMostrada");
const personagens = document.querySelectorAll(".personagem");
const raridadeFormatada = {
  comum: "Comum",
  incomum: "Incomum",
  rara: "Rara",
  epica: "Épica",
  lendaria: "Lendária",
  mitica: "Mítica",
  secreta: "Secreta",
};

function filtrarPersonagens() {
  const nomeFiltro = nomePesquisado.value.toLowerCase();
  const animeFiltro = animePesquisado.value;
  const raridadeFiltro = raridadePesquisada.value;

  personagens.forEach((personagem) => {
    const nome = personagem.dataset.nome;
    const anime = personagem.dataset.anime;
    const raridade = personagem.dataset.raridade;

    const possuiCarta = cartasDoJogador.includes(nome.toLowerCase());

    const combinaAnime = animeFiltro === "" || anime === animeFiltro;
    const combinaRaridade = raridadeFiltro === "" || raridade === raridadeFiltro;
    const combinaNome = nome.includes(nomeFiltro);

    if (combinaNome && combinaAnime && combinaRaridade) {
      personagem.style.display = "";

      if (possuiCarta && personagem.classList.contains("desconhecida")) {
        revelarPersonagem(personagem);
      } else if (!possuiCarta) {
        esconderPersonagem(personagem);
      }
    } else {
      personagem.style.display = "none";
    }
  });
}

function esconderPersonagem(personagem) {
  if (personagem.classList.contains("desconhecida")) return;

  personagem.dataset.nomeReal = personagem.dataset.nome;
  personagem.dataset.animeReal = personagem.dataset.anime;
  personagem.dataset.raridadeReal = personagem.dataset.raridade;

  personagem.dataset.nome = "???";
  personagem.dataset.anime = "???";
  personagem.dataset.raridade = "???";

  personagem.querySelector("img").src = "./src/images/Personagens/desconhecido.png";
  personagem.querySelector(".nome-personagem").textContent = "???";
  personagem.querySelector(".valor-categoria").textContent = "???";
  personagem.querySelector(".anime").textContent = "Anime: ???";

  personagem.classList.add("desconhecida");
}

function roletarPersonagem() {
  btnRoletar.disabled = true;
  btnRoletar.textContent = "Girando...";

  setTimeout(() => {
    const numero = aleatorioEntre(1, 100);
    let raridade = "";

    if (numero <= 35) {
      raridade = "comum";
    } else if (numero <= 60) {
      raridade = "incomum";
    } else if (numero <= 80) {
      raridade = "rara";
    } else if (numero <= 90) {
      raridade = "epica";
    } else if (numero <= 96) {
      raridade = "lendaria";
    } else if (numero <= 99) {
      raridade = "mitica";
    } else {
      raridade = "secreta";
    }

    const personagensDisponiveis = Array.from(personagens).filter((p) => p.dataset.raridadeReal === raridade && !cartasDoJogador.includes(p.dataset.nomeReal.toLowerCase()));

    if (personagensDisponiveis.length === 0) {
      mostrarModal("completo", raridade);
      btnRoletar.disabled = false;
      btnRoletar.textContent = "Roletar";
      return;
    }

    const personagemSorteado = personagensDisponiveis[aleatorioEntre(0, personagensDisponiveis.length - 1)];
    cartasDoJogador.push(personagemSorteado.dataset.nomeReal.toLowerCase());
    revelarPersonagem(personagemSorteado);
    mostrarModal(personagemSorteado, raridade);
    filtrarPersonagens();

    btnRoletar.disabled = false;
    btnRoletar.textContent = "Roletar";
  }, 1500);
}

function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function revelarPersonagem(personagem) {
  personagem.classList.remove("desconhecida");

  const nomeReal = personagem.dataset.nomeReal;
  const animeReal = personagem.dataset.animeReal;
  const raridadeReal = personagem.dataset.raridadeReal;

  personagem.dataset.nome = nomeReal;
  personagem.dataset.anime = animeReal;
  personagem.dataset.raridade = raridadeReal;

  console.log(nomeReal);
  personagem.querySelector("img").src = `./src/images/Personagens/${nomeReal}.jpeg`;
  personagem.querySelector(".nome-personagem").textContent = formatarNome(nomeReal);
  personagem.querySelector(".valor-categoria").textContent = formatarRaridade(raridadeReal);
  personagem.querySelector(".anime").textContent = `Anime: ${formatarNome(animeReal)}`;
}

function formatarRaridade(raridade) {
  return raridadeFormatada[raridade.toLowerCase()] || raridade;
}

function formatarNome(nome) {
  return nome
    .replace(/-/g, " ")
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

function mostrarModal(personagem, raridades) {
  const modal = document.getElementById("modal-ganho");
  if (personagem === "completo") {
    const imagem = `./src/images/Personagens/completo.png`;

    document.getElementById("modal-img").src = imagem;
    document.getElementById("modal-nome").textContent = "Ops!";
    document.getElementById("modal-raridade").textContent ="Você já possui todas as cartas dessa raridade";
    document.getElementById("modal-anime").textContent = `Raridade: ${raridades}`;

    modal.style.display = "";
  } else {
    const nome = formatarNome(personagem.dataset.nomeReal);
    const anime = formatarNome(personagem.dataset.animeReal);
    const raridade = formatarRaridade(personagem.dataset.raridadeReal);
    const imagem = `./src/images/Personagens/${personagem.dataset.nomeReal}.jpeg`;

    document.getElementById("modal-img").src = imagem;
    document.getElementById("modal-nome").textContent = nome;
    document.getElementById("modal-anime").textContent = `Anime: ${anime}`;
    document.getElementById("modal-raridade").textContent = `Raridade: ${raridade}`;

    modal.style.display = "";
  }
}

function fecharModal() {
  document.getElementById("modal-ganho").style.display = "none";
}

btnRoletar.addEventListener("click", roletarPersonagem);
nomePesquisado.addEventListener("input", filtrarPersonagens);
animePesquisado.addEventListener("change", filtrarPersonagens);
raridadePesquisada.addEventListener("change", filtrarPersonagens);

filtrarPersonagens();
fecharModal();

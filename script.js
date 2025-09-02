// comandos disponíveis
const commands = {
  help: "Comandos disponíveis:\n- about\n- projects\n- contact\n- clear",
  about: "Sou o Eduardo, analista e desenvolvedor de sistemas e produtor musical.\nApaixonado por criar soluções criativas.",
  contact: "📧 Email: eduviezzer@gmail.com\n👨‍💻 GitHub: github.com/viezzer\n🌐 Linkedin: https://www.linkedin.com/in/eduardo-viezzer-351247121/",
};

const outputDiv = document.querySelector(".output");
const input = document.getElementById("command");

function printOutput(text) {
  const line = document.createElement("div");
  line.classList.add("line");
  outputDiv.appendChild(line);

  new Typed(line, {
    strings: [text],
    typeSpeed: 30,
    showCursor: false
  });

  outputDiv.scrollTop = outputDiv.scrollHeight;
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    input.value = "";

    if (cmd === "clear") {
      outputDiv.innerHTML = "";
    } else if (commands[cmd]) {
      printOutput(commands[cmd]);
    } else {
      printOutput(`Comando não reconhecido: ${cmd}\nDigite 'help' para ver opções.`);
    }
  }
});

// mensagem inicial
printOutput("Bem-vindo ao meu portfólio interativo!\nDigite 'help' para começar.");

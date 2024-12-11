// 1 - Função para rolar até a seção
function scrollToSection(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    const targetPosition = targetSection.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 700;  // Tempo em milissegundos (1 segundo)
    let startTime = null;

    function animateScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const scrollPosition = easeInOut(elapsedTime, startPosition, distance, duration);

        window.scrollTo(0, scrollPosition);

        if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, targetPosition); // Garantir que o scroll finaliza na posição exata
        }
    }

    // Função de easing para um movimento mais suave
    function easeInOut(t, b, c, d) {
        const p = t / (d / 2);
        if (p < 1) {
            return c / 2 * p * p + b;
        }
        const p2 = p - 1;
        return -c / 2 * (p2 * (p2 - 2) - 1) + b;
    }

    requestAnimationFrame(animateScroll);
}

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});



// 2 - Função para mostrar um alerta quando clicar no botão "Contratar"
function alertaContratar() {
    const botaoContratar = document.querySelector('.bnt-group a:nth-child(1)');
    botaoContratar.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que o link seja aberto
        alert('Obrigado por considerar nos contratar!');
    });
}

// 3 - Função para alterar o ícone de navegação ao clicar
function alterarIconeNav() {
    const linksNav = document.querySelectorAll('.navbar a');
    linksNav.forEach(link => {
        link.addEventListener('click', () => {
            linksNav.forEach(l => l.classList.remove('active')); // Remove a classe 'active' de todos os links
            link.classList.add('active'); // Adiciona a classe 'active' ao link clicado
        });
    });
}

// 4 - Função para exibir o menu de navegação ao clicar em um botão
function exibirMenu() {
    const menuNav = document.querySelector('.navbar');
    const botaoMenu = document.querySelector('.menu-toggle');
    botaoMenu.addEventListener('click', () => {
        menuNav.classList.toggle('show'); // Alterna a visibilidade do menu
    });
}

// 5 - Função para realizar uma rolagem suave até o topo da página
function rolarParaTopo() {
    const botaoTopo = document.querySelector('.scroll-to-top');
    botaoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });
}

// 6 - Função para verificar se o formulário de contato foi preenchido corretamente
function validarFormularioContato() {
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', (event) => {
        const nome = formulario.querySelector('input[type="text"]').value;
        const email = formulario.querySelector('input[type="email"]').value;
        if (!nome || !email) {
            event.preventDefault(); // Impede o envio se algum campo estiver vazio
            alert('Por favor, preencha todos os campos!');
        }
    });
}

// 7 - Função para animar o texto na seção "Home" que se move de forma animada
function animarTextoHome() {
    const textoAnimado = document.querySelector('.home .text-animation');
    let i = 0;
    const palavras = ['Desenvolvedor Web', 'Programador', 'Designer Gráfico']; // Palavras a serem alternadas
    setInterval(() => {
        textoAnimado.querySelector('span').textContent = palavras[i];
        i = (i + 1) % palavras.length; // Alterna entre as palavras
    }, 2000);
}

// 8 - Função para exibir as informações de um item de timeline quando o usuário passa o mouse
function exibirDetalhesTimeline() {
    const itensTimeline = document.querySelectorAll('.timeline-itens');
    itensTimeline.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.timeline-content').style.display = 'block'; // Exibe o conteúdo ao passar o mouse
        });
        item.addEventListener('mouseout', () => {
            item.querySelector('.timeline-content').style.display = 'none'; // Oculta o conteúdo ao remover o mouse
        });
    });
}

// 9 - Função para abrir a imagem de projeto em uma nova janela ao clicar no projeto
function abrirProjeto() {
    const projetos = document.querySelectorAll('.services-box');
    projetos.forEach(projeto => {
        projeto.addEventListener('click', () => {
            window.open(projeto.href, '_blank'); // Abre o link do projeto em uma nova aba
        });
    });
}

// 10 - Função para alterar o texto de uma avaliação de parceria ao clicar
function alterarTextoParceria() {
    const parcerias = document.querySelectorAll('.testimonial-item');
    parcerias.forEach(parceria => {
        parceria.addEventListener('click', () => {
            const descricao = parceria.querySelector('p');
            descricao.textContent = "Obrigado por clicar na parceria!"; // Alterando o texto ao clicar
        });
    });
}

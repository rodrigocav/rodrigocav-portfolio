document.addEventListener("DOMContentLoaded", () => {

    fetch("projetos.json")
        .then(response => response.json())
        .then(projetos => {

            const container = document.getElementById("lista-projetos");

            projetos.forEach(projeto => {

                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <p><strong>Stack:</strong> ${projeto.stack}</p>
                    <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
                `;

                container.appendChild(card);
            });

        })
        .catch(error => console.error("Erro ao carregar projetos:", error));

});
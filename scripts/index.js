if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

function createProjectCard(name, githubLink, playLink, imageSrc) {
    const template = 
        `<div class="project-card shadow-effect">
            <div class="card-header micro-5-regular">
                <div class="title-text">${name}</div>
                <div class="external-links">
                    <a class="link-github button${!githubLink ? " hidden" : ""}" 
                    href="${githubLink}">GitHub</a>
                    <a class="link-play button${!playLink ? " hidden" : ""}" 
                    href="${playLink}">Play</a>
                </div>
            </div>
            <div class="card-thumbnail">
                <img class="thumbnail" src="${imageSrc}" alt="Thumbnail of a game of ${name}.">
            </div>
        </div>`;
    return template;
}

function insertProjectsIntoHTML(arrayOfProjects) {
    const projectListElement = document.getElementsByClassName("project-list")[0];

    var elements = [];
    forEach(arrayOfProjects, function(project) {
        var card = createProjectCard(
            project.name, 
            project.githubLink, 
            project.playLink, 
            project.imageSrc);
        elements.push(card);
    });
    projectListElement.insertAdjacentHTML('beforeend', elements.join(""));
}

const listOfProjects = [
    {
        name: "Flappy Bird",
        githubLink: "https://github.com/ethan-l-m-e/flappy-bird-clone",
        playLink: "https://ethan-l-m-e.github.io/flappy-bird-clone/",
        imageSrc: "./images/flappy-bird.jpg"
    },
    {
        name: "Sudoku",
        githubLink: "https://github.com/ethan-l-m-e/sudoku_game",
        playLink: "https://ethan-l-m-e.github.io/sudoku_game/",
        imageSrc: "./images/sudoku.jpg"
    },
    {
        name: "Tic-tac-toe",
        githubLink: "https://github.com/ethan-l-m-e/tic_tac_toe",
        playLink: "https://ethan-l-m-e.github.io/tic_tac_toe/",
        imageSrc: "./images/tic-tac-toe.jpg"
    },
    {
        name: "Pong",
        githubLink: "https://github.com/ethan-l-m-e/pong",
        playLink: "https://ethan-l-m-e.github.io/pong/",
        imageSrc: "./images/pong.jpg"
    },
    {
        name: "Guess The Number",
        githubLink: "https://github.com/ethan-l-m-e/guess_the_number_game",
        playLink: "https://ethan-l-m-e.github.io/guess_the_number_game/",
        imageSrc: "./images/guess-the-number.jpg"
    },
    {
        name: "Dodgeball",
        githubLink: "https://github.com/ethan-l-m-e/dodgeball",
        playLink: "", // No link.
        imageSrc: "./images/dodgeball.jpg"
    }
]

function ready() {
    insertProjectsIntoHTML(listOfProjects);
}
function loadGame(slug) {
    fetch("game/all.json", {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => {
            listGame = data;
            for (var j = 0; j < listGame.length; j++) {
                if (listGame[j].slug == slug) {
                    var tmp_url = '';
                    if (listGame[j].domain == 1) {
                        tmp_url = 'https://webglmath.github.io/' + slug + "/";
                    } else if (listGame[j].domain == 2) {
                        tmp_url = 'https://ubg77.github.io/edit/' + slug + "/";
                    } else if (listGame[j].domain == 3) {
                        tmp_url = 'https://ubg77.github.io/game131022/' + slug + "/";

                    } else if (listGame[j].domain == 4) {
                        tmp_url = 'https://ubg77.github.io/fix/' + slug + "/";
                        if (slug.indexOf("fnaf2") != -1) {
                            tmp_url = 'https://ubg77.github.io/fix/' + slug;
                        }
                    }
                    document.getElementById("gameframe").setAttribute("src", tmp_url);
                    break;
                }
            }
        });
}

function open_fullscreen() {
    let game = document.getElementById("game-element");
    if (game.requestFullscreen) {
        game.requestFullscreen();
    } else if (game.mozRequestFullScreen) { /* Firefox */
        game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) { /* IE/Edge */
        game.msRequestFullscreen();
    }
};

function playGame() {
    var tmp = document.querySelector('#game-arena').dataset.url;
    document.querySelector('#game-arena').innerHTML = `<iframe id="game-element" name="gameFrame" src="${tmp}" scrolling="no" allowfullscreen="" ></iframe>`;
}

var listGame;
fetch("game/all.json", {
    headers: {
        'Content-Type': 'application/json',
    },
}).then(response => response.json()).then(data => {
    listGame = data;
});
for (var i = 0; i < 32; i++) {
    document.getElementById(i.toString()).addEventListener("click", setstats);
}

window.addEventListener("load", () => {
    const api =
        "https://api.sportsdata.io/v3/nfl/scores/json/Standings/2019?key=5f1041d6ef75463381916955e411731f";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (var i = 0; i < 32; i++) {
                document
                    .getElementById(i.toString())
                    .setAttribute("src", "img/" + data[i].Team + ".png");
                document
                    .getElementById(i.toString())
                    .setAttribute("id", data[i].Team);
                str =
                    data[i].Wins.toString() + " - " + data[i].Losses.toString();
                document.getElementById("p" + i.toString()).textContent = str;
            }
        });
});

function setstats(e) {
    const statsapi =
        "https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/2019?key=5f1041d6ef75463381916955e411731f";
    fetch(statsapi)
        .then(response => {
            return response.json();
        })
        .then(data => {
            var teamName = e.srcElement.id;
            document.getElementById("name").textContent = teamName;
            for (var i = 0; i < 32; i++) {
                if (data[i].Team == teamName) {
                    document.getElementById("passerrating").textContent =
                        data[i].PasserRating;
                    document.getElementById("passcomp").textContent =
                        data[i].CompletionPercentage;
                    document.getElementById("ints").textContent =
                        data[i].PassingInterceptions;
                    document.getElementById("thirddown").textContent =
                        data[i].ThirdDownPercentage;
                    document.getElementById("penalties").textContent =
                        data[i].Penalties;
                    document.getElementById("fumbles").textContent =
                        data[i].Fumbles;
                    document.getElementById("sacks").textContent =
                        data[i].Sacks;
                }
            }
        });
}

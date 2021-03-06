const starOne = document.querySelector('#stars-1');
const starTwo = document.querySelector('#stars-2');
const starThree = document.querySelector('#stars-3');
const starFour = document.querySelector('#stars-4');
const starFive = document.querySelector('#stars-5');
const starSix = document.querySelector('#stars-6');

getStars('Zenitsu-bot', 'Calatop', starOne);
getStars('My-Anime-List-Custom-Theme', 'Calatop', starThree);


function getStars(repoName, user, projectNumber) {
    let api = `https://api.github.com/repos/calatop${repoName}`;
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            stars = data.stargazers_count;
        })
        .then(function () {
            projectNumber.innerHTML = `<p class="project__stars" > <i class="project__stars-icon" data-feather="star"></i> ${stars} </p>`;
            feather.replace();
        });
}


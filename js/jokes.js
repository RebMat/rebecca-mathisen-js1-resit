const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10";

const resultsContainer = document.querySelector(".card");
const heading = document.querySelector("h1");
const category = document.querySelector(".type");
const setUp = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const loader = document.querySelector(".loader");

async function getMultipleJokes() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    // console.log(results);

    const jokes = results.jokes;

    resultsContainer.innerHTML += "";
    loader.style.display = "none";

    for (let i = 0; i < jokes.length; i++) {
      console.log(jokes[i].category, jokes[i].setup, jokes[i].delivery);
      if (i === 5) {
        break;
      }

      resultsContainer.innerHTML += `<div class="joke-detail">
                                     <h4 class="type">${jokes[i].category} Joke</h4>
                                     <div class="setup">${jokes[i].setup}</div>
                                     <div class="punchline">${jokes[i].delivery}</div>
                                     </div>`;
    }

    document.title = `${jokes[2].setup}`;
  } catch (error) {
    console.log(error);
    heading.innerHTML = "Something went wrong!";
  }
}

getMultipleJokes();

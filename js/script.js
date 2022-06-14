const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

const heading = document.querySelector("h2");
const setUp = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");

async function getJoke() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    heading.innerHTML += `${result.category} Joke`;
    setUp.innerHTML += `${result.setup}`;
    punchline.innerHTML += `${result.delivery}`;
    document.title = `${result.setup}`;
  } catch (error) {
    console.log(error);
    heading.innerHTML = "Something went wrong!";
  }
}

getJoke();

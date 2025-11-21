function generatePoem(response) {
  console.log(response.data.answer);

  new Typewriter("#poems", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function displayPoem(event) {
  event.preventDefault();

  let poemInput = document.querySelector("#input-poem");

  let apiKey = "63340413at53cc6c6ba7a81a11oc3f05";
  let prompt = `User instructions: Generate a French poem about ${poemInput.value} `;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poems");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${poemInput.value}</div>`;

  axios.get(apiUrl).then(generatePoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", displayPoem);

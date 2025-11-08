function generatePoem(response) {
  console.log(response.data.answer);

  new Typewriter("#poems", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: none,
  });
}

function displayPoem(event) {
  event.preventDefault();

  let poemInput = document.querySelector("#input-poem");

  let apiKey = "63340413at53cc6c6ba7a81a11oc3f05";
  let prompt = `Generate a french poem about ${poemInput.value} `;
  let context =
    "You are an expert when it comes to love and romance,the poem should have one stanza that contains four lines. At the end of the poem Sign with the Shecodes AI and should contain a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", displayPoem);

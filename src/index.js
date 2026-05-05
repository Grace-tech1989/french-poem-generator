function displayPoem(response) {
    console.log("poem generated")

  new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor:"",
});
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "871f3b39d0dbo359344c4192ce44tca2"
    let context ="You are a romantic poem expert, generate a short four line poem in basic HTML, make sure to follow the user intructions below. dont put html in the poem";
    let prompt = `user instructions: Generate a french poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios.get(apiUrl).then(displayPoem);
}

    

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

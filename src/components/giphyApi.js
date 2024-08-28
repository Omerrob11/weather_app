const coldFahrenheit = 50;
const warmFahrenheit = 68;
const hotFahrenheit = 82;

function getGifInputText(degree) {
  let gifInput = "";
  if (+degree < coldFahrenheit) {
    gifInput = "snow";
  } else if (+degree > coldFahrenheit && +degree < hotFahrenheit) {
    gifInput = "sunny";
  } else {
    gifInput = "sun";
  }

  return gifInput;
}

// function to fetch gif, and return it
// async return a promise, this function is not instant, so we use a promise
async function getGif(gifInputText) {
  // if promse is reject, it will throw an error
  // so we use try/catch , if there is an error in on of the promise calls, it will jump to the catch block
  // then , we can have error handling if needed - the error will be the error the API will provide us

  const responseGif = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=c93JnfHj1RL2JJFUSjdoM6oBdzKgaRm3&s=${gifInputText}`,

    {
      mode: "cors",
    },
  );
  if (!responseGif.ok) {
    throw new Error(`Response status: ${responseGif.status} `);
  }
  const gifData = await responseGif.json();

  return gifData;
}

export { getGifInputText, getGif };

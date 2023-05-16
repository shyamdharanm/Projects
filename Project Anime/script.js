async function findquotes() {
  const response = await fetch("https://animechan.vercel.app/api/random");
  const data = await response.json();
  console.log(data);

  let html_data = `
  <div class="result" style="background-color: black; border-radius: 40px; color: white;">
  <p>Anime: ${data.anime}</p>
        <p>Character: ${data.character}</p>
        <p>Quote: ${data.quote}</p>
      </div>
    `;

  const result = document.getElementById("result");
  result.innerHTML = html_data;
}

// Call the findquotes() function to fetch data and display it


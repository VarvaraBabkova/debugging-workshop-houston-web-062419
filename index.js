

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  let joke = "";
  let username = "";

  function fetchJoke(){
    console.log("in fetch")
     fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
       joke = jokeData.joke
      username = document.getElementById('name-input').value

       newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
       
    })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    username = document.getElementById('name-input').value

    if(username === "") return;
    fetchJoke()
    
    
  })
})

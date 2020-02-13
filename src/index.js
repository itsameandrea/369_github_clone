const accessToken = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_GOES_HERE'
const baseUrl = 'https://api.github.com/user/repos'

// Let's build a GitHub clone

// Pseudo-code
// 1. fetch request to api to pull data
fetch(baseUrl, {
  headers: {
    authorization: `token ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data =>{
    const repos = document.querySelector('#repos')
    data.forEach((element) => {
    repos.insertAdjacentHTML('beforeend', `<a class="repo">${element.name}</a>`)
    })
    console.log(data)
  })
// 2. select element in html
// 3. add data to html
// 4. select input
  const input = document.querySelector('#repo-name')
  const button = document.querySelector('#repo-btn')
// 5. add eventListner to the button
  button.addEventListener('click', (event) => {
    event.preventDefault()
    fetch(baseUrl, {
    headers: {
    authorization: `token ${accessToken}`
    },
    method: 'POST',
    body: JSON.stringify({name: input.value})
    })
  .then(response => response.json())
  .then(data =>{
    alert('Repos created')
    console.log(data)
  })
  })
// 6. make a post request to the github API

// 7. Alert

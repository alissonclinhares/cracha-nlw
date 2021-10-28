const LinksSocialMedia = {
  github: 'alissonclinhares',
  youtube: 'DoisDedosDeTeologia',
  instagram: '_saravictor',
  facebook: 'alissonlinhares',
  twitter: 'alisson_cl'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) //Pegar as informações na api do git e 'transformar' em json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()

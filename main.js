const LinksSocialMedia = {
  github: 'MelissaBilher',
  youtube: 'UCFaKp3LxcnHHE3j0zhrQF7A',
  facebook: 'melbilher',
  instagram: 'melbilher',
  twitter: 'melbilher'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('social')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

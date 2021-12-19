const LinksSocialMedia = {
  github: 'satheler',
  youtube: 'UCThu5JcyuoFYjPdorC5GpHQ',
  facebook: 'gustavo.satheler',
  instagram: 'gustavosatheler',
  twitter: 'gustavosatheler'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('social')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){

}

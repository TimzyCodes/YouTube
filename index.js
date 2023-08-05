handleShowSideBar = () => {
  const navlinks = document.querySelector('.navlinks')
  navlinks.classList.toggle('navlinksShown')
  const body = document.querySelector('body')
  body.classList.toggle('body')
  const firstitems = document.querySelector('.firstitems')
  firstitems.classList.toggle('firstitemsShow')
  const section3 = document.querySelector('.section-3')
  section3.classList.toggle('firstitemsShowOnDisplay')
  const section2 = document.querySelector('.section-2')
  section2.classList.toggle('firstitemsShowOnDisplay')
}

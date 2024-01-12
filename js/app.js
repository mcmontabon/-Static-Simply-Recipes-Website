//  Trying out first, if the .js file is working thru Inspect Element of browser.
//
//  console.log('mcmontabon')

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

//Showing the 'date' or current year on the footer
const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
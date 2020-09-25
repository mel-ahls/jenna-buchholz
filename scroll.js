const pixelsTag = document.querySelector('div.pixels');
const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');
const sections = document.querySelectorAll('section');
const clientTag = document.querySelector('div.client');
const pageTag = document.querySelector('div.page');
const headerTag = document.querySelector('header');

// when we scroll the page, update the pixels tag to be how far we've scrolled
document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset

  pixelsTag.innerHTML = pixels
})

// when we scroll the page, make a progress bar that keeps track of the distance
document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance
  
  progressTag.style.width = `${100 * percentage}%`
})

// see how far down the page we've scrolled
// for each section, check whether we've passed it
// if we have, update the text in the header

document.addEventListener('scroll', function (){
  const pixels = window.pageYOffset

  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-client')
      pageTag.innerHTML = section.getAttribute('data-page');

      if (section.hasAttribute('data-is-dark')) {
        headerTag.classList.add('white');
        progressTag.classList.add('white');
      } else {
        headerTag.classList.remove('white');
        progressTag.classList.remove('white')
      }
    }
  })

})
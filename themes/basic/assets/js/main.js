let currentArticle = 0
let timeout = null

const showArticle = (index) => {
  const articles = $("a.big-article-preview")
  const dots = $("#big-article-preview-dots span")
  
  articles[currentArticle].style.display = "none"
  articles[index].style.display = "flex"
  dots[currentArticle].classList.remove("active")
  dots[index].classList.add("active")
  newTimeout()
}

const newTimeout = () => {
  clearTimeout(timeout)
  timeout = setTimeout(nextArticle, 5 * 1000)
}

const nextArticle = () => {
  let index = currentArticle + 1
  if (index > 2) {
    index = 0
  }
  showArticle(index)
  currentArticle = index
}

const prevArticle = () => {
  let index = currentArticle - 1
  if (index < 0) {
    index = 2
  }
  showArticle(index)
  currentArticle = index
}

const goDown = () => {
  // scroll down 100vh
  // window.scrollTo(0, window.scrollY + window.innerHeight, {
  //   behavior: "smooth",
  // })
  $('html, body').animate({
    scrollTop: $("#article-recent").offset().top - $("#article-recent").outerHeight() / 2
  }, 'slow');
}

$(document).ready(() => {
  $("#next-button").click(nextArticle)

  $("#prev-button").click(prevArticle)

  $("#go-down").click(goDown)

  if ($("a.big-article-preview").length > 0) {
    newTimeout()
  }
})
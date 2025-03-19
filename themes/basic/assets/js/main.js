let currentArticle = 0
let timeout = null

const showArticle = (index) => {
  const articles = $("a.big-article-preview")
  articles[currentArticle].style.display = "none"
  articles[index].style.display = "flex"
  newTimeout()
}

const newTimeout = () => {
  clearTimeout(timeout)
  timeout = setTimeout(nextArticle, 10 * 1000)
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

$(document).ready(() => {
  $("#next-button").click(nextArticle)

  $("#prev-button").click(prevArticle)

  newTimeout()
})
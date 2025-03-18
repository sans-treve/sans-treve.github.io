let currentArticle = 0

const showArticle = (index) => {
  const articles = $("div.big-article-preview")
  articles[currentArticle].style.display = "none"
  articles[index].style.display = "flex"

}

$(document).ready(() => {
  $("#next-button").click(() => {
    let nextArticle = currentArticle + 1
    if (nextArticle > 2) {
      nextArticle = 0
    }
    showArticle(nextArticle)
    currentArticle = nextArticle
  })

  $("#prev-button").click(() => {
    let prevArticle = currentArticle - 1
    if (prevArticle < 0) {
      prevArticle = 2
    }
    showArticle(prevArticle)
    currentArticle = prevArticle
  })
})
let books = []
const APIEndPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getSearchBooksInAPI()


async function getSearchBooksInAPI() {
  const res = await fetch(APIEndPoint)
  books = await res.json()
  let discountBooks = applyDiscount(books)
  showBooksOnScreen(discountBooks)
}


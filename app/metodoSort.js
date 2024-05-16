let sortByPriceBtn = document.getElementById('btnOrdenarPorPreco');
sortByPriceBtn.addEventListener('click', sortBooksByPrice)

function sortBooksByPrice() {
  sortedBooks = books.sort((a, b) => a.preco - b.preco)
  showBooksOnScreen(sortedBooks)
}
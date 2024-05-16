const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
  const btnElement = document.getElementById(this.id);
  const category = btnElement.value
  let filteredBooks = category == 'disponivel' ? filterByAvailability() : filterByCategory(category);
  showBooksOnScreen(filteredBooks)
  if(category == 'disponivel') {
    const totalPrice = totalPriceOfAvailableBooksCalc(filteredBooks)
    showPriceOfAllAvailableBooksOnScreen(totalPrice)
  }
}

function filterByCategory(category) {
  return books.filter(book => book.categoria == category);
}

function filterByAvailability() {
  return books.filter(book => book.quantidade > 0);
}

function showPriceOfAllAvailableBooksOnScreen(totalPrice) {
  allAvailableBooksPriceElement.innerHTML = `
      <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice}</span></p>
      </div>
      `
}
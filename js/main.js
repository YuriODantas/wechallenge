function formatMenu() {
  let menu = document.getElementsByClassName("btn-group-vertical")[0]
  let buttonMenu = document.querySelectorAll(".btn-secondary")
  menu.style = `
    width: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px
  `
  for (const key in buttonMenu) {
    buttonMenu[key].style = `
      width: auto;
      margin-right: 5px;
      border-radius: 5px;
    `
  }
}
formatMenu()

function formatHeader() {
  let jumbotron = document.getElementsByClassName("jumbotron")[0]
  let buttonJumbotron = document.getElementsByClassName("btn btn-primary btn-lg")[0]
  jumbotron.style = `
    background-color: #6B757E;
    color: #FFF;
    text-align: right;
  `
  buttonJumbotron.style = `
    background-color: #27A844;
    border: none;
  `
}
formatHeader()

function formatCards() {
  let row = document.getElementsByClassName("row")[2]
  let card = document.getElementsByClassName("col-lg-3")
  let cardAnimals = document.getElementsByClassName("col-lg-3")[0]
  let buttonCard = cardAnimals.getElementsByClassName("btn btn-primary")[0]
  buttonCard.style = `
    background-color: #27A844;
    border: none;
  `
  row.insertBefore(card[(card.length - 1)], card[0])
  row.insertBefore(card[(card.length - 1)], card[(card.length - 2)])
}
formatCards()

function formatList() {
  let list = document.getElementsByClassName("list-group")[0]
  let firstItem = list.getElementsByClassName("list-group-item active")[0]
  firstItem.classList.remove("active")
  list.innerHTML += `<li class="list-group-item active">Quarto item</li>`
  list.innerHTML += `<li class="list-group-item">Quinto item</li>`
}
formatList()
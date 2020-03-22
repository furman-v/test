import "../styles/index.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";
let pink;
let blue;
let yellow;
let violet;
(function() {
  pink = document.getElementById("pink");
  blue = document.getElementById("blue");
  yellow = document.getElementById("yellow");
  violet = document.getElementById("violet");

  const squares = [pink, blue, yellow, violet];
  squares.forEach(square => {
    const button = square.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      addNewTask(square);
    });
    getAndDeleteElements(square);
  });

  function getAndDeleteElements(square) {
    //функция, которая переносит элементы с одного списка в другой
    const allLiInToDo = square.querySelectorAll(".toDo li");

    allLiInToDo.forEach(everyLiInToDo => {
      everyLiInToDo.addEventListener("click", () => {
        everyLiInToDo.style.display = "none";
        const liInDone = square.querySelectorAll(".doneThings li");
        const index = liInDone.length - 1;
        liInDone[index].appendChild(everyLiInToDo);
        everyLiInToDo.style.display = "block";
      });
    });
  }
})();
function addNewTask(square) {
  const value = getInputValue(square);
  if (value) {
    addNewElement(value, square);
  }
}
function getInputValue(square) {
  const value = square.getElementsByClassName("addNewTask")[0].value;
  return value;
}

function addNewElement(value, square) {
  const list = square.getElementsByClassName("toDo")[0];
  const newLi = getLiWithText(value);
  list.appendChild(newLi);
}
function getLiWithText(value) {
  const newListItem = document.createElement("li");
  const checkBox = getCheckBox();
  const text = document.createTextNode(" " + value);
  const space = document.createTextNode(" ");
  const icon = getIcon();
  newListItem.appendChild(checkBox);
  newListItem.appendChild(text);
  newListItem.appendChild(space);
  newListItem.appendChild(icon);
  return newListItem;
}
function getCheckBox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  return input;
}
function getIcon() {
  const icon = document.createElement("i");
  icon.className = "fas fa-trash";
  return icon;
}
clickOnIconAndDelete(); //функция, которая должна была удалять элементы по нажатии на иконку

function clickOnIconAndDelete() {
  const allLis = document.getElementsByTagName("li");
  const icons = document.getElementsByTagName("i");
  icons.forEach(icon =>
    icon.addEventListener("click", () => {
      this.allLis.remove();
    })
  );
}

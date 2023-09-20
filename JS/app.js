function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let expression = document.getElementById("display").value;
  let result;

  result = eval(expression);
  if (result == undefined) {
    document.getElementById("display").value = "Sin operación";
    setTimeout(() => {
      document.getElementById("display").value = "";
    }, 3000);
  } else {
    document.getElementById("display").value = result;
    saveToHistory(expression + " = " + result);
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function saveToHistory(expression) {
  let historyList = document.getElementById("historyList");
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(expression));
  historyList.appendChild(listItem);

  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(expression);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  let historyList = document.getElementById("historyList");
  history.forEach(function (item) {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(item));
    historyList.appendChild(listItem);
  });
}

function clearHistory() {
  localStorage.removeItem("calcHistory");
  document.getElementById("historyList").innerHTML = "";
}

//Modal
function openHistoryModal() {
  let modal = document.getElementById("historyModal");
  modal.style.display = "block";
}

function closeHistoryModal() {
  let modal = document.getElementById("historyModal");
  modal.style.display = "none";
}

window.onload = loadHistory;

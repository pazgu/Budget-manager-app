function updateLocalStorage(KEY) {
  localStorage.setItem(
    KEY,
    JSON.stringify(KEY === "incomes" ? incomeArr : expensesArr)
  );
}

function initializeArrayFromLocalStorage(KEY) {
  if (localStorage.getItem(KEY)) {
    return JSON.parse(localStorage.getItem(KEY));
  }
  return [];
}

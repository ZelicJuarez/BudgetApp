var budgetController = (function() {
  //some code
})();

var UIController = (function() {
  //some code
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. get field input data
    // 2. add item to the budget controller
    // 3. add new item to UI
    // 4. calculate budget
    // 5. display the budget on the UI
    console.log("it works");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);

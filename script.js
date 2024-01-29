document.addEventListener("DOMContentLoaded", function () {
  const list_Container = document.getElementById("listContainer");
  const add_Button = document.getElementById("addButton");
  add_Button.addEventListener("click", function () {
    // Get the text entered by the user
    const itemText = document.getElementById("itemInput").value;

    if (itemText.trim() !== "") {
      //Create a new list item
      const newItem = document.createElement("li");
      newItem.textContent = itemText;

      //Add the new item to the list container

      list_Container.appendChild(newItem);

      // Scroll to the bottom
      list_Container.scrollTop = list_Container.scrollHeight;

      //Clear the input field after adding a item
      document.getElementById("itemInput").value = "";
    }
  });
});

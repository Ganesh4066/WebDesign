/* script.js */
// Select all category items
const categoryItems = document.querySelectorAll(".category-item");
const deleteCard = document.getElementById("deleteCard");
const closeBtn = document.getElementById("closeBtn");
const deleteCheckbox = document.getElementById("deleteCheckbox");
const confirmBtn = document.getElementById("confirmBtn");

// Add Category Modal elements
const addCategoryBtn = document.getElementById("addCategoryBtn");
const addCategoryModal = document.getElementById("addCategoryModal");
const closeAddCategoryModal = document.getElementById("closeAddCategoryModal");

// Add click event listener to each category item
categoryItems.forEach((item) => {
  const deleteBtn = item.querySelector(".delete-btn");

  // Toggle selection on category item click
  item.addEventListener("click", () => {
    categoryItems.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");
  });

  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (item.classList.contains("selected")) {
      deleteCard.style.display = "flex";
    } else {
      alert("Please select a category to delete.");
    }
  });
});

// Function to update the confirm button state
function updateConfirmButtonState(isChecked) {
  if (isChecked) {
    confirmBtn.style.backgroundColor = "#ff1f58";
    confirmBtn.style.opacity = "1";
    confirmBtn.style.cursor = "pointer";
    confirmBtn.disabled = false;
  } else {
    confirmBtn.style.backgroundColor = "#f8bfbf";
    confirmBtn.style.opacity = "0.6";
    confirmBtn.style.cursor = "not-allowed";
    confirmBtn.disabled = true;
  }
}

// Function to close the dialog
function closeDialog() {
  deleteCard.style.display = "none";
}

// Event listeners for delete dialog
deleteCheckbox.addEventListener("change", function () {
  updateConfirmButtonState(this.checked);
});

closeBtn.addEventListener("click", closeDialog);

// Event listeners for Add Category modal
addCategoryBtn.addEventListener("click", function () {
  addCategoryModal.style.display = "flex";
});

closeAddCategoryModal.addEventListener("click", function () {
  addCategoryModal.style.display = "none";
});

// Add functionality to the Create button
const createBtn = addCategoryModal.querySelector(".create-btn");
const categoryInput = document.getElementById("category");
const categoryList = document.querySelector(".category-list");

createBtn.addEventListener("click", function () {
  const categoryName = categoryInput.value.trim();

  if (categoryName) {
    // Create new category item
    const newCategoryItem = document.createElement("div");
    newCategoryItem.className = "category-item";
    newCategoryItem.innerHTML = `
      <span>${categoryName}</span>
      <div class="item-actions">
        <button class="edit-btn">
          <img src="icons/edit-2.png" alt="Edit" />
        </button>
        <button class="delete-btn">
          <img src="icons/trash.png" alt="Delete" />
        </button>
      </div>
    `;

    // Add event listeners to the new category item
    newCategoryItem.addEventListener("click", () => {
      document.querySelectorAll(".category-item").forEach((item) => {
        item.classList.remove("selected");
      });
      newCategoryItem.classList.add("selected");
    });

    const deleteBtn = newCategoryItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (newCategoryItem.classList.contains("selected")) {
        deleteCard.style.display = "flex";
      } else {
        alert("Please select a category to delete.");
      }
    });

    // Append the new category to the list
    categoryList.appendChild(newCategoryItem);

    // Clear input and close modal
    categoryInput.value = "";
    addCategoryModal.style.display = "none";
  }
});

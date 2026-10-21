document.addEventListener('DOMContentLoaded', function () {
  // Form elements
  const form = document.getElementById('petForm');
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const image = document.getElementById('image');
  const birthdate = document.getElementById('birthdate');
  const price = document.getElementById('price');
  const code = document.getElementById('code');
  const sold = document.getElementById('sold');
  const submitBtn = document.getElementById('submitBtn');
  const petList = document.getElementById('petList');

  // Array with all the pets
  let pets = [];

  // Position of the pet we are editing (-1 = we are adding a new pet)
  let editIndex = -1;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const pet = {
      name: name.value,
      description: description.value,
      image: image.value,
      birthdate: birthdate.value,
      price: price.value,
      code: code.value,
      sold: sold.checked
    };

    if (editIndex === -1) {
      pets.push(pet);
    } else {
      pets[editIndex] = pet;
      editIndex = -1;
      submitBtn.textContent = "Add Pet";
    }

    form.reset();
    renderPets();
  });

  // Show all the pets in the DOM
  function renderPets() {
    petList.innerHTML = "";

    pets.forEach(function (pet, index) {
      const card = document.createElement('div');
      card.classList.add('pet-card');

      card.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>${pet.description}</p>
        <p>Birthdate: ${pet.birthdate}</p>
        <p>Price: ${pet.price} €</p>
        <p>Code: ${pet.code}</p>
        ${pet.sold ? '<p class="sold">SOLD</p>' : ''}
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        <button class="toggle">Toggle Sold</button>
      `;

      card.querySelector('.edit').addEventListener('click', function () {
        editPet(index);
      });
      card.querySelector('.delete').addEventListener('click', function () {
        deletePet(index);
      });
      card.querySelector('.toggle').addEventListener('click', function () {
        toggleSold(index);
      });

      petList.appendChild(card);
    });
  }

  function editPet(index) {
    const pet = pets[index];
    name.value = pet.name;
    description.value = pet.description;
    image.value = pet.image;
    birthdate.value = pet.birthdate;
    price.value = pet.price;
    code.value = pet.code;
    sold.checked = pet.sold;

    editIndex = index;
    submitBtn.textContent = "Update Pet";
  }

  function deletePet(index) {
    pets.splice(index, 1);
    renderPets();
  }

  function toggleSold(index) {
    pets[index].sold = !pets[index].sold;
    renderPets();
  }

  // Returns true if all the fields are ok
  function validateForm() {
    let isValid = true;

    const imageRegex = /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i;
    const codeRegex = /^[a-z]{3}\d{3}$/i;

    if (name.value.trim() === "") {
      markFieldAsNotValid(name);
      isValid = false;
    } else {
      markFieldAsValid(name);
    }

    if (!imageRegex.test(image.value)) {
      markFieldAsNotValid(image);
      isValid = false;
    } else {
      markFieldAsValid(image);
    }

    if (birthdate.value === "" || new Date(birthdate.value) > new Date()) {
      markFieldAsNotValid(birthdate);
      isValid = false;
    } else {
      markFieldAsValid(birthdate);
    }

    if (price.value === "" || price.value <= 0) {
      markFieldAsNotValid(price);
      isValid = false;
    } else {
      markFieldAsValid(price);
    }

    if (!codeRegex.test(code.value)) {
      markFieldAsNotValid(code);
      isValid = false;
    } else {
      markFieldAsValid(code);
    }

    return isValid;
  }

  function markFieldAsNotValid(element) {
    element.parentNode.classList.add("is-not-valid-field");
  }

  function markFieldAsValid(element) {
    element.parentNode.classList.remove("is-not-valid-field");
  }
});

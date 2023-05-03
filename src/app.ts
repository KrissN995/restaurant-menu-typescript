import { MenuItem } from './models/model';

document.addEventListener("DOMContentLoaded", () => {
  const menuItems: MenuItem[] = [
    { id: "1", name: "Red Curry with Chicken", description: "Red curry is made with several red chilies, which gives it a bold and spicy flavor. Served with chicken.", price: 10, vegan: false, vegetarian: false, allergens: ["nuts", "lactose", "gluten", "eggs"], imgURL: 'redCurryChicken.png', ingredients: ["Red Curry", "Chicken", "Rice", "Veggies"], category:'Main'  },
    { id: "2", name: "Red Curry with Salmon", description: "Red curry is made with several red chilies, which gives it a bold and spicy flavor. Served with fresh salmon.", price: 15, vegan: false, vegetarian: false, allergens: ["nuts", "lactose", "gluten", "eggs", "fish"], imgURL: 'redCurrySalmon.png', ingredients: ["Red Curry", "Salmon", "Rice", "Veggies"],category:'Main' },
    { id: "3", name: "Roasted Potato and Kohlrabi Salad", description: "A member of the cabbage family, kohlrabi carries a signature sweet-but-peppery flavor profile, with a taste and texture reminiscent of broccoli stems.", price: 15, vegan: true, vegetarian: true, allergens: ["nuts", "gluten"], imgURL: '', ingredients: ["Red Curry", "Chicken", "Rice", "Veggies"],category:'SaladAndSoups' },
    { id: "4", name: "Chickpea, Rice and Kale Soup", description: "A gluten-free and oh-so-creamy with a touch of blended cashews.", price: 15, vegan: true, vegetarian: true, allergens: ["lactose", "gluten", "soy"], imgURL: 'ChickpeaRiceKaleSoup.png', ingredients: ["Chickpea", "Rice", "Soy", "Veggies"], category:'SaladAndSoups' },
    { id: "5", name: "Spicy Kung Pao Brussels Sprouts", description: "These tender roasted Kung Pao Brussels Sprouts are tossed with spicy chili sauce and crunchy peanuts.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL: 'KIngPaoBrusselsSprouts.png', ingredients: ["Brussels Sprouts", "Salad", "Onion"],category:'SaladAndSoups' },
    { id: "6", name: "Sesame ginger tofu with veggie lo mein", description: "Crisp vegetables, protein rich tofu and noodles all combined in a flavorful vegan sauce the entire family will love.", price: 15, vegan: true, vegetarian: true, allergens: ["nuts", "transFat"], imgURL: 'veggieLoMeinTofu.png', ingredients: ["Tofu", "Rice", "Veggies"],category:'Main' },
    { id: "7", name: "Burmese watermelon salad", description: "This cool, clever take on the cuisine of Myanmar focuses on umami-rich flavors and sour, pungent ingredients: cubed watermelon, avocado, peanuts, green lentils, green beans, coconut flakes and a soy dressing.", price: 15, vegan: true, vegetarian: true, allergens: ["soy"], imgURL: 'BurmeseWatermelonSalad.png', ingredients: ["Watermelon", "Sald", "Onion", "Veggies"], category:'SaladAndSoups' },
    { id: "8", name: "Korean tofu “sausage” salad with avocado", description: "Korean tofu “sausage” salad with avocado. Creamy avocado balances the Korean flavors in this plant-forward bowl that includes tofu as sausage and quick-pickled carrots.", price: 15, vegan: true, vegetarian: true, allergens: ["gluten", "transFat"], imgURL: 'KoreanTofuSausageSaladAvocado.png', ingredients: ["Tofu", "Avocado", "Salad", "Onion"], category:'Main' },
    { id: "9", name: "Coconut tapioca with lychee and pineapple", description: "An exotic tropical dessert that is the perfect finale to an Asian-themed dinner party.", price: 15, vegan: false, vegetarian: true, allergens: ["lactose", "eggs", "gluten"], imgURL: 'CoconutTapiocapineappleSalad.png', ingredients: ["Coconut", "Tapioca", "Pineapple", "Lychee"] ,category:'Dessert'},
    { id: "10", name: "Chinese custard tarts", description: "Flaky pastry filled with sweet custard. What a perfect way to finish off your Cantonese-inspired banquet.", price: 15, vegan: false, vegetarian: true, allergens: ["lactose", "gluten", "eggs"], imgURL: 'ChineseCustardTarts.png', ingredients: ["Cream", "Vanila", "Coconut"],category:'Dessert' },
    { id: "11", name: "Black sesame ice cream cones", description: "Black sesame adds its midnight-black colour and a dusky, smoky favour to the ice cream. Begin this recipe a day ahead.", price: 15, vegan: true, vegetarian: true, allergens: ["gluten", "nuts"], imgURL: 'BlackSesameIceCream.png', ingredients: ["Sesame Seeds", "Nut Milk", "Vegan Chocolate"],category:'Dessert' },
    { id: "12", name: "Chai panna cotta", description: "A spiced indian take on a classic dessert.", price: 15, vegan: false, vegetarian: true, allergens: ["lactose", "g;uten", "eggs"], imgURL: 'ChaiPannaCotta.png', ingredients: ["Chai", "Spices", "Mango"],category:'Dessert' },
    { id: "13", name: "Asian-Style Easy Egg Muffins", description: "The carrot and ginger are a fresh and zippy combo. The soy sauce rounds it all up.", price: 15, vegan: false, vegetarian: true, allergens: ["gluten", "eggs"], imgURL: 'eggMuffins.png', ingredients: ["Eggs", "Cheese", "Spinach"],category:'SaladAndSoups' },
    { id: "14", name: "Ceylon Black Tea", description: "Mid-grown teas—typically cultivated between 2,000 and 3,500 feet—are full-bodied and have a rich and complex flavor.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL: 'CeylonBlackTea.png', ingredients: ["Black Tea", "Caffeine", "Lemon"],category:'Beverages' },
    { id: "15", name: "Japanese Whisky", description: "Japanese single malt, blended malt, and blended whiskies are double distilled from malted barley, which is occasionally peated (dried over smoked peat) and fermented grains.", price: 15, vegan: false, vegetarian: true, allergens: ["gluten"], imgURL: 'JapaneseWhisky.png', ingredients: ["Citrus", "Spices", "Vanila"],category:'Beverages' },
    { id: "16", name: "South Indian Coffee", description: "Indian filter coffee is a preparation technique in which coffee is brewed with the use of an Indian coffee filter.", price: 15, vegan: false, vegetarian: true, allergens: ["lactose", "gluten", "nuts"], imgURL: 'SouthIndianCoffee.png', ingredients: ["Milk", "Coffee", "Sugar"],category:'Beverages' },
    { id: "17", name: "Fresh Spring Rolls", description: "Using rice paper is such a great way to hold all those veggies together while still showcasing the beautiful colors.", price: 15, vegan: true, vegetarian: true, allergens: ["nuts"], imgURL: 'FreshSpringRollsVegan.png', ingredients: ["Brown Rice", "Cucumbers", "Carrots", "Green Onions"],category:'SaladAndSoups' },
    { id: "18", name: "Shredded Potato Pancake", description: "crunchy snack with the licorice-taste you get from Chinese five-spice.", price: 15, vegan: false, vegetarian: true, allergens: ["gluten"], imgURL: 'ShreddedPotatoPancake.png', ingredients: ["Potato", "Onion", "Eggs"],category:'SaladAndSoups' },
    { id: "19", name: "Korean Beef Bulgogi", description: "Bulgogi is a type of grilled Korean dish, or “gogi”, that has made a huge splash stateside alongside kalbi (marinated short ribs).", price: 15, vegan: false, vegetarian: false, allergens: ["soy", "gluten"], imgURL: 'KoreanBeefBulgogi.png', ingredients: ["Rib Eye Steak", "Rice", "Soy", "Veggies"],category:'Main' },
    { id: "20", name: "Grilled Beef Galbi (Korean Short Ribs)", description: "Galbi features long, thin pieces of Beef Short Rib that have been marinated in a sauce that’s both equally sweet and savory.", price: 15, vegan: false, vegetarian: false, allergens: ["soy", "gluten"], imgURL: 'GrilledBeefGalbi.png', ingredients: ["Beef Short Ribs", "Rice", "Soy", "Veggies"],category:'Main' },

  ];

  const searchInput = document.getElementById("searchInput") as HTMLInputElement;
  const searchIcon = document.getElementById("search-icon");
  const closeIcon = document.getElementById("close-icon");
  const filterButton = document.getElementById("filterButton") as HTMLButtonElement;
  const filterPopup = document.getElementById("filterPopup") as HTMLDivElement;
  const closeFilterIcon = document.getElementById("closeFilterIcon") as HTMLElement;
  const popupOverlay = document.getElementById("popupOverlay") as HTMLDivElement;
  const menuItemsContainer = document.getElementById("menuItems");
  const allergensCheckbox = document.getElementById("allergensCheckbox") as HTMLInputElement;
  const allergenCheckboxes = document.querySelectorAll(".allergens-list input[type='checkbox']") as NodeListOf<HTMLInputElement>;
  const applyFiltersButton = document.getElementById("applyFiltersButton") as HTMLButtonElement;
  const resetFiltersButton = document.getElementById("resetFiltersButton") as HTMLButtonElement;
  const veganCheckbox = document.getElementById("veganCheckbox") as HTMLInputElement;
  const vegetarianCheckbox = document.getElementById("vegetarianCheckbox") as HTMLInputElement;
  const shoppingCartButton: HTMLElement | null = document.getElementById("shoppingCartButton") as HTMLButtonElement;
  const cartIndicator: HTMLElement | null = document.getElementById('cartIndicator');

  let isCartIndicatorVisible: boolean = false; // Track the visibility state


  function renderMenuItems(items: MenuItem[]): void {
    if (menuItemsContainer) {
      menuItemsContainer.innerHTML = "";
      items.forEach((item) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        ${item.imgURL
            ? `<img src="../src/images/${item.imgURL}"/>`
            : '<img src="../src/images/defaultPic.png" />'
          }
            <div class="title">${item.name}</div>
            <div class="details-row">
              <div class="key-ingredients">${item.ingredients.join(', ')}</div>
              <div class="price">${item.price.toLocaleString()} CHF</div>
            </div>
            <div class="buttons-row">
              <button class="details-button">Details</button>
              <button class="shopping-cart-button" id="shoppingCartButton">
                <i class="fas fa-shopping-cart"></i>
              </button>
              <div id="cartIndicator"></div>
            </div>`;

        menuItemsContainer.appendChild(newDiv);
      });
    }
  }

  function toggleIcons() {
    const inputValue = searchInput.value.trim();
    if (inputValue !== "") {
      searchIcon?.classList.add("hidden");
      closeIcon?.classList.add("visible");
      applyFilters();
    } else {
      searchIcon?.classList.remove("hidden");
      closeIcon?.classList.remove("visible");
    }
  }

  // Function to clear search input
  function clearSearchInput() {
    searchInput.value = "";
    toggleIcons();
    applyFilters();
  }

  function applyFilters(): void {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedAllergens = Array.from(allergenCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);

    const isVegan = veganCheckbox.checked;
    const isVegetarian = vegetarianCheckbox.checked;

    let filteredItems: MenuItem[] = menuItems;

    if (searchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
      );
    }

    if (isVegan) {
      filteredItems = filteredItems.filter((item) => item.vegan);
    }

    if (isVegetarian) {
      filteredItems = filteredItems.filter((item) => item.vegetarian);
    }

    if (selectedAllergens && selectedAllergens.length > 0) {
      filteredItems = filteredItems.filter((item) => !item.allergens.some(allergen => selectedAllergens.includes(allergen)));
    }

    renderMenuItems(filteredItems);
    closePopup();
  }

  function resetFilters() {
    // Uncheck all checkboxes
    allergenCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    allergensCheckbox.checked = false;
    veganCheckbox.checked = false;
    vegetarianCheckbox.checked = false;

    renderMenuItems(menuItems);
    closePopup();
  }

  function toggleIconColor(checkbox: HTMLInputElement) {
    const icon = checkbox.nextElementSibling as HTMLImageElement;

    if (checkbox.checked) {
      icon.classList.add("selected");
    } else {
      icon.classList.remove("selected");
    }
  }

  function closePopup() {
    filterPopup.classList.remove("visible");
    popupOverlay.classList.remove("visible");
  }

  // Function to check if any filter is selected
  function checkFiltersSelected(): boolean {
    const selectedAllergens = Array.from(allergenCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);

    const isVegan = veganCheckbox.checked;
    const isVegetarian = vegetarianCheckbox.checked;
    return (selectedAllergens && selectedAllergens.length > 0) || isVegan || isVegetarian; // Return true or false based on the selection status
  }
  // Event listeners
  searchInput.addEventListener("input", toggleIcons);
  searchIcon?.addEventListener("click", () => searchInput.focus());
  closeIcon?.addEventListener("click", clearSearchInput);

  filterButton.addEventListener("click", () => {
    filterPopup.classList.add("visible");
    popupOverlay.classList.add("visible");
  });

  closeFilterIcon.addEventListener("click", () => {
    closePopup();
  });

  allergensCheckbox.addEventListener("change", function () {
    const isChecked = allergensCheckbox.checked;

    allergenCheckboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
      toggleIconColor(checkbox);
    });
  });

  allergenCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      toggleIconColor(checkbox);
    });
  });

  applyFiltersButton.addEventListener("click", applyFilters);
  resetFiltersButton.addEventListener("click", resetFilters);

  applyFiltersButton.disabled = true;

  document.addEventListener("change", () => {
    applyFiltersButton.disabled = !checkFiltersSelected();
  });

  shoppingCartButton?.addEventListener('click', () => {
    isCartIndicatorVisible = !isCartIndicatorVisible; // Toggle the visibility state

    if (cartIndicator) {
      if (isCartIndicatorVisible) {
        cartIndicator.style.display = 'block';
      } else {
        cartIndicator.style.display = 'none';
      }
    }
  });

  // Initial rendering of menu items
  renderMenuItems(menuItems);
});
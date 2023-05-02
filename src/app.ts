import { MenuItem } from './models/model';
  
  document.addEventListener("DOMContentLoaded", () => {
    const menuItems: MenuItem[] = [
      { name: "Red Curry with Chicken", description: "Red curry is made with several red chilies, which gives it a bold and spicy flavor. Served with chicken.", price: 10, vegan: false, vegetarian: false, allergens: ["Nuts"], imgURL:'redCurryChicken.png' },
      { name: "Red Curry with Salmon", description: "Red curry is made with several red chilies, which gives it a bold and spicy flavor. Served with fresh salmon.", price: 15, vegan: false, vegetarian: false, allergens: [], imgURL:'redCurrySalmon.png' },
      { name: "Roasted Potato and Kohlrabi Salad", description: "A member of the cabbage family, kohlrabi carries a signature sweet-but-peppery flavor profile, with a taste and texture reminiscent of broccoli stems.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'' },
      { name: "Chickpea, Rice and Kale Soup", description: "A gluten-free and oh-so-creamy with a touch of blended cashews.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'ChickpeaRiceKaleSoup.png' },
      { name: "Spicy Kung Pao Brussels Sprouts", description: "These tender roasted Kung Pao Brussels Sprouts are tossed with spicy chili sauce and crunchy peanuts.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'KIngPaoBrusselsSprouts.png' },
      { name: "Sesame ginger tofu with veggie lo mein", description: "Crisp vegetables, protein rich tofu and noodles all combined in a flavorful vegan sauce the entire family will love.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'veggieLoMeinTofu.png' },

      { name: "Burmese watermelon salad", description: "This cool, clever take on the cuisine of Myanmar focuses on umami-rich flavors and sour, pungent ingredients: cubed watermelon, avocado, peanuts, green lentils, green beans, coconut flakes and a soy dressing.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'BurmeseWatermelonSalad.png' },
      { name: "Korean tofu “sausage” salad with avocado", description: "Korean tofu “sausage” salad with avocado. Creamy avocado balances the Korean flavors in this plant-forward bowl that includes tofu as sausage and quick-pickled carrots.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'KoreanTofuSausageSaladAvocado.png' },
      { name: "Coconut tapioca with lychee and pineapple", description: "An exotic tropical dessert that is the perfect finale to an Asian-themed dinner party.", price: 15, vegan: false, vegetarian: true, allergens: [], imgURL:'CoconutTapiocapineappleSalad.png' },
      { name: "Chinese custard tarts", description: "Flaky pastry filled with sweet custard. What a perfect way to finish off your Cantonese-inspired banquet.", price: 15, vegan: false, vegetarian: true, allergens: [], imgURL:'ChineseCustardTarts.png' },
      { name: "Black sesame ice cream cones", description: "Black sesame adds its midnight-black colour and a dusky, smoky favour to the ice cream. Begin this recipe a day ahead.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'BlackSesameIceCream.png' },

      { name: "Chai panna cotta", description: "A spiced indian take on a classic dessert.", price: 15, vegan: false, vegetarian: true, allergens: [], imgURL:'ChaiPannaCotta.png' },
      { name: "Asian-Style Easy Egg Muffins", description: "The carrot and ginger are a fresh and zippy combo. The soy sauce rounds it all up.", price: 15, vegan: false, vegetarian: true, allergens: [], imgURL:'eggMuffins.png' },
      { name: "Ceylon Black Tea", description: "Mid-grown teas—typically cultivated between 2,000 and 3,500 feet—are full-bodied and have a rich and complex flavor.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'CeylonBlackTea.png' },
      { name: "Japanese Whisky", description: "Japanese single malt, blended malt, and blended whiskies are double distilled from malted barley, which is occasionally peated (dried over smoked peat) and fermented grains.", price: 15, vegan: false, vegetarian: true, allergens: [], imgURL:'JapaneseWhisky.png' },
      { name: "South Indian Coffee", description: "Indian filter coffee is a preparation technique in which coffee is brewed with the use of an Indian coffee filter.", price: 15, vegan: false, vegetarian: true, allergens: [], imgURL:'SouthIndianCoffee.png' },

      { name: "Fresh Spring Rolls", description: "Using rice paper is such a great way to hold all those veggies together while still showcasing the beautiful colors.", price: 15, vegan: true, vegetarian: true, allergens: [], imgURL:'FreshSpringRollsVegan.png' },
      { name: "Shredded Potato Pancake", description: "crunchy snack with the licorice-taste you get from Chinese five-spice.", price: 15, vegan: false, vegetarian: true, allergens: [], imgURL:'ShreddedPotatoPancake.png' },
      { name: "Korean Beef Bulgogi", description: "Bulgogi is a type of grilled Korean dish, or “gogi”, that has made a huge splash stateside alongside kalbi (marinated short ribs).", price: 15, vegan: false, vegetarian: false, allergens: [], imgURL:'KoreanBeefBulgogi.png' },
      { name: "Grilled Beef Galbi (Korean Short Ribs)", description: "Galbi features long, thin pieces of Beef Short Rib that have been marinated in a sauce that’s both equally sweet and savory.", price: 15, vegan: false, vegetarian: false, allergens: [], imgURL:'GrilledBeefGalbi.png' },

      // Add more menu items here
    ];
  
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    const veganCheckbox = document.getElementById("veganCheckbox") as HTMLInputElement;
    const vegetarianCheckbox = document.getElementById("vegetarianCheckbox") as HTMLInputElement;
    const allergensCheckbox = document.getElementById("allergensCheckbox") as HTMLInputElement;
    const menuItemsContainer = document.getElementById("menuItems");
  
    function renderMenuItems(items: MenuItem[]): void {
      if (menuItemsContainer) {
        menuItemsContainer.innerHTML = "";
        items.forEach((item) => {
          let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        ${
          item.imgURL
            ? `<img src="../src/images/${item.imgURL}"/>`
            : '<img src="../src/images/defaultPic.png" />'
        }
            <div class="title">${item.name}</div>
            <div class="price">${item.price.toLocaleString()}</div>
            `;

          menuItemsContainer.appendChild(newDiv);
        });
      }
    }
  
    function applyFilters(): void {
      const searchQuery = searchInput.value.toLowerCase();
      const isVeganSelected = veganCheckbox.checked;
      const isVegetarianSelected = vegetarianCheckbox.checked;
      const isAllergensSelected = allergensCheckbox.checked;
  
      let filteredItems: MenuItem[] = menuItems;
  
      if (searchQuery) {
        filteredItems = filteredItems.filter((item) =>
          item.name.toLowerCase().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery)
        );
      }
  
      if (isVeganSelected) {
        filteredItems = filteredItems.filter((item) => item.vegan);
      }
  
      if (isVegetarianSelected) {
        filteredItems = filteredItems.filter((item) => item.vegetarian);
      }
  
      if (isAllergensSelected) {
        filteredItems = filteredItems.filter((item) => item.allergens.length > 0);
      }
  
      renderMenuItems(filteredItems);
    }
  
    searchInput.addEventListener("input", applyFilters);
    veganCheckbox.addEventListener("change", applyFilters);
    vegetarianCheckbox.addEventListener("change", applyFilters);
    allergensCheckbox.addEventListener("change", applyFilters);
  
    // Initial rendering of menu items
    renderMenuItems(menuItems);
  });
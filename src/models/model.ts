export interface MenuItem {
    name: string;
    description: string;
    imgURL:string;
    price: number;
    vegan: boolean;
    vegetarian: boolean;
    allergens: string[];
    category?: string,
    mealType?: string,
    ingredients?: string[]
  }

  export interface Category {
    id: string,
    name: string;
  }
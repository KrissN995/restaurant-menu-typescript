export interface MenuItem {
    id:string;
    name: string;
    description: string;
    imgURL:string;
    price: number;
    vegan: boolean;
    vegetarian: boolean;
    allergens: string[];
    category: string,
    ingredients: string[]
  }
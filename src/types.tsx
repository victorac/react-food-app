export type FoodItem = {
  id: string;
  title: string;
  description: string;
  price: string;
};

export type CartItem = FoodItem & { quantity: number };

export interface CartInfo {
    [index: string]: CartItem;
}

export type MealCart = Record<string, CartItem>

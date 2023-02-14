export interface Food {
  nf_total_fat: number;
  nf_cholesterol: number;
  nf_sodium: number;
  nf_total_carbohydrate: number;
  nf_dietary_fiber: number;
  nf_sugars: number;
  nf_protein: number;
  nf_potassium: number;
  nf_calories: number;
  serving_qty: number;
  serving_unit: string;
  food_name: string;
  serving_weight_grams: number;
  photo: {
    thumb: string;
  };
}

export interface PersistentStorage {
    getItem(key: string): string | number
    setItem(key: number, value: any): void
  }

 
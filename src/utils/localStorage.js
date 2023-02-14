export const handleSetLocalStorage = (foodData, totalFatSum, totalCaloriesSum, totalColesterolSum,totalSodiumSum,totalCarbohydrateSum, totalSugarSum, totalProtienSum, totalFiberSum, totalPotassiumSum) => {
    localStorage.setItem("foodData", JSON.stringify(foodData));
    localStorage.setItem("totalFat", totalFatSum.toString());
    localStorage.setItem("totalCalories", totalCaloriesSum.toString());
    localStorage.setItem("totalColesterol", totalColesterolSum.toString());
    localStorage.setItem("totalSodium", totalSodiumSum.toString());
    localStorage.setItem("totalCarbohydrate", totalCarbohydrateSum.toString());
    localStorage.setItem("totalSugar", totalSugarSum.toString());
    localStorage.setItem("totalProtein", totalProtienSum.toString());
    localStorage.setItem("totalFibre", totalFiberSum.toString());
    localStorage.setItem("totalPotassium", totalPotassiumSum.toString());
  };
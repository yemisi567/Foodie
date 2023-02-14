import React, { FC, useState, ChangeEvent } from "react";
import { useAppDispatch } from "../utils/hooks";
import { fetchNutrients } from "../redux/actions/nutrients";
import "../App.css";
import { Food } from "./interface";
import { handleSetLocalStorage } from "../utils/localStorage";
import { toTitleCase } from "../utils/nutritionix-header";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<[]>([]);
  const [removeCurrent, setRemoveCurrent] = useState<boolean>(false);
  const [removePin, setRemovePin] = useState<boolean>(false);
  const [localStorageItem, setLocalStorage] = useState<boolean>(false);
  const [foodString, setFoodString] = useState<string>("");
  const initialValue = 0;

  const getDetails = async () => {
    setLoading(true);
    const res = await dispatch(fetchNutrients(foodString));
    res && setResults(res.payload.foods);
    res && setLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFoodString(event.target.value);
  };

  const handleCalculate = () => {
    getDetails();
    setRemoveCurrent(false);
  };

  const foodData: Food[] = results;
  const totalFat = foodData?.map((item) => item.nf_total_fat);
  const highestFat = Math.max(...totalFat);
  const finalFatDetails =
    foodData?.length > 1
      ? foodData.filter((item) => item.nf_total_fat === highestFat)
      : null;
  const totalCalories = foodData?.map((item) => item.nf_calories);
  const totalColesterol = foodData?.map((item) => item.nf_cholesterol);
  const highestColesterol = Math.max(...totalColesterol);
  const finalColesterolDetails =
    foodData?.length > 1
      ? foodData.filter((item) => item.nf_cholesterol === highestColesterol)
      : null;

  const totalSodium = foodData?.map((item) => item.nf_sodium);
  const highestSodium = Math.max(...totalSodium);
  const finalSodiumDetails =
    foodData?.length > 1
      ? foodData.filter((item) => item.nf_sodium === highestSodium)
      : null;
  const totalCarbohydrate = foodData?.map((item) => item.nf_total_carbohydrate);
  const highestCarbohydrate = Math.max(...totalCarbohydrate);
  const finalCarbohydrateDetails =
    foodData?.length > 1
      ? foodData.filter(
          (item) => item.nf_total_carbohydrate === highestCarbohydrate
        )
      : null;
  const totalFiber = foodData?.map((item) => item.nf_dietary_fiber);
  const highestFiber = Math.max(...totalFiber);
  const finalFiberDetails =
    foodData?.length > 1
      ? foodData.filter((item) => item.nf_dietary_fiber === highestFiber)
      : null;
  const totalSugar = foodData?.map((item) => item.nf_sugars);
  const highestSugar = Math.max(...totalSugar);
  const finalSugarDetails =
    foodData?.length > 1
      ? foodData.filter((item) => item.nf_sugars === highestSugar)
      : null;
  const totalProtien = foodData?.map((item) => item.nf_protein);
  const highestProtien = Math.max(...totalProtien);
  const finalProtienDetails =
    foodData?.length > 1
      ? foodData.filter((item) => item.nf_protein === highestProtien)
      : null;
  const totalPotassium = foodData?.map((item) => item.nf_potassium);
  const highestPotassium = Math.max(...totalPotassium);
  const finalPotassiumDetails =
    foodData?.length > 1
      ? foodData.filter((item) => item.nf_potassium === highestPotassium)
      : null;

  const allData: any = localStorage.getItem("foodData");
  const finalData: Food[] = JSON.parse(allData);
  console.log(finalData, "data");
  const fat = localStorage.getItem("totalFat");
  const calories = localStorage.getItem("totalCalories");
  const colesterol = localStorage.getItem("totalColesterol");
  const sodium = localStorage.getItem("totalSodium");
  const carbohydrate = localStorage.getItem("totalCarbohydrate");
  const sugar = localStorage.getItem("totalSugar");
  const protein = localStorage.getItem("totalProtein");
  const fibre = localStorage.getItem("totalFibre");
  const potassium = localStorage.getItem("totalPotassium");

  const totalLocalFat =
    finalData === null ? null : finalData?.map((item) => item.nf_total_fat);
  const highestLocalFat =
    finalData === null ? null : Math.max(...(totalLocalFat || []));
  const finalLocalFatDetails =
    finalData?.length > 1
      ? finalData.filter((item) => item.nf_total_fat === highestLocalFat)
      : null;

  const totalLocalColesterol =
    finalData === null ? null : finalData?.map((item) => item.nf_cholesterol);
  const highestLocalColesterol = Math.max(...(totalLocalColesterol || []));
  const finalLocalColesterolDetails =
    finalData?.length > 1
      ? finalData.filter(
          (item) => item.nf_cholesterol === highestLocalColesterol
        )
      : null;

  const totalLocalSodium =
    finalData === null ? null : finalData?.map((item) => item.nf_sodium);
  const highestLocalSodium = Math.max(...(totalLocalSodium || []));
  const finalLocalSodiumDetails =
    finalData?.length > 1
      ? finalData.filter((item) => item.nf_sodium === highestLocalSodium)
      : null;
  const totalLocalCarbohydrate =
    finalData === null
      ? null
      : finalData?.map((item) => item.nf_total_carbohydrate);
  const highestLocalCarbohydrate = Math.max(...(totalLocalCarbohydrate || []));
  const finalLocalCarbohydrateDetails =
    finalData?.length > 1
      ? finalData.filter(
          (item) => item.nf_total_carbohydrate === highestLocalCarbohydrate
        )
      : null;

  const totalLocalFiber =
    finalData === null ? null : finalData?.map((item) => item.nf_dietary_fiber);
  const highestLocalFiber = Math.max(...(totalLocalFiber || []));
  const finalLocalFiberDetails =
    finalData?.length > 1
      ? finalData.filter((item) => item.nf_dietary_fiber === highestLocalFiber)
      : null;
  const totalLocalSugar =
    finalData === null ? null : finalData?.map((item) => item.nf_sugars);
  const highestLocalSugar = Math.max(...(totalLocalSugar || []));
  const finalLocalSugarDetails =
    finalData?.length > 1
      ? finalData.filter((item) => item.nf_sugars === highestLocalSugar)
      : null;
  const totalLocalProtien =
    finalData === null ? null : finalData?.map((item) => item.nf_protein);
  const highestLocalProtien = Math.max(...(totalLocalProtien || []));
  const finalLocalProtienDetails =
    finalData?.length > 1
      ? finalData.filter((item) => item.nf_protein === highestLocalProtien)
      : null;
  const totalLocalPotassium =
    finalData === null ? null : finalData?.map((item) => item.nf_potassium);
  const highestLocalPotassium = Math.max(...(totalLocalPotassium || []));
  const finalLocalPotassiumDetails =
    finalData?.length > 1
      ? finalData.filter((item) => item.nf_potassium === highestLocalPotassium)
      : null;

  const totalFatSum = totalFat.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const totalCaloriesSum = totalCalories.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const totalColesterolSum = totalColesterol.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const totalSodiumSum = totalSodium.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const totalCarbohydrateSum = totalCarbohydrate.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const totalSugarSum = totalSugar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const totalProtienSum = totalProtien.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const totalFiberSum = totalFiber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const totalPotassiumSum = totalPotassium.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (
    <>
      {loading && <div className="loading">Loading....</div>}
      {!loading && (
        <div>
          <div className="title">Food</div>
          <div className="flex">
            <div className="first-section">
              {" "}
              <div className="subtitle">
                Enter a query like <br />
                <span style={{ color: "#58a61c" }}>
                  “1 plate of rice and one whole chicken vs 1 bowl of cereal and
                  one apple”
                </span>{" "}
                <br />
                to see how it works. We support tens of thousands of foods,
                including
                <br /> international dishes.
              </div>
              <div className="text-area">
                <textarea
                  value={foodString}
                  onChange={handleChange}
                  rows={10}
                  cols={50}
                />
              </div>
              <div className="button-container">
                <button className="button" onClick={handleCalculate}>
                  Calculate Food
                </button>
              </div>
              {!removeCurrent && (
                <>
                  {foodData.length === 0 ? null : (
                    <div style={{ margin: "20px 0 0 0" }}>
                      <table>
                        <tr>
                          <th></th>
                          <th>Qty</th>
                          <th>Unit</th>
                          <th>Food</th>
                          <th>Calories</th>
                          <th>Weight</th>
                        </tr>
                        {foodData.length > 1 ? (
                          <>
                            {foodData?.map((item) => (
                              <tr>
                                <td>
                                  <img
                                    src={item.photo.thumb}
                                    alt=""
                                    height="50"
                                  />
                                </td>
                                <td>{item.serving_qty}</td>
                                <td>{item.serving_unit}</td>
                                <td>{item.food_name}</td>
                                <td>{item.nf_calories}</td>
                                <td>{item.serving_weight_grams}</td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <tr>
                            <td>
                              <img
                                src={foodData[0].photo.thumb}
                                alt=""
                                height="50"
                              />
                            </td>
                            <td>{foodData[0].serving_qty}</td>
                            <td>{foodData[0].serving_unit}</td>
                            <td>{foodData[0].food_name}</td>
                            <td>{foodData[0].nf_calories}</td>
                            <td>{foodData[0].serving_weight_grams}</td>
                          </tr>
                        )}
                      </table>
                    </div>
                  )}
                </>
              )}
            </div>
            {!removeCurrent && (
              <>
                {foodData.length === 0 ? null : (
                  <div className="nutrition-container">
                    <div className="pin-flex">
                      <div className="nutrition-title">Nutrition Facts</div>
                      {!removePin && (
                        <div
                          style={{ marginLeft: 40, cursor: "pointer" }}
                          onClick={() => {
                            setLocalStorage(true);
                            setRemoveCurrent(true);
                            setRemovePin(true);
                            handleSetLocalStorage(
                              foodData,
                              totalFatSum,
                              totalCaloriesSum,
                              totalColesterolSum,
                              totalSodiumSum,
                              totalCarbohydrateSum,
                              totalSugarSum,
                              totalProtienSum,
                              totalFiberSum,
                              totalPotassiumSum
                            );
                          }}
                        >
                          <img
                            src="https://media.istockphoto.com/id/1303968035/photo/red-push-pin.jpg?b=1&s=170667a&w=0&k=20&c=itfOVEBeYKnSMa4CLekZSET6EtTftofWro1He-92VUw="
                            alt=""
                            width="80"
                          />
                        </div>
                      )}
                    </div>
                    <div style={{ margin: "10px 0 10px 0" }}>
                      Amount Per Serving
                    </div>
                    <table>
                      <tr>
                        <th className="nutrition-title">Calories</th>
                        <th className="nutrition-title">
                          {totalCaloriesSum?.toFixed(2)}
                        </th>
                        {foodData.length > 1 && (
                          <th className="nutrition-title">Highest Value</th>
                        )}
                      </tr>

                      <tr>
                        <td>Total Fat </td>
                        <td className="nutrition-sub-text">
                          {totalFatSum.toFixed(2)}g
                        </td>
                        <td className="nutrition-sub-text">
                          {finalFatDetails
                            ? toTitleCase(finalFatDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Cholesterol </td>
                        <td className="nutrition-sub-text">
                          {totalColesterolSum.toFixed(2)}mg
                        </td>
                        <td className="nutrition-sub-text">
                          {finalColesterolDetails
                            ? toTitleCase(finalColesterolDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Sodium </td>
                        <td className="nutrition-sub-text">
                          {totalSodiumSum.toFixed(2)}mg
                        </td>
                        <td className="nutrition-sub-text">
                          {finalSodiumDetails
                            ? toTitleCase(finalSodiumDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Total Carbohydrates </td>
                        <td className="nutrition-sub-text">
                          {totalCarbohydrateSum.toFixed(2)}g
                        </td>
                        <td className="nutrition-sub-text">
                          {finalCarbohydrateDetails
                            ? toTitleCase(finalCarbohydrateDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Dietary Fiber </td>
                        <td className="nutrition-sub-text">
                          {totalFiberSum.toFixed(2)}g
                        </td>
                        <td className="nutrition-sub-text">
                          {finalFiberDetails
                            ? toTitleCase(finalFiberDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Sugars </td>
                        <td className="nutrition-sub-text">
                          {totalSugarSum.toFixed(2)}g
                        </td>
                        <td className="nutrition-sub-text">
                          {finalSugarDetails
                            ? toTitleCase(finalSugarDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Protein </td>
                        <td className="nutrition-sub-text">
                          {totalProtienSum.toFixed(2)}g
                        </td>
                        <td className="nutrition-sub-text">
                          {finalProtienDetails
                            ? toTitleCase(finalProtienDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Potassium </td>
                        <td className="nutrition-sub-text">
                          {totalPotassiumSum.toFixed(2)}mg
                        </td>
                        <td className="nutrition-sub-text">
                          {finalPotassiumDetails
                            ? toTitleCase(finalPotassiumDetails[0].food_name)
                            : ""}
                        </td>
                      </tr>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
          <div style={{ marginTop: 30 }}>
            {(localStorageItem || sugar) && (
              <>
                <>
                  <>
                    {finalData.length === 0 ? null : (
                      <div style={{ margin: "20px 0 0 0" }}>
                        <table>
                          <tr>
                            <th></th>
                            <th>Qty</th>
                            <th>Unit</th>
                            <th>Food</th>
                            <th>Calories</th>
                            <th>Weight</th>
                          </tr>
                          {finalData.length > 1 ? (
                            <>
                              {finalData?.map((item) => (
                                <tr>
                                  <td>
                                    <img
                                      src={item.photo.thumb}
                                      alt=""
                                      height="50"
                                    />
                                  </td>
                                  <td>{item.serving_qty}</td>
                                  <td>{item.serving_unit}</td>
                                  <td>{item.food_name}</td>
                                  <td>{item.nf_calories}</td>
                                  <td>{item.serving_weight_grams}</td>
                                </tr>
                              ))}
                            </>
                          ) : (
                            <tr>
                              <td>
                                <img
                                  src={finalData[0].photo.thumb}
                                  alt=""
                                  height="50"
                                />
                              </td>
                              <td>{finalData[0].serving_qty}</td>
                              <td>{finalData[0].serving_unit}</td>
                              <td>{finalData[0].food_name}</td>
                              <td>{finalData[0].nf_calories}</td>
                              <td>{finalData[0].serving_weight_grams}</td>
                            </tr>
                          )}
                        </table>
                      </div>
                    )}
                  </>
                </>
                <div className="local-container" style={{ marginTop: 30 }}>
                  <div>
                    <div className="nutrition-title">Nutrition Facts</div>
                  </div>
                  <div style={{ margin: "10px 0 10px 0" }}>
                    Amount Per Serving
                  </div>
                  <table>
                    <tr>
                      <th className="nutrition-title">Calories</th>
                      <th className="nutrition-title">
                        {Number(calories).toFixed(2)}
                      </th>
                      {finalData.length > 1 && (
                        <th className="nutrition-title">Highest Value</th>
                      )}
                    </tr>

                    <tr>
                      <td>Total Fat </td>
                      <td className="nutrition-sub-text">
                        {Number(fat).toFixed(2)}g
                      </td>
                      <td className="nutrition-sub-text">
                        {finalLocalFatDetails
                          ? toTitleCase(finalLocalFatDetails[0].food_name)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Cholesterol </td>
                      <td className="nutrition-sub-text">
                        {Number(colesterol).toFixed(2)}mg
                      </td>
                      {finalLocalColesterolDetails
                        ? toTitleCase(finalLocalColesterolDetails[0].food_name)
                        : ""}
                    </tr>
                    <tr>
                      <td>Sodium </td>
                      <td className="nutrition-sub-text">
                        {Number(sodium).toFixed(2)}mg
                      </td>
                      <td className="nutrition-sub-text">
                        {finalLocalSodiumDetails
                          ? toTitleCase(finalLocalSodiumDetails[0].food_name)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Total Carbohydrates </td>
                      <td className="nutrition-sub-text">
                        {Number(carbohydrate).toFixed(2)}g
                      </td>
                      <td className="nutrition-sub-text">
                        {finalLocalCarbohydrateDetails
                          ? toTitleCase(
                              finalLocalCarbohydrateDetails[0].food_name
                            )
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Dietary Fiber </td>
                      <td className="nutrition-sub-text">
                        {Number(fibre).toFixed(2)}g
                      </td>
                      <td className="nutrition-sub-text">
                        {finalLocalFiberDetails
                          ? toTitleCase(finalLocalFiberDetails[0].food_name)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Sugars </td>
                      <td className="nutrition-sub-text">
                        {Number(sugar).toFixed(2)}g
                      </td>
                      <td className="nutrition-sub-text">
                        {finalLocalSugarDetails
                          ? toTitleCase(finalLocalSugarDetails[0].food_name)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Protein </td>
                      <td className="nutrition-sub-text">
                        {Number(protein).toFixed(2)}g
                      </td>
                      <td className="nutrition-sub-text">
                        {finalLocalProtienDetails
                          ? toTitleCase(finalLocalProtienDetails[0].food_name)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Potassium </td>
                      <td className="nutrition-sub-text">
                        {Number(potassium).toFixed(2)}mg
                      </td>
                      <td className="nutrition-sub-text">
                        {finalLocalPotassiumDetails
                          ? toTitleCase(finalLocalPotassiumDetails[0].food_name)
                          : ""}
                      </td>
                    </tr>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nutritionixHeader } from "../../utils/nutritionix-header";
import CONSTANTS from "../../utils/constants";

export const fetchNutrients = createAsyncThunk(
  "posts/fetchPosts",
  async (foodString: string) => {
    const { API_URL } = CONSTANTS;
    const requestOptions = {
      timezone: "Africa/Lagos",
      query: JSON.stringify({
        query: foodString,
      }),
    };
    const response = await axios.post(
      `${API_URL}/v2/natural/nutrients`,
      requestOptions,
      {
        headers: nutritionixHeader(),
      }
    );
    return response.data;
  }
);

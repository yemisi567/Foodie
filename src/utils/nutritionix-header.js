import CONSTANTS from "./constants";

export function nutritionixHeader(methodType) {
  const { API_KEY, APP_ID, USER_ID } = CONSTANTS;
  return {
    "x-app-id": `${APP_ID}`,
    "x-app-key": `${API_KEY}`,
    "x-remote-user-id": `${USER_ID}`,
    "Content-Type": "application/json",
  };
}

export const toTitleCase = (str) => {
  return str
    ?.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

import { localStorageKeys } from "../contants/localStorageKeys";
import { getData, saveData } from "./localStorage";

export const loader = () => {
  saveData(
    localStorageKeys.MODE,
    getData(localStorageKeys.MODE) === "light" ? "dark" : "light"
  );
};

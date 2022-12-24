function saveData(key: string, data: string | Record<string, any>) {
  //@ts-ignore
  localStorage.setItem(key, JSON.stringify(data));
}

function getData(key: string) {
  //@ts-ignore
  let result = localStorage.getItem(key);
  if (!result) return;
  return JSON.parse(result);
}

function removeData(key: string) {
  //@ts-ignore
  localStorage.removeItem(key);
}

export { saveData, getData, removeData };

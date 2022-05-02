const spacex = require("spacex-api.js");

export async function GetData(endpoint, id = "") {
  const response = await spacex.getData(endpoint, id);
  return response;
}

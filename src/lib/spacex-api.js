const spacex = require("spacex-api.js");

async function GetData(endpoint, id = "") {
  const response = await spacex.getData(endpoint, id);
  return response;
}

module.exports = {
  GetData,
};

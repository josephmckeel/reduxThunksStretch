const axios = require("axios");

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require("./types");

/* YOUR CODE GOES HERE */

const gotDesserts = (des) => {
  return {
    type: GOT_DESSERTS_DATA,
    des,
  };
};

const addDessert = (des) => {
  return {
    type: NEW_DESSERT_DATA,
    des,
  };
};

const fetchDesserts = () => {};

const postDessert = () => {};

module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };

const getChefs = () => {
  return async (dispatch) => {
    const chefs = await axios.get("/api/chefs").data;
    return dispatch(setChefs(chefs));
  };
};

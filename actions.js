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

const addDessert = (newDes) => {
  return {
    type: NEW_DESSERT_DATA,
    des,
  };
};

const fetchDesserts = () => {
  return (dispatch) => {
    return axios
      .get("/api/desserts")
      .then((res) => {
        res.data;
      })
      .then(({ desserts }) => {
        return dispatch(gotDesserts(desserts));
      });
  };
};

const postDessert = (desObj) => {
  return (dispatch) => {
    return axios
      .post("/api/desserts", desObj)
      .then((res) => {
        res.data;
      })
      .then(({ newDes }) => {
        return dispatch(addDessert(newDes));
      });
  };
};

module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };

const getChefs = () => {
  return async (dispatch) => {
    const chefs = await axios.get("/api/chefs").data;
    return dispatch(setChefs(chefs));
  };
};

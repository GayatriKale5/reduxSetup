import axios from "axios";
import { GET_NAMES } from "../types";

export const createName = formData => dispatch => {
  console.log(formData);
  axios
    .post("http://localhost:3000/name", formData)
    .then(res => console.log("Post request: ", res.data))
    .catch(err => console.log(err));
};

export const get_all_names = () => dispatch => {
  axios
    .get("http://localhost:3000/name")
    .then(res =>
      // console.log("Get request: ", res.data)
      dispatch({
        type: GET_NAMES,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

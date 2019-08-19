import axios from "axios";
import { GET_NAMES } from "../types";

// post
export const createName = formData => dispatch => {
  console.log(formData);
  axios
    .post("http://localhost:3000/name", formData)
    .then(res => console.log("Post request: ", res.data))
    .catch(err => console.log(err));
};

// get
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

// patch
export const updateName = formData => dispatch => {
  // console.log("Patch request formdata: ", formData);
  // axios
  //   .patch(`http://localhost:3000/name/${formData.id}`, formData)
  //   .then(res => console.log("Patch request: ", res.data))
  //   .catch(err => console.log(err));
  axios
    .patch(`http://localhost:3000/name/${formData.id}`, formData)
    .then(res => console.log("Patch request: ", res.data))
    .catch(err => console.log(err));
};

// delete
export const deleteObject = formData => dispatch => {
  console.log("Delete request formdata: ", formData.id);
  axios
    .delete(`http://localhost:3000/name/${formData.id}`)
    .then(res => console.log("Delete request: ", res.status))
    .catch(err => console.log(err));
};
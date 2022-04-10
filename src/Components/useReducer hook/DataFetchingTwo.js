import React, { useReducer, useEffect } from "react";
import axios from "axios";
//Declear initialstate.declear them as properties of single object.
const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_sucess":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "fetch_error":
      return {
        loading: false,
        error: "something went wrong",
        post: {},
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "fetch_sucess", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "fetch_error" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;

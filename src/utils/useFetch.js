import { useReducer, useCallback } from "react";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "IsLoading": {
      return {
        ...initialState,
        isLoading: true,
      };
    }
    case "isSuccess": {
      return {
        ...initialState,
        isSuccess: true,
      };
    }
    case "isError": {
      return {
        ...initialState,
        error: action.error,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const useFetch = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const makeRequest = useCallback(
    async ({
      urlPath,
      method,
      payload,
      headers,
      isFormData,
      // logoutWhenUnauthorized = true,
    }) => {
      const options = {
        method: method ?? "GET",
        body: payload,
        headers: {
          // Authorization: token || '',
          "Content-Type": "application/json",
          ...headers,
        },
      };

      if (isFormData) delete options.headers["Content-Type"];

      dispatch({ type: "IsLoading" });
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/${urlPath}`,
          options
        );
        if (response.ok) {
          dispatch({ type: "isSuccess" });
          return response.json();
        } else {
          const { error, message } = await response.json();
          if ([400, 404].includes(response.status)) {
            dispatch({ type: "isError", error: error || message });
            toast.error(message);
          }
          if (401 === response.status) {
            dispatch({ type: "isError", error: message });
            toast.error(message);
          }
          if (500 === response.status) {
            dispatch({
              type: "isError",
              error: "Oops! something went wrong please try again",
            });
            toast.error("Oops! something went wrong please try again");
          }
          return Promise.reject();
        }
      } catch (e) {
        dispatch({
          type: "isError",
          error: "Oops! something went wrong please try again",
        });
        return Promise.reject();
      }
    },
    []
  );
  return { ...state, makeRequest };
};

export default useFetch;

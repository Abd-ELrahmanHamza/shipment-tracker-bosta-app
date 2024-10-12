import axios from "axios";
export const baseURL = "https://tracking.bosta.co";

const API = axios.create({
  baseURL,
});

export const baseAPI = async (configObj: {
  method: string; // HTTP method (e.g., GET, POST, etc.).
  url: string; // The endpoint URL to which the request will be made.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestConfig?: any; // Optional configuration for request (headers, data, etc.).
}) => {
  const { method, url, requestConfig = {} } = configObj; // Destructure the input config object.
  const ctrl = new AbortController(); // Create an AbortController to allow request cancellation if needed.

  // Prepare the final request object that includes the method, URL, additional configs, and an abort signal.
  const obj = {
    method,
    url,
    ...requestConfig, // Spread the optional requestConfig into the final object.
    signal: ctrl.signal, // Attach the abort signal to the request.
  };

  // Make the API request using axios with the constructed object and wait for the response.
  const res = await API(obj);

  // Return only the data part of the response, assuming the API response follows a standard format.
  return res.data;
};

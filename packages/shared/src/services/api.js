import apisauce from "apisauce";
import apiCalls, { apiCallNames } from "./apiCalls";

// our "constructor"
// http://localhost:8080/ is the address of the spring server
const create = (storage, redirect, baseURL = "http://localhost:8000/") => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {},
    // 10 second timeout...
    timeout: 10240
  });

  api.addAsyncResponseTransform(async response => {
    // console.log(response);
    if (response.status === 401) {
      await storage.remove("access_token");
      redirect && redirect();
    }
  });

  api.addAsyncRequestTransform(async request => {
    // console.log(request);
    const token = await storage.get("access_token");

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
  });

  const calls = Object.keys(apiCalls).map(getApiCalls =>
    apiCalls[getApiCalls](api)
  );
  return {
    ...calls.reduce((a, b) => ({ ...a, ...b }))
  };
};

export default {
  create,
  callNames: apiCallNames
};

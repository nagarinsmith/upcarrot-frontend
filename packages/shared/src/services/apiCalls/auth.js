// Here we will make our api calls regarding authentication
export default function getAuthApiCalls(api) {
  return {
    login: ({ email, password }) =>
      api.post("/login", { username: email, password }),
    register: ({ email, password }) =>
      api.post(`/register?email=${email}&password=${password}`)
  };
}
// here we export each name for each api call - maybe we will generate those
export const callNames = {
  LOGIN: "login",
  REGISTER: "register"
};

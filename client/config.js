const checkConfig = (server) => {
  let config = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "", // Your React app's frontend in production
      };
      break;
    case "local":
      config = {
        baseUrl: "http://localhost:8000", // Your local backend server
      };
      break;
    default:
      throw new Error("Invalid server type");
  }
  return config;
};

export const selectServer = "local"; // Change to "production" when deploying
export const config = checkConfig(selectServer);

const checkConfig = (server) => {
  let config = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://shopping-nu-drab.vercel.app/", // Your React app's frontend in production
      };
      break;
    case "local":
      config = {
        baseUrl: "https://adminshopping.vercel.app/", // Your local backend server
      };
      break;
    default:
      throw new Error("Invalid server type");
  }
  return config;
};

export const selectServer = "production"; // Change to "production" when deploying
export const config = checkConfig(selectServer);

// const checkConfig = (server) => {
//   let config = {};
//   switch (server) {
//     case "production":
//       config = {
//         baseUrl: "https://adminshopping.vercel.app", // Your React app's frontend in production
//       };
//       break;
//     case "local":
//       config = {
//         baseUrl: "http://localhost:8000", // Your local backend server
//       };
//       break;
//     default:
//       throw new Error("Invalid server type");
//   }
//   return config;
// };

// export const selectServer = "production"; // Change to "production" when deploying
// export const config = checkConfig(selectServer);

const checkConfig = (server) => {
  let config = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://adminshopping.vercel.app", // Your React app's backend in production
        allowedOrigin: "https://shopping-nu-drab.vercel.app", // Your production frontend
      };
      break;
    case "local":
      config = {
        baseUrl: "http://localhost:8000", // Your local backend server
        allowedOrigin: "http://localhost:5173", // Your local frontend origin
      };
      break;
    default:
      throw new Error("Invalid server type");
  }
  return config;
};

export const selectServer =
  process.env.NODE_ENV === "production" ? "production" : "local";
export const config = checkConfig(selectServer);

// const checkConfig = (server) => {
//   let config = {};
//   switch (server) {
//     case "production":
//       config = {
//         baseUrl: "https://adminshopping.vercel.app/", // Your React app's frontend in production
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
        baseUrl: "https://shopping-nu-drab.vercel.app/", // Your React app's frontend in production
        apiUrl: "https://adminshopping.vercel.app/api", // Your backend API
      };
      break;
    case "local":
      config = {
        baseUrl: "http://localhost:5173", // Your local React app
        apiUrl: "http://localhost:8000", // Your local backend server
      };
      break;
    default:
      throw new Error("Invalid server type");
  }
  return config;
};

export const selectServer = "local"; // Set to "local" for local development
export const config = checkConfig(selectServer);

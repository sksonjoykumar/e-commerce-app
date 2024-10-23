// const checkConfig = (server) => {
//   let config = {};
//   switch (server) {
//     case "production":
//       config = {
//         baseUrl: "http://localhost:5173", // Your React app's frontend in production
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

// export const selectServer = "local"; // Change to "production" when deploying
// export const config = checkConfig(selectServer);

// config.js

const checkConfig = (server) => {
  let config = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://adminshopping.vercel.app", // Your backend production server
        frontendUrl: "https://shopping-nu-drab.vercel.app", // Your frontend production link
      };
      break;
    case "local":
      config = {
        baseUrl: "http://localhost:8000", // Your local backend server
        frontendUrl: "http://localhost:5173", // Your local React app
      };
      break;
    default:
      throw new Error("Invalid server type");
  }
  return config;
};

// Change selectServer to "production" when deploying
export const selectServer = "local";
export const config = checkConfig(selectServer);

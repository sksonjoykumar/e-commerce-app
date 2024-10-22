
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


const checkLocalServer = async () => {
  try {
    const response = await fetch("http://localhost:8000", { method: "HEAD" });
    if (response.ok) {
      return "local"; // Local server is running
    } else {
      throw new Error("Local server not responding");
    }
  } catch (error) {
    return "production"; // Fallback to production server
  }
};

const checkConfig = (server) => {
  let config = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://adminshopping.vercel.app", // Your hosted backend
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

// Dynamically select server based on local server status
const initConfig = async () => {
  const serverType = await checkLocalServer();
  return checkConfig(serverType);
};

export const config = await initConfig(); // Get config with the correct server

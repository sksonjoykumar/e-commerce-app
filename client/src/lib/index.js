
// export const getData = async (endpoint) => {
//   try {
//     const response = await fetch(endpoint, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Data fetching Error: " + response.statusText);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error while fetching data:", error);
//     throw error;
//   }
// };


import { config } from "./config"; // Import your configuration

export const getData = async (endpoint) => {
  try {
    const url = `${config.apiUrl}${endpoint}`; // Combine base URL and endpoint
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Data fetching Error: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while fetching data:", error);
    throw error;
  }
};

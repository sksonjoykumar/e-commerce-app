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

import { config } from "./config"; // Import the configuration file

export const getData = async (endpoint) => {
  try {
    // Prepend the baseUrl from the config to the endpoint
    const url = `${config.baseUrl}${endpoint}`;

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

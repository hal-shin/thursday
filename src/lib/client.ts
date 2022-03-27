import { API_URL } from "@/config";
import ky from "ky";

export const publicClient = ky.extend({
  prefixUrl: API_URL,
});

// export const privateClient = publicClient.extend({
//   hooks: {
//     beforeRequest: [
//       async () => {
//         const accessToken = getAccessToken();
//
//         if (accessToken) {
//           const { exp } = decodeToken(accessToken);
//           const isAccessTokenExpired = isBefore(
//             // exp is formatted as seconds
//             new Date(exp * 1000),
//             new Date()
//           );
//
//           if (isAccessTokenExpired) {
//             const oldRefreshToken = getRefreshToken();
//             const tokenData = await postRefreshToken(oldRefreshToken);
//             persistToken(tokenData);
//           }
//         }
//       },
//       (request) => {
//         const accessToken = getAccessToken();
//
//         if (accessToken) {
//           request.headers.set("Authorization", `Bearer ${accessToken}`);
//         }
//       },
//     ],
//   },
// });

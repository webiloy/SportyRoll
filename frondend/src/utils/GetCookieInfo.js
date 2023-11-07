import { getCookie } from "./cookies";
import { useJwt } from "react-jwt";
export default function GetCookieInfo() {
  const accessToken = getCookie("access_token") || "";
  const { decodedToken } = useJwt(
    accessToken,
    import.meta.env.ACCESS_TOKEN_SECRET
  );
  return decodedToken;
}

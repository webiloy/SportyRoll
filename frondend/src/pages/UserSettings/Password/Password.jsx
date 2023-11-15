import GetCookieInfo from "../../../utils/GetCookieInfo";
export default function Password() {
  const UserInfo = GetCookieInfo()?.UserInfo;
  return (
    <form className="bg-text h-full rounded-lg w-full p-10">Password</form>
  );
}

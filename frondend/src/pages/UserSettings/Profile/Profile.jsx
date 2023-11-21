import Username from "./Username";
export default function Profile() {
  return (
    <form className="bg-text h-full rounded-md w-full p-10 flex flex-col gap-6">
      <h1 className="font-medium text-2xl">Profile</h1>
      <Username></Username>
    </form>
  );
}

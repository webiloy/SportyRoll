export default function LoadingTemplate() {
  return (
    <li className="animate-pulse flex items-center px-2 gap-2">
      <div className="h-16 w-16 bg-neutral-700 rounded-md"></div>
      <div className="space-y-2 w-full child:bg-neutral-700 child:h-3">
        <div className="rounded w-3/4"></div>
        <div className="rounded w-1/2"></div>
      </div>
    </li>
  );
}

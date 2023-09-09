import { Skeleton } from "./ui/skeleton";

const Spinner = () => {
  return (
    <div className="flex items-center space-x-4 h-96 justify-center">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default Spinner;

import { Skeleton } from "@heroui/react";


const SkeletonFile = () => {
    return (
        <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 shrink-0 rounded-full bg-[#10b981]" />
            <div className="flex-1 space-y-2">
                <Skeleton className="h-2 w-36 rounded-lg bg-[#10b981]" />
                <Skeleton className="h-2 w-24 rounded-lg bg-[#10b981]" />
            </div>
        </div>
    );
};

export default SkeletonFile;
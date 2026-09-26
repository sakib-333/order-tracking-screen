import { Skeleton } from "@/components/ui/skeleton";

export function OrderLoading() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-6">
            <div className="mx-auto w-full max-w-md space-y-6">
                <div className="flex items-center gap-3">
                    <Skeleton className="size-9 rounded-full" />

                    <div className="space-y-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-3 w-24" />
                    </div>
                </div>

                <Skeleton className="h-40 w-full rounded-2xl" />

                <div className="space-y-4">
                    <Skeleton className="h-5 w-36" />

                    <div className="space-y-6">
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                    </div>
                </div>

                <Skeleton className="h-28 w-full rounded-2xl" />

                <Skeleton className="h-11 w-full rounded-lg" />
            </div>
        </main>
    );
}
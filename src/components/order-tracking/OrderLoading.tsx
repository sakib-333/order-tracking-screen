import { Skeleton } from "@/components/ui/skeleton";

export function OrderLoading() {
    return (
        <div className="space-y-4">
            {/* Status Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                    <Skeleton className="size-11 shrink-0 rounded-xl" />

                    <div className="flex-1 space-y-3">
                        <Skeleton className="h-5 w-28" />
                        <Skeleton className="h-6 w-52 max-w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>
                </div>

                <Skeleton className="mt-5 h-16 w-full rounded-xl" />
            </div>

            {/* Timeline */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="space-y-2">
                    <Skeleton className="h-5 w-36" />
                    <Skeleton className="h-3 w-56" />
                </div>

                <div className="mt-6 space-y-5">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-8 w-4/5" />
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-8 w-4/5" />
                    <Skeleton className="h-8 w-2/3" />
                </div>
            </div>

            {/* Product */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Skeleton className="mb-4 h-5 w-32" />

                <div className="flex gap-4">
                    <Skeleton className="size-20 shrink-0 rounded-xl" />

                    <div className="flex-1 space-y-3">
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-3 w-2/3" />
                        <Skeleton className="h-3 w-1/3" />
                    </div>
                </div>
            </div>

            {/* Actions */}
            <Skeleton className="h-11 w-full rounded-xl" />

            {/* Support */}
            <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
    );
}
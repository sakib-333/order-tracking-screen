import { RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

interface OrderErrorProps {
    onRetry?: () => void;
}

export function OrderError({
    onRetry,
}: OrderErrorProps) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-sm text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-red-50">
                    <RefreshCcw className="size-7 text-red-500" />
                </div>

                <h1 className="mt-5 text-lg font-semibold text-slate-900">
                    Something Went Wrong
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    We couldn't load your tracking information.
                    Please try again.
                </p>

                <Button
                    className="mt-5"
                    onClick={onRetry}
                >
                    Try Again
                </Button>
            </div>
        </main>
    );
}
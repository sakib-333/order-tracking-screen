import { PackageSearch } from "lucide-react";

import { Button } from "@/components/ui/button";

export function OrderEmpty() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-sm text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <PackageSearch className="size-7 text-slate-400" />
                </div>

                <h1 className="mt-5 text-lg font-semibold text-slate-900">
                    Order Not Found
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    We couldn't find the order you're looking for.
                    Please check the order number and try again.
                </p>

                <Button className="mt-5">
                    Back to Orders
                </Button>
            </div>
        </main>
    );
}
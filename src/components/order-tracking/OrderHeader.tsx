import { Copy } from "lucide-react";

interface OrderHeaderProps {
    orderId: string;
}

export function OrderHeader({
    orderId,
}: OrderHeaderProps) {
    const handleCopy = async () => {
        await navigator.clipboard.writeText(orderId);
    };

    return (
        <header className="flex items-center justify-between">
            <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                    Order Tracking
                </h1>

                <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-xs text-slate-500 sm:text-sm">
                        Order #{orderId}
                    </span>

                    <button
                        type="button"
                        onClick={handleCopy}
                        className="rounded p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                        aria-label="Copy order number"
                    >
                        <Copy className="size-3.5" />
                    </button>
                </div>
            </div>

            <div className="hidden text-right sm:block">
                <p className="text-xs text-slate-400">
                    Need help?
                </p>

                <p className="text-sm font-medium text-slate-700">
                    Contact support below
                </p>
            </div>
        </header>
    );
}
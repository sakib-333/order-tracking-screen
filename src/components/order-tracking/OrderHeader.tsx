import { ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <header className="mb-1">
            <div className="flex items-center justify-between">
                <Button
                    variant="ghost"
                    size="icon"
                    className="size-9 rounded-full text-slate-600 hover:bg-white"
                >
                    <ArrowLeft className="size-5" />
                </Button>

                <div className="text-center">
                    <h1 className="text-base font-semibold text-slate-900">
                        Order Tracking
                    </h1>

                    <div className="mt-0.5 flex items-center justify-center gap-1">
                        <span className="text-xs text-slate-500">
                            {orderId}
                        </span>

                        <button
                            type="button"
                            onClick={handleCopy}
                            className="rounded p-0.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                            aria-label="Copy order number"
                        >
                            <Copy className="size-3" />
                        </button>
                    </div>
                </div>

                <div className="size-9" />
            </div>
        </header>
    );
}
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderHeaderProps {
    orderId: string;
}

export function OrderHeader({ orderId }: OrderHeaderProps) {
    return (
        <header className="flex items-center gap-3">
            <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
                onClick={() => window.history.back()}
            >
                <ArrowLeft className="size-5" />
            </Button>

            <div>
                <h1 className="text-lg font-semibold text-slate-900">
                    Order Tracking
                </h1>

                <p className="text-xs text-slate-500">
                    Order #{orderId}
                </p>
            </div>
        </header>
    );
}
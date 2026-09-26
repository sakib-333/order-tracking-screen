import { Check, Circle } from "lucide-react";

import type {
    Order,
    OrderStatus,
} from "@/types/order";

interface DeliveryTimelineProps {
    order: Order;
}

const steps: {
    id: OrderStatus;
    label: string;
    description: string;
}[] = [
        {
            id: "processing",
            label: "Order Placed",
            description: "Your order has been received",
        },
        {
            id: "processing",
            label: "Processing",
            description: "We're preparing your order",
        },
        {
            id: "shipped",
            label: "Shipped",
            description: "Your package is with the carrier",
        },
        {
            id: "out-for-delivery",
            label: "Out for Delivery",
            description: "Your package is on the way",
        },
        {
            id: "delivered",
            label: "Delivered",
            description: "Package delivered",
        },
    ];

const statusOrder: OrderStatus[] = [
    "processing",
    "shipped",
    "out-for-delivery",
    "delivered",
];

export function DeliveryTimeline({
    order,
}: DeliveryTimelineProps) {
    const currentIndex = statusOrder.indexOf(
        order.status,
    );

    return (
        <section>
            <h2 className="mb-5 text-base font-semibold text-slate-900">
                Delivery Progress
            </h2>

            <div>
                {steps.map((step, index) => {
                    const stepIndex = statusOrder.indexOf(
                        step.id,
                    );

                    const isCompleted =
                        stepIndex < currentIndex;

                    const isCurrent =
                        stepIndex === currentIndex;

                    const isLast =
                        index === steps.length - 1;

                    return (
                        <div
                            key={`${step.label}-${index}`}
                            className="flex gap-3"
                        >
                            <div className="flex flex-col items-center">
                                <div
                                    className={[
                                        "flex size-8 shrink-0 items-center justify-center rounded-full border",
                                        isCompleted || isCurrent
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-slate-200 bg-white text-slate-400",
                                    ].join(" ")}
                                >
                                    {isCompleted ? (
                                        <Check className="size-4" />
                                    ) : isCurrent ? (
                                        <Circle className="size-3 fill-current" />
                                    ) : (
                                        <Circle className="size-3" />
                                    )}
                                </div>

                                {!isLast && (
                                    <div
                                        className={[
                                            "h-10 w-px",
                                            isCompleted
                                                ? "bg-blue-600"
                                                : "bg-slate-200",
                                        ].join(" ")}
                                    />
                                )}
                            </div>

                            <div className="pb-6">
                                <p
                                    className={[
                                        "text-sm font-medium",
                                        isCompleted || isCurrent
                                            ? "text-slate-900"
                                            : "text-slate-400",
                                    ].join(" ")}
                                >
                                    {step.label}
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {order.trackingState === "tracking-unavailable" && (
                <div className="mt-1 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                    <p className="text-xs leading-5 text-blue-800">
                        Tracking details will become available once
                        your package is handed over to the carrier.
                    </p>
                </div>
            )}

            {order.trackingState === "delayed" && (
                <div className="mt-1 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
                    <p className="text-xs leading-5 text-amber-800">
                        This order is currently delayed. We're
                        working to get it delivered as soon as
                        possible.
                    </p>
                </div>
            )}
        </section>
    );
}
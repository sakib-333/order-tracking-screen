import { Check } from "lucide-react";

import type { OrderStatus } from "@/types/order";

interface DeliveryTimelineProps {
    currentStatus: OrderStatus;
}

const steps = [
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

const statusOrder = [
    "processing",
    "shipped",
    "out-for-delivery",
    "delivered",
];

export function DeliveryTimeline({
    currentStatus,
}: DeliveryTimelineProps) {
    const currentIndex = statusOrder.indexOf(currentStatus);

    return (
        <section>
            <h2 className="mb-5 text-base font-semibold text-slate-900">
                Delivery Progress
            </h2>

            <div>
                {steps.map((step, index) => {
                    const stepStatusIndex = statusOrder.indexOf(
                        step.id,
                    );

                    const isCompleted =
                        stepStatusIndex < currentIndex;

                    const isCurrent =
                        stepStatusIndex === currentIndex;

                    const isLast = index === steps.length - 1;

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
                                    ) : (
                                        <span className="size-2 rounded-full bg-current" />
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
                                        isCurrent || isCompleted
                                            ? "text-slate-900"
                                            : "text-slate-400",
                                    ].join(" ")}
                                >
                                    {step.label}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
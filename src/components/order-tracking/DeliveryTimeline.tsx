import { Check, Circle } from "lucide-react";

import type { Order, OrderStatus } from "@/types/order";

interface DeliveryTimelineProps {
    order: Order;
}

type TimelineStepId =
    | "placed"
    | "processing"
    | "shipped"
    | "out-for-delivery"
    | "delivered";

interface TimelineStep {
    id: TimelineStepId;
    label: string;
    description: string;
}

const steps: TimelineStep[] = [
    {
        id: "placed",
        label: "Order placed",
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
        label: "Out for delivery",
        description: "Your package is on the way",
    },
    {
        id: "delivered",
        label: "Delivered",
        description: "Package delivered",
    },
];

const statusProgress: Record<OrderStatus, number> = {
    processing: 1,
    shipped: 2,
    "out-for-delivery": 3,
    delivered: 4,
};

export function DeliveryTimeline({
    order,
}: DeliveryTimelineProps) {
    const currentProgress =
        statusProgress[order.status];

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
                <h2 className="text-base font-semibold text-slate-900">
                    Delivery progress
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                    Follow your package from order to delivery
                </p>
            </div>

            <div>
                {steps.map((step, index) => {
                    const isCompleted =
                        index < currentProgress;

                    const isCurrent =
                        index === currentProgress;

                    const isLast =
                        index === steps.length - 1;

                    return (
                        <div
                            key={step.id}
                            className="flex gap-3"
                        >
                            <div className="flex w-8 shrink-0 flex-col items-center">
                                <div
                                    className={[
                                        "flex size-8 items-center justify-center rounded-full border-2 transition-colors",
                                        isCompleted || isCurrent
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-slate-200 bg-white text-slate-300",
                                    ].join(" ")}
                                >
                                    {isCompleted ? (
                                        <Check className="size-4" strokeWidth={2.5} />
                                    ) : (
                                        <Circle
                                            className={[
                                                "size-3",
                                                isCurrent
                                                    ? "fill-current"
                                                    : "",
                                            ].join(" ")}
                                        />
                                    )}
                                </div>

                                {!isLast && (
                                    <div
                                        className={[
                                            "my-1 h-10 w-0.5 rounded-full",
                                            isCompleted
                                                ? "bg-blue-600"
                                                : "bg-slate-200",
                                        ].join(" ")}
                                    />
                                )}
                            </div>

                            <div
                                className={[
                                    "min-w-0 flex-1",
                                    !isLast ? "pb-5" : "",
                                ].join(" ")}
                            >
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

            {order.trackingState === "delayed" && (
                <div className="mt-2 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
                    <p className="text-xs font-medium text-amber-800">
                        Delivery update
                    </p>

                    <p className="mt-1 text-xs leading-5 text-amber-700">
                        Your package is still moving through the
                        delivery network, but it has been delayed.
                    </p>
                </div>
            )}

            {order.trackingState ===
                "tracking-unavailable" && (
                    <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <p className="text-xs font-medium text-slate-700">
                            Tracking will appear soon
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            You'll be able to follow your package once
                            it is handed over to the carrier.
                        </p>
                    </div>
                )}
        </section>
    );
}
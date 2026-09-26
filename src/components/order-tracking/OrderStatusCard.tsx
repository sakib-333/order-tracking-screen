import {
    AlertCircle,
    CheckCircle2,
    Clock3,
    Package,
    Truck,
} from "lucide-react";

import type { Order } from "@/types/order";

interface OrderStatusCardProps {
    order: Order;
}

export function OrderStatusCard({
    order,
}: OrderStatusCardProps) {
    const content = {
        normal: {
            icon: Truck,
            iconClass:
                "bg-blue-50 text-blue-600",
            badge:
                "bg-blue-50 text-blue-700",
            status: "Out for delivery",
            title: "Your order is on the way",
            description:
                "Your package is with the delivery driver and should arrive soon.",
        },

        delayed: {
            icon: Clock3,
            iconClass:
                "bg-amber-50 text-amber-600",
            badge:
                "bg-amber-50 text-amber-700",
            status: "Delivery delayed",
            title: "Your order is taking longer",
            description:
                "The estimated delivery date has passed. We're working to get your order delivered as soon as possible.",
        },

        "delivered-not-received": {
            icon: AlertCircle,
            iconClass:
                "bg-red-50 text-red-600",
            badge:
                "bg-red-50 text-red-700",
            status: "Marked as delivered",
            title: "Didn't receive your package?",
            description:
                "Our system shows that this order was delivered. If you haven't received it, you can report the issue.",
        },

        "tracking-unavailable": {
            icon: Package,
            iconClass:
                "bg-slate-100 text-slate-600",
            badge:
                "bg-slate-100 text-slate-700",
            status: "Tracking unavailable",
            title: "We're preparing your order",
            description:
                "Tracking information will appear once your package is handed over to the carrier.",
        },
    };

    const state = content[order.trackingState];

    const Icon = state.icon;

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-5">
                <div className="flex items-start gap-4">
                    <div
                        className={[
                            "flex size-11 shrink-0 items-center justify-center rounded-xl",
                            state.iconClass,
                        ].join(" ")}
                    >
                        <Icon className="size-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                        <span
                            className={[
                                "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold",
                                state.badge,
                            ].join(" ")}
                        >
                            {state.status}
                        </span>

                        <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                            {state.title}
                        </h2>

                        <p className="mt-1.5 text-sm leading-5 text-slate-500">
                            {state.description}
                        </p>
                    </div>
                </div>

                {order.trackingState === "normal" &&
                    order.estimatedDelivery && (
                        <div className="mt-5 rounded-xl bg-slate-50 p-4">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-medium text-slate-500">
                                        Estimated delivery
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-slate-900">
                                        {order.estimatedDelivery}
                                    </p>
                                </div>

                                {order.deliveryTime && (
                                    <div className="text-right">
                                        <p className="text-xs font-medium text-slate-500">
                                            Delivery window
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-slate-900">
                                            {order.deliveryTime}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                {order.trackingState === "delayed" &&
                    order.estimatedDelivery && (
                        <div className="mt-5 rounded-xl bg-amber-50 p-4">
                            <p className="text-xs font-medium text-amber-700">
                                Original delivery date
                            </p>

                            <p className="mt-1 text-sm font-semibold text-amber-900">
                                {order.estimatedDelivery}
                            </p>
                        </div>
                    )}

                {order.trackingState ===
                    "delivered-not-received" &&
                    order.deliveredAt && (
                        <div className="mt-5 flex items-center gap-3 rounded-xl bg-red-50 p-4">
                            <CheckCircle2 className="size-5 shrink-0 text-red-600" />

                            <div>
                                <p className="text-xs font-medium text-red-700">
                                    Delivered
                                </p>

                                <p className="mt-1 text-sm font-semibold text-red-900">
                                    {order.deliveredAt}
                                </p>
                            </div>
                        </div>
                    )}
            </div>
        </section>
    );
}
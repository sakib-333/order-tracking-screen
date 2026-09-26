import {
    AlertTriangle,
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
    switch (order.trackingState) {
        case "delayed":
            return (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-amber-100 p-2">
                            <AlertTriangle className="size-5 text-amber-600" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-amber-900">
                                Delivery Delayed
                            </h2>

                            <p className="mt-1 text-sm text-amber-800">
                                Your order is taking longer than expected.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-xl bg-white/70 p-3">
                        <p className="text-xs text-slate-500">
                            Originally expected
                        </p>

                        <p className="mt-1 font-medium text-slate-900">
                            {order.estimatedDelivery}
                        </p>
                    </div>
                </div>
            );

        case "delivered-not-received":
            return (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-2">
                            <CheckCircle2 className="size-5 text-green-600" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-slate-900">
                                Marked as Delivered
                            </h2>

                            <p className="mt-1 text-sm text-slate-600">
                                Delivered on {order.deliveredAt}.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm font-medium text-slate-900">
                            Didn't receive your package?
                        </p>

                        <p className="mt-1 text-sm text-slate-600">
                            You can report the delivery issue and our support
                            team will help you.
                        </p>
                    </div>
                </div>
            );

        case "tracking-unavailable":
            return (
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-blue-100 p-2">
                            <Package className="size-5 text-blue-600" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-slate-900">
                                Tracking Isn't Available Yet
                            </h2>

                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Your order has been confirmed. Tracking
                                information will appear once the carrier
                                receives your package.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-xl bg-white/70 p-3">
                        <p className="text-xs text-slate-500">
                            Estimated delivery
                        </p>

                        <p className="mt-1 font-medium text-slate-900">
                            {order.estimatedDelivery}
                        </p>
                    </div>
                </div>
            );

        default:
            return (
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-blue-100 p-2">
                            <Truck className="size-5 text-blue-600" />
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                                Current Status
                            </p>

                            <h2 className="mt-1 font-semibold text-slate-900">
                                Out for Delivery
                            </h2>

                            <p className="mt-1 text-sm text-slate-600">
                                Your package is on the way and should arrive
                                today.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/70 p-3">
                        <Clock3 className="size-4 text-blue-600" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Estimated delivery
                            </p>

                            <p className="text-sm font-medium text-slate-900">
                                {order.estimatedDelivery}
                                {order.deliveryTime &&
                                    ` · ${order.deliveryTime}`}
                            </p>
                        </div>
                    </div>
                </div>
            );
    }
}
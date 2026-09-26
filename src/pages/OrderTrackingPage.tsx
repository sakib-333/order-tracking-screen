import { useState } from "react";

import { Button } from "@/components/ui/button";

import { orders } from "@/data/orders";
import type { TrackingState } from "@/types/order";

import { OrderHeader } from "@/components/order-tracking/OrderHeader";
import { OrderStatusCard } from "@/components/order-tracking/OrderStatusCard";
import { DeliveryTimeline } from "@/components/order-tracking/DeliveryTimeline";
import { ProductSummary } from "@/components/order-tracking/ProductSummary";
import { OrderActions } from "@/components/order-tracking/OrderActions";
import { SupportCard } from "@/components/order-tracking/SupportCard";

export function OrderTrackingPage() {
    const [trackingState, setTrackingState] =
        useState<TrackingState>("normal");

    const order = orders[trackingState];

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-6">
            <div className="mx-auto w-full max-w-md">
                {/* Development-only state switcher */}
                <div className="mb-5 rounded-xl border border-dashed border-slate-300 bg-white p-3">
                    <p className="mb-2 text-xs font-medium text-slate-500">
                        Demo State
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Button
                            size="sm"
                            variant={
                                trackingState === "normal"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() =>
                                setTrackingState("normal")
                            }
                        >
                            Normal
                        </Button>

                        <Button
                            size="sm"
                            variant={
                                trackingState === "delayed"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() =>
                                setTrackingState("delayed")
                            }
                        >
                            Delayed
                        </Button>

                        <Button
                            size="sm"
                            variant={
                                trackingState === "delivered-not-received"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() =>
                                setTrackingState(
                                    "delivered-not-received",
                                )
                            }
                        >
                            Not Received
                        </Button>

                        <Button
                            size="sm"
                            variant={
                                trackingState === "tracking-unavailable"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() =>
                                setTrackingState(
                                    "tracking-unavailable",
                                )
                            }
                        >
                            Tracking Unavailable
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    <OrderHeader orderId={order.id} />

                    <OrderStatusCard order={order} />

                    <DeliveryTimeline
                        currentStatus={order.status}
                    />

                    <ProductSummary
                        product={order.product}
                    />

                    <OrderActions order={order} />

                    <SupportCard />
                </div>
            </div>
        </main>
    );
}
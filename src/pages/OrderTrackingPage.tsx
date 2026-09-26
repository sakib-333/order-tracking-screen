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

import { OrderLoading } from "@/components/order-tracking/OrderLoading";
import { OrderEmpty } from "@/components/order-tracking/OrderEmpty";
import { OrderError } from "@/components/order-tracking/OrderError";

type PageState =
    | "success"
    | "loading"
    | "empty"
    | "error";

export function OrderTrackingPage() {
    const [trackingState, setTrackingState] =
        useState<TrackingState>("normal");

    const [pageState, setPageState] =
        useState<PageState>("success");

    const handleTrackingStateChange = (
        nextState: TrackingState,
    ) => {
        if (nextState === trackingState) {
            return;
        }

        setPageState("loading");

        setTimeout(() => {
            setTrackingState(nextState);
            setPageState("success");
        }, 800);
    };

    const order = orders[trackingState];

    if (pageState === "loading") {
        return <OrderLoading />;
    }

    if (pageState === "empty") {
        return <OrderEmpty />;
    }

    if (pageState === "error") {
        return (
            <OrderError
                onRetry={() => setPageState("success")}
            />
        );
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="mx-auto w-full max-w-md px-4 pb-10 pt-5">
                {/* Demo Controls */}
                <div className="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-100 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Demo Scenarios
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 p-3">
                        <Button
                            size="sm"
                            variant={
                                trackingState === "normal"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() =>
                                handleTrackingStateChange("normal")
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
                                handleTrackingStateChange("delayed")
                            }
                        >
                            Delayed
                        </Button>

                        <Button
                            size="sm"
                            variant={
                                trackingState ===
                                    "delivered-not-received"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() =>
                                handleTrackingStateChange(
                                    "delivered-not-received",
                                )
                            }
                        >
                            Not Received
                        </Button>

                        <Button
                            size="sm"
                            variant={
                                trackingState ===
                                    "tracking-unavailable"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() =>
                                handleTrackingStateChange(
                                    "tracking-unavailable",
                                )
                            }
                        >
                            Tracking Unavailable
                        </Button>
                    </div>
                </div>

                {/* Order Tracking */}
                <div className="space-y-4">
                    <OrderHeader orderId={order.id} />

                    <OrderStatusCard order={order} />

                    <DeliveryTimeline order={order} />

                    <ProductSummary product={order.product} />

                    <OrderActions order={order} />

                    <SupportCard />
                </div>
            </div>
        </main>
    );
}
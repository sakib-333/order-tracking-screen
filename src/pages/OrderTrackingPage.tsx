import { useState } from "react";

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

const scenarioTabs: {
    id: TrackingState;
    label: string;
}[] = [
        {
            id: "normal",
            label: "Normal",
        },
        {
            id: "delayed",
            label: "Delayed",
        },
        {
            id: "delivered-not-received",
            label: "Not Received",
        },
        {
            id: "tracking-unavailable",
            label: "No Tracking",
        },
    ];

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

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="mx-auto w-full max-w-md px-3 pb-10 pt-4 sm:px-4">

                {/* Scenario Tabs */}
                <div className="mb-4 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
                    <div className="grid grid-cols-4 gap-1">
                        {scenarioTabs.map((tab) => {
                            const isActive =
                                trackingState === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    disabled={pageState === "loading"}
                                    onClick={() =>
                                        handleTrackingStateChange(tab.id)
                                    }
                                    className={[
                                        "min-w-0 rounded-lg px-1.5 py-2 text-[11px] font-medium transition-all",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
                                        "disabled:pointer-events-none disabled:opacity-50",
                                        isActive
                                            ? "bg-slate-900 text-white shadow-sm"
                                            : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                                    ].join(" ")}
                                >
                                    <span className="block truncate">
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Header */}
                <OrderHeader orderId={order.id} />

                {/* Body */}
                <div className="mt-4">
                    {pageState === "loading" && (
                        <OrderLoading />
                    )}

                    {pageState === "empty" && (
                        <OrderEmpty />
                    )}

                    {pageState === "error" && (
                        <OrderError
                            onRetry={() =>
                                setPageState("success")
                            }
                        />
                    )}

                    {pageState === "success" && (
                        <div className="space-y-4">
                            <OrderStatusCard order={order} />

                            <DeliveryTimeline order={order} />

                            <ProductSummary
                                product={order.product}
                            />

                            <OrderActions order={order} />

                            <SupportCard />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
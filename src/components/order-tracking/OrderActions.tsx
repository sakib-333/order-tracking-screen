import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import type { Order } from "@/types/order";

interface OrderActionsProps {
    order: Order;
}

export function OrderActions({
    order,
}: OrderActionsProps) {
    return (
        <div className="grid gap-3 sm:grid-cols-2">
            <Dialog>
                <DialogTrigger>
                    <Button variant="outline">
                        View Order Details
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Order Details</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 text-sm">
                        <div>
                            <p className="text-xs text-slate-500">
                                Order number
                            </p>

                            <p className="font-medium">
                                #{order.id}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                Product
                            </p>

                            <p className="font-medium">
                                {order.product.name}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                Quantity
                            </p>

                            <p className="font-medium">
                                {order.product.quantity}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                Total
                            </p>

                            <p className="font-medium">
                                ${order.product.price.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {order.trackingState === "delivered-not-received" && (
                <Dialog>
                    <DialogTrigger>
                        <Button variant="destructive">
                            Report Missing Package
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Report Delivery Issue
                            </DialogTitle>
                        </DialogHeader>

                        <p className="text-sm leading-6 text-slate-600">
                            We've received your report. Our support team
                            will help investigate this delivery.
                        </p>

                        <Button className="w-full">
                            Submit Report
                        </Button>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
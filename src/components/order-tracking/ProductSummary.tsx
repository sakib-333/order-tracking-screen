import { Package } from "lucide-react";

import type { OrderProduct } from "@/types/order";

interface ProductSummaryProps {
    product: OrderProduct;
}

export function ProductSummary({
    product,
}: ProductSummaryProps) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
                <Package className="size-4 text-slate-500" />

                <h2 className="text-base font-semibold text-slate-900">
                    Order summary
                </h2>
            </div>

            <div className="flex gap-4">
                <div className="size-20 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="size-full object-cover"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-slate-900">
                        {product.name}
                    </h3>

                    {product.variant && (
                        <p className="mt-1 text-xs text-slate-500">
                            {product.variant}
                        </p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-xs text-slate-500">
                            Qty: {product.quantity}
                        </p>

                        <p className="text-sm font-semibold text-slate-900">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
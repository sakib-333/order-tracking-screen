import type { OrderProduct } from "@/types/order";

interface ProductSummaryProps {
    product: OrderProduct;
}

export function ProductSummary({
    product,
}: ProductSummaryProps) {
    return (
        <section>
            <h2 className="mb-4 text-base font-semibold text-slate-900">
                Order Summary
            </h2>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3">
                <img
                    src={product.image}
                    alt={product.name}
                    className="size-20 rounded-xl bg-slate-100 object-cover"
                />

                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-slate-900">
                        {product.name}
                    </h3>

                    {product.variant && (
                        <p className="mt-1 text-xs text-slate-500">
                            {product.variant}
                        </p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                            Qty: {product.quantity}
                        </span>

                        <span className="text-sm font-semibold text-slate-900">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
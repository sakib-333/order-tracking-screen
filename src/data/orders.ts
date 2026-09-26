import type { Order } from "@/types/order";

export const orders: Record<string, Order> = {
    normal: {
        id: "ORD-29381",
        status: "out-for-delivery",
        trackingState: "normal",

        product: {
            name: "Nike Air Max 270",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            price: 129,
            quantity: 1,
            variant: "Black / Size 42",
        },

        estimatedDelivery: "September 28, 2026",
        deliveryTime: "2:00 PM – 5:00 PM",
    },

    delayed: {
        id: "ORD-29382",
        status: "shipped",
        trackingState: "delayed",

        product: {
            name: "Apple AirPods Pro",
            image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
            price: 249,
            quantity: 1,
            variant: "White",
        },

        estimatedDelivery: "September 25, 2026",
    },

    "delivered-not-received": {
        id: "ORD-29383",
        status: "delivered",
        trackingState: "delivered-not-received",

        product: {
            name: "Samsung Galaxy Watch",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            price: 299,
            quantity: 1,
            variant: "Black",
        },

        deliveredAt: "September 26, 2026 · 2:35 PM",
    },

    "tracking-unavailable": {
        id: "ORD-29384",
        status: "processing",
        trackingState: "tracking-unavailable",

        product: {
            name: "Sony WH-1000XM5",
            image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
            price: 399,
            quantity: 1,
            variant: "Black",
        },

        estimatedDelivery: "September 28–30, 2026",
    },
};
export type OrderStatus =
    | "processing"
    | "shipped"
    | "out-for-delivery"
    | "delivered";

export type TrackingState =
    | "normal"
    | "delayed"
    | "delivered-not-received"
    | "tracking-unavailable";

export interface OrderProduct {
    name: string;
    image: string;
    price: number;
    quantity: number;
    variant?: string;
}

export interface Order {
    id: string;
    status: OrderStatus;
    trackingState: TrackingState;

    product: OrderProduct;

    estimatedDelivery?: string;
    deliveryTime?: string;
    deliveredAt?: string;
}
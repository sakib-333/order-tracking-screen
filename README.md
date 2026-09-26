# Order Tracking Screen

A modern, responsive order tracking experience for an e-commerce application.

This project was built as part of a frontend development assessment. The goal was to improve a basic order status display into a clear, user-friendly tracking experience that communicates delivery progress, current status, estimated delivery, and the appropriate next action.

## Live Demo

> Add your deployed application URL here.

**Live URL:** `https://your-live-url.com`

## Repository

> Add your GitHub repository URL here.

**GitHub:** `https://github.com/your-username/order-tracking-screen`

---

## Overview

The original order tracking experience only displayed basic statuses such as:

* Processing
* Shipped
* Out for Delivery
* Delivered

This implementation provides a more complete tracking experience with:

* Visual delivery progress
* Current order status
* Estimated delivery information
* Product summary
* Order details
* Customer support
* Delivery issue reporting
* Loading, empty, and error states
* Responsive layouts for mobile, tablet, and desktop
* Dedicated handling for delayed and exceptional delivery scenarios

The interface is designed to help users quickly understand **where their order is, what happened, and what they can do next**.

---

## Features

### Order Tracking

The tracking screen provides a visual timeline showing the complete order journey:

```text
Order Placed
     ↓
Processing
     ↓
Shipped
     ↓
Out for Delivery
     ↓
Delivered
```

Completed steps are visually distinguished from the current and upcoming steps.

### Current Order Status

The status card dynamically communicates the current state of the order with:

* Status badge
* Contextual icon
* Short explanation
* Delivery information
* State-specific messaging

### Estimated Delivery

For active orders, the interface displays:

* Estimated delivery date
* Delivery time window when available

### Product Summary

The order summary includes:

* Product image
* Product name
* Variant
* Quantity
* Price

### Order Actions

Users can perform relevant actions such as:

* View order details
* Contact support
* Report a delivery issue

### Support

A dedicated support section gives users a clear way to get help when something goes wrong with their delivery.

---

## Supported Order States

The application supports the following scenarios.

### 1. Normal Order

The order is progressing normally and may be out for delivery.

The UI communicates:

* Current delivery status
* Delivery progress
* Estimated delivery date
* Delivery window

---

### 2. Delayed Order

The estimated delivery date has passed.

The interface communicates:

* That the delivery is delayed
* The original estimated delivery date
* That the package is still moving through the delivery network
* The next available action/support path

This prevents the user from seeing an outdated delivery date without any explanation.

---

### 3. Delivered but Not Received

The system reports the order as delivered, but the customer has not received it.

The UI communicates:

* That the system marked the package as delivered
* Delivery timestamp
* A clear option to report the issue
* A support path for further assistance

---

### 4. Tracking Not Available Yet

The order exists, but tracking information has not been provided by the carrier yet.

Instead of displaying an empty or broken tracking area, the interface explains:

* The order is being prepared
* Tracking information is not available yet
* Tracking will become available after the package is handed to the carrier

---

## UI States

The application also supports common asynchronous states:

### Loading

A skeleton UI is displayed while order information is being loaded.

The main page header remains visible while only the content area transitions into the loading state.

### Empty

An appropriate empty state is shown when no order information is available.

### Error

An error state provides a clear message and retry action when order information cannot be loaded.

---

## Responsive Design

The interface is designed for different screen sizes.

### Mobile

Optimized for approximately:

```text
360px – 430px
```

The layout uses a single-column structure with touch-friendly controls and responsive text wrapping.

### Tablet

The content transitions into a two-column layout where appropriate.

### Desktop

The interface uses a wider layout with:

* Main tracking content
* Secondary order/support information
* Responsive spacing
* Consistent card sizing

The main application container uses:

```text
max-w-7xl
```

to maintain a comfortable reading width on larger screens.

---

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Lucide React
* React Hooks

No backend is required for this assessment. The application currently uses mock/static order data to demonstrate the different tracking scenarios.

---

## Project Structure

```text
src/
├── components/
│   ├── order-tracking/
│   │   ├── DeliveryTimeline.tsx
│   │   ├── OrderActions.tsx
│   │   ├── OrderHeader.tsx
│   │   ├── OrderStatusCard.tsx
│   │   ├── ProductSummary.tsx
│   │   ├── SupportCard.tsx
│   │   ├── OrderLoading.tsx
│   │   ├── OrderEmpty.tsx
│   │   └── OrderError.tsx
│   │
│   └── ui/
│       └── shadcn components
│
├── data/
│   └── orders.ts
│
├── pages/
│   └── OrderTrackingPage.tsx
│
├── types/
│   └── order.ts
│
├── App.tsx
└── main.tsx
```

---

## Design Approach

The design focuses on three primary questions a customer usually has while tracking an order:

1. **Where is my order?**
2. **When will I receive it?**
3. **What should I do if something goes wrong?**

The tracking timeline answers the first question, delivery information answers the second, and contextual actions/support handle the third.

The interface intentionally avoids relying only on color. Status information is also communicated through:

* Labels
* Icons
* Descriptions
* Timeline states
* Contextual messages

This helps make the experience easier to understand at a glance.

---

## Data Model

The application uses a simple TypeScript order model.

An order contains information such as:

```ts
interface Order {
  id: string;
  status: OrderStatus;
  trackingState: TrackingState;
  product: OrderProduct;
  estimatedDelivery?: string;
  deliveryTime?: string;
  deliveredAt?: string;
}
```

Tracking scenarios are represented separately from the normal order status so that exceptional states such as delayed delivery or delivered-but-not-received can be handled without changing the core order lifecycle.

---

## Running Locally

### Prerequisites

Make sure you have:

* Node.js
* npm

installed on your machine.

### Installation

Clone the repository:

```bash
git clone git@github.com:sakib-333/order-tracking-screen.git
```

Navigate to the project:

```bash
cd order-tracking-screen
```

Install dependencies:

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at the local development URL shown by Vite.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Testing Scenarios

The application includes mock data for the following scenarios:

```text
Normal
Delayed
Delivered but Not Received
Tracking Not Available
```

These scenarios can be switched during development to verify the corresponding UI and behavior.

---

## Assessment Requirements Covered

* [x] Modern professional order tracking UI
* [x] Visual delivery progress/timeline
* [x] Current order status
* [x] Estimated delivery information
* [x] Order/product summary
* [x] Customer support
* [x] Loading state
* [x] Empty state
* [x] Error state
* [x] Responsive mobile layout
* [x] Responsive tablet layout
* [x] Responsive desktop layout
* [x] Delayed order scenario
* [x] Delivered but not received scenario
* [x] Tracking unavailable scenario
* [x] Order details interaction
* [x] Contact support interaction
* [x] Delivery issue reporting

---

## Future Improvements

If connected to a real backend, the application could be extended with:

* Real-time carrier tracking
* Live delivery location
* Authentication
* Order history
* Push notifications
* Automatic delivery delay detection
* Carrier tracking integration
* Customer support chat
* Delivery proof/photos
* Address and delivery preference management

---

## Author

**Sakibur Rahman**

Frontend Developer

* GitHub: `sakib-333`
* LinkedIn: `sakibur-rahman`

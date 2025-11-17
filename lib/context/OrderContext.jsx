"use client";
import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderRequests, setOrderRequests] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [viewingItem, setViewingItem] = useState(null);

  const requestOrder = (item) => {
    const existingItem = orderRequests.find((order) => order.id === item.id);
    if (existingItem) {
      setOrderRequests(
        orderRequests.map((order) =>
          order.id === item.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      );
    } else {
      setOrderRequests([...orderRequests, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setOrderRequests(
      orderRequests.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromOrders = (id) => {
    setOrderRequests(orderRequests.filter((item) => item.id !== id));
  };

  const handleViewItem = (item) => {
    setViewingItem(item);
  };

  const handleCloseItemView = () => {
    setViewingItem(null);
  };

  return (
    <OrderContext.Provider
      value={{
        orderRequests,
        showCart,
        setShowCart,
        viewingItem,
        requestOrder,
        updateQuantity,
        removeFromOrders,
        handleViewItem,
        handleCloseItemView,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
}

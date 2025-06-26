'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white rounded-full border-[#303030]">
            <thead className="text-[#303030] font-semibold">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Actions</th>
                <th>Line Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>€{item.price.toFixed(2)}</td>
                  <td className="flex items-center gap-2">
                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => {
                        if (item.quantity <= 1) {
                          removeFromCart(item.id);
                        } else {
                          updateQuantity(item.id, item.quantity - 1);
                        }
                      }}
                    >-</button>
                    {item.quantity}
                    <button className="btn btn-primary btn-xs" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </td>
                  <td>
                    <button className="btn btn-outline btn-xs" onClick={() => removeFromCart(item.id)}>Delete</button>
                  </td>
                  <td>€{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-[#303030] text-right font-bold">
                  Total:
                </td>
                <td className="text-[#303030] font-bold">
                  €
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
      {/* TODO: Add cart table, totals, and item controls */}
    </main>
  );
}
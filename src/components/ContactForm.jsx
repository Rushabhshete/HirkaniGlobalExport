"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getCategories } from "@/data/products";
import { useRFQ } from "@/helper/RFQContext";
import { Trash2, Send } from "lucide-react";

export default function ContactForm() {
  const { rfqItems, isHydrated, updateQuantity, removeFromRFQ, clearRFQ } = useRFQ();
  const [isRfqMode, setIsRfqMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = getCategories();

  // Detect RFQ query parameter safely without Next.js Suspense warnings
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setIsRfqMode(params.get("rfq") === "true");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (isRfqMode && rfqItems.length > 0) {
      toast.success("Bulk RFQ submitted successfully! Our export desk will email your quotes shortly.");
      clearRFQ();
    } else {
      toast.success("Message sent successfully! We will contact you soon.");
    }
    
    setFormData({ name: "", email: "", product: "", quantity: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {isRfqMode && isHydrated && rfqItems.length > 0 ? (
        <div className="border border-border rounded-xl p-5 bg-accent/40 mb-6">
          <h3 className="text-sm font-bold text-foreground mb-4">Requesting Bulk Quotes For:</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {rfqItems.map((item) => (
              <div key={item.slug} className="flex items-center justify-between gap-4 bg-background border border-border p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded bg-accent border border-border flex-shrink-0">
                    <img src={item.image} alt={item.name} className="object-cover h-full w-full" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-foreground truncate">{item.name}</h4>
                    <p className="text-[10px] text-foreground/50">{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.slug, parseFloat(e.target.value) || 0.1)}
                      className="w-16 px-1 py-1 bg-background border border-border rounded text-xs text-center font-bold focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                    <span className="text-xs font-semibold text-foreground/60">{item.unit}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromRFQ(item.slug)}
                    className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-full transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="product" className="block text-sm font-semibold text-foreground mb-2">Product of Interest</label>
            <select
              id="product"
              name="product"
              required={!isRfqMode}
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground appearance-none"
            >
              <option value="" disabled>Select a Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">Quantity Required (MT)</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              placeholder="e.g., 5 MT"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Additional Details</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
          placeholder="Please provide details about packaging size (e.g. 25kg PP bags), shipping terms (FOB/CIF), and port of delivery."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center px-6 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:brightness-110 shadow-md shadow-gold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5 mr-2" />
        {isSubmitting ? "Sending..." : isRfqMode && rfqItems.length > 0 ? "Submit Bulk RFQ Inquiry" : "Send Message"}
      </button>
    </form>
  );
}

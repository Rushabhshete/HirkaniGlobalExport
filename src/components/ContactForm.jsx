"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { Input, Textarea } from "@/helper/contact-page-helper";

export default function ContactForm() {
  const searchParams = useSearchParams();

  const prefilledProduct = searchParams.get("product") || "";
  const prefilledQuantity = searchParams.get("quantity") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    product: prefilledProduct,
    quantity: prefilledQuantity,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledProduct || prefilledQuantity) {
      setFormData((prev) => ({
        ...prev,
        product: prefilledProduct,
        quantity: prefilledQuantity,
      }));
    }
  }, [prefilledProduct, prefilledQuantity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trim all inputs
    const trimmedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value])
    );
    setFormData(trimmedData);

    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate submission delay
    setTimeout(() => {
      toast.success(
        "Thank you for your inquiry! We will contact you within 24 hours."
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        country: "",
        phone: "",
        product: "",
        quantity: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="lg:col-span-2 animate-fade-up will-animate">
      <form
        onSubmit={handleSubmit}
        className="glass glass-thick p-8 rounded-2xl space-y-6"
      >
        {/* Name / Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email Address *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company / Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        {/* Phone / Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            label="Product Interest"
            name="product"
            value={formData.product}
            onChange={handleChange}
          />
        </div>

        {/* Quantity */}
        <Input
          label="Estimated Quantity (kg / units per month)"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="e.g. 100 kg, 500 units"
        />

        {/* Message */}
        <Textarea
          label="Message *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full inline-flex items-center justify-center
            px-6 py-3 rounded-md
            font-semibold
            text-white
            bg-gradient-brand
            hover:brightness-110
            disabled:opacity-50 disabled:cursor-not-allowed
            transition
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-ring
          "
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}

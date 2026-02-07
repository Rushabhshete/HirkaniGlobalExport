"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
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

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

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
  };

  return (
    <div className="lg:col-span-2">
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <Input
          label="Estimated Quantity (kg/units per month)"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="e.g., 100 kg, 500 units"
        />

        <Textarea
          label="Message *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-600 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition-colors focus:ring-2 focus:ring-orange-500"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}

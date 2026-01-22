import { useState } from "react";

// shadcn / Radix Select components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";
import CustomSpinner from "./CustomSpinner";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    hp_field: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error"

  // Handle normal inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Select (Radix)
  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Added honeypot to prevent spam emailing
    if (formData.hp_field) {
        // Bot detection! Ignore submission
      setLoading(false);
      return;
    }

    // Domain restriction: only allow company emails
    const allowedDomain = "gilbertconstructions.com";
    if (!formData.email.endsWith(`@${allowedDomain}`)) {
      setStatus("error");
      setLoading(false);
      return;
    }

    // Form Validation
    if (!formData.fullname || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setStatus("error");
      setLoading(false);
      return;
    }

    // TODO: Add HTML message
    //Build HTML formatted message
    const htmlMessage = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${formData.fullname}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Service:</strong> ${formData.service}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message}</p>
    <hr />
    <small>Sent via Gilbert Constructions Website Contact Form</small>
    `;

    try {
      const response = await fetch("https://formspree.io/f/xreevekb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Force custom spinner to be visible for at least 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (response.ok) {
        setStatus("success");

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);

        // Reset form
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =================== Form =================== */}
      <form
        className={`flex flex-col ${
          status === "success" ? "pointer-events-none opacity-70" : ""
        }`}
        onSubmit={handleSubmit}
      >
        {/* Inputs */}
        <div className="flex flex-col gap-[20px] mb-[20px]">
          <Input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <Input
            type="text"
            name="hp_field"
            value={formData.hp_field}
            onChange={handleChange}
            className="hidden"
          />

          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="flex flex-col xl:flex-row gap-[20px]">
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <Select value={formData.service} onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full rounded-none h-[54px]">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="renovation">Renovation</SelectItem>
                  <SelectItem value="restoration">Restoration</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-6">
          <Textarea
            className="h-[180px] resize-none rounded-none"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Submit button */}
          <Button
            type="submit"
            text={"Send Message"}
            disabled={loading}
            aria-busy={loading}
            className="flex items-center justify-center gap-2"
          />
        </div>
      </form>

      {/* =================== Overlay =================== */}
      {(loading || status === "success") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          {loading && (
            <div className="bg-white p-6 rounded-lg flex flex-col items-center gap-4">
              <CustomSpinner />
              <p className="text-sm text-gray-600">Sending message…</p>
            </div>
          )}

          {status === "success" && (
            <div className="bg-white p-8 rounded-lg text-center animate-fade-in">
              <h2 className="text-lg font-semibold text-green-600">
                Message sent successfully
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Thank you for your message. We will get back to you soon.
              </p>
            </div>
          )}
        </div>
      )}

      {/* =================== Error message =================== */}
      {status === "error" && (
        <div className="mt-6 p-6 bg-red-100 border border-red-200 rounded-lg animate-fade-in">
          <h4 className="text-red-700 font-semibold text-lg mb-1">
            Error Sending Message
          </h4>
          <p className="text-red-600">
            Something went wrong while sending your message. Please refresh the
            page or try again later in a moment.
          </p>
        </div>
      )}
    </>
  );
};

export default Form;

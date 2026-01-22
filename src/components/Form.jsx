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

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
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

    try {
      const response = await fetch(
        "https://formspree.io/f/xreevekb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
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

        <Button type="submit" text={loading ? "Sending..." : "Send Message"} />

        {status === "success" && (
          <p className="text-green-600 font-semibold">
            Your message has been sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 font-semibold">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
"use client";
import { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "", contact: "" }); // Reset form
      } else {
        alert("Error sending email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </label>
        <label className="block mb-2">
          Contact:
          <input
            type="Contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </label>
        <label className="block mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {success && (
        <p className="mt-4 text-green-500">Email sent successfully!</p>
      )}
    </div>
  );
};

export default FormPage;

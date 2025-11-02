export const validateForm = (formData) => {
  const errors = {};
  if (!formData.name.trim()) errors.name = "Recipient name is required";
  if (!formData.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(formData.email))
    errors.email = "Invalid email format";
  if (!formData.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, "")))
    errors.phone = "Invalid phone number";
  if (!formData.message.trim()) errors.message = "Message is required";
  return errors;
};

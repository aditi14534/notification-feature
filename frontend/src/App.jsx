import React from "react";
import NotificationForm from "./components/NotificationForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NotificationForm />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

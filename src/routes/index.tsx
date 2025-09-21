import { Routes, Route } from "react-router-dom";
import { HomePage, ContactPage, NotFoundPage } from "../pages";
import TermAndCondition from "../pages/TermAndCondition";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms-and-conditions" element={<TermAndCondition />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

// src/lib/reportApi.ts
import api from "./api";

// Updated to include all fields
export const submitReport = async (data: {
  description: string;
  location: string;
  category: string;
  urgency: string;
  landmark: string;
}) => {
  const res = await api.post("/reports", data);
  return res.data;
};

export const getMyReports = async () => {
  const res = await api.get("/reports");
  return res.data;
};

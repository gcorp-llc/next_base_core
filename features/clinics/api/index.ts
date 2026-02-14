import { api } from "@/lib/api-client";
import { Clinic } from "../types";

export const clinicsApi = {
  getClinics: () => api.get<Clinic[]>("/api/clinics"),
  getClinic: (id: string) => api.get<Clinic>(`/api/clinics/${id}`),
  createClinic: (data: Partial<Clinic>) => api.post<Clinic>("/api/clinics", data),
  updateClinic: (id: string, data: Partial<Clinic>) => api.patch<Clinic>(`/api/clinics/${id}`, data),
  deleteClinic: (id: string) => api.delete(`/api/clinics/${id}`),
};

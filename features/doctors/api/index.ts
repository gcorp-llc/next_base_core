import { api } from "@/lib/api-client";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image?: string;
}

export const doctorsApi = {
  getDoctors: (filters?: any) => api.get<Doctor[]>("/api/doctors"),
  getDoctor: (id: string) => api.get<Doctor>(`/api/doctors/${id}`),
};

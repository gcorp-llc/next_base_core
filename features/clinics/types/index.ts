export interface WorkingHour {
  day: string;
  shifts: {
    start: string;
    end: string;
  }[];
  isOpen: boolean;
}

export interface Clinic {
  id: string;
  ownerId: string;
  name: string;
  type: 'clinic' | 'office' | 'hospital';
  logoUrl?: string;
  address: string;
  location?: {
    lat: number;
    lng: number;
  };
  phones: {
    number: string;
    isActive: boolean;
  }[];
  workingHours: WorkingHour[];
  createdAt: Date;
}

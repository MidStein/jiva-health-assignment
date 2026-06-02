export interface User {
  id: number;
  name: string;
  role: "PATIENT" | "DOCTOR" | "NURSE";
  status: "ACTIVE" | "INACTIVE";
  joinedDate: Date;
  lastActive: Date;
  appointmentsCount: number;
  prime: boolean;
  email: string;
  phoneCode: number;
  phoneNumber: string;
}

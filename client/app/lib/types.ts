export interface User {
  id: number;
  name: string;
  role: "DOCTOR" | "NURSE" | "PATIENT";
  status: "ACTIVE" | "INACTIVE";
  joinedDate: Date;
  lastActive: Date;
  appointmentsCount: number;
  prime: boolean;
  email: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
  dob: Date;
}

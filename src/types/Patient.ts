import type { User } from "./User";

export type Patient = {
    user: User;
    emergencyPhone?: string;
    patientAddress?: string;
    patientBloodGroup?: string; 
};

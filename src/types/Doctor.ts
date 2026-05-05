import type { User } from "./User";

export type Doctor = {
    user: User;
    doctorDepartment?: string;
    doctorAvailable?: boolean;
    doctorLicenceNo?: string;
    doctorQualification?: string;
    doctorSpecialization?: string;
    doctorAlternativePhone?: string;
};

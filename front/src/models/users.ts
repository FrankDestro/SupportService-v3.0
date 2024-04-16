import { DepartmentDTO } from "./department";
import { RoleDTO } from "./roles";

export type UserDTO = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    status: string,
    contactNumber: string,
    department : DepartmentDTO;
    imgProfile: string,
    createdAt: string,
    roles : RoleDTO[],
    failedLoginAttempts : number;
    createdByUserName: string,
}

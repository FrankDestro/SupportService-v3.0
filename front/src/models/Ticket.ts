import { AnnotationsDTO } from "./annotations"
import { AttachmentsDTO } from "./attachments"
import { RequesterDTO } from "./requester"
import { TechnicianDTO } from "./techinician"

export type TicketDTO = {
    id: number,
    subject: string,
    description: string,
    priority:string,
    typeRequest: string,
    categoryProblem: string,
    registrationDate: string,
    dueDate: string,
    statusTicket: string,
    completionDate: string,
    request: RequesterDTO,
    technician : TechnicianDTO
    annotations : AnnotationsDTO[],
    attachments : AttachmentsDTO[]
}
export class Task {
    id?: string;
    title: string;
    responsible: string;
    dueDate: string;
    status: Status;
}

export enum Status {
    new = 'new',
    in_progress = 'in progress',
    done = 'done'
}
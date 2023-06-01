export class Doctor {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public specialization: string,
        public residents: string,
        public uid?: string
    ) {} 

    [key: string]: any;
}


export class Resident {
    constructor(
        public firstName: string,
        public lastName: string,
        public dateOfBirth: string,
        public gender: string,
        public emergencyContact: string,
        public medicalHistory: string,
        public allergies: string,
        public medications: [string],
        public roomNumber: string,
        public status: string,
        public key: string,
        public user: string,
        public uid?: string
    ) {} 

    [key: string]: any;
}


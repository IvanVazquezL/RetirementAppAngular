export class Relative {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber : string,
        public residentId: string,
        public uid?: string
    ) {} 

    [key: string]: any;
}


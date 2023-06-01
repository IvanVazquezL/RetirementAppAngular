export class User {
    constructor(
        public email     : string,
        public password? : string,
        public role?     : string,
        public uid?      : string
    ) {} 

    [key: string]: any;
}
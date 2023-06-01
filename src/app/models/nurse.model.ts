export class Nurse {
    constructor(
        public firstName    : string,
        public lastName     : string,
        public email        : string,
        public phoneNumber  : string,
        public shift        : string,
        public residents    : string,
        public uid?         : string
    ) {} 

    [key: string]: any;
}

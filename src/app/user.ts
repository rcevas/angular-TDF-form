export class User {
    constructor(
        public userName: string,
        public userEmail: string,
        public userPhone: number,
        public topic: string,
        public timePreference: string,
        public offers: boolean
    ) {}
}

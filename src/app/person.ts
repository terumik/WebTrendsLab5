export class Person {
    id:number;
    firstName:string;
    lastName:string;
    dateOfBirth: Date;

    constructor(
        id: number,
        firstName: string,
        lastName:string,
        dateOfBirth: Date,
    ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getAge():number{
        var ageDifMs = Date.now() - this.dateOfBirth.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getLocalDate():Date {

        let offset = this.dateOfBirth.getTimezoneOffset() * 60 * 1000; // diff in ms
        let msDate = this.dateOfBirth.valueOf(); // UTC date in ms
        let localDate = new Date(msDate+offset);
        
        return localDate;
    }
}

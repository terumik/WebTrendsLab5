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
}

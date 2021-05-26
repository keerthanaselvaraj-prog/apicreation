import { IsEmail, IsDate, IsString, Length } from 'class-validator';

export class CreateUserDto {
   @Length(0,20)
   readonly name:string;
   @IsDate()
   readonly dob: Date;
   @IsEmail()
   readonly email:string;
}




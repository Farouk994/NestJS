import { IsInt, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  content: number;
  @IsString()
  school: string;
}

// Class-Transformer is used to take in a plain json file and turn it into
// an instance of the dto provided that has all the validation information attached

// Class-Validator is used to taking that instance and validating and using info from the validation
// result


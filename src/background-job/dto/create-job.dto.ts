import { IsNotEmpty } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  reportName: string;
}

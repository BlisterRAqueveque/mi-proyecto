import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PaginatorDto {
  @IsNumber()
  @Type(() => Number)
  limit: number;
}

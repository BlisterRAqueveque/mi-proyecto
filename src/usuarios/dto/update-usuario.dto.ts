import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  id: number;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  fecha_eliminado?: Date;
}

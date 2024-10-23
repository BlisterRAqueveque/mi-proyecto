import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsEmail()
  correo: string;

  @IsString()
  @IsOptional()
  nombre?: string;
  
  @IsString()
  @IsOptional()
  apellido?: string;
}

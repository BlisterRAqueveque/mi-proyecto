import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

export class CreatePagoDto {
  n_factura: string;
  usuario: CreateUsuarioDto;
  usuarioId?: number;
}

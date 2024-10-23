import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { IsNotEmpty } from 'class-validator';

@Injectable()
// Implementamos OnModuleInit
export class UsuariosService extends PrismaClient implements OnModuleInit {
  // Mejora los console.log
  private readonly logger = new Logger('USUARIOS');
  // Método heredado de la interfaz OnModuleInit
  async onModuleInit() {
    // Nos conectamos a la base de datos
    // Al extender esta clase de prisma client, tenemos acceso a todos sus métodos
    await this.$connect();
    this.logger.log('Conectado a la base de datos');
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.user.create({
      data: createUsuarioDto,
    });
  }
  // RESPONSABILIDAD ÚNICA
  findAll() {
    return this.user.findMany({ where: { fecha_eliminado: null } });
  }

  //? Trae una sola entidad
  async findOne(id: number, getDeletes?: boolean) {
    const where = { id, fecha_eliminado: null };
    if (getDeletes) delete where['fecha_eliminado'];
    console.log(where);
    const usuario = await this.user.findFirst({
      where,
      include: { pagos: true },
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: Partial<UpdateUsuarioDto>,
    getDeletes?: boolean,
  ) {
    await this.findOne(id, getDeletes);

    return this.user.update({ where: { id }, data: updateUsuarioDto });
  }

  async remove(id: number) {
    await this.update(id, { fecha_eliminado: new Date() });
    return `El usuario #${id} se eliminó con éxito.`;
  }

  async restore(id: number) {
    const usuario = await this.update(id, { fecha_eliminado: null }, true);
    return usuario;
  }
}

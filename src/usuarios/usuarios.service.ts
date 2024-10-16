import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

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
    return this.user.findMany();
  }

  async findOne(id: number) {
    const usuario = await this.user.findFirst({
      where: { id },
      include: { pagos: true },
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id);

    return this.user.update({ where: { id }, data: updateUsuarioDto });
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}

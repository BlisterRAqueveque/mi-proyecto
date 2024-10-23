import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@Injectable()
export class PagosService {
  constructor() {}

  create(createPagoDto: CreatePagoDto) {}

  findAll() {}

  findOne(id: number) {}

  async update(id: number, updatePagoDto: UpdatePagoDto) {
    const pago = await this.findOne(id);
  }

  async remove(id: number) {
    const pago = await this.findOne(id);
  }
}

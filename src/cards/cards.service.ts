import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  async create(createCardDto: CreateCardDto) {
    return await this.prisma.card.create({data: createCardDto});
  }

  async findAll() {
    return await this.prisma.card.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.card.findUnique({where: {id}});
  }

  async update(id: number, updatecardDto: UpdateCardDto) {
    return await this.prisma.card.update({where: {id}, data: updatecardDto});
  }

  async remove(id: number) {
    return await this.prisma.card.delete({where: {id}})
  }
}

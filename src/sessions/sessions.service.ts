import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionsService {
  
  constructor(private prisma: PrismaService) {}

  async create(createSessionDto: CreateSessionDto) {
    return await this.prisma.session.create({data: createSessionDto});
  }

  async findAll() {
    return await this.prisma.session.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.session.findUnique({where: {id}});
  }

  async update(id: number, updateSessionDto: UpdateSessionDto) {
    return await this.prisma.session.update({where: {id}, data: updateSessionDto});
  }

  async remove(id: number) {
    return await this.prisma.session.delete({where: {id}})
  }
}

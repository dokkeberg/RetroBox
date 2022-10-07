import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {

  constructor(private prisma: PrismaService) {}

  async create(createTeamDto: CreateTeamDto) {
    return await this.prisma.team.create({data: createTeamDto});
  }

  async findAll() {
    return await this.prisma.team.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.team.findUnique({where: {id}});
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    return await this.prisma.team.update({where: {id}, data: updateTeamDto});
  }

  async remove(id: number) {
    return await this.prisma.team.delete({where: {id}});
  }
}

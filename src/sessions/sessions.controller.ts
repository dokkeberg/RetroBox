import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('sessions')
@ApiTags('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  async create(@Body() createSessionDto: CreateSessionDto) {
    return await this.sessionsService.create(createSessionDto);
  }

  @Get()
  async findAll() {
    return await this.sessionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sessionsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return await this.sessionsService.update(+id, updateSessionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sessionsService.remove(+id);
  }
}

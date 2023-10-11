import { Injectable } from '@nestjs/common';
// import { CreateListDto } from './dto/create-list.dto';
// import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
  ) {}

  // create(createListDto: CreateListDto) {
  //   return 'This action adds a new list';
  // }

  async findAll() {
    return await this.listRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} list`;
  // }

  // update(id: number, updateListDto: UpdateListDto) {
  //   return `This action updates a #${id} list`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} list`;
  // }
}

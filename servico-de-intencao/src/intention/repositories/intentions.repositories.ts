import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../src/modules/prisma';
import { CreateIntentionDto } from '../../../src/intention/dto/create-intention.dto';

@Injectable()
export class IntentionRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateIntentionDto){
    const { name, products, address } = data;
 
    try{
      return await this.prisma.intention.create({
        data: {
          name,       
          Products: {
            createMany: {
              data: products
            } 
          },
          address: {
            create: address
          },
        },
        include:
        {
          Products: true,
          address: true
        }
      });
    } catch (error) {
      console.error('Erro ao buscar as intenções:', error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.intention.findMany({
        include: 
          { 
            address: true,
            Products: true
          },
      });
    } catch (error) {
      console.error('Erro ao buscar as intenções:', error);
    }
  }
  
  async findOne(id: number) {
    return await this.prisma.intention.findUnique({
      where: { id },
      include: {
        address: true,
        Products: true,
      },
    });
  }

}

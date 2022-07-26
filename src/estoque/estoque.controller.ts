import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post()
  create(@Body() novoEstoque: CreateEstoqueDto) {
    return this.estoqueService.create(novoEstoque);
  }

  @Get('/produto/:produtoId')
  findByProductId(@Param('produtoId') id: string) {
    return this.estoqueService.findByProductId(+id);
  }
  
  @Get()
  findAll(@Param() id: string) {
    return this.estoqueService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import ProdutoServico from 'src/produtoServico/ProdutoServico';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { Estoque } from './entities/estoque.entity';
import repositorio from './estoque.repo'

@Injectable()
export class EstoqueService {

  async create(novoEstoque: CreateEstoqueDto): Promise<Estoque> {

    const verificaId = await ProdutoServico.verificaId(novoEstoque.idProduto);
    if(!verificaId) throw new BadRequestException('id-product do not exist');

    const id = repositorio.newId();
    const newEstoque = {
      id, 
      ...novoEstoque
    }
    repositorio.estoqueCadastrados.push(newEstoque);
    return newEstoque;
  }

  findOne(id:number): Estoque {
    const search = repositorio.estoqueCadastrados.find((e) => e.id == id);
    if (search) return search;
    throw new BadRequestException('not-found');
  }

  findByProductId(id:number): Estoque[] {
    const search = repositorio.estoqueCadastrados.filter((e) => e.idProduto == id);
    if (search) return search;
    throw new BadRequestException('not-found');
  }

  findAll(): Estoque[] {
    if(repositorio.estoqueCadastrados.length==0) throw new BadRequestException('not found');
    return repositorio.estoqueCadastrados;
  }

  update(id: number, updateEstoqueDto: CreateEstoqueDto) {
    return `This action updates a #${id} estoque`;
  }

  remove(id: number) {
    if (this.findOne(id)) {
      const newProducts = repositorio.estoqueCadastrados.filter(
        (e) => e.id != id,
      );
      repositorio.estoqueCadastrados = newProducts;
      return;
    }
    throw new BadRequestException('not-found');
  }
}

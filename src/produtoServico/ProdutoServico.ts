import { BadRequestException, Injectable } from "@nestjs/common";
import axios from "axios";

export class ProdutoServico{
    public async verificaId(idProduto: number): Promise<any>{
        try{
            const produto = await axios.get(`http://localhost:3000/product/${idProduto}`);
            if (produto) return true;
            return false;
        }catch(err){
            return false;
        }
    }
}

export default new ProdutoServico()
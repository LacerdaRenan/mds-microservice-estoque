import { Estoque } from "./entities/estoque.entity";

class database{
    private idAvailable = 1;
    public estoqueCadastrados: Estoque[] = [];
    public newId():number {
        return this.idAvailable++;
    }
}

export default new database();
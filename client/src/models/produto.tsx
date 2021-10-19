export default class Produto {
    Id?: number;
    CodigoBarra: string;
    Descricao: string;
    Preco: number;

    constructor(id: number, codigoBarra: string, descricao: string, preco: number) {
        this.Id = id;
        this.CodigoBarra = codigoBarra;
        this.Descricao = descricao;
        this.Preco = preco;
    } 
}
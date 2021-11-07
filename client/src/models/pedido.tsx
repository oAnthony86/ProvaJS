export default class Produto {
    id?: number;
    codigoBarra: string;
    descricao: string;
    preco: number;

    constructor(id: number, codigoBarra: string, descricao: string, preco: number) {
        this.id = id;
        this.codigoBarra = codigoBarra;
        this.descricao = descricao;
        this.preco = preco;
    }
}

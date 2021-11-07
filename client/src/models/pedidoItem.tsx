import Produto from './produto';

export default class PedidoItem {
    id?: number;
    produtoId: number;
    quantidade: number;
    valorUnitario: number;
    produto: Produto;

    constructor(id: number, produtoId: number, quantidade: number, valorUnitario: number, produto: Produto) {
        this.id = id;
        this.produtoId = produtoId;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
        this.produto = produto;
    }

}

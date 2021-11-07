import Cliente from './cliente';
import Transportadora from './transportadora';
import PedidoItem from './pedidoItem';
export default class Pedido {
    id?: number;
    clienteId: number;
    transportadoraId: number;
    dataEmissao: string;
    dataEntrega: string;
    valorTotal: number;
    cliente?: Cliente;
    transportadora?: Transportadora;
    pedidoItem: Array<PedidoItem>;

    constructor(id: number, clienteId: number, transportadoraId: number, dataEmissao: string, dataEntrega: string, valorTotal: number, cliente: Cliente, transportadora: Transportadora, pedidoItem: Array<PedidoItem>) {
        this.id = id;
        this.clienteId = clienteId;
        this.transportadoraId = transportadoraId;
        this.dataEmissao = dataEmissao;
        this.dataEntrega = dataEntrega;
        this.valorTotal = valorTotal;
        this.cliente = cliente;
        this.transportadora = transportadora;
        this.pedidoItem = pedidoItem;
    }

}

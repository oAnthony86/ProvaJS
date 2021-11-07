export default class Transportadora {
    id?: number;
    cnpj: string;
    descricao: string;
    cidade: string;
    estado: string;

    constructor(id: number, cnpj: string, descricao: string, cidade: string, estado: string) {
        this.id = id;
        this.cnpj = cnpj;
        this.descricao = descricao;
        this.cidade = cidade;
        this.estado = estado;
    }
}

export default class Transportadora {
    Id?: number;
    Cnpj: string;
    Descricao: string;
    Cidade: string;
    Estado: string;

    constructor(id: number, cnpj: string, descricao: string, cidade: string, estado: string) {
        this.Id = id;
        this.Cnpj = cnpj;
        this.Descricao = descricao;
        this.Cidade = cidade;
        this.Estado = estado;
    } 
}
export default class Cliente {
    Id?: number;
    NomeCompleto: string;
    Cpf: string;
    DataNascimento: string;
    Sexo: string;
    Cidade: string;
    Estado: string;

    constructor(id: number, nomeCompleto: string, cpf: string, dataNascimento: string, sexo: string, cidade: string, estado: string) {
        this.Id = id;
        this.NomeCompleto = nomeCompleto;
        this.Cpf = cpf;
        this.DataNascimento = dataNascimento;
        this.Sexo = sexo;
        this.Cidade = cidade;
        this.Estado = estado;
    } 
}
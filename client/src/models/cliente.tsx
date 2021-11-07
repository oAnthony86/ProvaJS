export default class Cliente {
    id?: number;
    nomeCompleto: string;
    cpf: string;
    dataNascimento: string;
    sexo: string;
    cidade: string;
    estado: string;

    constructor(id: number, nomeCompleto: string, cpf: string, dataNascimento: string, sexo: string, cidade: string, estado: string) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cidade = cidade;
        this.estado = estado;
    }
}

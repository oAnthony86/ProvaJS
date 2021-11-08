import { Component } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Button } from '../common/components/form';

import AuthService from "../service/auth.service";

interface RouterProps {
    history: string;
}

type Props = RouteComponentProps<RouterProps>;

type State = {
    name: string,
    email: string,
    password: string
};

export default class Register extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);

        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }

    handleRegister(name: string, email: string, password: string): void {

        AuthService.register(name, email, password).then(
            () => {
                this.props.history.push("/");
                window.location.reload();
            },
            error => {
                console.log("Falha ao realizar cadastro");
                console.log(error);
            }
        );
    }

    render() {
        let { name, email, password } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h1 className="p-3 text-center">Cadastro</h1>
                        <div className="card card-container p-3">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Nome"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            name = e.target.value;
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="email@mail.com"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            email = e.target.value;
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Senha"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            password = e.target.value;
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="row">
                                        <Button
                                            label="Cadastrar"
                                            className="mt-3 btn btn-success btn-block"
                                            onClick={() => this.handleRegister(name, email, password)}
                                        />
                                    </div>
                                    <div className="row">
                                        <Link to={'./login'} className="text-center mt-3">Entrar</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

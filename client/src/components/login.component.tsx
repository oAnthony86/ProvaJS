import { Component } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Button } from '../common/components/form';

import AuthService from "../service/auth.service";

interface RouterProps {
    history: string;
}

type Props = RouteComponentProps<RouterProps>;

type State = {
    email: string,
    password: string
};

export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleLogin(email: string, password: string): void {

        AuthService.login(email, password).then(
            () => {
                this.props.history.push("/");
                window.location.reload();
            },
            error => {
                console.log("Falha ao realizar login");
                console.log(error);
            }
        );
    }

    render() {
        let { email, password } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h1 className="p-3 text-center">Login</h1>
                        <div className="card card-container p-3">
                            <form>
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
                                            label="Login"
                                            className="mt-3 btn btn-success btn-block"
                                            onClick={() => this.handleLogin(email, password)}
                                        />
                                    </div>
                                    <div className="row">
                                        <Link to={'./register'} className="text-center mt-3">Cadastrar-se</Link>
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

import * as React from 'react';

interface IProps {
}
interface IState {
}

class Home extends React.Component<IProps, IState> {


    public componentDidMount() {

    }

    public render(): React.ReactNode {
        return (
            <div>
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">Cliente da aplicação</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Projeto de Desenvolvimento Web III, voltado ao uso de uma API Laravel com FrontEnd em JS</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
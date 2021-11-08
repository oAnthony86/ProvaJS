import * as React from 'react';
import { Redirect } from 'react-router';
import AuthService from '../service/auth.service';

interface IProps {
}
interface IState {
}

class Logoff extends React.Component<IProps, IState> {
    public componentDidMount() {
        AuthService.logout();
        <Redirect to={{pathname: '/'}}/>
    }

    render() {
        return (<></>);
    }
}
export default Logoff;

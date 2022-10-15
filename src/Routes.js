import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Homepage from 'components/Homepage/Homepage';
import App from 'App';
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";


const APP_ID = "zNtLCYLsBhJmOxfTNfoWTDqdIQHmOFlkR5cEpMxa";
const SERVER_URL = "https://w5qj3sajyxfl.usemoralis.com:2053/server";

const Routes = () => {
    const isServerInfo = APP_ID && SERVER_URL ? true : false;
        return (
            <div>
                <Switch>
                    <Route path="/app">
                    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
                        <MoralisDappProvider>
                            <App isServerInfo />
                        </MoralisDappProvider>
                    </MoralisProvider>
                    </Route>
                    <Route path="/" component={Homepage}/>
                </Switch>
            </div>
        )
    }


export default Routes;
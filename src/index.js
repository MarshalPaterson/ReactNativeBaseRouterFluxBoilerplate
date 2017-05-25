import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

export default class ReactNativeBaseRouterFluxBoilerplate extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="pageOne"
                        component={PageOne}
                        title="Page One"
                        initial
                    />
                    <Scene
                        key="pageTwo"
                        component={PageTwo}
                        title="Page Two"
                    />
                </Scene>
            </Router>
        );
    }
}
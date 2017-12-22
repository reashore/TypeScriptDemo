
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reactRoot: HTMLElement = document.getElementById('reactRoot') as HTMLElement;
const reactComponent: JSX.Element = <App />;

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();

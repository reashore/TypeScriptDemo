
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reactRoot: HTMLElement = document.getElementById('reactRoot') as HTMLElement;
// const reactComponent: JSX.Element = <App />;
const reactComponent: JSX.Element = <Hello name="TypeScript" enthusiasmLevel={10} />;

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();

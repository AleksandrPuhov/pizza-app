import ReactAux from './hoc/ReactAux/ReactAux';

import Header from './containers/Header/Header';
import Pizza from './containers/Pizza/Pizza';
import Footer from './containers/Footer/Footer';

import './App.scss';

const App = () => {
    return (
        <ReactAux>
            <Header />

            <Pizza />

            <Footer />
        </ReactAux>
    );
}

export default App;

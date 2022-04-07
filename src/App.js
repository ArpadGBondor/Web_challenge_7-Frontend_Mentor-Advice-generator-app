import { AlertProvider } from './context/advice/AdviceContext';
import Advice from './components/Advice';
import Footer from './components/Footer';

function App() {
    return (
        <AlertProvider>
            <div className="container">
                <Advice />
                <Footer />
            </div>
        </AlertProvider>
    );
}

export default App;

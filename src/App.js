import { AlertProvider } from './context/advice/AdviceContext';
import Advice from './components/Advice';
import Footer from './components/Footer';

function App() {
    return (
        <AlertProvider>
            <Advice />
            <Footer />
        </AlertProvider>
    );
}

export default App;

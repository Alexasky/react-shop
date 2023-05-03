import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { ContextProvider } from './context';

function App() {
    return (
        <>
            <Header />
            <ContextProvider>
                <Main />
            </ContextProvider>
            <Footer />
        </>
    );
}

export default App;

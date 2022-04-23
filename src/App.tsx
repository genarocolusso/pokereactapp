
import { MainContainer } from './pages/Main'; 
import GlobalStyle from './globalStyles';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">  
        <GlobalStyle/>
       <MainContainer/> 
    </div>
    </QueryClientProvider>
  );
}

export default App;

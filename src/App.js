import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Layout from "./layout/Layout";
import Router from './routes/Router';
import { ContextProvider } from './context/StateContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ContextProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
    </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;

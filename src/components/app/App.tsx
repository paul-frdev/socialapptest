import { Routers } from './Routes'
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../reactquery/queryClient';
import { Header } from './Header';
import { Footer } from './Footer';
import { FormDialog } from '../common/FormDialog';
import { Loading } from '../common/Loading';

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className='main-container'>
        <Routers />
        <Loading/>
      </main>
      <Footer />
      <FormDialog />
    </QueryClientProvider>
  )
}

export default App

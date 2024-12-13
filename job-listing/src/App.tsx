import './App.css';
import JobListView from './components/JobListView';
import { FilterContextProvider } from './context/filterContext';

function App(): JSX.Element {
  return (
    <main role="main">
      <FilterContextProvider>
        <JobListView />
      </FilterContextProvider>
    </main>
  );
}

export default App;

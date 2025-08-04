import './App.css';

import Empty from './componentes/Empty/Empty';
import Filters from './componentes/Filters/Filters';
import Task from './componentes/Task/Task';
import GlobalConstextProvider, { useGlobalContext } from './context/GlobalContext';


export default function AppPage() {

  return (
    <GlobalConstextProvider>
      <App />
    </GlobalConstextProvider>
  )
}

function App() {

  const { filteredTasks, handleKeyDown, handleSetInput, input, } = useGlobalContext();

  return (
    <div className='cotainer-app'>

      <div className='container-app-header'>
        <div className='container-app-mask' />
        <h1>TAREFAS</h1>

        <input 
          type="text" 
          placeholder="Criar uma nova tarefa" 
          value={input}
          onChange={(event) => handleSetInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      
      <ul className='content-tasks'>
        <div>
          {filteredTasks().map((t) => (
            <Task task={t} />
          ))}

          <Empty 
            title='Nenhuma tarefa cadastrada!'
            show={!filteredTasks().length}
          />          
        </div>       

        <Filters/>
      </ul>
    </div>
  );
}
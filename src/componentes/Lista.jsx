import { useState } from "react";
import '../App.css'


function Lista()
{

    const [tarefas, setTarefas] = useState([]);  // Estado para armazenar a lista de tarefas
    const[tarefaFeita, setTarefaFeita] = useState([]);

    const adicionarLista = () => {
        let newTarefa = prompt("Digite sua nova Tarefa:");

        if (newTarefa && newTarefa.trim() !== "") {
            setTarefas([...tarefas, {id: `tarefa-${tarefas.length}`, nome:newTarefa.trim()}]);  // Adiciona a nova tarefa ao estado
        } else {
            alert("Por favor, insira uma tarefa válida.");
        }
    };

    const handleCheckBoxChange = (e) => 
    {
        const checkDoBox = e.target;
        const id = checkDoBox.id;
        console.log(`o id do check é ` + id)
        const tarefaMarcada = tarefas.find(tarefa => tarefa.id == id);
        console.log(tarefaMarcada)
        if(tarefaMarcada)
        {
            setTarefas(tarefas.filter(item => item.id !== id));
            setTarefaFeita([...tarefaFeita, tarefaMarcada]);
            
        }   
    }

    const handleCheckBoxChangeFalse = (e) =>
    {
        const checkbox = e.target;
        const id = checkbox.id;

        const tarefaMarcada = tarefaFeita.find(tarefa => tarefa.id == id)
        if(tarefaMarcada)
        {
            setTarefaFeita(tarefaFeita.filter(tarefa => tarefa.id !== id));
            setTarefas([...tarefas,tarefaMarcada]);
        }else{
            
            alert("não foi possivel achar a tarefa");
        }
    }

    return (
        <div className="containerTarefa">
            <button onClick={adicionarLista}>Adicionar uma tarefa</button>
            <h2>Tarefas a Fazer</h2>
            {tarefas.length > 0 ? (
                tarefas.map((tarefa, index) => (
                    <div key={index}>
                        <input type="checkbox" id={tarefa.id} onChange={handleCheckBoxChange} />
                        <label htmlFor={tarefa.id}>{tarefa.nome}</label>
                    </div>
                ))
            ) : (
                <p>Nenhuma tarefa adicionada.</p>
            )}
            <div>
                <h2>Tarefas Feitas</h2>
                {tarefaFeita.length > 0 ? (
                    tarefaFeita.map( (tarefasFeitas,index) =>(
                        <div key={index}>
                            <input type="checkbox" id={tarefasFeitas.id} checked={true} onChange={handleCheckBoxChangeFalse} />
                            <label htmlFor={tarefasFeitas.id}>{tarefasFeitas.nome}</label>
                        </div>
                    ))
                ) : (<p> Nenhuma Tarefa feita</p>)} 
            </div>
        </div>
  
    )
};


export default Lista
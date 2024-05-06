import React,{useState} from "react";

function ToDoList(){

    const [tasks,setTasks]=useState(["Eat breakfast","Take a shower","Walk the dog"]);
    const [newTasks,setNewTasks]=useState("");

    function handleInputChange(e){
        setNewTasks(e.target.value);
    }

    function addTask(){
        if(newTasks.trim()!=""){
            setTasks(t=>[...t,newTasks]);
            setNewTasks("");
        }
    }

    function removeTask(index){
        const updatedTask=tasks.filter((_,i)=>i!=index);
        setTasks(updatedTask);
    }

    function moveTaksUp(index){
        if(index>0){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaksDown(index){
        if(index<tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return(
    <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                       placeholder="Enter a task..."
                       value={newTasks}
                       onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>

                <ol>
                    {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>

                        <button className="delete-button" onClick={()=>removeTask(index)}>
                            Delete
                        </button>

                        <button className="move-button" onClick={()=>moveTaksUp(index)}>
                            ☝️
                        </button>

                        <button className="move-button" onClick={()=>moveTaksDown(index)}>
                            👇
                        </button>
                    </li>)}
                </ol>

            </div>
        </div>
    </>
    );
}

export default ToDoList
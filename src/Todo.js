import React from 'react'

const Todo = ({todo, todoDelete, todoToogleCompleted, setTodoEdit}) => {
    return (
        <div className="card mt-2">
                <div className="card-body">
                    <h3 className="card-title text-right ">{todo.title} 
                         <button onClick={()=> todoToogleCompleted(todo.id)} className={`"btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} m-2"`}>
                         {todo.completed ? 'Terminado' : 'Terminar'}
                        </button>
                    </h3>
                    <p className="card-text text-right">{todo.description}</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button onClick={()=> setTodoEdit(todo)} className="btn btn-sm btn-outline-primary m-2">
                            Editar
                        </button>
                        <button onClick={() => todoDelete(todo.id)} className="btn btn-sm btn-outline-danger m-2">Eliminar</button>
                    </div>
                </div>

            </div>
    )
}

export default Todo

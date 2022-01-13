import React, { useState } from 'react'
import './todo.css'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, clearTodo, deleteTodo } from '../actions/Index';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Todo() {

    const [inputData, setInputData] = useState("");

    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="main-div">
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here!</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='text here to add items' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                        <AddIcon onClick={() => dispatch(addTodo(inputData), setInputData(''))}></AddIcon>
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className='eachItem' key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className='todo-btn'>
                                            <DeleteIcon title='delete item' onClick={() => dispatch(deleteTodo(elem.id))}></DeleteIcon>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="remove All" onClick={() => dispatch(clearTodo())}><spam >Check List</spam></button>
                    </div>

                </div>
            </div>

        </div>
    )
}

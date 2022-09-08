import React, { useState } from 'react'
import todo from "../images/todo.jfif";
import style from "../components/CSS/style.css"
import Heading from "./Heading"
import Task from "./Task"



const Todo = () => {

    const [set, reSet] = useState('');
    const [additem, setItem] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [editId, setEditId] = useState();

    const handleAdd = () => {
        if (!set) {

        }
        else if (set && !toggle) {
            setItem(
                additem.map((elem) => {
                    if (elem.id === editId) {
                        return { ...elem, name: set }
                    }
                    return elem;
                })
            )

            setToggle(true);
            reSet('');
            setEditId(null);
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: set }
            setItem([...additem, allInputData]);
            reSet('');


        }
    }

    const removeAll = () => {
        setItem([]);
    }

    const handleEdit = (id) => {
        const item = additem.find((elem) => {
            return elem.id === id

        })
        setToggle(false);
        reSet(item.name);
        setEditId(id);
    }

    const handleDelete = (id) => {

        const updateItem = additem.filter((elem) => {
            return elem.id !== id;

        });

        setItem(updateItem);

    }

    return (
        <>
            <div className="container">

                <div className="main-div">

                    <div className="child-div">

                        <Heading todo={todo} />
                        <div className="input-field" style={{ marginTop: "2rem" }}>

                            <input type="text" placeholder="Add Tasks" value={set} onChange={(e) => { reSet(e.target.value) }} />
                            {toggle ? <i className="fa fa-plus add-btn" title="Add Item" onClick={handleAdd}></i> :
                                <i style={{ position: "relative", right: "2.9rem", fontSize: "2.2rem" }} className="far fa-edit add-btn" title="Edit Item" onClick={handleAdd}></i>}
                        </div>

                        <Task handleEdit={handleEdit} handleDelete={handleDelete} additem={additem} />
                    </div>



                    <div className="btn">
                        <button className="sm-btn" onClick={removeAll}>Remove All</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo

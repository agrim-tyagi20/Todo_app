import React from 'react'

const Task = ({ handleEdit, handleDelete, additem }) => {
    return (
        <>
            <div className="display-item" >
                <div style={{ marginTop: "1.5rem" }}>

                    {
                        additem.map((curnt) => {

                            return (
                                <div className="show-items" key={curnt.id}>

                                    <h4 style={{ paddingTop: ".6rem" }}>{curnt.name}</h4>
                                    <div className="icons">
                                        <i className="far fa-edit add-btn" title="Edit Item" onClick={() => handleEdit(curnt.id)}></i>
                                        <i className="fa-solid fa-trash add-btn-alt" title="Delete Item" onClick={() => handleDelete(curnt.id)}></i>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Task

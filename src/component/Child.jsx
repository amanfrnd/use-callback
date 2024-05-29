import React,{memo} from 'react'

const Child = ({ todo, addTodo }) => {
    console.log("child re-render")
    return (
        <div>
            <h3>Child</h3>
            {
                todo.map((item, idx) => {
                    return <p key={idx}>{item}</p>
                })
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default memo(Child)

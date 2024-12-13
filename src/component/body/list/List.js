import { useState } from "react";

const List = ({todos, setTodos}) => {

    const [editStatus, setEditStatus] = useState(false);
    const editItem = (uid) => {
        alert(uid);
    }

    const checkItem = (uid) => {
        const checkTodo = todos.map((todo) => {
            if (todo.uid === uid) {
                return { ...todo, isCheck: !todo.isCheck };
            }
            return todo;
        });
        setTodos(checkTodo);
    }

    const removeItem = (uid) => {
        setTodos(todos.filter(todo => todo.uid !== uid))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>내용</td>
                        <td>등록 시간</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr className={todo.isCheck ? "check" : "noCheck"}
                            key={todo.uid}>
                            <td>
                                <label className="checkboxContainer">
                                    <input  type="checkbox"
                                            onClick={() => checkItem(todo.uid)}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td className="content"
                                onDoubleClick={() => editItem(todo.uid)}>
                                {todo.content}
                            </td>
                            <td>
                                {todo.time}
                            </td>
                            <td onClick={() => removeItem(todo.uid)}>삭제</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;
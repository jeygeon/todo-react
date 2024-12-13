import { useRef, useState } from "react";

const Input = ({setTodos}) => {

    const idRef = useRef(3);
    const currentRef = useRef();
    const [newTodo, setNewTodo] = useState("");

    const saveNewTodo = (event) => {
        setNewTodo(event.target.value);
    }

    const addItemByEnterKey = (e) => {
        if (e.keyCode === 13) {
            addItem();
        }
    }

    const addItem = () => {

        if (newTodo.trim().length === 0) {
            alert('TODO를 입력해주세요.');
            currentRef.current.focus();
            return;
        }

        const newData = {
            uid : idRef.current++,
            isCheck : false,
            content : newTodo,
            time: new Date().getTime()
        }

        setTodos((prevTodos) => [...prevTodos, newData]);

        // 값 newTodo 값 초기화
        setNewTodo("");
    }

    return (
        <div className="todo-input-section">
            <p className="todo-comment">나의 TODO 추가</p>
            <div className="todo-input">
                <input type="text"
                        onKeyDown={addItemByEnterKey}
                        value={newTodo}
                        ref={currentRef}
                        onChange={saveNewTodo}></input>
                <input type="button" value="추가" onClick={addItem}></input>
            </div>
        </div>
    )
}

export default Input;
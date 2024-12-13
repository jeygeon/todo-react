import { useState } from 'react';
import Input from './input/Input';
import List from './list/List';

const Body = () => {
    const [todos, setTodos] = useState (
        [
            {
                uid : 1,
                isCheck : false,
                content : '리액트 학습하기',
                time : '2024. 12. 11. 13:57'
            },
            {
                uid : 2,
                isCheck: false,
                content : '정기점검 하기',
                time : '2024. 12. 11. 14:32'
            }
        ]
    )

    return (
        <>
            <Input setTodos={setTodos}></Input>
            <List todos={todos} setTodos={setTodos}></List>
        </>
    );
}

export default Body
<script setup lang="ts">
import { ToDo } from "../types";
import { ref, reactive, onMounted } from "vue";
import { useTodoStore } from "../stores/index"
import TodoItem from "../components/TodoItem.vue";
import { storeToRefs } from "pinia";
const todoStore = useTodoStore()

// init todos
/*
let todos: ToDo[] =[
    { text: "투두테스트", complete: false },
    { text: "뷰3문법", complete: false },
    { text: "비트로 만든", complete: false },
    { text: "타입스크립트", complete: false },
];
if(!todoStore.todos.length){
    todos.forEach(item =>{
        todoStore.addTodo(item);
    })
}
*/

let text = reactive(null);
const todoItem = ref(null);
const todoRef = ref(null);


// watch(()=>todoStore.todos,
//     (todos)=>{
//     console.log(todos);
// }) 

const addTodo = async () => {
    if (!text) {
        alert("할일을 입력하세요!");
        todoRef.value.focus();
        return;
    }
    // todoStore.addTodo(text )
    await todoStore.addTodo({ text: text, complete: false })
    text = "";
};
// const onTextChange = (e: { target: { value: string } }, index: number) => {
//     console.log(e, index);
// };

const onUpdateTodo= async (text:string, index: number)=>{
    let todos = [...todoStore.todos]
    todos[index] = {...todos[index], text}
    await todoStore.updateTodo(todos[index], index);
}   

const onCheckClick = async (complete: boolean,  index: number) => {
    let todos = [...todoStore.todos]
    todos[index] = {...todos[index], complete}
    await todoStore.updateTodo(todos[index], index)
}

const onDeleteTodo = async (index: number) => {
    // let todos = [...todoStore.todos]
    // todos.filter(item => item != todos[index])
    await todoStore.deleteTodo(index)

}

const handleChangeStatus = ()=>{

}
</script>
<template>
    <div>
        <div>[MENU1] Todo test</div>
        <button @click="$router.push('/menu1/123')">
            Click here to Detail
        </button>
    </div>
    <div>
        <form @submit.prevent="addTodo">
            <input
                type="text"
                name=""
                id=""
                ref="todoRef"
                v-model="text"
                placeholder="할 일을 입력해주세요"
                @change=""
            />
            <button type="submit">Submit</button>
        </form>
    </div>
    <div>
        <ul>
            <TodoItem v-for="(todo, index) in todoStore.todos" :todo="todo" :key="index" @update-todo="onUpdateTodo($event, index)" @delete-todo="onDeleteTodo(index)" @check-click="onCheckClick($event, index)"/>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>

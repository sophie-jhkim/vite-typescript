<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ToDo } from "../types";
import { ref, reactive } from "vue";
import { useTodoStore } from "../stores/index"
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

// const editable = ref(false);
let text = reactive(null);
const todoItem = ref(null);
const todoRef = ref(null);

onClickOutside(todoItem, () => {
    console.log("click outside");
    // if (editable.value) {
    //     editable.value = false;
    // }
});
const addTodo = () => {
    if (!text) {
        alert("할일을 입력하세요!");
        todoRef.value.focus();
        return;
    }
    todoStore.addTodo({ text: text, complete: false })
    text = "";
};
const onTextChange = (e: { target: { value: string } }, index: number) => {
    console.log(e, index);
};
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
            />
            <button type="submit">Submit</button>
        </form>
    </div>
    <div>
        <ul>
            <li ref="todoItem" v-for="(todo, index) in todoStore.todos">
                <span>
                    <!-- <span v-if="!editable" @click="editable = !editable"> -->
                    {{ todo.text }}
                </span>
                <!-- <input
                    type="text"
                    :value="todo.text"
                /> -->
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>

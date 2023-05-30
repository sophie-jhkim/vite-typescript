
<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import { ToDo } from "../types";
import {ref, watch} from "vue"
interface Props {
    todo: ToDo,
}

const emit = defineEmits(['update-todo', 'delete-todo', 'check-click'])
const props  = defineProps<Props>()
const todoItem = ref(null)
const inputRef = ref(null)
const editable = ref(false)

onClickOutside(todoItem, ()=>{
    if(editable.value){
        editable.value = false
    }
})

const onTextChange = (e: Event)=>{
    emit("update-todo", (e.target as HTMLInputElement).value)
}

watch(()=>editable.value, editable => { if(editable){ 
    // v-if로 요소를 처리했기때문에 처음 mount시에 ref를 찾을 수 없어 시간차를 둬야함
    setTimeout(()=>{
        inputRef.value.focus()
    },100)
    }})
</script>
<template>
    <li ref="todoItem">
        <input type="checkbox" name="" :id="`todo_${todo}`" @change="emit('check-click', todo.complete)" v-model="todo.complete">
        <span  v-if="!editable"  @click="editable = !editable" :class="{'completed' : todo.complete}">
            <label :for="`todo_${todo}`"  >{{ todo.text }}</label>
        </span>
        <span v-else>
            <input
                ref="inputRef"
                type="text"
                :value="todo.text"
                @input="onTextChange"
                @keypress.enter="editable = !editable"
            />
        </span>
        <button @click="emit('delete-todo')">X</button>
    </li>
</template>

<style lang="scss" scoped>
.completed{
    text-decoration: line-through;
}
</style>
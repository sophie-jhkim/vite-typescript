import { ref, reactive } from "vue";
import { acceptHMRUpdate , defineStore } from "pinia";
import { ToDo } from "../types";
import { useStorage } from "@vueuse/core"

export const useLoadingStore = defineStore("loadingStore", ()=>{
    const isLoading = ref(false);
    
    const setIsLoading = async (value: boolean) =>{
        isLoading.value = value
    }

    return {
        setIsLoading,
        isLoading
    } as const;

})


export const useTodoStore = defineStore("useTodoStore", ()=>{
    // const todos = useStorage("todos", [] as ToDo[]);
    let todoss = reactive([] as ToDo[]);
    if(localStorage.getItem("todos")){
        console.log("durl")
        console.log(JSON.parse(JSON.stringify(localStorage.getItem("todos"))))
        todoss.push(JSON.parse(JSON.stringify(localStorage.getItem("todos"))))
    }

    

    const addTodo = async (todo:ToDo) =>{
        todoss.push(todo)
        useStorage("todos", todoss)
    }

    return{
        todos,
        addTodo,
    } as const;
})




if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLoadingStore, import.meta.hot))
}  
import { ref, reactive } from "vue";
import { acceptHMRUpdate , defineStore } from "pinia";
import { ToDo } from "../service/types";

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
// XXX 참고 https://velog.io/@jonghunbok/%EB%B2%88%EC%97%AD-Vue-3%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%95%84%EC%88%98-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-VueUse


export const useTodoStore = defineStore("useTodoStore", ()=>{

    const todos: ToDo[] = reactive([]);
    if(localStorage.getItem("todos")){
        // todoss.push(JSON.parse(JSON.stringify(localStorage.getItem("todos"))))
        todos.push(...JSON.parse(localStorage.getItem("todos")))
    }

    // const addTodo = async (todo:string) =>{
    const addTodo = async (todo:ToDo) =>{
        todos.push(todo)
        localStorage.setItem("todos", JSON.stringify(todos));
        // FIXME 아니 왜 useStore를 설치해놓고 제대로 못쓰늬......ㅠ
        // useStorage("todos", todos,localStorage, { mergeDefaults: true })
    }

    const updateTodo = async (todo:ToDo, index: number)=>{
        todos[index] = todo
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const deleteTodo = async (index: number) =>{
        // todos = todos.filter(item => item != item[index])
        todos.splice(index, 1)
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    return{
        todos,
        addTodo,
        updateTodo,
        deleteTodo
    } as const;
})




if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLoadingStore, import.meta.hot))
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}  
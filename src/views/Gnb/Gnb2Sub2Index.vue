<script lang="ts" setup>
import { onMounted, reactive, watch } from "vue";
import { useRouter, useRoute } from "vue-router"
const router = useRouter();
const route = useRoute();
const tabMenu=[
    { name : "전체",  type: 'all',},
    { name : "사과",  type: 'apple',},
    { name : "바나나",type: 'banana',},
    { name : "오렌지",type: 'orange',},
]

const currTab:string = '';
const onTabClick = (type: string)=>{
    router.push(`/gnb2/sub2/${type}`)
}
const data = reactive({currTab})

onMounted(() => {
        data.currTab = route.params.type as string;
})
watch(route, (newVal)=>{
    if(newVal){
        data.currTab = newVal.params.type as string;
    }

})
</script>

<template>
    <div>
        Gnb2-Sub2 다이나믹라우터 입니다
    </div>
    <ul>
        <li v-for="tab in tabMenu" :key="`tab_${tab.name}`" @click="onTabClick(tab.type)" :class="{active: data.currTab == tab.type}" >
            {{ tab.name }} 
        </li>
    </ul>
    <h3>
        {{ route.params.type }}
    </h3>
</template>


<style lang="scss" scoped>
.active{
    font-weight: bold;
}
</style>
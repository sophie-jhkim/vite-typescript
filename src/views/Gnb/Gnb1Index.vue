<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useKeywordStore } from "../../stores/index"
const keywordStore = useKeywordStore();
let keyword= ref('')
let keywordHistory = ref([])
// let keywordHistory = JSON.parse(keywordStore.keywordHistory)
let data = reactive({keywordHistory, keyword})

onMounted(()=>{
    // data.keywordHistory= JSON.parse(keywordStore.keywordHistory)
    data.keywordHistory= JSON.parse(localStorage.getItem('keyword-history'))
})

const handleKeywordHistory = ()=>{
    let kywIndex = data.keywordHistory.indexOf(data.keyword)
            if(kywIndex > -1){
                data.keywordHistory.splice(kywIndex, 1)
            }
            if(data.keywordHistory){
                if( data.keywordHistory.length == 5){ // 저장 갯수 최대 5개
                    data.keywordHistory.splice(0, 1)
                }
                data.keywordHistory.push(data.keyword)
                let stringArr = JSON.stringify(data.keywordHistory)
                localStorage.setItem('keyword-history', stringArr)
                // keywordStore.setKeywordHistory(stringArr)
            }
            data.keyword = ''
}

const deleteKeywordHistory = (index: number)=>{
            data.keywordHistory.splice(index, 1)
            let arr = JSON.stringify(data.keywordHistory);
            localStorage.setItem('keyword-history', arr)

            // keywordStore.setKeywordHistory(arr)
    
}


</script>

<template>
    <h3>
        Gnb1 메뉴 대시보드입니다
    </h3>
    <div>
        <form @submit.prevent="handleKeywordHistory">
            <input type="input" v-model="keyword" placeholder="검색어를 입력해주세요">
        </form>
    </div>
    <p>최근검색어</p>
    <template v-if="keywordHistory && keywordHistory.length">
        <ul >
            <li v-for="(keyword, index) in keywordHistory" :key="keyword">{{keyword}} <button @click.stop="deleteKeywordHistory(index)">X</button></li>
        </ul>
    </template>
    <template v-else>
        <p>
            최근 검색어가 없습니다
        </p>
    </template>
</template>

<style lang="scss" scoped>
input{
    padding: 8px 12px;
    font-size: 18px;
}

ul{
    margin:0;
    padding: 0;
    list-style: none;
    display: flex;
    column-gap: 8px;
    li{
        padding: 4px 8px;
        border:1px solid cyan;
        border-radius: 4px;
        font-size: 14px;
        button{
            background-color: transparent;
            border:0;
            cursor: pointer;
        }
    }
}

</style>
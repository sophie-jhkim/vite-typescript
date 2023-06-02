<template>
    <div>
        여기 노션테스트 페이지
    </div>
    <div  >
        <NotionRenderer v-if="notionBlockMap2" class="notion" fullPage :blockMap="notionBlockMap2" ></NotionRenderer>
    </div>
</template>

<script lang="ts" setup>
import { NotionRenderer, getPageBlocks } from "vue3-notion";
import { Client } from "@notionhq/client"
import {ref, reactive, onMounted } from "vue";
const notionBlockMap = ref(null)
const notionBlockMapString = ref(null)
const notionBlockMap2 = ref(null)
const data = reactive({notionBlockMap, notionBlockMap2, notionBlockMapString })


const initNotion = async ()=>{
    /* XXX notion sdk 활용할 경우 page가 block 아이템으로 들어옴
    
    Initializing a client
    const notion = new Client({
    auth: 'secret_ljSh92dgA8xjWT8MilkJNtI46uD42eoUiV4J0zFmepb',
    })

    data.notionBlockMap = await notion.blocks.children.list({
        block_id: '69981454714a47ecbe1608aeb966ffd1',
        page_size: 50,
    });
    
    */
    data.notionBlockMap2 = await getPageBlocks("69981454714a47ecbe1608aeb966ffd1")
}
onMounted(()=>{
    initNotion()
})


</script>
<style>
@import "../../node_modules/vue3-notion/dist/style.css";
@import "../../node_modules/prismjs/themes/prism.css";
@import "../../node_modules/katex/dist/katex.min.css";
</style>

<style lang="scss" scoped>
.notion{
    img{
        max-width: 100%;
    }
}
</style>
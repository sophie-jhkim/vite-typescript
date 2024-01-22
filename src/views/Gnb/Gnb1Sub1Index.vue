<script setup lang="ts">

const LIST = [
    { title : "게시글1", id : 1},
    { title : "게시글2", id : 2},
    { title : "게시글3", id : 3},
]
</script>

<template>
    <div>   
        Gnb1-Sub1 대시보드입니다
    </div>
    <div>
        <ul>
            <li v-for="item in LIST" :key="item.id">
                <router-link :to="`/gnb1/sub1/${item.id}`">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>
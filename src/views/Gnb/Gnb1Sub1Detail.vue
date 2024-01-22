<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
const router = useRouter();
const route = useRoute();

</script>

<template>
    <h3>
        Gnb1-Sub1 디테일 입니다
    </h3>
    <div>
        현제 보고있는 게시글은 {{ route.params.id }}번 게시글입니다
    </div>
</template>

<style lang="scss" scoped>

</style>
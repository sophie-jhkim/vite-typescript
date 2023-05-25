<script lang="ts" setup>
import { RouterView } from "vue-router";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <Header />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<style lang="scss" scoped></style>

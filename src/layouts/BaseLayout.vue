<script lang="ts" setup>
import { RouterView } from "vue-router";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <div id="layout">
        <Nav />
        <main>
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<style lang="scss" scoped></style>

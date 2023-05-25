<script lang="ts" setup></script>
<template>
    <header>
        <router-link to="/">
            <h1><img src="/public/vite.svg" alt="logo" /></h1>
        </router-link>
        <ul class="gnb">
            <li>
                <router-link to="/menu1"> MENU1 </router-link>
            </li>
            <li><router-link to="/menu2"> MENU2 </router-link></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped></style>

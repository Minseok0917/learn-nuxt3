<template>
    <ul v-for="menu in navigation" :key="menu._path">
        <template-sidebar-menu-item :menu="menu" />
    </ul>
</template>
<script setup>
const { navigation } = await useAsyncNavigation();
</script>

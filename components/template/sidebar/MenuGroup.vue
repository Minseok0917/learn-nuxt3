<template>
    <ul class="pl-4" v-for="menu in navigation" :key="menu._path">
        <template-sidebar-menu-item :menu="menu" />
    </ul>
</template>
<script setup>
defineProps({
    navigation: Array,
});
</script>

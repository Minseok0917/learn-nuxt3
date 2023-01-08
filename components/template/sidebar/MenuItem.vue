<template>
    <li>
        <template v-if="!menu.children">
            <nuxt-link :to="menu._path">{{ menu.title }}</nuxt-link>
        </template>
        <template v-else>
            <p>{{ menu.title }}</p>
            <template-sidebar-menu-group :navigation="menu.children" />
        </template>
    </li>
</template>
<script setup>
defineProps({
    menu: Object,
});
</script>

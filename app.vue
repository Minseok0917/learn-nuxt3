<template>
    <div>
        <NuxtLayout>
            <h1>12</h1>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
const { navigation } = await useAsyncNavigation();
console.log(navigation.value);
</script>

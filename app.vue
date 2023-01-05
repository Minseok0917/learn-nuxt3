<template>
  <div>
    <NuxtLayout>
      <h1>12</h1>
      <ContentDoc />
    </NuxtLayout>
    <NuxtPage />
  </div>
</template>
<script setup>
const { data } = await useAsyncData("home", () => queryContent("/").findOne());
console.log(data.value);
</script>

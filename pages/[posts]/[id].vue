<template>
    <nuxt-link to="/">Home</nuxt-link>
    <div>{{ $route.params.posts }} - {{ $route.params.id }}</div>
    <div class="content-markdown">
        <ContentDoc />
    </div>
</template>

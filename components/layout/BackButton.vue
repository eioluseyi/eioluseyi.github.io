<script setup lang="ts">
const router = useRouter();

const goBack = () => router.back();
</script>

<template>
    <button class="gg-chevron-left" @click="goBack"></button>
</template>
<script setup lang="ts">
const router = useRouter();

const goHome = () => router.push({ path: "/" });
</script>

<template>
    <button class="gg-shape-circle" @click="goHome"></button>
</template>

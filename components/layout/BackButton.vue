<script setup lang="ts">
const route = useRoute()
const router = useRouter();

const goBack = () => {
    if (route.path === "/") return;
    router.back();
};
</script>

<template>
    <button class="gg-chevron-left" @click="goBack"></button>
</template>
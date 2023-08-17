<script setup lang="ts">
const { push } = useRouter();

onMounted(() => {
    push("/");
});
</script>

<template>
    <div class="grid place-items-center text-3xl text-red-700">Whoops!</div>
</template>

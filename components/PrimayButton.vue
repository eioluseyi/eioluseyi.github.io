<script setup lang="ts">
type Props = {
    label?: string;
    next?: boolean;
    prev?: boolean;
    isLoading?: boolean;
}

withDefaults(defineProps<Props>(), {});
</script>

<template>
    <button
        class="button-item rounded-full flex items-center justify-end min-[400px]:px-5 min-[400px]:py-4 max-[400px]:px-3 max-[400px]:py-2 max-[400px]:text-sm w-full text-white bg-gradient-to-r from-[#0CA9FF] via-[#0289FF] to-[#0CA9FF] bg-[length:200%] hover:bg-[100%_center] transition-all duration-500 ease-out font-bold">
        {{ label }}
        <i class="animate-pulse" :class="{ 'gg-spinner-two-alt ml-2': isLoading, 'gg-chevron-right': !isLoading }" />
    </button>
</template>

<style scoped>
@media screen and (max-height: 700px) {
    .button-item {
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
}
</style>
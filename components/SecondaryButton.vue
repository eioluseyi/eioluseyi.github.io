<script setup lang="ts">
</script>

<template>
    <button
        class="button-item rounded-full flex items-center justify-center min-[400px]:px-5 min-[400px]:py-4 max-[400px]:px-3 max-[400px]:py-2 max-[400px]:text-sm text-slate-300 border-2 bg-[#1D212A] border-current transition-all duration-500 ease-out hover:tracking-widest whitespace-nowrap font-bold">
        <slot />
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
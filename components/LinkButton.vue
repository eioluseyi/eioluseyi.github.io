<script setup lang="ts">
type Props = {
    label?: string;
    next?: boolean;
    prev?: boolean;
    href?: string;
}

withDefaults(defineProps<Props>(), {
    href: "#"
});
</script>

<template>
    <NuxtLink :to="href"
        class="rounded-full flex items-center justify-end min-[400px]:px-5 min-[400px]:py-4 max-[400px]:px-3 max-[400px]:py-2 max-[400px]:text-sm w-full text-white bg-gradient-to-r from-[#0CA9FF] via-[#0289FF] to-[#0CA9FF] bg-[length:200%] hover:bg-[100%_center] transition-all duration-500 ease-out font-bold">
        {{ label }}
        <i class="gg-chevron-right animate-pulse"></i>
    </NuxtLink>
</template>
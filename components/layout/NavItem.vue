<script setup lang="ts">

const isNavOpen = inject<boolean>("isNavOpen");
const onNavClose = inject<() => void>("onNavClose");

</script>

<template>
    <div class="absolute inset-0 -left-10 p-6 pb-0 rounded-3xl transition-all duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden flex-1 [&>div]:h-full [&>div]:overflow-hidden"
        :class="{ '[&>div]:pointer-events-none !duration-700 scale-[0.6] bg-slate-500 bg-opacity-10 shadow-2xl': isNavOpen }"
        @click="isNavOpen && onNavClose && onNavClose()">
        Nav items-center
    </div>
</template>
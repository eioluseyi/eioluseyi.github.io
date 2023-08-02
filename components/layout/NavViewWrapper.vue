<script setup lang="ts">

const isNavOpen = inject<boolean>("isNavOpen");
const onNavClose = inject<() => void>("onNavClose");

</script>

<template>
    <div class="relative flex flex-col flex-1 h-full overflow-hidden">
        <LayoutNavItem v-show="isNavOpen" />
        <div class="p-6 pb-0 rounded-3xl transition-all duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden flex-1 [&>div]:h-full [&>div]:overflow-hidden"
            :class="{ '[&>div]:pointer-events-none !duration-700 scale-[0.65] backdrop-blur-3xl -mr-10 ml-10 bg-slate-500 bg-opacity-10 shadow-2xl': isNavOpen }"
            @click="isNavOpen && onNavClose && onNavClose()">
            <slot />
        </div>
    </div>
</template>
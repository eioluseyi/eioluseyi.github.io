<script setup lang="ts">

const isNavOpen = inject<boolean>("isNavOpen");
const onNavClose = inject<() => void>("onNavClose");

const handleScroll = (evt: Event) => {
    console.log(evt);
}

</script>

<template>
    <div class="flex flex-col flex-1 h-full overflow-y-hidden overflow-x-scroll no-scrollbar" @scroll="handleScroll">
        <div class="relative flex flex-1 h-full">
            <LayoutNavItem v-show="isNavOpen" />
            <div class="min-w-full p-6 pb-0 rounded-3xl transition-all duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden border-[#ffffff07] flex-1 [&>div]:h-full [&>div]:overflow-hidden"
                :class="{ '[&>div]:pointer-events-none !duration-700 translate-x-10 scale-[0.65] backdrop-blur-2xl bg-[#1F232Ddd] border shadow-3xl': isNavOpen }"
                @click="isNavOpen && onNavClose && onNavClose()">
                <slot />
            </div>
            <div v-if="isNavOpen" class="min-w-0 w-full opacity-0">.</div>
        </div>
    </div>
</template>
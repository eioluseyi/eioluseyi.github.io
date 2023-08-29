<script setup lang="ts">
const isTouchScreen = useIsTouchScreen();
</script>

<template>
    <div class="flex-1 [&_a]:ease-out [&_a]:transition-all [&_a]:duration-300 hover:overflow-auto text-sm pt-6 pb-5 pr-1 [&_a]:whitespace-nowrap [&_a]:text-slate-300 [&_a:hover]:text-slate-400 content-wrapper"
        :class="`${isTouchScreen ? 'overflow-auto' : 'overflow-hidden'}`">
        <slot />
    </div>
</template>

<style scoped>
.content-wrapper {
    scrollbar-gutter: stable;

    --mask-gradient: transparent, black 30px calc(100% - 30px), transparent;
    -webkit-mask-image: linear-gradient(var(--mask-gradient));
    mask-image: linear-gradient(var(--mask-gradient));

    cursor: default;
}


::-webkit-scrollbar-thumb {
    border-width: 27px 0px 27px 2px;
}
</style>
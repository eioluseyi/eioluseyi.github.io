<script setup lang="ts">
const isNavOpen = ref(false);
const onNavOpen = () => isNavOpen.value = true;
const onNavClose = () => isNavOpen.value = false;
const onNavToggle = () => isNavOpen.value ? onNavClose() : onNavOpen();

provide('isNavOpen', isNavOpen);
provide('onNavOpen', onNavOpen);
provide('onNavClose', onNavClose);
provide('onNavToggle', onNavToggle);

</script>

<template>
    <div
        class="fixed min-[600px]:p-8 max-[600px]:w-full min-[600px]:max-w-lg h-full min-[600px]:max-h-[910px] default-layout-wrapper min-[600px]:aspect-[9/16] overflow-hidden">
        <div
            class="bg-gradient-to-br from-[#6D3474] via-[#1B1F28] via-30% to-[#2C323A] -shadow-2xl -shadow-black min-[600px]:p-[2px] default-layout-rounded-wrapper min-[600px]:rounded-[32px] h-full">
            <div
                class="relative flex flex-col bg-gradient-to-br from-[#1B1F2899] to-[#1B1F28dd] to-40% backdrop-blur default-layout-rounded-child-wrapper min-[600px]:rounded-[30px] show-cursor w-full h-full hover:cursor-auto overflow-hidden">
                <LayoutNavViewWrapper>
                    <slot />
                </LayoutNavViewWrapper>
                <div
                    class="flex justify-between items-center mx-auto mt-auto mb-0 px-4 w-full max-w-xs h-16 min-h-[64px] text-white">
                    <LayoutBackButton class="max-[600px]:hidden" />
                    <LayoutHomeButton @click="onNavClose" />
                    <span class="border-slate-700 min-[600px]:hidden mx-8 border border-dashed rounded-full w-full" />
                    <LayoutNavMenuButton @click="onNavToggle" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-height: 750px) {
    .default-layout-wrapper {
        width: 100%;
        max-width: 100%;
        padding: 0;

        .default-layout-rounded-wrapper,
        .default-layout-rounded-child-wrapper {
            border-radius: 0px;
            padding: 0;
        }
    }
}
</style>
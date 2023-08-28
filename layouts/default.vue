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
        class="min-[600px]:max-w-lg h-full w-full min-[600px]:max-h-[910px] min-[600px]:aspect-[9/16] overflow-hidden min-[600px]:p-8">
        <div
            class="h-full min-[600px]:rounded-[32px] min-[600px]:p-[2px] bg-gradient-to-br from-[#6D3474] via-30% via-[#1B1F28] to-[#2C323A] shadow-2xl shadow-black">
            <div
                class="flex flex-col relative show-cursor hover:cursor-auto bg-gradient-to-br from-[#1B1F2899] to-40% to-[#1B1F28dd] h-full w-full overflow-hidden backdrop-blur min-[600px]:rounded-[30px]">
                <LayoutNavViewWrapper>
                    <slot />
                </LayoutNavViewWrapper>
                <div
                    class="flex w-full min-h-[64px] h-16 items-center justify-between max-w-xs mx-auto px-4 mb-0 mt-auto text-white">
                    <LayoutBackButton />
                    <LayoutHomeButton @click="onNavClose" />
                    <LayoutNavMenuButton @click="onNavToggle" />
                </div>
            </div>
        </div>
    </div>
</template>
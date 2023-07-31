<script setup lang="ts">
import BackButton from '../components/layout/BackButton.vue';
import HomeButton from '../components/layout/HomeButton.vue';
import HamBurgerButton from '../components/layout/HamBurgerButton.vue';
import { reactive } from "vue";

const mousePosition = reactive({ x: "50%", y: "50%" });

const setMousePosition = (evt: MouseEvent) => {
    mousePosition.x = `${evt.clientX}px`;
    mousePosition.y = `${evt.clientY}px`;
}

</script>

<template>
    <div class="main-bg grid place-items-center h-screen"
        :style="`--mouse-x: ${mousePosition.x}; --mouse-y: ${mousePosition.y}`" @mousemove="setMousePosition">
        <div class="max-w-lg w-full aspect-[9/16] p-8">
            <div
                class="h-full rounded-[32px] glow-wrapper before:animate-pulse p-[2px] bg-gradient-to-br from-[#6D3474] via-30% via-[#1B1F28] to-[#2C323A] shadow-2xl shadow-black">
                <div
                    class="flex flex-col bg-gradient-to-br from-[#1B1F2899] to-40% to-[#1B1F28dd] h-full w-full overflow-hidden backdrop-blur rounded-[30px]">
                    <div class="p-6 pb-0 h-full [&>div]:h-full">
                        <slot />
                    </div>
                    <div
                        class="flex w-full h-16 items-center justify-between max-w-xs mx-auto px-4 mb-0 mt-auto text-white">
                        <BackButton />
                        <HomeButton />
                        <HamBurgerButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-bg {
    background-color: #0f0f0f;
    position: relative;
    overflow: hidden;

    &::before {
        position: absolute;
        content: "";
        inset: 0;
        background-image: url(../assets/img/honeycomb-bg.png);
        background-repeat: repeat;
        mix-blend-mode: luminosity;
        opacity: .4;
    }

}

.glow-wrapper {
    &::before {
        --glow-width: 200px;
        --glow-height: var(--glow-width);
        content: "";
        position: absolute;

        filter: blur(100px);

        width: var(--glow-width);
        height: var(--glow-height);

        left: calc(var(--mouse-x, 50%) - calc(var(--glow-width) / 2));
        top: calc(var(--mouse-y, 50%) - calc(var(--glow-height) / 2));
        border-radius: 100%;

        background-color: #6D347488;
        mix-blend-mode: screen;

        animation-duration: 7s;
        transition: all 0.2s ease-out;
    }
}
</style>
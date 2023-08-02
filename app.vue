<script setup lang="ts">
import { reactive } from "vue";

useSeoMeta({
  title: 'Emmanuel Imolorhe | @eioluseyi'
})

const mousePosition = reactive({ x: "50%", y: "50%" });

const setMousePosition = (evt: MouseEvent) => {
  mousePosition.x = `${evt.clientX}px`;
  mousePosition.y = `${evt.clientY}px`;
}
</script>

<template>
  <div class="main-wrapper" :style="`--mouse-x: ${mousePosition.x}; --mouse-y: ${mousePosition.y}`"
    @mousemove="setMousePosition">
    <div class="glow-bg before:animate-pulse grid place-items-center h-screen">
      <NuxtLayout>
        <NuxtPage :transition="{
          name: 'layout',
          mode: 'out-in'
        }" />
      </NuxtLayout>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulsing {
  50% {
    opacity: 0;
  }
}

.main-wrapper {
  background-color: #0f0f0f;
  cursor: none;
}

.glow-bg {
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    --glow-width: 200px;
    --glow-height: var(--glow-width);
    content: "";
    color: white;
    font-size: 300px;
    font-weight: 900;
    white-space: nowrap;
    position: absolute;
    /* opacity: 0.1; */

    /* animation: pulsing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */

    filter: blur(50px);

    width: var(--glow-width);
    height: var(--glow-height);

    left: calc(var(--mouse-x, 50%) - calc(var(--glow-width) / 2));
    top: calc(var(--mouse-y, 50%) - calc(var(--glow-height) / 2));
    border-radius: 100%;

    background-color: #6D3474;

    animation-duration: 7s;
    z-index: -1;
  }

  &:has(.show-cursor:hover)::before {
    transition: filter 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, left 0.3s ease-out, top 0.3s ease-out;
    filter: blur(100px);
    --glow-width: 400px;
  }

  &::after {
    position: absolute;
    content: "";
    inset: 0;
    background-image: url(../assets/img/honeycomb-bg.png);
    background-repeat: repeat;
    background-size: 13%;
    z-index: -1;
  }
}
</style>

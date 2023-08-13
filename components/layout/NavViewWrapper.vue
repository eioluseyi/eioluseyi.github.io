<script setup lang="ts">
import Skeleton from '../pages/Skeleton.vue';

const scrollWrapper = ref();
const scrollPercentage = ref(0);
const elementRefList = ref<HTMLElement[]>([]);
const isNavOpen = ref(inject("isNavOpen"));
const onNavClose = inject<() => void>("onNavClose");

const route = useRoute();

const currentPathIndex = computed<number>(() => {
    /**
     * get current path
     * find path in routesList
     * get path index in routesList
     */
    const path = route.path;
    return routeList.findIndex(itm => itm.path === path) ?? 0;
});

const handleScroll = (evt: Event) => {
    const elm = evt.target as HTMLElement;

    if (!elm) return;
    scrollPercentage.value = elm.scrollLeft / elm.scrollWidth;
};

watchEffect(() => {
    const currElm = elementRefList.value[currentPathIndex.value] as HTMLElement & { componentRef: HTMLElement };

    if (isNavOpen.value && scrollWrapper.value && currElm.componentRef) {
        nextTick(() => {
            setTimeout(() =>
                currElm.componentRef.scrollIntoView(), 0);
        });
    }
});

provide('scrollPercentage', scrollPercentage);

</script>

<template>
    <div class="flex flex-co flex-1 h-full relative overflow-y-hidden overflow-x-scroll no-scrollbar"
        :class="{ 'masked-side': isNavOpen }" ref="scrollWrapper" @scroll="handleScroll">
        <LayoutNavItem v-for="(routeItm, idx) in routeList" :route-index="idx" :route="routeItm" ref="elementRefList"
            :is-current-route="idx === currentPathIndex">
            <component :is="routeItm.contentComponent ?? Skeleton" />
        </LayoutNavItem>
        <LayoutNavItem :route-index="currentPathIndex" :route="routeList[currentPathIndex]" is-route-slot>
            <slot />
        </LayoutNavItem>
        <div v-if="isNavOpen" class="min-w-[50%] opacity-0 pointer-events-none"></div>
    </div>
</template>

<style scoped>
.masked-side {
    --mask-gradient: to left, transparent, black 30px calc(100% - 30px);
    -webkit-mask-image: linear-gradient(var(--mask-gradient));
    mask-image: linear-gradient(var(--mask-gradient));
}
</style>
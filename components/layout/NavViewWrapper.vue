<script setup lang="ts">
import Skeleton from '../pages/Skeleton.vue';


const scrollWrapper = ref();
const currentElement = ref();
const scrollPercentage = ref(0);

provide('scrollPercentage', scrollPercentage);

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


// return all routes before currentPathIndex
const routesBefore = computed(() => routeList.filter((_itm, idx) => idx < currentPathIndex.value));

// return current route with currentPathIndex
const currentRoute = computed(() => routeList.find((_itm, idx) => idx === currentPathIndex.value) ?? { path: "/" });

// return all routes after currentPathIndex
const routesAfter = computed(() => routeList.filter((_itm, idx) => idx > currentPathIndex.value));

const itemFraction = computed(() => (currentPathIndex.value + 1) / routeList.length);

const { translateValue, blurValue, scaleValue } = useNavScroll({ itemFraction, scrollPercentage });

const handleScroll = (evt: Event) => {
    const elm = evt.target as HTMLElement;

    if (!elm) return;
    scrollPercentage.value = elm.scrollLeft / elm.scrollWidth;
};

watchEffect(() => {
    // console.log(translateValue.value);
    if (isNavOpen.value && scrollWrapper.value && currentElement.value.componentRef) {

        // console.log(currentElement.value?.componentRef);

        nextTick(() => {
            currentElement.value.componentRef.scrollIntoView();
            const currentScrollLeftPosition = 0.2 * scrollWrapper.value.scrollWidth;
            // scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollLeft - currentScrollLeftPosition;
        });
    }
});

</script>

<template>
    <div class="flex flex-co flex-1 h-full overflow-y-hidden overflow-x-scroll no-scrollbar"
        :class="{ 'masked-side': isNavOpen }" ref="scrollWrapper" @scroll="handleScroll">
        <LayoutNavItem v-show="isNavOpen" v-for="(routeItm, idx) in routesBefore" :route-index="idx" :route="routeItm">
            <component :is="routeItm.contentComponent ?? Skeleton" />
        </LayoutNavItem>
        <!-- <div class="min-w-full sticky p-6 pb-0 rounded-3xl transition-al duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden border-[#ffffff07] flex-1 [&>div]:h-full [&>div]:overflow-hidden"
            :class="{ '[&>div]:pointer-events-none !duration-700 backdrop-blur-2xl bg-[#1F232Ddd] border shadow-3xl': isNavOpen }"
            :style="`translate: ${translateValue}% 0px; filter: blur(${blurValue}px); scale: ${scaleValue}; margin-left: ${marginValue}%; left: ${stickyLeftValue}%`"
            ref="currentElement" @click="isNavOpen && onNavClose && onNavClose()">
            <slot />
        </div> -->
        <LayoutNavItem ref="currentElement" :route-index="currentPathIndex" :route="currentRoute">
            <slot />
        </LayoutNavItem>
        <LayoutNavItem v-show="isNavOpen" v-for="(routeItm, idx) in routesAfter" :route-index="idx + currentPathIndex + 1"
            :route="routeItm">
            <component :is="routeItm.contentComponent ?? Skeleton" />
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
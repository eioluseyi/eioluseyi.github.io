<script setup lang="ts">

const scrollWrapper = ref();
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

const itemFraction = computed(() => (currentPathIndex.value + 0) / routeList.length);

const { translateValue, blurValue, scaleValue } = useNavScroll({ itemFraction, scrollPercentage });

const handleScroll = (evt: Event) => {
    const elm = evt.target as HTMLElement;

    if (!elm) return;
    scrollPercentage.value = elm.scrollLeft / elm.scrollWidth;
};

watchEffect(() => {
    if (isNavOpen.value && scrollWrapper.value) {

        nextTick(() => {
            const currentScrollLeftPosition = itemFraction.value * scrollWrapper.value.scrollWidth;
            scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollWidth - currentScrollLeftPosition;
        });
    }
});

</script>

<template>
    <div class="flex flex-col flex-1 h-full overflow-y-hidden overflow-x-scroll no-scrollbar" ref="scrollWrapper"
        @scroll="handleScroll">
        <div class="flex flex-1 h-full">
            <LayoutNavItem v-show="isNavOpen" v-for="(routeItm, idx) in routesBefore" :route-index="idx"
                :route="routeItm" />
            <div class="min-w-full p-6 pb-0 rounded-3xl transition-all duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden border-[#ffffff07] flex-1 [&>div]:h-full [&>div]:overflow-hidden"
                :class="{ '[&>div]:pointer-events-none absolute inset-0 !duration-700 backdrop-blur-2xl bg-[#1F232Ddd] border shadow-3xl': isNavOpen }"
                :style="`translate: ${translateValue}px 0px; filter: blur(${blurValue}px); scale: ${scaleValue}`"
                @click="isNavOpen && onNavClose && onNavClose()">
                <slot />
            </div>
            <!-- <LayoutNavItem :route-index="currentPathIndex" :route="currentRoute" /> -->
            <LayoutNavItem v-show="isNavOpen" v-for="(routeItm, idx) in routesAfter"
                :route-index="idx + currentPathIndex + 1" :route="routeItm" />
            <div v-if="isNavOpen" class="min-w-[900%] opacity- 0 text-3xl z-10 text-white"></div>
        </div>
    </div>
</template>
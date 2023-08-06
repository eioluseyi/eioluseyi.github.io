<script setup lang="ts">
import Skeleton from "../pages/Skeleton.vue";

type Props = {
    routeIndex: number;
    route: RouteType;
}

const props = defineProps<Props>();

const componentRef = ref();

const router = useRouter();

const isNavOpen = inject<boolean>("isNavOpen");
const onNavClose = inject<() => void>("onNavClose");
const scrollPercentage = ref(inject<number>("scrollPercentage", 0));

const itemFraction = computed(() => (props.routeIndex + 1) / routeList.length);
const { translateValue, blurValue, scaleValue } = useNavScroll({ itemFraction, scrollPercentage });

const loadPage = () => {
    if (isNavOpen && onNavClose) {
        router.push(props.route.path);
        onNavClose();
    }
}

defineExpose({ componentRef });
</script>

<template>
    <div ref="componentRef"
        class="min-w-full sticky p-6 pb-0 rounded-3xl custom-transition-properties duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden border-[#ffffff07] flex-1 [&>div]:h-full [&>div]:overflow-hidden"
        :class="{ '[&>div]:pointer-events-none transition-all !duration-700 backdrop-blur-2xl bg-[#1F232DDD] left-0 ml-[-30%] border shadow-3xl': isNavOpen }"
        :style="`translate: ${translateValue}% 0px; filter: blur(${blurValue}px); scale: ${scaleValue}`" @click="loadPage">
        <!-- <component :is="route.contentComponent ?? Skeleton" /> -->
        <slot />
    </div>
</template>

<style scoped>
.custom-transition-properties {
    transition-property: backdrop-filter, background-color, border-width, box-shadow, translate, filter, scale, left;
}
</style>
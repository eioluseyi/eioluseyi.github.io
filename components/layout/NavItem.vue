<script setup lang="ts">
import { twMerge } from "tailwind-merge";

type Props = {
    routeIndex: number;
    route: RouteType;
    isCurrentRoute?: boolean;
    isRouteSlot?: boolean;
}

const props = defineProps<Props>();

const componentRef = ref();
const classes = ref("");
const isNavOpen = ref(inject<boolean>("isNavOpen"));
const onNavClose = inject<() => void>("onNavClose");
const scrollPercentage = ref(inject<number>("scrollPercentage", 0));

const router = useRouter();

const itemFraction = computed(() => (props.routeIndex + 1) / routeList.length);
const { translateValue, blurValue, scaleValue } = useNavScroll({ itemFraction, scrollPercentage });

const loadPage = () => {
    if (isNavOpen && onNavClose) {
        router.push(props.route.path);
        onNavClose();
    }
}

watchEffect(() => {
    classes.value = twMerge("");
    const hideClass = 'opacity-0 !p-0 !min-w-0 !max-w-0 !overflow-hidden';
    const showClass = 'opacity-100 min-[400px]:p-6 max-[400px]:p-4 pb-0 min-w-full max-w-full';
    const slotDefaultClass = '!absolute !duration-0 !m-0 border-0 !bg-transparent backdrop-blur-[0] [&>div]:pointer-events-auto inset-0 z-10';
    const defaultNavOpenClass = 'transition-all !duration-700 backdrop-blur-2xl bg-[#1F232DDD] left-0 ml-[-30%] border -shadow-lg';

    // Default setting for route slot
    if (props.isRouteSlot) classes.value = twMerge(classes.value, slotDefaultClass);


    // Two major states: NavOpen (isNaveOpen) and NavClosed (!isNaveOpen)
    // NavItem types: default (NavItem) | NavItem for current route (isCurrentRoute) | Item to show slot content (isRouteSlot)
    switch (isNavOpen.value) {
        case true:
            classes.value = twMerge(classes.value, defaultNavOpenClass);
            if (!props.isRouteSlot) classes.value = twMerge(classes.value, showClass);
            if (props.isRouteSlot) classes.value = twMerge(classes.value, hideClass, '!delay-0');
            break;

        case false:
            // Default NavItem
            if (!props.isRouteSlot && !props.isCurrentRoute) classes.value = twMerge(classes.value, hideClass, '!duration-100');
            if (props.isRouteSlot) classes.value = twMerge(classes.value, showClass, '!delay-300');

            if (props.isCurrentRoute) setTimeout(() => classes.value = twMerge(classes.value, hideClass), 330);
            break;

        default:
            break;
    }
})

defineExpose({ componentRef });
</script>

<template>
    <div ref="componentRef"
        class="min-w-full sticky min-[400px]:p-6 -shadow-zinc-900/30 max-[400px]:p-4 pb-0 rounded-3xl custom-transition-properties [&>div]:pointer-events-none duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden border-[#ffffff07] flex-1 [&>div]:h-full [&>div]:overflow-hidden"
        :class="classes" :style="`translate: ${translateValue}% 0px; filter: blur(${blurValue}px); scale: ${scaleValue}`"
        @click="loadPage">
        <slot />
    </div>
</template>

<style scoped>
.custom-transition-properties {
    transition-property: backdrop-filter, background-color, border-width, box-shadow, translate, filter, scale, opacity, width, left;
}
</style>
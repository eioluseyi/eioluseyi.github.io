<script setup lang="ts">

const router = useRouter();

const isNavOpen = inject<boolean>("isNavOpen");
const onNavClose = inject<() => void>("onNavClose");

const loadPage = () => {
    if (isNavOpen && onNavClose) {
        router.push("/motivation");
        onNavClose();
    }
}

</script>

<template>
    <div class="min-w-full translate-x-0 p-6 pb-0 rounded-3xl transition-all duration-300 ease-[cubic-bezier(0,1,0.7,1.02)] overflow-hidden border-[#ffffff07] flex-1 [&>div]:h-full [&>div]:overflow-hidden"
        :class="{ '[&>div]:pointer-events-none !duration-700 scale-[0.63] backdrop-blur-2xl blur-[1px] bg-[#1F232Ddd] border shadow-3xl': isNavOpen }"
        @click="loadPage">
        <LazyPagesMotivation />
    </div>
</template>
const useNavScroll = ({
  itemFraction,
  scrollPercentage,
}: {
  itemFraction: Ref<number>;
  scrollPercentage: Ref<number>;
}) => {
  const singleRouteFraction = 1 / routeList.length;

  const isNavOpen = ref(inject<boolean>("isNavOpen"));

  const scaleValue = computed(() => {
    if (!isNavOpen.value) return 1;

    const lowerLimit = 0.55;
    const differenceDistance = 0.1;
    const upperLimit = lowerLimit + differenceDistance;
    const delay = 200 * itemFraction.value;
    const xVal = (scrollPercentage.value + singleRouteFraction) * 100;
    const val = upperLimit - getY(xVal, differenceDistance, delay);

    return val;
  });

  const translateValue = computed(() => {
    if (!isNavOpen.value || itemFraction.value === 0) return 0;

    const val = scaleValue.value * 200 - 120;
    return val;
  });

  const blurValue = computed(() => {
    if (!isNavOpen.value || itemFraction.value === 1) return 0;

    const val = (6 - scaleValue.value * 10) * 10;

    if (val > 10) return 10;
    if (val < 0) return 0;

    return val;
  });

  return {
    translateValue,
    blurValue,
    scaleValue,
  };
};

export default useNavScroll;

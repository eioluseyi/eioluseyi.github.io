const useNavScroll = ({
  itemFraction,
  scrollPercentage,
}: {
  itemFraction: Ref<number>;
  scrollPercentage: Ref<number>;
}) => {
  const isNavOpen = ref(inject<boolean>("isNavOpen"));

  const scrollPercentageValue = computed<number>(
    () => 1 - 1 / scrollPercentage.value
  );

  const xPosition = computed(() => {
    if (!isNavOpen.value || itemFraction.value === 1) return 0;

    return 5 * (scrollPercentage.value + itemFraction.value * 1);
  });

  const translateValue = computed(
    () => (6000 * xPosition.value ** 10) / (xPosition.value ** 10 + 590000000)
  );

  const blurValue = computed(() => {
    if (!isNavOpen.value || itemFraction.value === 1) return 0;

    const val = 20 / translateValue.value;

    if (val > 10) return 10;
    if (val < 0) return 0;

    return val;
  });

  const scaleValue = computed(() => {
    if (!isNavOpen.value) return 1;

    const lowerLimit = 0.5;
    const differenceDistance = 0.2;
    const percentageChange = scrollPercentage.value * differenceDistance;

    return lowerLimit + percentageChange;
  });

  return { translateValue, blurValue, scaleValue };
};

export default useNavScroll;

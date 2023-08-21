const useIsTouchScreen = () => {
  const isTouchScreen = ref(false);

  onMounted(() => {
    if (!window) return false;
    isTouchScreen.value =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });
  return isTouchScreen;
};

export default useIsTouchScreen;

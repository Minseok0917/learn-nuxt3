export async function useAsyncNavigation() {
    const navigationHandler = () => fetchContentNavigation();
    const response = await useAsyncData("navigation", navigationHandler);
    return { navigation: response.data };
}

<template>
    <div>
        <router-view name="header"></router-view>

        <router-view class="bg-gray-200 container-fluid"></router-view>

        <router-view name="footer" class="bg-gray-200"></router-view>
    </div>

</template>

<script>
export default {
  name: "AppContainer",
};
</script>

<style lang="scss">
* {
  color: $purples;
}
</style>

<template>
    <div>
        <div>
            <div class="flex flex-wrap">

                <router-view name="sidebar"></router-view>

                <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen">
                    <router-view name="header"></router-view>
                        <div class="p-6 bg-gray-100 mb-20">
                            <router-view />
                        </div>
                    <router-view name="footer"></router-view>
                </div>
            </div>
        </div>

        <router-view name="footer" class="bg-gray-200"></router-view>
    </div>

</template>

<style lang="scss">
* {
  color: $purples;
}
</style>

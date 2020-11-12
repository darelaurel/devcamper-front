<template>
    <div>
        <div
        class="w-full md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
        :class="sideBarOpen ? 'block' : 'hidden'"
        >
            <div class="w-full h-20 border-b flex px-4 items-center mb-8">
                <p class="font-semibold text-3xl text-blue-400 pl-4">DEVCAMPER</p>
            </div>

            <div class="mb-4 px-4">

                <div  class="w-full flex items-center text-blue-400 h-10 mb-1 pl-4 bg-gray-200 hover:bg-gray-200    rounded-lg cursor-pointer">
                    <span class="text-gray-700">Dashboard</span>
                </div>

                <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
                >
                    <span class="text-gray-700">Analytics</span>
                </div>

                <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
                >
                <span class="text-gray-700">Inventory</span>
                </div>

                <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
                >
                
                <span class="text-gray-700">Enquiries</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapGetters({ sideBarOpen: "sidebar/sideBarOpen" }),
  },
};
</script>

<style>
</style>
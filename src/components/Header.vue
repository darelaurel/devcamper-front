<template>
    <div>
        <header class="bg-white z-10 w-full">
            <nav class="container mx-auto px-8 flex flex-wrap justify-between items-center py-6">
                <div class="mb-0 lg:mb-6 xl:mb-0">
                    <router-link :to="`/${$i18n.locale}`" class="font-bold text-xl flex items-end">
                        <span class="text-gray-500">Devcamper</span>
                    </router-link>
                </div>
                <div class="block lg:hidden">
                <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
                    <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
                </button>
                </div>
                <ul class="uppercase tracking-wide w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8  lg:mt-0" :class="menuOpen ? 'block': 'hidden'">
                    <li class="mr-8 mb-6 lg:mb-0 text-center">
                        <router-link :to="`/${$i18n.locale}/about`" class="text-copy-primary hover:text-gray-600">About</router-link>
                    </li>
                    <li class="mr-8 mb-6 lg:mb-0 text-center">
                        <router-link :to="`/${$i18n.locale}/pricing`" class="text-copy-primary hover:text-gray-600">Pricing</router-link>
                    </li>
                    <li class="mr-8 mb-6 lg:mb-0 text-center">
                        <router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">Contact</router-link>
                    </li>
                    <li class="mr-8 mb-6 lg:mb-0 text-center">
                        <router-link :to="`/${$i18n.locale}/login`" class="text-copy-primary hover:text-gray-600">Login</router-link>
                    </li>
                    <li class="mr-8 mb-6 lg:mb-0 text-center">
                        <router-link :to="`/${$i18n.locale}/register`" class="text-copy-primary hover:text-gray-600">Register</router-link>
                    </li>
                    <li class="mb-4 lg:mb-0 text-center">
                        <lang-switcher />
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>
<script>
import LangSwitcher from '@/components/LangSwitcher.vue'
export default {
    data() {
        return {
        menuOpen: false,
        }
    },
    components:{
        "lang-switcher":LangSwitcher
    },
    methods: {
        toggleMenu() {
        this.menuOpen = !this.menuOpen
        }
    }
}
</script>

<style lang="scss">

</style>
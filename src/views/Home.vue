<template>
    <div>
        <pricing/>
    </div>
</template>

<script>
import Pricing from '@/views/Pricing.vue'
export default {
    data(){
        return{
            activePlan:""
        }
    },
    components:{
        "pricing":Pricing
    }
}
</script>

<style lang="scss">

</style>
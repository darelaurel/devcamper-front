<template>
  <div>
    <router-view name="header">

    </router-view>

    <router-view name="footer">

    </router-view>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
*
{
  color:$purples;
}
</style>

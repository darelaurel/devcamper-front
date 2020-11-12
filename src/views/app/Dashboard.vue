<template>
    <div id="home">

        <!-- breadcrumb -->
            <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
              <ol class="list-none p-0 inline-flex">
                <li class="flex items-center text-blue-500">
                  <a href="#" class="text-gray-700">Home</a>
                  
                </li>
                <li class="flex items-center">
                  <a href="#" class="text-gray-600">Dashboard</a>
                </li>
              </ol>
            </nav>
            <!-- breadcrumb end -->

            <div class="lg:flex justify-between items-center mb-6">
              <p class="text-2xl font-semibold mb-2 lg:mb-0">Good afternoon, Joe!</p>
              <button class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Logs</button>
            </div>

            <div class="flex flex-wrap mb-20">

              <div class="w-1/2 xl:w-1/4 ">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">237</p>
                    <p>Products Sold</p>
                  </div>

                </div>
              </div>

              <div class="w-1/2 xl:w-1/4 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">177</p>
                    <p>Product Reviews</p>
                  </div>
                </div>
              </div>

              <div class="w-1/2 xl:w-1/4 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                  

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">31</p>
                    <p>New Enquiries</p>
                  </div>
                </div>
              </div>

              <div class="w-1/2 xl:w-1/4 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                 
                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">1,653</p>
                    <p>Product Views</p>
                  </div>

                </div>
              </div>

            </div>

    </div>
</template>
<script>
export default {

}
</script>

<style>

</style>
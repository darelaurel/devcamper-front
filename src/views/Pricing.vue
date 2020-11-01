<template>
	<div class="w-full">
		<div>
			<h3 class="text-center py-3 text-3xl">PRICING</h3>
		</div>
		<table class="hidden lg:block w-full text-base border-separate lg:mx-auto lg:w-11/12">
		<thead>
			<tr>
				<th class=" w-1/5 text-center font-normal align-top px-4 py-6 sticky top-0
				border border-gray-300 ">
					<div class="font-semibold">
						<div class="toggleBox ">
							<input type="checkbox" v-model="isMonthly">
						</div>
					</div>
					<div class="text-black-600 text-sm mt-6">Save up to 20% by paying annually.</div>
				</th>
				<th class="w-1/5 text-center font-normal px-4 py-6 sticky top-0 border border-gray-300">
						<div class="uppercase tracking-wide font-bold text-gray-700">Free</div>
						<div class="mt-3">
						<span class="font-bold text-4xl ml-1">
							{{ !isMonthly ? plans.free.price.perYear : plans.free.price.perMonth }}$
						</span>
						<span class="text-xl">
							{{ !isMonthly ? "/ year" : "/ month"}}
						</span>
						</div>
					
				</th>
				<th class="w-1/5 text-center font-normal px-4 py-6 sticky top-0 border border-gray-300">
						<div class="uppercase tracking-wide font-bold text-gray-700">Basic</div>
						<div class="mt-3">
						<span class="font-bold text-4xl ml-1">
							{{ !isMonthly ? plans.basic.price.perYear : plans.basic.price.perMonth }}$
						</span>
						<span class="text-xl">
							{{ !isMonthly ? "/ year" : "/ month"}}
						</span>
						</div>
					
				</th>
				<th class="w-1/5 text-center font-normal px-4 py-6 sticky top-0 border border-gray-300">
						<div class="uppercase tracking-wide font-bold text-gray-700">Premium</div>
						<div class="mt-3">
						<span class="font-bold text-4xl ml-1">
							{{ !isMonthly ? plans.premium.price.perYear : plans.premium.price.perMonth }}$
						</span>
						<span class="text-xl">
							{{ !isMonthly ? "/ year" : "/ month"}}
						</span>
						</div>
					
				</th>
				<th class="w-1/5 text-center font-normal px-4 py-6 sticky top-0 border border-gray-300">
						<div class="uppercase tracking-wide font-bold text-gray-700">Business</div>
						<div class="mt-3">
						<span class="font-bold text-4xl ml-1">
							{{ !isMonthly ? plans.business.price.perYear : plans.business.price.perMonth }}$
						</span>
						<span class="text-xl">
							{{ !isMonthly ? "/ year" : "/ month"}}
						</span>
						</div>
					
				</th>
				
			</tr>
		</thead>

		<tbody>
			<tr >
				<td class="border border-gray-300 text-left px-4 py-6">Bootcamps</td>
				<td class="border border-gray-300 text-center px-4 py-6">1</td>
				<td class="border border-gray-300 text-center px-4 py-6">5</td>
				<td class="border border-gray-300 text-center px-4 py-6">15</td>
				<td class="border border-gray-300 text-center px-4 py-6">25</td>
			</tr>
			<tr >
				<td class="border border-gray-300 text-left px-4 py-6">Courses</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="text-lg font-semibold">10</div>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="text-lg font-semibold">22</div>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="text-lg font-semibold">35</div>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="text-lg font-semibold">50</div>
				</td>
			</tr>
			<tr >
				<td class="border border-gray-300 text-left px-4 py-6">API Call</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<span class="text-xl">100</span>
					<span class="text-sm">/hour</span>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<span class="text-xl">200</span>
					<span class="text-sm">/hour</span>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<span class="text-xl">350</span>
					<span class="text-sm">/hour</span>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<span class="text-xl">500</span>
					<span class="text-sm">/hour</span>
				</td>
			</tr>
			<tr >
				<td class="border border-gray-300 text-left px-4 py-6">Support</td>
				<td class="border border-gray-300 text-center px-4 py-6"></td>
				
				<td class="border border-gray-300 text-center px-4 py-6">
					<svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
				</td>
			</tr>
			<tr >
				<td class="border border-gray-300 text-left px-4 py-6">API Call</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="mt-3">
						<a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up
						</a>
					</div>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="mt-3">
						<a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up
						</a>
					</div>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="mt-3">
						<a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up
						</a>
					</div>
				</td>
				<td class="border border-gray-300 text-center px-4 py-6">
					<div class="mt-3">
						<a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up
						</a>
					</div>
				</td>
			</tr>
		</tbody>
		</table>

		<div class="mobile-table mx-4 md:mx-32 mt-16 lg:hidden">
		<div class="text-center border border-gray-300 text-base">
			<div class="bg-gray-300 px-4 py-4">
			<div class="uppercase tracking-wide font-bold text-gray-700">Free</div>
				<div class="mt-3">
				
				<span class="font-bold text-4xl ml-1">
					{{ !isMonthly ? plans.free.price.perYear : plans.free.price.perMonth }}
				</span>
				<span class="text-sm">
					{{ !isMonthly ? '/month' : '/year'}}
				</span>
				</div>
			</div>
			<div class="odd:even:bg-white flex px-3 py-4">
			<div class="text-left w-3/5">Shipping Discount</div>
			<div class="w-2/5">3</div>
			</div>
			<div class="odd:even:bg-white flex px-3 py-4">
			<div class="text-left w-3/5">Shipping Discount</div>
			<div class="w-2/5">3</div>
			</div>
			<div class="odd:even:bg-white flex px-3 py-4">
			<div class="text-left w-3/5">Shipping Discount</div>
			<div class="w-2/5">3</div>
			</div>
			<div class="odd:even:bg-white flex px-3 py-4">
			<div class="text-left w-3/5">Shipping Discount</div>
			<div class="w-2/5">3</div>
			</div>
			<div class="odd:even:bg-white px-3 py-4">
			<ul class="leading-loose">
				<li class="flex items-center">
				<svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
				<span class="ml-2">Free Custom Domain</span>
				</li>
				<li class="flex items-center">
				<svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
				<span class="ml-2">SSL Security</span>
				</li>
				<li class="flex items-center">
				<svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
				<span class="ml-2">Unlimited Bandwidth</span>
				</li>
				<li class="flex items-center">
				<svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
				<span class="ml-2">SEO Features</span>
				</li>
			</ul>
			</div>
			<div class="odd:even:bg-white px-3 py-4">
			<div class="">
				<a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-64 px-4 py-3">Sign Up</a>
			</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isMonthly: true,
      plans: {
        free: {
          price: {
            perYear: 0,
            perMonth: 0,
          }
        },
        basic: {
          price: {
            perYear: 50,
            perMonth: 5,
          }
        },
        premium: {
          price: {
            perYear: 100,
            perMonth: 12,
          }
        },
        business: {
          price: {
            perYear: 180,
            perMonth: 20,
          }
        },
      }
    }
  }
}
</script>

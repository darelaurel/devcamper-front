<template>
	<div class="flex min-h-screen">
		<div class="xl:w-2/5 lg:w-2/5 md:w-2/4 sm:w-full bg-white flex items-center">
			<div class="border border-gray-400 w-3/4 mx-auto">
				<div class="bg-gray-200 text-center px-4 py-8">
					<p>{{$tc('login.title')}}</p>
				</div>
				<div class="w-full mx-auto">
					<form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
								Email
							</label>
							<input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="email"
							v-model="email">
						</div>
						<div class="mb-6">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
								{{$tc('login.password')}}
							</label>
							<input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="password" type="password"
							v-model="password">
							
						</div>
						<div class="flex items-center justify-between">
							<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button" @click="login">
								{{$tc('login.sign')}}
							</button>
							<a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
								{{$tc('login.forget')}}
							</a>
						</div>
					</form>
				</div>
			</div>
				
			
		</div>
		<div class="xl:w-3/5 lg:w-3/5 bg-blue-600 md:w-2/4 bg-white xl:block lg:block md:block sm:hidden">
			
		</div>
	</div>
 
</template>

<script>

export default {
  name: 'Login',
  data(){
	return{
		email:"",
		password:""
	}
  },
  methods:{
	login(){
		this.$loader(true,this.$route.params.lang)
		this.$store.dispatch('auth/login',{
			email:this.email,
			password:this.password
		}).then(()=>{
			this.$loader(false,this.$route.params.lang)
			this.$router.push({name:'dashboard'})
		}).catch((error)=>{
			this.$loader(false,this.$route.params.lang)
			console.log(error)
		})
	}
  }
}
</script>

<style lang="scss">
*
{
  color:$purples;
}
</style>

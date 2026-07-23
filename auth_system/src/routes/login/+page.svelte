<script>
	let { form } = $props();
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
	<div class="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
		<h1 class="text-3xl font-bold text-center">Welcome Back</h1>
		<p class="text-center text-gray-500 mt-2">
			Sign in to your account
		</p>

		<form method="POST" class="mt-8 space-y-5">
			<div>
				<label class="block mb-1 text-sm font-medium">
					Email
				</label>

				<input
					type="email"
					name="email"
					value={form?.values?.email ?? ""}
					class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				{#if form?.errors?.email}
					<p class="mt-1 text-sm text-red-500">
						{form.errors.email[0]}
					</p>
				{/if}
			</div>

			<div>
				<label class="block mb-1 text-sm font-medium">
					Password
				</label>

				<input
					type="password"
					name="password"
					class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				{#if form?.errors?.password}
					<p class="mt-1 text-sm text-red-500">
						{form.errors.password[0]}
					</p>
				{/if}
			</div>

			<div class="flex justify-end">
				<a
					href="/forgot-password"
					class="text-sm text-blue-600 hover:underline"
				>
					Forgot Password?
				</a>
			</div>

			<button
				type="submit"
				class="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
			>
				Login
			</button>
		</form>

		<p class="mt-6 text-center text-sm">
			Don't have an account?

			<a
				href="/register"
				class="text-blue-600 hover:underline"
			>
				Register
			</a>
		</p>
	</div>
</div>
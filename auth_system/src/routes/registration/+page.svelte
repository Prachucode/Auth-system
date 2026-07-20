<script>
	let { form } = $props();
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
	<div class="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
		<h1 class="mb-2 text-center text-3xl font-bold">Create Account</h1>
		<p class="mb-6 text-center text-gray-500">
			Register to continue
		</p>

		<form method="POST" class="space-y-5">
			<!-- Name -->
			<div>
				<label for="name" class="mb-1 block text-sm font-medium">
					Full Name
				</label>

				<input
					id="name"
					name="name"
					type="text"
					placeholder="John Doe"
					value={form?.values?.name ?? ''}
					class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
				/>

				{#if form?.errors?.name}
					<p class="mt-1 text-sm text-red-500">
						{form.errors.name}
					</p>
				{/if}
			</div>

			<!-- Email -->
			<div>
				<label for="email" class="mb-1 block text-sm font-medium">
					Email
				</label>

				<input
					id="email"
					name="email"
					type="email"
					placeholder="john@example.com"
					value={form?.values?.email ?? ''}
					class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
				/>

				{#if form?.errors?.email}
					<p class="mt-1 text-sm text-red-500">
						{form.errors.email}
					</p>
				{/if}
			</div>

			<!-- Password -->
			<div>
				<label for="password" class="mb-1 block text-sm font-medium">
					Password
				</label>

				<input
					id="password"
					name="password"
					type="password"
					placeholder="********"
					class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
				/>

				{#if form?.errors?.password}
					<p class="mt-1 text-sm text-red-500">
						{form.errors.password}
					</p>
				{/if}
			</div>

			<!-- Confirm Password -->
			<div>
				<label for="confirmPassword" class="mb-1 block text-sm font-medium">
					Confirm Password
				</label>

				<input
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					placeholder="********"
					class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
				/>

				{#if form?.errors?.confirmPassword}
					<p class="mt-1 text-sm text-red-500">
						{form.errors.confirmPassword}
					</p>
				{/if}
			</div>

			<button
				type="submit"
				class="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
			>
				Register
			</button>
		</form>

		<p class="mt-6 text-center text-sm text-gray-600">
			Already have an account?
			<a href="/login" class="font-medium text-blue-600 hover:underline">
				Login
			</a>
		</p>
	</div>
</div>
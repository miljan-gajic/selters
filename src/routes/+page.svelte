<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1">Karate Klub Selters</h1>
		<Avatar src="https://i.pravatar.cc/" fontSize={12} />

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<section>
			<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
			<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
			<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
		</section>

		<div class="card">
			<header class="card-header">(header)</header>
			<section class="p-4">(content)</section>
			<footer class="card-footer">(footer)</footer>
		</div>
	</div>
</div>

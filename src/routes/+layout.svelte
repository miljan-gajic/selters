<script lang="ts">
	import { AppBar, AppShell, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import NavItems from '$lib/components/NavItems.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<Avatar src="https://i.pravatar.cc/" fontSize={12} />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<NavItems />
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<svelte:options immutable />

<script lang="ts">
	import PublicNav from './PublicNav.svelte';
	import PublicFooter from './PublicFooter.svelte';
</script>

<div class="">
	<PublicNav />
	<slot />
	<div>
		<PublicFooter />
	</div>
</div>

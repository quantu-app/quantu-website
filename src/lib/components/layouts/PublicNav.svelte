<svelte:options immutable />

<script lang="ts">
	import { _ } from "svelte-i18n";
</script>

<div class="fixed w-full">
	<div class="">
		<a class="text-xl p-2 bg-white hover:bg-white rounded-full mx-8" href="/">
			<img
				src="https://raw.githubusercontent.com/quantu-app/design-platform/master/branding/logo/1x/logo-matrix-symmetric.png"
				alt="[Q]"
				width="34"
				height="34"
			/>
		</a>
	</div>
	<div class="">
		<a class="btn btn-black btn-compact">{$_('layouts.nav.get_started')}</a>
	</div>
</div>
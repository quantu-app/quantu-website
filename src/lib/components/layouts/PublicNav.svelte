<svelte:options immutable />

<script lang="ts">
	import { _ } from "svelte-i18n";
</script>

<header aria-label="Site Header" class="bg-black">
	<div class="mx-auto max-w-screen-lg px-2 sm:px-4 lg:px-6">
		<div class="flex h-16 items-center justify-between">
			<div class="flex flex-row">
				<a class="flex text-xl p-2 bg-white hover:bg-white rounded-full mr-2" href="/">
					<img
						src="https://raw.githubusercontent.com/quantu-app/design-platform/master/branding/logo/1x/logo-matrix-symmetric.png"
						alt="[Q]"
						width="34"
						height="34"
					/>
				</a>
				<div class="text-2xl text-white align-middle mt-2 font-bold">Quantu</div>
			</div>
			<div class="">
				<a href="https://quantu-app.github.io/quantu-ui" 
					class="btn btn-black">{$_('layouts.nav.get_started')}</a>
			</div>
		</div>
	</div>
</header>
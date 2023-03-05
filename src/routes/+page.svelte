<script lang="ts">
	import PublicLayout from '$lib/components/layouts/PublicLayout.svelte';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>{$_("home.page_title")}</title>
</svelte:head>

<PublicLayout>
	<div class="bg-black">
		<!-- Jumbotron -->
		<div class="container mx-auto text-white max-w-screen-lg">
			<div class="grid sm:grid-cols-2 sm:grid-flow-row gap-2 px-2 sm:px-4 lg:px-6 py-24">
				<div>
					<h1 class="text-5xl">{$_("home.jumbotron.title")}</h1>
					<p class="py-6 text-2xl">
						{$_("home.jumbotron.callout")}
					</p>
					<button type="button" class="btn btn-primary ">
									{$_("home.download_btn")}
								</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Details -->
	<div class="container mx-auto max-w-screen-lg">

		<div class="flex flex-col py-4 my-4 px-2 sm:px-4 lg:px-6">
			<!-- How its built -->
			<div class="w-full my-5">
				<h2 class="text-5xl font-bold">{$_('home.how_its_built.header')}</h2>
			</div>
			<div class="w-full flex flex-col my-20">
				<div class="flex flex-row mb-20">
					<img
						src="https://github.com/quantu-app/design-platform/raw/master/app/resources/homepage/hand-crafted.png"
						alt="Hand Crafted"
						class="w-[150px] mr-6"
					/>
					<div>
						<h2 class="font-bold my-5 text-3xl">Hand-crafted to build mastery</h2>
						<p class="mb-5 text-xl">
							Quantu uses state-of-the-art research in learning science to craft lessons that stick deep
							in your memory.
						</p>
					</div>
				</div>
				<div class="flex flex-row mb-20">
					<img
						src="https://github.com/quantu-app/design-platform/raw/master/app/resources/homepage/for-learners.png"
						alt="For Learners"
						class="w-[150px] mr-6"
					/>
					<div>
						<h2 class="font-bold my-5 text-3xl">For learners by learners</h2>
						<p class="mb-5 text-xl">
							Our community of volunteers design and develop lessons that make it easier for you to
							understand complex topics.
						</p>
					</div>
				</div>
			</div>
			
			<!-- Build Expertise -->
			<div>
				<div class="w-full pb-5 my-5">
					<h2 class="text-5xl font-bold">Build Expertise Easily</h2>
				</div>
				<div class="w-full grid grid-cols-2 gap-10 sm:20 lg:gap-28 my-20">
					<div class="text-center">
						<img
							src="https://github.com/quantu-app/design-platform/raw/master/app/resources/homepage/decision_tree.png"
							alt="Decision Tree"
						/>
					</div>
					<div class="">
						<h2 class="font-bold text-3xl mb-3">Make Math Stick</h2>
						<p class="mb-5 text-xl">Learn advanced math concepts and anchor them deep in your memory.</p>

						<h2 class="font-bold text-3xl mb-3 pt-4">Refine Your Skills</h2>
						<p class="mb-5 text-xl">Develop your abilities in math through guided and interactive lessons.</p>

						<h2 class="font-bold text-3xl mb-3 pt-4">Learn On Your Terms</h2>
						<p class="mb-5 text-xl">Master any topic at your own pace, fast or slow, no deadlines, no pressure.</p>
					</div>
				</div>
			</div>
			
			<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 sm:20 lg:gap-28 my-20">
				<div class="align-items-center my-10 sm:my-0">
					<img
						src="https://github.com/quantu-app/design-platform/raw/master/app/resources/homepage/circle_and_line.png"
						alt="Circle and Line"
					/>
				</div>
				<div class="">
					<h2 class="font-bold text-3xl mb-3">Become a Prodigy with Quantu</h2>
					<p class="my-10 text-xl">Join and become a part of Quantu's community of lifelong-learners.</p>
					<a href="/" class="btn btn-primary" target="_blank">
						{$_('home.download_btn')}
					</a>
				</div>
			</div>
		</div>
	</div>
</PublicLayout>

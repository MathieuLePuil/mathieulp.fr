<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const contactForm = ref(null);

const isSubmitting = ref(false);

const getCurrentYear = () => {
	return new Date().getFullYear();
};

const submitForm = () => {
	isSubmitting.value = true;

	const serviceID = "service_tafcc6f";
	const templateID = "template_obzu7bz";

	if (contactForm.value) {
		emailjs
			.sendForm(serviceID, templateID, contactForm.value)
			.then(() => {
				isSubmitting.value = false;

				alert("Le mail a bien été envoyé !");
			})
			.catch((err) => {
				isSubmitting.value = false;

				alert(JSON.stringify(err));
			});
	}
};
</script>

<template>
	<section
		id="contact"
		class="h-m-screen lg:!h-screen pt-[8vh] lg:!pt-0 pb-20 flex flex-col justify-around z-20 lg:!w-full"
	>
		<div class="flex items-center pb-20 lg:pb-0">
			<h2
				class="h2 text-xl sm:text-3xl mt-10 lg:!text-6xl ml-[10%] text-white font-bold text-center"
			>
				Contact
			</h2>
		</div>
		<div class="z-20 h-full flex flex-col w-full justify-between">
			<form
				@submit.prevent="submitForm"
				ref="contactForm"
				id="form"
				method="POST"
				class="mx-auto mt-10 max-w-xl sm:mt-20 w-full"
			>
				<div class="w-full">
					<div class="w-full flex flex-col justify-center">
						<label
							for="name"
							class="block text-sm font-semibold leading-6 text-white px-4 lg:!px-0 ml-[8%] lg:ml-0"
							>{{ $t("name") }}</label
						>
						<div class="mt-1 w-full flex justify-center">
							<input
								v-model="name"
								type="text"
								name="name"
								id="name"
								autocomplete="name"
								class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0"
							/>
						</div>
					</div>
					<div class="mt-2 w-full flex flex-col justify-center">
						<label
							for="email"
							class="block text-sm font-semibold leading-6 text-white px-4 lg:!px-0 ml-[8%] lg:ml-0 mt-1"
							>Email</label
						>
						<div class="mt-1 w-full flex justify-center">
							<input
								v-model="email"
								type="email"
								name="email"
								id="email"
								autocomplete="email"
								class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0"
								required
							/>
						</div>
					</div>
					<div class="mt-2 w-full flex flex-col justify-center">
						<label
							for="phone"
							class="block text-sm font-semibold leading-6 text-white px-4 lg:!px-0 ml-[8%] lg:ml-0 mt-1"
							>{{ $t("phone") }}</label
						>
						<div class="mt-1 w-full flex justify-center">
							<input
								v-model="phone"
								type="number"
								name="phone"
								id="phone"
								autocomplete="tel"
								class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0"
							/>
						</div>
					</div>
					<div class="w-full flex flex-col justify-center">
						<label
							for="message"
							class="block text-sm font-semibold leading-6 text-white px-4 lg:!px-0 ml-[8%] lg:ml-0 mt-2"
							>Message</label
						>
						<div class="mt-1 w-full flex justify-center">
							<textarea
								v-model="message"
								name="message"
								id="message"
								rows="4"
								class="block w-[80%] lg:!w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-4 lg:!mx-0"
							></textarea>
						</div>
					</div>
				</div>
				<div class="mt-10 flex justify-center">
					<button
						type="submit"
						class="block max-w-[80%] lg:!max-w-full w-full rounded-md bg-purple-200 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:!bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-105 transition-all duration-200 ease"
					>
						{{ isSubmitting ? "Chargement..." : "Envoyer" }}
					</button>
				</div>
			</form>
			<div class="w-full flex justify-center mt-16">
				<p class="text-xs sm:text-sm text-white text-center mx-3">
					&copy; {{ getCurrentYear() }} - {{ $t("footer") }} - Mathieu Le Puil |
					<router-link
						to="/mentions-legales"
						class="text-xs sm:text-sm hover:underline"
						>{{ $t("mentions") }}</router-link
					>
				</p>
			</div>
		</div>
	</section>
</template>

<template>
  <div class="bg-light-yellow rounded-2xl shadow-xl shadow-gray-600 px-10 py-4 flex flex-col gap-2">
    <h2 class="text-black self-center text-2xl sm:text-4xl italic">Education and Experience</h2>
    <h2 class="responsive-data">
      University<span class="responsive-values">{{ user?.university }}</span>
    </h2>
    <h2 class="responsive-data">
      Job Title<span class="responsive-values">{{ user?.company?.title }}</span>
    </h2>
    <h2 class="responsive-data">
      Company<span class="responsive-values">{{ user?.company?.name }}</span>
    </h2>
    <h2 class="responsive-data">
      Department<span class="responsive-values">{{ user?.company?.department }}</span>
    </h2>
    <h2 class="responsive-blocks">
      <span class="text-center">Company Address</span>
      <div class="flex justify-between">
        <span class="text-2xl sm:text-3xl">Street</span>
        <span class="responsive-values">{{ user?.company?.address.address }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-2xl sm:text-3xl">City</span>
        <span class="responsive-values">{{ user?.company?.address.city }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-2xl sm:text-3xl">State</span>
        <span class="responsive-values">{{ user?.company?.address.state }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-2xl sm:text-3xl">Postal Code</span>
        <span class="responsive-values">{{ user?.company?.address.postalCode }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-2xl sm:text-3xl">Lat</span>
        <span class="responsive-values">{{ user?.company?.address.coordinates.lat }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-2xl sm:text-3xl">Lng</span>
        <span class="responsive-values">{{ user?.company?.address.coordinates.lng }}</span>
      </div>
    </h2>
  </div>
</template>
<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

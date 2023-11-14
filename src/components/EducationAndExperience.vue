<template>
  <div class="bg-light-yellow rounded-2xl shadow-xl shadow-gray-600 px-10 py-4 flex flex-col gap-2">
    <h2 class="text-black self-center text-4xl italic">Education and Experience</h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      University<span class="text-4xl">{{ user?.university }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Job Title<span class="text-4xl">{{ user?.company?.title }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Company<span class="text-4xl">{{ user?.company?.name }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Department<span class="text-4xl">{{ user?.company?.department }}</span>
    </h2>
    <h2
      class="text-black text-3xl flex justify-between flex-col border-2 border-black p-1 rounded-2xl mb-2"
    >
      <span class="text-center">Company Address</span>
      <div class="flex justify-between">
        <span class="text-3xl">Street</span>
        <span class="text-4xl">{{ user?.company?.address.address }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-3xl"><Cc:noie></Cc:noie>ity</span>
        <span class="text-4xl">{{ user?.company?.address.city }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-3xl">State</span>
        <span class="text-4xl">{{ user?.company?.address.state }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-3xl">Postal Code</span>
        <span class="text-4xl">{{ user?.company?.address.postalCode }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-3xl">Lat</span>
        <span class="text-4xl">{{ user?.company?.address.coordinates.lat }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-3xl">Lng</span>
        <span class="text-4xl">{{ user?.company?.address.coordinates.lng }}</span>
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

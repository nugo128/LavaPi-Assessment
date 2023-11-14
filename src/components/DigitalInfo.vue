<template>
  <div class="bg-light-yellow rounded-2xl shadow-xl shadow-gray-600 px-10 py-4 flex flex-col gap-2">
    <h2 class="text-black self-center text-4xl italic">Digital Information</h2>
    <h2
      class="text-black text-3xl flex justify-between flex-col border-2 border-black p-1 rounded-2xl mb-2"
    >
      <span class="text-center">Bank</span>
      <div class="flex justify-between gap-12">
        <span class="text-3xl">Card Number</span>
        <span class="text-4xl">{{ user?.bank?.cardNumber }}</span>
      </div>
      <div class="flex justify-between gap-12">
        <span class="text-3xl">Card Type</span>
        <span class="text-4xl">{{ user?.bank?.cardType }}</span>
      </div>
      <div class="flex justify-between gap-12">
        <span class="text-3xl">Currency</span>
        <span class="text-4xl">{{ user?.bank?.currency }}</span>
      </div>
      <div class="flex justify-between gap-12">
        <span class="text-3xl">Card Expire</span>
        <span class="text-4xl">{{ user?.bank?.cardExpire }}</span>
      </div>
      <div class="flex justify-between gap-24">
        <span class="text-3xl">IBAN</span>
        <span class="text-4xl">{{ user?.bank?.iban }}</span>
      </div>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Domain<span class="text-4xl">{{ user?.domain }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      EIN<span class="text-4xl">{{ user?.ein }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Email<span class="text-4xl">{{ user?.email }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      IP Address<span class="text-4xl">{{ user?.ip }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Mac Address<span class="text-4xl">{{ user?.macAddress }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Username<span class="text-4xl">{{ user?.username }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Password<span class="text-4xl">{{ user?.password }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      Phone Number<span class="text-4xl">{{ user?.phone }}</span>
    </h2>
    <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
      SSN<span class="text-4xl">{{ user?.ssn }}</span>
    </h2>
    <h2
      class="text-black text-3xl flex justify-between flex-col border-2 border-black p-1 rounded-2xl mb-2"
    >
      <span class="text-center">User Agent</span>
      <div class="flex justify-between">
        <span class="text-4xl">{{ user?.userAgent }}</span>
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

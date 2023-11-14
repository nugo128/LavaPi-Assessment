<template>
  <div class="bg-light-yellow rounded-2xl shadow-xl shadow-gray-600 px-10 py-4 flex flex-col gap-2">
    <h2 class="text-black self-center text-2xl sm:text-4xl italic">Digital Information</h2>
    <h2 class="responsive-blocks">
      <span class="text-center">Bank</span>
      <div class="flex justify-between sm:gap-12">
        <span class="text-2xl sm:text-3xl">Card Number</span>
        {{ user?.bank?.cardNumber }}
      </div>
      <div class="flex justify-between gap-12">
        <span class="text-2xl sm:text-3xl">Card Type</span>
        <span class="responsive-values">{{ user?.bank?.cardType }}</span>
      </div>
      <div class="flex justify-between gap-12">
        <span class="text-2xl sm:text-3xl">Currency</span>
        <span class="responsive-values">{{ user?.bank?.currency }}</span>
      </div>
      <div class="flex justify-between gap-12">
        <span class="text-2xl sm:text-3xl">Card Expire</span>
        <span class="responsive-values">{{ user?.bank?.cardExpire }}</span>
      </div>
      <div class="flex justify-between gap-24">
        <span class="text-2xl sm:text-3xl">IBAN</span>
        <span class="responsive-values">{{ user?.bank?.iban }}</span>
      </div>
    </h2>
    <h2 class="responsive-data">
      Domain<span class="responsive-values">{{ user?.domain }}</span>
    </h2>
    <h2 class="responsive-data">
      EIN<span class="responsive-values">{{ user?.ein }}</span>
    </h2>
    <h2 class="responsive-data">
      Email<span class="responsive-values">{{ user?.email }}</span>
    </h2>
    <h2 class="responsive-data">
      IP Address<span class="responsive-values">{{ user?.ip }}</span>
    </h2>
    <h2 class="responsive-data">
      Mac Address<span class="responsive-values">{{ user?.macAddress }}</span>
    </h2>
    <h2 class="responsive-data">
      Username<span class="responsive-values">{{ user?.username }}</span>
    </h2>
    <h2 class="responsive-data">
      Password<span class="responsive-values">{{ user?.password }}</span>
    </h2>
    <h2 class="responsive-data">
      Phone Number<span class="responsive-values">{{ user?.phone }}</span>
    </h2>
    <h2 class="responsive-data">
      SSN<span class="responsive-values">{{ user?.ssn }}</span>
    </h2>
    <h2 class="responsive-blocks">
      <span class="text-center">User Agent</span>
      <div class="flex justify-between">
        <span class="responsive-values">{{ user?.userAgent }}</span>
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

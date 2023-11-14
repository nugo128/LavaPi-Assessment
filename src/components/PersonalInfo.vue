<template>
  <div
    class="bg-light-yellow rounded-2xl shadow-xl shadow-gray-600 px-10 py-4 flex flex-col gap-6 w-max"
  >
    <h2 class="text-black self-center text-4xl italic">Personal Information</h2>
    <img :src="user?.image" alt="user image" class="mb-2 border-2 border-black rounded-3xl" />
    <div class="flex flex-col gap-5">
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        FirstName<span class="text-4xl">{{ user?.firstName }}</span>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        LastName<span class="text-4xl">{{ user?.lastName }}</span>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2 gap-10">
        MaidenName<span class="text-4xl">{{ user?.maidenName }}</span>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        Age<span class="text-4xl">{{ user?.age }}</span>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        Birth Date<span class="text-4xl">{{ user?.birthDate }}</span>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        Gender<span class="text-4xl">{{ user?.gender }}</span>
      </h2>
      <h2
        class="text-black text-3xl flex justify-between flex-col border-2 border-black p-1 rounded-2xl mb-2"
      >
        <span class="text-center">Address</span>
        <div class="flex justify-between gap-10">
          <span class="text-3xl">Street</span>
          <span class="text-4xl">{{ user?.address?.address }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-3xl">City</span>
          <span class="text-4xl">{{ user?.address?.city }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-3xl">State</span>
          <span class="text-4xl">{{ user?.address?.state }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-3xl">Postal Code</span>
          <span class="text-4xl">{{ user?.address?.postalCode }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-3xl">Lat</span>
          <span class="text-4xl">{{ user?.address?.coordinates.lat }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-3xl">Lng</span>
          <span class="text-4xl">{{ user?.address?.coordinates.lng }}</span>
        </div>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        Height<span class="text-4xl">{{ user?.height }} cm</span>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        Weight<span class="text-4xl">{{ user?.weight }} kg</span>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        Eye Color<span class="text-4xl">{{ user?.eyeColor }}</span>
      </h2>
      <h2
        class="text-black text-3xl flex justify-between flex-col border-2 border-black p-1 rounded-2xl mb-2"
      >
        <span class="text-center">Hair</span>
        <div class="flex justify-between">
          <span class="text-3xl">Color</span>
          <span class="text-4xl">{{ user?.hair?.color }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-3xl">Type</span>
          <span class="text-4xl">{{ user?.hair?.type }}</span>
        </div>
      </h2>
      <h2 class="text-black text-3xl flex justify-between border-black p-1 border-b-2 mb-2">
        Blood Group<span class="text-4xl">{{ user?.bloodGroup }}</span>
      </h2>
    </div>
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

<template>
  <div
    class="bg-light-yellow rounded-2xl shadow-xl shadow-gray-600 px-10 py-4 flex flex-col gap-2 text-2xl sm:text-4xl"
  >
    <h2 class="text-black self-center text-2xl sm:text-4xl italic">Personal Information</h2>
    <img
      :src="user?.image"
      alt="user image"
      class="mb-2 border-2 border-black rounded-3xl sm:w-[460px] w-max self-center"
    />
    <div class="flex flex-col gap-5">
      <h2 class="responsive-data cursor-pointer" @click="edit('firstName')">
        FirstName<span class="responsive-values">{{ user?.firstName }}</span>
      </h2>
      <h2 class="responsive-data cursor-pointer" @click="edit('lastName')">
        LastName<span class="responsive-values">{{ user?.lastName }}</span>
      </h2>
      <h2 class="responsive-data gap-10">
        MaidenName<span class="responsive-values">{{ user?.maidenName }}</span>
      </h2>
      <h2 class="responsive-data cursor-pointer" @click="edit('age')">
        Age<span class="responsive-values">{{ user?.age }}</span>
      </h2>
      <h2 class="responsive-data">
        Birth Date<span class="responsive-values">{{ user?.birthDate }}</span>
      </h2>
      <h2 class="responsive-data cursor-pointer" @click="edit('gender')">
        Gender<span class="responsive-values">{{ user?.gender }}</span>
      </h2>
      <h2 class="responsive-data cursor-pointer">
        Height<span class="responsive-values" @click="edit('height')">{{ user?.height }} cm</span>
      </h2>
      <h2 class="responsive-blocks">
        <span class="text-center">Address</span>
        <div class="flex justify-between gap-10">
          <span class="text-2xl sm:text-3xl">Street</span>
          <span class="responsive-values text-right">{{ user?.address?.address }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-2xl sm:text-3xl">City</span>
          <span class="responsive-values">{{ user?.address?.city }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-2xl sm:text-3xl">State</span>
          <span class="responsive-values">{{ user?.address?.state }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-2xl sm:text-3xl">Postal Code</span>
          <span class="responsive-values">{{ user?.address?.postalCode }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-2xl sm:text-3xl">Lat</span>
          <span class="responsive-values">{{ user?.address?.coordinates.lat }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-2xl sm:text-3xl">Lng</span>
          <span class="responsive-values">{{ user?.address?.coordinates.lng }}</span>
        </div>
      </h2>
      <h2 class="responsive-data">
        Weight<span class="responsive-values">{{ user?.weight }} kg</span>
      </h2>
      <h2 class="responsive-data">
        Eye Color<span class="responsive-values">{{ user?.eyeColor }}</span>
      </h2>
      <h2 class="responsive-blocks">
        <span class="text-center">Hair</span>
        <div class="flex justify-between">
          <span class="text-2xl sm:text-3xl">Color</span>
          <span class="responsive-values">{{ user?.hair?.color }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-2xl sm:text-3xl">Type</span>
          <span class="responsive-values">{{ user?.hair?.type }}</span>
        </div>
      </h2>
      <h2 class="responsive-data">
        Blood Group<span class="responsive-values">{{ user?.bloodGroup }}</span>
      </h2>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['update'])
const edit = (key) => {
  emits('update', key)
}
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

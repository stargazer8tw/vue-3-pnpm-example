<script setup lang="ts">
</script>
<!--  -->
<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="flex-1 max-w-full overflow-y-auto p-4">
      <div>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

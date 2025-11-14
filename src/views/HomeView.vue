<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const flag = ref(false)
const initRouterView = computed(() => {
  if (flag.value) return true
  return false
})
onMounted(() => {
  setTimeout(() => {
    flag.value = true
    console.log('initRouterView', initRouterView.value)
  }, 1000)
})
watch(
  async () => initRouterView.value,
  async (newVal, oldVal) => {
    console.log('initRouterView', newVal, oldVal)
    if (initRouterView.value) {
      router.push('/')
    }
  },
  {
    flush: 'post',
  }
)
</script>
<!--  -->
<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="flex-1 max-w-full overflow-y-auto p-4">
      <router-view v-if="initRouterView" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    <div class="flex w-full max-w-sm flex-col items-stretch gap-6">
      <h1 class="text-3xl">404</h1>
      <p>Page not found</p>
      <Button>
        <router-link to="/login">Login</router-link>
      </Button>
    </div>
  </div>
</template>

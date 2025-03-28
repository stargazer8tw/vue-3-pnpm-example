<script setup lang="ts">
import { ContextMenuTrigger, type ContextMenuTriggerProps, useForwardProps } from 'reka-ui'

const props = defineProps<ContextMenuTriggerProps>()

const forwardedProps: object = useForwardProps(props)
</script>

<template>
  <ContextMenuTrigger v-bind="forwardedProps">
    <slot />
  </ContextMenuTrigger>
</template>

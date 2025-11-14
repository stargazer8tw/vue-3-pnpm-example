<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import {
  CalendarIcon,
  XIcon,
  MailOpenIcon,
  SmileIcon,
  SettingsIcon,
  UserIcon,
  RocketIcon,
} from 'lucide-vue-next'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useMagicKeys } from '@vueuse/core'
const open = ref(false)

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey)) e.preventDefault()
  },
})

watch([Meta_J, Ctrl_J], (v) => {
  if (v[0] || v[1]) handleOpenChange()
})

function handleOpenChange() {
  open.value = !open.value
}

// basic
const BasicView = defineAsyncComponent(() => import('./BasicView.vue'))

// basic
const NavigationView = defineAsyncComponent(() => import('./NavigationView.vue'))

// table
const TableView = defineAsyncComponent(() => import('./TableView.vue'))

// calendar
const CalendarView = defineAsyncComponent(() => import('./CalendarView.vue'))

// calendar
const DialogView = defineAsyncComponent(() => import('./DialogView.vue'))

// drawer
const DrawerView = defineAsyncComponent(() => import('./DrawerView.vue'))

// form
const FormView = defineAsyncComponent(() => import('./FormView.vue'))

// chart
const ChartView = defineAsyncComponent(() => import('./ChartView.vue'))
</script>

<template>
  <Tabs default-value="common">
    <TabsList class="flex justify-start flex-row flex-1 w-full">
      <TabsTrigger value="common"> common </TabsTrigger>
      <TabsTrigger value="navigation"> navigation </TabsTrigger>
      <TabsTrigger value="table"> table </TabsTrigger>
      <TabsTrigger value="calendar">
        <div class="flex justify-between align-middle items-center">
          calendar
          <XIcon class="ml-2 h-4 w-4" />
        </div>
      </TabsTrigger>
      <TabsTrigger value="dialog"> dialog </TabsTrigger>
      <TabsTrigger value="drawer"> drawer </TabsTrigger>
      <TabsTrigger value="form"> form </TabsTrigger>
      <TabsTrigger value="chart"> chart </TabsTrigger>
    </TabsList>
    <TabsContent value="common">
      <div class="flex flex-col items-start space-x-2 space-y-2">
        <h1>中文字體 人人有权 すべての 모든인간</h1>
        <p class="text-sm text-muted-foreground">
          Press
          <kbd
            class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
          >
            <span class="text-xs">⌘</span>J
          </kbd>
        </p>
        <CommandDialog v-model:open="open">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="calendar"> Calendar </CommandItem>
              <CommandItem value="search-emoji"> Search Emoji </CommandItem>
              <CommandItem value="calculator"> Calculator </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem value="profile"> Profile </CommandItem>
              <CommandItem value="billing"> Billing </CommandItem>
              <CommandItem value="settings"> Settings </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <h2>Command</h2>
        <Command class="rounded-lg border shadow-md max-w-[450px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="Calendar">
                <CalendarIcon class="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem value="Search Emoji">
                <SmileIcon class="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem value="Launch">
                <RocketIcon class="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem value="Profile">
                <UserIcon class="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem value="Mail">
                <MailOpenIcon class="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem value="Settings">
                <SettingsIcon class="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <BasicView></BasicView>
      </div>
    </TabsContent>
    <TabsContent value="navigation">
      <NavigationView></NavigationView>
    </TabsContent>
    <TabsContent value="table">
      <TableView></TableView>
    </TabsContent>
    <TabsContent value="calendar">
      <CalendarView></CalendarView>
    </TabsContent>
    <TabsContent value="dialog">
      <DialogView></DialogView>
    </TabsContent>
    <TabsContent value="drawer">
      <DrawerView></DrawerView>
    </TabsContent>
    <TabsContent value="form">
      <FormView></FormView>
    </TabsContent>
    <TabsContent value="chart">
      <ChartView></ChartView>
    </TabsContent>
  </Tabs>
</template>

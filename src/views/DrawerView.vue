<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { ref } from 'vue'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const
const username = ref('')
</script>

<template>
  <div class="flex flex-col items-start space-x-2 space-y-2">
    <h1>Drawer</h1>
    <Drawer>
      <DrawerTrigger><Button variant="outline"> Open </Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    <h1>Sheet</h1>
    <div class="grid grid-cols-2 gap-2">
      <Sheet v-for="side in SHEET_SIDES" :key="side">
        <SheetTrigger as-child>
          <Button variant="outline">
            {{ side }}
          </Button>
        </SheetTrigger>
        <SheetContent :side="side">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <div class="grid items-center grid-cols-4 gap-4">
              <Label for="name" class="text-right">Name</Label>
              <Input id="name" v-model="username" class="col-span-3" />
            </div>
            <div class="grid items-center grid-cols-4 gap-4">
              <Label for="username" class="text-right">Username</Label>
              <Input id="username" v-model="username" class="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose as-child>
              <Button type="submit"> Save changes </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
</script>

<template>
  <div class="flex flex-col items-start space-x-2 space-y-2">
    <Dialog :modal="false">
      <DialogTrigger as-child> <Button variant="outline"> Basic </Button> </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Basic</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="destructive"> Close </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Scroll Body </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
        <DialogHeader class="p-6 pb-0">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4 overflow-y-auto px-6">
          <div class="flex flex-col justify-between h-[300dvh]">
            <p>
              This is some placeholder content to show the scrolling behavior for modals. We use
              repeated line breaks to demonstrate how content can exceed minimum inner height,
              thereby showing inner scrolling. When content becomes longer than the predefined
              max-height of modal, content will be cropped and scrollable within the modal.
            </p>

            <p>This content should appear at the bottom after you scroll.</p>
          </div>
        </div>
        <DialogFooter class="p-6 pt-0">
          <DialogClose as-child>
            <Button type="button" variant="destructive"> Close </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Scroll overlay </Button>
      </DialogTrigger>
      <DialogScrollContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modal title</DialogTitle>
          <DialogDescription> Here is modal with overlay scroll </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4 h-[300dvh]">
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of
            repeating the text in the modal, we use an inline style to set a minimum height, thereby
            extending the length of the overall modal and demonstrating the overflow scrolling. When
            content becomes longer than the height of the viewport, scrolling will move the modal as
            needed.
          </p>
        </div>
        <DialogFooter>
          <Button type="submit"> Save changes </Button>
        </DialogFooter>
      </DialogScrollContent>
    </Dialog>
  </div>
</template>

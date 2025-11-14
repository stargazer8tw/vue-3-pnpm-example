<script setup lang="ts">
import { h, ref, watchEffect } from 'vue'
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '@/components/ui/accordion'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { toast, type ToastT } from 'vue-sonner'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import {
  ChevronsUpDownIcon,
  RocketIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-vue-next'

// accordion
const defaultValue = 'item-1'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
]
// Collapsible
const isOpen = ref(false)

const progress = ref(13)

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500)
  cleanupFn(() => clearTimeout(timer))
})
</script>
<template>
  <div class="flex flex-col items-start space-x-2 space-y-2">
    <Progress v-model="progress" class="w-3/5"></Progress>
    <h1>Accordion</h1>
    <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
      <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <h1>Alert</h1>
    <Alert>
      <RocketIcon class="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription> You can add components to your app using the cli. </AlertDescription>
    </Alert>
    AlertDialog
    <AlertDialog>
      <AlertDialogTrigger as-child>
        <Button variant="outline"> Show Dialog </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    AspectRatio (not demo)
    <!-- <AspectRatio :ratio="16 / 9" class="bg-muted">
      <img
        src="https://www.netpro.com.tw/wp-content/uploads/Logo-Trinity-b-202106111741.png"
        alt="test"
        class="rounded-md object-cover"
      />
    </AspectRatio> -->
    Avatar
    <Avatar>
      <AvatarImage src="favicon.ico" alt="favicon" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    Badge
    <Badge>Badge</Badge>
    Button
    <div class="flex items-center space-x-2">
      <Button>Test</Button>
      <Button variant="secondary">secondary</Button>
    </div>
    Checkbox and Label
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label for="terms">Accept terms and conditions</Label>
    </div>
    <h2>Card</h2>
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <CardDescription class="prime-background">Select in Card</CardDescription>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="nuxt"> Nuxt </SelectItem>
                  <SelectItem value="next"> Next.js </SelectItem>
                  <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                  <SelectItem value="astro"> Astro </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button variant="outline"> Cancel </Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
    <h2>Carousel (removed)</h2>
    <h2>Collapsible</h2>
    <Collapsible v-model:open="isOpen" class="w-[350px] space-y-2">
      <div class="flex items-center justify-between space-x-4 px-4">
        <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger as-child>
          <Button variant="ghost" size="sm" class="w-9 p-0">
            <ChevronsUpDownIcon class="h-4 w-4" />
            <span class="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent class="space-y-2">
        <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
        <div class="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
    <h1>Hover Card</h1>
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent> The Vue Framework – created and maintained by @vuejs. </HoverCardContent>
    </HoverCard>
    <h1>Popover</h1>
    <Popover>
      <PopoverTrigger> Open popover </PopoverTrigger>
      <PopoverContent> Some popover content </PopoverContent>
    </Popover>
    <Separator label="I'm separator" />
    <div class="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" label="vertical with label" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
    <h1>Skeleton</h1>
    <Skeleton class="w-[100px] h-5 rounded-full" />
    <h1>Toast</h1>
    <Button
      variant="outline"
      class="bg-destructive-background"
      @click="
        () => {
          toast.warning('Event has been created', {
            description: 'Friday, February 10, 2023 at 5:57 PM',
            dismissible: false,
            duration: 1000,
            onDismiss: (toast: ToastT) => console.log('dismiss'),
            onAutoClose: (toast: ToastT) => console.log('autoclose'),
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      "
    >
      Add to calendar
    </Button>
    <Button
      variant="destructive"
      @click="
        () => {
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      "
    >
      Show Toast
    </Button>
    <h1>Toggle Group</h1>
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon class="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
    <h1>Toggle Group - single</h1>
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon class="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>

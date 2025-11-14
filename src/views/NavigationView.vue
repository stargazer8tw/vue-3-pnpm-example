<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuRadioItem,
} from '@/components/ui/context-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { CheckIcon, CircleIcon, DotIcon } from 'lucide-vue-next'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
const steps = [
  {
    step: 1,
    title: 'Your details',
    description: 'Provide your name and email',
  },
  {
    step: 2,
    title: 'Company details',
    description: 'A few details about your company',
  },
  {
    step: 3,
    title: 'Invite your team',
    description: 'Start collaborating with your team',
  },
]
</script>

<template>
  <div class="flex flex-col items-start space-x-2 space-y-2">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/"> Home </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger class="flex items-center gap-1">
              <BreadcrumbEllipsis class="h-4 w-4" />
              <span class="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/about"> Components </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <h2>ContextMenu</h2>
    <ContextMenu>
      <ContextMenuTrigger
        class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
      >
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent class="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset> More Tools </ContextMenuSubTrigger>
          <ContextMenuSubContent class="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup model-value="pedro">
          <ContextMenuLabel inset> People </ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro"> Pedro Duarte </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm"> Colm Tuite </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
    <h1>Menubar</h1>
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem> New Tab <MenubarShortcut>⌘T</MenubarShortcut> </MenubarItem>
          <MenubarItem> New Window <MenubarShortcut>⌘N</MenubarShortcut> </MenubarItem>
          <MenubarItem disabled> New Incognito Window </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem> Print... <MenubarShortcut>⌘P</MenubarShortcut> </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem> Undo <MenubarShortcut>⌘Z</MenubarShortcut> </MenubarItem>
          <MenubarItem> Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut> </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked> Always Show Full URLs </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset> Reload <MenubarShortcut>⌘R</MenubarShortcut> </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset> Toggle Fullscreen </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset> Hide Sidebar </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy"> Andy </MenubarRadioItem>
            <MenubarRadioItem value="benoit"> Benoit </MenubarRadioItem>
            <MenubarRadioItem value="Luis"> Luis </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset> Edit... </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset> Add Profile... </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <h1>Navigation Menu</h1>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
            >
              <li class="row-span-3">
                <NavigationMenuLink as-child>
                  <a
                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" />
                    <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p class="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/introduction"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">Introduction</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/installation"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">Installation</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      How to install dependencies and structure your app.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/typography"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">Typography</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Styles for headings, paragraphs, lists...etc
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <a
                    :href="component.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs/introduction" :class="navigationMenuTriggerStyle()">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <h1>Stepper</h1>
    <Stepper class="flex w-full items-start gap-2">
      <StepperItem
        v-for="step in steps"
        :key="step.step"
        v-slot="{ state }"
        class="relative flex w-full flex-col items-center justify-center"
        :step="step.step"
      >
        <StepperSeparator
          v-if="step.step !== steps[steps.length - 1]?.step"
          class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
        />

        <StepperTrigger as-child>
          <Button
            :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
            size="icon"
            class="z-10 rounded-full shrink-0"
            :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
          >
            <CheckIcon v-if="state === 'completed'" class="size-5" />
            <CircleIcon v-if="state === 'active'" />
            <DotIcon v-if="state === 'inactive'" />
          </Button>
        </StepperTrigger>

        <div class="mt-5 flex flex-col items-center text-center">
          <StepperTitle
            :class="[state === 'active' && 'text-primary']"
            class="text-sm font-semibold transition lg:text-base"
          >
            {{ step.title }}
          </StepperTitle>
          <StepperDescription
            :class="[state === 'active' && 'text-primary']"
            class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
          >
            {{ step.description }}
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>
    <Stepper
      orientation="vertical"
      class="mx-auto flex w-full max-w-md flex-col justify-start gap-10"
    >
      <StepperItem
        v-for="step in steps"
        :key="step.step"
        v-slot="{ state }"
        class="relative flex w-full items-start gap-6"
        :step="step.step"
      >
        <StepperSeparator
          v-if="step.step !== steps[steps.length - 1]?.step"
          class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
        />

        <StepperTrigger as-child>
          <Button
            :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
            size="icon"
            class="z-10 rounded-full shrink-0"
            :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
          >
            <CheckIcon v-if="state === 'completed'" class="size-5" />
            <CircleIcon v-if="state === 'active'" />
            <DotIcon v-if="state === 'inactive'" />
          </Button>
        </StepperTrigger>

        <div class="flex flex-col gap-1">
          <StepperTitle
            :class="[state === 'active' && 'text-primary']"
            class="text-sm font-semibold transition lg:text-base"
          >
            {{ step.title }}
          </StepperTitle>
          <StepperDescription
            :class="[state === 'active' && 'text-primary']"
            class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
          >
            {{ step.description }}
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>
  </div>
</template>

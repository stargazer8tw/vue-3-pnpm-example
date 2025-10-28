<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from '@/components/ui/number-field'
import { PinInput, PinInputGroup } from '@/components/ui/pin-input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { toast } from 'vue-sonner'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  parseDate,
  today
} from '@internationalized/date'
import { Switch } from '@/components/ui/switch'
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText
} from '@/components/ui/tags-input'
import { Textarea } from '@/components/ui/textarea'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { computed, h, ref } from 'vue'
import { cn } from '@/lib/utils'
import { CalendarIcon, ChevronsUpDownIcon, CheckIcon } from 'lucide-vue-next'

import * as z from 'zod'

const items = [
  {
    id: 'recents',
    label: 'Recents'
  },
  {
    id: 'home',
    label: 'Home'
  },
  {
    id: 'applications',
    label: 'Applications'
  },
  {
    id: 'desktop',
    label: 'Desktop'
  },
  {
    id: 'downloads',
    label: 'Downloads'
  },
  {
    id: 'documents',
    label: 'Documents'
  }
] as const

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    age: z.number().gt(18, 'min 18').lt(20, 'less 20'),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.'
    }),
    pin: z.array(z.coerce.string()).length(6, { message: 'Invalid input' }),
    type: z.enum(['all', 'mentions', 'none'], {
      message: 'You need to select a notification type.'
    }),
    language: z.string({
      message: 'Please select a language.'
    }),
    email: z
      .string({
        message: 'Please select an email to display.'
      })
      .email(),
    dob: z.string().refine((v) => v, { message: 'A date of birth is required.' }),
    duration: z.array(z.number().min(0).max(60)),
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
    fruits: z.array(z.string()).min(1).max(3),
    bio: z
      .string()
      .min(10, {
        message: 'Bio must be at least 10 characters.'
      })
      .max(160, {
        message: 'Bio must not be longer than 30 characters.'
      })
  })
)

const { isFieldDirty, setFieldValue, handleSubmit, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    username: 'test',
    age: 19,
    pin: ['1', '2', '3', '4', '5', '6'],
    type: 'all',
    language: 'en',
    email: 'm@example.com',
    dob: today(getLocalTimeZone()).toString(),
    duration: [50],
    security_emails: true,
    fruits: ['Apple', 'Banana'],
    items: ['recents', 'home'],
    bio: 'this is example'
  }
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    )
  })
})
const handleComplete = (e: number[]) => console.log(e.join(''))

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' }
] as const

const df = new DateFormatter('zh-TW', {
  dateStyle: 'long'
})

const datePlaceholder = ref()

const dateValue = computed({
  get: () => (values.dob ? parseDate(values.dob) : undefined),
  set: (val) => val
})
</script>

<template>
  <form class="w-2/3 space-y-6" @submit="onSubmit">
    <FormField name="dob">
      <FormItem class="flex flex-col">
        <FormLabel>Date of birth</FormLabel>
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline"
                :class="
                  cn('w-[240px] ps-3 text-start font-normal', !dateValue && 'text-muted-foreground')
                "
              >
                <span>{{
                  dateValue ? df.format(dateValue.toDate(getLocalTimeZone())) : 'Pick a date'
                }}</span>
                <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
              </Button>
              <input hidden />
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar
              v-model:placeholder="datePlaceholder"
              v-model="dateValue"
              calendar-label="Date of birth"
              initial-focus
              :min-value="new CalendarDate(1900, 1, 1)"
              :max-value="today(getLocalTimeZone())"
              @update:model-value="
                (v) => {
                  if (v) {
                    setFieldValue('dob', v.toString())
                  } else {
                    setFieldValue('dob', undefined)
                  }
                }
              "
            />
          </PopoverContent>
        </Popover>
        <FormDescription> Your date of birth is used to calculate your age. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
      <FormItem v-auto-animate>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription> This is your public display name. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="items">
      <FormItem>
        <div class="mb-4">
          <FormLabel class="text-base"> Sidebar </FormLabel>
          <FormDescription> Select the items you want to display in the sidebar. </FormDescription>
        </div>

        <FormField
          v-for="item in items"
          v-slot="{ value, handleChange }"
          :key="item.id"
          type="checkbox"
          :value="item.id"
          :unchecked-value="false"
          name="items"
        >
          <FormItem class="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox :checked="value.includes(item.id)" @update:checked="handleChange" />
            </FormControl>
            <FormLabel class="font-normal">
              {{ item.label }}
            </FormLabel>
          </FormItem>
        </FormField>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ value }" name="age" :validate-on-blur="!isFieldDirty">
      <FormItem>
        <FormLabel>Age</FormLabel>
        <NumberField
          id="age"
          :default-value="18"
          :min="0"
          :model-value="value"
          @update:model-value="
            (v) => {
              if (v) {
                setFieldValue('age', v)
              } else {
                setFieldValue('age', undefined)
              }
            }
          "
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <FormDescription>age</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField, value }" name="pin">
      <FormItem>
        <FormLabel>OTP</FormLabel>
        <FormControl>
          <PinInput
            id="pin-input"
            :model-value="value"
            placeholder="○"
            class="flex gap-2 items-center mt-1"
            otp
            type="number"
            :name="componentField.name"
            @complete="handleComplete"
            @update:model-value="
              (arrStr) => {
                setFieldValue('pin', arrStr.filter(Boolean))
              }
            "
          >
            <PinInputGroup>
              <PinInputSlot v-for="(id, index) in 6" :key="id" :index="index" />
            </PinInputGroup>
          </PinInput>
        </FormControl>
        <FormDescription>
          Allows users to input a sequence of one-character alphanumeric inputs.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" type="radio" name="type">
      <FormItem class="space-y-3">
        <FormLabel>Notify me about...</FormLabel>
        <FormControl>
          <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="all" />
              </FormControl>
              <FormLabel class="font-normal"> All new messages </FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="mentions" />
              </FormControl>
              <FormLabel class="font-normal"> Direct messages and mentions </FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="none" />
              </FormControl>
              <FormLabel class="font-normal"> Nothing </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="language">
      <FormItem class="flex flex-col">
        <FormLabel>Language</FormLabel>
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                :class="
                  cn('w-[200px] justify-between', !values.language && 'text-muted-foreground')
                "
              >
                {{
                  values.language
                    ? languages.find((language) => language.value === values.language)?.label
                    : 'Select language...'
                }}
                <ChevronsUpDownIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search language..." />
              <CommandEmpty>Nothing found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    v-for="language in languages"
                    :key="language.value"
                    :value="language.label"
                    @select="
                      () => {
                        setFieldValue('language', language.value)
                      }
                    "
                  >
                    {{ language.label }}
                    <CheckIcon
                      :class="
                        cn(
                          'ml-auto h-4 w-4',
                          language.value === values.language ? 'opacity-100' : 'opacity-0'
                        )
                      "
                    />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <FormDescription>
          This is the language that will be used in the dashboard.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>

        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="m@example.com"> m@example.com </SelectItem>
              <SelectItem value="m@google.com"> m@google.com </SelectItem>
              <SelectItem value="m@support.com"> m@support.com </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormDescription>
          You can manage email addresses in your
          <a href="/examples/forms">email settings</a>.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField, value }" name="duration">
      <FormItem>
        <FormLabel>Duration</FormLabel>
        <FormControl>
          <Slider v-bind="componentField" :default-value="[30]" :max="100" :min="0" :step="5" />
          <FormDescription class="flex justify-between">
            <span>How many minutes are you available?</span>
            <span>{{ value?.[0] }} min</span>
          </FormDescription>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <div>
      <h3 class="mb-4 text-lg font-medium">Email Notifications</h3>
      <div class="space-y-4">
        <FormField v-slot="{ value, handleChange }" name="marketing_emails">
          <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
            <div class="space-y-0.5">
              <FormLabel class="text-base"> Marketing emails </FormLabel>
              <FormDescription>
                Receive emails about new products, features, and more.
              </FormDescription>
            </div>
            <FormControl>
              <Switch :checked="value" @update:checked="handleChange" />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ value, handleChange }" name="security_emails">
          <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
            <div class="space-y-0.5">
              <FormLabel class="text-base"> Security emails </FormLabel>
              <FormDescription> Receive emails about your account security. </FormDescription>
            </div>
            <FormControl>
              <Switch :checked="value" disabled aria-readonly @update:checked="handleChange" />
            </FormControl>
          </FormItem>
        </FormField>
      </div>
    </div>
    <FormField v-slot="{ value }" name="fruits">
      <FormItem>
        <FormLabel>Fruits</FormLabel>
        <FormControl>
          <TagsInput :model-value="value">
            <TagsInputItem v-for="item in value" :key="item" :value="item">
              <TagsInputItemText />
              <TagsInputItemDelete />
            </TagsInputItem>
            <TagsInputInput placeholder="Fruits..." />
          </TagsInput>
        </FormControl>
        <FormDescription> Select your favorite fruits. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="bio">
      <FormItem>
        <FormLabel>Bio</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Tell us a little bit about yourself"
            class="resize-none"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          You can <span>@mention</span> other users and organizations.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" disable=""> Submit </Button>
  </form>
</template>

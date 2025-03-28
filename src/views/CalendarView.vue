<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { cn } from '@/lib/utils'
import type { DateRange } from 'reka-ui'
import {
  type DateValue,
  today,
  CalendarDate,
  DateFormatter,
  getLocalTimeZone
} from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { type Ref, ref } from 'vue'

// calendar v-model bug
// const dateValue = ref<DateValue>()
const dateValue = ref<DateValue>()
dateValue.value = today(getLocalTimeZone())
// date pick
const df = new DateFormatter('en-US', {
  dateStyle: 'long'
})

const dfm = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const value = ref<DateValue>()

// data range
const rangeValue = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 })
}) as Ref<DateRange>
</script>

<template>
  <div class="flex flex-col items-start space-x-2 space-y-2">
    <Calendar v-model="dateValue" :weekday-format="'short'" class="rounded-md border" />
    <h1>Date Picker</h1>
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="
            cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')
          "
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{ value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date' }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar v-model="value" initial-focus />
      </PopoverContent>
    </Popover>
    <h1>Date Range Picker</h1>
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="
            cn(
              'w-[280px] justify-start text-left font-normal',
              !rangeValue && 'text-muted-foreground'
            )
          "
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          <template v-if="rangeValue.start">
            <template v-if="rangeValue.end">
              {{ dfm.format(rangeValue.start.toDate(getLocalTimeZone())) }} -
              {{ dfm.format(rangeValue.end.toDate(getLocalTimeZone())) }}
            </template>

            <template v-else>
              {{ dfm.format(rangeValue.start.toDate(getLocalTimeZone())) }}
            </template>
          </template>
          <template v-else> Pick a date </template>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <RangeCalendar
          v-model="rangeValue"
          initial-focus
          :number-of-months="2"
          @update:start-value="(startDate: DateValue | undefined) => (rangeValue.start = startDate)"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>

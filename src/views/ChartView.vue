<script setup lang="ts">
import { DateFormatter, getLocalTimeZone, now } from '@internationalized/date'
import { AreaChart } from '@/components/ui/chart-area'
import { BarChart } from '@/components/ui/chart-bar'
import { DonutChart } from '@/components/ui/chart-donut'
import { LineChart } from '@/components/ui/chart-line'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
]
const valueFormatter = (tick: number | Date) =>
  typeof tick === 'number' ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}` : ''

const lineData = [
  {
    year: 1970,
    'Export Growth Rate': 2.04,
    'Import Growth Rate': 1.53,
  },
  {
    year: 1971,
    'Export Growth Rate': 1.96,
    'Import Growth Rate': 1.58,
  },
  {
    year: 1972,
    'Export Growth Rate': 1.96,
    'Import Growth Rate': 1.61,
  },
  {
    year: 1973,
    'Export Growth Rate': 1.93,
    'Import Growth Rate': 1.61,
  },
  {
    year: 1974,
    'Export Growth Rate': 1.88,
    'Import Growth Rate': 1.67,
  },
  {
    year: 1975,
    'Export Growth Rate': 1.79,
    'Import Growth Rate': 1.64,
  },
  {
    year: 1976,
    'Export Growth Rate': 1.77,
    'Import Growth Rate': 1.62,
  },
  {
    year: 1977,
    'Export Growth Rate': 1.74,
    'Import Growth Rate': 1.69,
  },
  {
    year: 1978,
    'Export Growth Rate': 1.74,
    'Import Growth Rate': 1.7,
  },
  {
    year: 1979,
    'Export Growth Rate': 1.77,
    'Import Growth Rate': 1.67,
  },
  {
    year: 1980,
    'Export Growth Rate': 1.79,
    'Import Growth Rate': 1.7,
  },
  {
    year: 1981,
    'Export Growth Rate': 1.81,
    'Import Growth Rate': 1.72,
  },
  {
    year: 1982,
    'Export Growth Rate': 1.84,
    'Import Growth Rate': 1.73,
  },
  {
    year: 1983,
    'Export Growth Rate': 1.77,
    'Import Growth Rate': 1.73,
  },
  {
    year: 1984,
    'Export Growth Rate': 1.78,
    'Import Growth Rate': 1.78,
  },
  {
    year: 1985,
    'Export Growth Rate': 1.78,
    'Import Growth Rate': 1.81,
  },
  {
    year: 1986,
    'Export Growth Rate': 1.82,
    'Import Growth Rate': 1.89,
  },
  {
    year: 1987,
    'Export Growth Rate': 1.82,
    'Import Growth Rate': 1.91,
  },
  {
    year: 1988,
    'Export Growth Rate': 1.77,
    'Import Growth Rate': 1.94,
  },
  {
    year: 1989,
    'Export Growth Rate': 1.76,
    'Import Growth Rate': 1.94,
  },
  {
    year: 1990,
    'Export Growth Rate': 1.75,
    'Import Growth Rate': 1.97,
  },
  {
    year: 1991,
    'Export Growth Rate': 1.62,
    'Import Growth Rate': 1.99,
  },
  {
    year: 1992,
    'Export Growth Rate': 1.56,
    'Import Growth Rate': 2.12,
  },
  {
    year: 1993,
    'Export Growth Rate': 1.5,
    'Import Growth Rate': 2.13,
  },
  {
    year: 1994,
    'Export Growth Rate': 1.46,
    'Import Growth Rate': 2.15,
  },
  {
    year: 1995,
    'Export Growth Rate': 1.43,
    'Import Growth Rate': 2.17,
  },
  {
    year: 1996,
    'Export Growth Rate': 1.4,
    'Import Growth Rate': 2.2,
  },
  {
    year: 1997,
    'Export Growth Rate': 1.37,
    'Import Growth Rate': 2.15,
  },
  {
    year: 1998,
    'Export Growth Rate': 1.34,
    'Import Growth Rate': 2.07,
  },
  {
    year: 1999,
    'Export Growth Rate': 1.32,
    'Import Growth Rate': 2.05,
  },
  {
    year: 2000,
    'Export Growth Rate': 1.33,
    'Import Growth Rate': 2.07,
  },
  {
    year: 2001,
    'Export Growth Rate': 1.31,
    'Import Growth Rate': 2.08,
  },
  {
    year: 2002,
    'Export Growth Rate': 1.29,
    'Import Growth Rate': 2.1,
  },
  {
    year: 2003,
    'Export Growth Rate': 1.27,
    'Import Growth Rate': 2.15,
  },
  {
    year: 2004,
    'Export Growth Rate': 1.27,
    'Import Growth Rate': 2.21,
  },
  {
    year: 2005,
    'Export Growth Rate': 1.26,
    'Import Growth Rate': 2.23,
  },
  {
    year: 2006,
    'Export Growth Rate': 1.26,
    'Import Growth Rate': 2.29,
  },
  {
    year: 2007,
    'Export Growth Rate': 1.27,
    'Import Growth Rate': 2.34,
  },
  {
    year: 2008,
    'Export Growth Rate': 1.26,
    'Import Growth Rate': 2.36,
  },
  {
    year: 2009,
    'Export Growth Rate': 1.26,
    'Import Growth Rate': 2.36,
  },
  {
    year: 2010,
    'Export Growth Rate': 1.25,
    'Import Growth Rate': 2.35,
  },
  {
    year: 2011,
    'Export Growth Rate': 1.24,
    'Import Growth Rate': 2.34,
  },
  {
    year: 2012,
    'Export Growth Rate': 1.25,
    'Import Growth Rate': 2.39,
  },
  {
    year: 2013,
    'Export Growth Rate': 1.22,
    'Import Growth Rate': 2.3,
  },
  {
    year: 2014,
    'Export Growth Rate': 1.2,
    'Import Growth Rate': 2.35,
  },
  {
    year: 2015,
    'Export Growth Rate': 1.17,
    'Import Growth Rate': 2.39,
  },
  {
    year: 2016,
    'Export Growth Rate': 1.16,
    'Import Growth Rate': 2.41,
  },
  {
    year: 2017,
    'Export Growth Rate': 1.13,
    'Import Growth Rate': 2.44,
  },
  {
    year: 2018,
    'Export Growth Rate': 1.07,
    'Import Growth Rate': 2.45,
  },
  {
    year: 2019,
    'Export Growth Rate': 1.03,
    'Import Growth Rate': 2.47,
  },
  {
    year: 2020,
    'Export Growth Rate': 0.92,
    'Import Growth Rate': 2.48,
  },
  {
    year: 2021,
    'Export Growth Rate': 0.82,
    'Import Growth Rate': 2.51,
  },
  {
    year: 2022,
    'Import Growth Rate': 2.3,
  },
  {
    year: 2023,
    'Export Growth Rate': -0.8,
    'Import Growth Rate': 2.1,
  },
  {
    year: 2024,
    'Export Growth Rate': -0.1,
    'Import Growth Rate': 1.3,
  },
]

const dtFormatter = new DateFormatter('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: getLocalTimeZone(),
})
const timeSeries = ref(new Array<{ time: Date; data?: number }>())
let intervalId: number | undefined
let value = 0
onBeforeMount(() => {
  intervalId = window.setInterval(() => {
    if (timeSeries.value.length > 100) {
      timeSeries.value = timeSeries.value.slice(1)
    }
    timeSeries.value.push({
      time: now(getLocalTimeZone()).toDate(),
      data: (value += Math.random()),
    })
  }, 3000)
})
onBeforeUnmount(() => {
  clearInterval(intervalId)
})
const scaleByDomain = ref<boolean>(false)
const updateScaleByDomain = (p: boolean) => {
  scaleByDomain.value = p
}
</script>

<template>
  <div class="flex flex-col items-start space-x-2 space-y-2">
    <AreaChart :data="data" index="name" :categories="['total', 'predicted']" />
    <BarChart
      :data="data"
      index="name"
      :categories="['total', 'predicted']"
      :y-formatter="
        (tick, i) => {
          return typeof tick === 'number'
            ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
            : ''
        }
      "
    />
    <DonutChart index="name" :category="'total'" :data="data" :value-formatter="valueFormatter" />
    <LineChart
      :data="lineData"
      index="year"
      :categories="['Export Growth Rate', 'Import Growth Rate']"
      :y-formatter="
        (tick, i) => {
          return typeof tick === 'number'
            ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
            : ''
        }
      "
      :fallbackValue="undefined"
    />
    <div class="flex items-center space-x-2">
      <Switch
        id="scaleByDomain-mode"
        :checked="scaleByDomain"
        @update:checked="updateScaleByDomain"
      />
      <Label for="scaleByDomain-mode">Scale By Domain Mode</Label>
    </div>
    <LineChart
      :data="timeSeries"
      index="time"
      :yDomain="[0, 100]"
      :yTickValues="[0, 25, 50, 75, 100]"
      :showYAxis="true"
      :categories="['data']"
      :fallbackValue="undefined"
      :scaleByDomain="scaleByDomain"
      :x-formatter="
        (tick, i) => {
          return typeof tick === 'number' && typeof timeSeries[tick] === 'object'
            ? dtFormatter.format(timeSeries[tick].time).toString()
            : ''
        }
      "
      :y-formatter="
        (tick, i) => {
          return typeof tick === 'number' ? `${new Intl.NumberFormat('us').format(tick)}` : ''
        }
      "
    />
  </div>
</template>

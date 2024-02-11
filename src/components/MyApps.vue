<script setup>
import AppsItem from '@/components/AppsItem.vue'
import IconGroup from '@/components/icons/IconGroup.vue'
import IconCalculate from '@/components/icons/IconCalculate.vue'
import IconGraphicEq from '@/components/icons/IconGraphicEq.vue'
import IconPreview from '@/components/icons/IconPreview.vue'
import IconQuote from '@/components/icons/IconQuote.vue'
import IconTimer from '@/components/icons/IconTimer.vue'
</script>

<template>
  <AppsItem>
    <template #icon>
      <IconGroup />
    </template>
    <template #heading>Forum App</template>
    <a href="https://forum.chinh.ca/" target="_blank" rel="noopener">{ in development }</a>
  </AppsItem>
  <!-- Pomodoro clock -->
  <AppsItem>
    <template #icon>
      <IconTimer />
    </template>
    <template #heading>Pomodoro Clock</template>
    <a href="https://pomodoro-clock.chinh.ca/" target="_blank" rel="noopener">{ React 16 }</a>
  </AppsItem>
  <!-- Calculator -->
  <AppsItem>
    <template #icon>
      <IconCalculate />
    </template>
    <template #heading>Calculator</template>
    <a href="https://calculator.chinh.ca/" target="_blank" rel="noopener">{ React 16 }</a>
  </AppsItem>
  <!-- Drum machine -->
  <AppsItem>
    <template #icon>
      <IconGraphicEq />
    </template>
    <template #heading>Drum Machine</template>
    <a href="https://drum-machine.chinh.ca/" target="_blank" rel="noopener">{ React 16 }</a>
  </AppsItem>
  <!-- Markdown previewer -->
  <AppsItem>
    <template #icon>
      <IconPreview />
    </template>
    <template #heading>Markdown Previewer</template>
    <a href="https://markdown-previewer.chinh.ca/" target="_blank" rel="noopener">{ React 16 }</a>
  </AppsItem>
  <!-- Random quote -->
  <AppsItem>
    <template #icon>
      <IconQuote />
    </template>
    <template #heading>Random Quote</template>
    <a href="https://random-quote.chinh.ca/" target="_blank" rel="noopener">{ React 16 }</a>
  </AppsItem>
  <!-- Burger builder: Firebase authentication requires updates/fixes -->
  <!-- Recipe book: requires updates -->
  <!-- Stock trader: requires updates -->
  <!-- Wonderful quotes: requires updates -->
</template>

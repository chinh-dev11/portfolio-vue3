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
    <template #link>
      <a href="https://forum.chinh.ca/" target="_blank" rel="noopener">
        <span><FA icon="fa-right-from-bracket" /></span>
        <span>Vue 3</span>
      </a>
      <span>(...WiP...)</span>
    </template>
  </AppsItem>
  <!-- Pomodoro clock -->
  <AppsItem>
    <template #icon>
      <IconTimer />
    </template>
    <template #heading>Pomodoro Clock</template>
    <template #link>
      <a href="https://pomodoro-clock.chinh.ca/" target="_blank" rel="noopener">
        <span><FA icon="fa-right-from-bracket" /></span>
        <span>React 16</span>
      </a>
    </template>
  </AppsItem>
  <!-- Calculator -->
  <AppsItem>
    <template #icon>
      <IconCalculate />
    </template>
    <template #heading>Calculator</template>
    <template #link>
      <a href="https://calculator.chinh.ca/" target="_blank" rel="noopener">
        <span><FA icon="fa-right-from-bracket" /></span>
        <span>React 16</span>
      </a>
    </template>
  </AppsItem>
  <!-- Drum machine -->
  <AppsItem>
    <template #icon>
      <IconGraphicEq />
    </template>
    <template #heading>Drum Machine</template>
    <template #link>
      <a href="https://drum-machine.chinh.ca/" target="_blank" rel="noopener">
        <span><FA icon="fa-right-from-bracket" /></span>
        <span>React 16</span>
      </a>
    </template>
  </AppsItem>
  <!-- Markdown previewer -->
  <AppsItem>
    <template #icon>
      <IconPreview />
    </template>
    <template #heading>Markdown Previewer</template>
    <template #link>
      <a href="https://markdown-previewer.chinh.ca/" target="_blank" rel="noopener">
        <span><FA icon="fa-right-from-bracket" /></span>
        <span>React 16</span>
      </a>
    </template>
  </AppsItem>
  <!-- Random quote -->
  <AppsItem>
    <template #icon>
      <IconQuote />
    </template>
    <template #heading>Random Quote</template>
    <template #link>
      <a href="https://random-quote.chinh.ca/" target="_blank" rel="noopener">
        <span><FA icon="fa-right-from-bracket" /></span>
        <span>React 16</span>
      </a>
    </template>
  </AppsItem>
  <!-- Burger builder: Firebase authentication requires updates/fixes -->
  <!-- Recipe book: requires updates -->
  <!-- Stock trader: requires updates -->
  <!-- Wonderful quotes: requires updates -->
</template>

<style scoped></style>
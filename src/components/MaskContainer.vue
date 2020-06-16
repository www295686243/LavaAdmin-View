<template>
  <div class="MaskContainer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MaskContainer extends Vue {}
</script>

<style lang="scss">
.MaskContainer {
  background: rgba(0, 0, 0, .4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
</style>

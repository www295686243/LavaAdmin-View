<template>
  <div class="PageContainer">
    <DataRender :onLoad="onLoad">
      <div class="PageHeaderContainer">
        <slot name="header"></slot>
      </div>
      <div class="PageMainContainer">
        <slot></slot>
      </div>
      <div class="PageFooterContainer">
        <slot name="footer"></slot>
      </div>
    </DataRender>
  </div>
</template>

<script lang="ts">
import DataRender from './DataRender.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    DataRender
  }
})
export default class PageContainer extends Vue {
  @Prop({ default: () => () => Promise.resolve() })
  readonly onLoad!: Function
}
</script>

<style lang="scss">
.PageContainer {
  height: 100%;
  // border: 1px solid #dcdee2;
  background: #ffffff;
  // border-radius: 4px;
  position: relative;
  & > .DataRender {
    display: flex;
    flex-direction: column
  }
  .PageHeaderContainer {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .PageMainContainer {
    // position: relative; // 不要加这个属性，不然加载的遮罩不会覆盖到底部的按钮
    overflow-y: auto;
    overflow-x: hidden;
    padding: 15px 0;
    flex: 1 1 0;
  }
  .PageFooterContainer {
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>

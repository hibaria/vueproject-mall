<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
  },
  data() {
    return {
    //   isActive: false
    };
  },
  computed:{
      isActive(){
        //   判断当前活跃的路径和本路径是否相同
          return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
  },
  methods:{
      itemClick(){
          this.$router.replace(this.path)
      }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 6px;
  vertical-align: middle;
}

.active {
  color: #fb96aa;
}
</style>

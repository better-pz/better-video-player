import React, { memo } from "react";
import "./index.scss"

// 播放器进度条操作组件
// memo的作用,当数据变化时,代码会重新执行一遍,但是子组件数据没有发生变化也会执行,
// 这个时候可以使用memo将子组件封装起来，让子组件的数据只在发生改变时才会执行
const Index = memo(function Index() {
  return (
    <div className="Better-controller-container">
      <div id="play-pause-mask" className="Better-click-to-play-pause"></div>
      <div className="Better-progress-controls-wrap"></div>
    </div>
  )
})
export default Index

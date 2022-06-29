import React, { forwardRef, useMemo, useRef } from 'react'
import { videoparameter, BetterPlayerRef } from '@/interface';
const BetterPlayer = function BetterPlayer(props: videoparameter, ref: React.Ref<unknown> | undefined) {
  const {
    option
  } = props
  const { videoSrc } = option

  /**
   * @description 视频对象
  */
  const videoRef = useRef<HTMLVideoElement>(null!);

// 使用useMemo videSrc值改变的时候前端的函数才会被调用
  const returnVideoSource = useMemo(() => {
    return (
      <>
        <source src={videoSrc} type = "video/mp4"/>
        <source src={videoSrc} type = "video/ogg"/>
        <source src={videoSrc} type = "video/webm"/>
      </>
    )
  },[videoSrc]);
  return (
    <figure>
      <video
        className='better-player'
        ref={videoRef}
        src={videoSrc}
        id="better-player"
        >
          {returnVideoSource}
      </video>
      <figcaption>A Better viode player</figcaption>
    </figure>
  )
}
const BetterPlayerComponent = forwardRef<BetterPlayerRef, videoparameter>(BetterPlayer)
export default BetterPlayerComponent
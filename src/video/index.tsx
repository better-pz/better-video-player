import React, { forwardRef, useMemo, useRef } from 'react'
import { videoparameter, BetterPlayerRef } from '@/interface';
// import '@/assets/css/reset.scss';
import './index.scss';
const BetterPlayer = function BetterPlayer(props: videoparameter, ref: React.Ref<unknown> | undefined) {
  const {
    option,
    className,
    style,

  } = props
  const { videoSrc, width, height, } = option

  /**
   * @description 视频对象
  */
  const videoRef = useRef<HTMLVideoElement>(null!);
  /**
   * @description 视频容器对象
   */
  const videoContainerRef = useRef<HTMLElement>(null!);
  // 使用useMemo videSrc值改变的时候前端的函数才会被调用
  const returnVideoSource = useMemo(() => {
    return (
      <>
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/ogg" />
        <source src={videoSrc} type="video/webm" />
      </>
    )
  }, [videoSrc]);
  return (
    <figure className={`Better-player-container ${className}`}
      ref={videoContainerRef}
      style={style}
      id="Better-player-container">
      <video
        controls
        width={width}
        height={height}
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
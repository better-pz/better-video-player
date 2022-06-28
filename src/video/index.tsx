import React, { forwardRef,useRef } from 'react'
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
  return (
    <figure>
      <video
        className='better-player'
        ref={videoRef}
        src={videoSrc}
        id="better-player"
        controls width="1000" >
      </video>
      <figcaption>An elephant at sunset</figcaption>
    </figure>


  )
}
const BetterPlayerComponent = forwardRef<BetterPlayerRef, videoparameter>(BetterPlayer)
export default BetterPlayerComponent
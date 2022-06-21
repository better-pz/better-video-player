# better video
## 介绍
基于React 的video播放器组件
1. 界面简约

2. 可配置

3. 流畅播放

4. 支持m3u8格式

6. 弹幕配置

7. 清晰度切换

支持多种事件
## 配置参数
+ properties:视频属性
+ videoStyle:视频样式
+ controlConfig:视频控制设置

## 事件
| 事件名称 | 如何触发 |
| --- | --- |
| play | 媒体收到开始播放的请求 |
| pause | 暂停 |
| canplay | 播放可以开始 |
| ended | 媒体播放过一次就停止了 |
| waiting | 暂停播放以下载更多数据 |
| canplaythrough | 播放可以继续，不应中断。读取状态为3 |
| error | 下载过程中发生网络错误 |
| volumechange | volume或muted属性的值已更改 |
| emptied | 网络连接中断 |
| ratechange | 媒体播放速率更改 |
| empty | 发生错误，阻止媒体下载 |
| seeking | 播放已移动到新位置 |
| timeupdate | 当前时间非常规或意外更改 |
| stalled | 浏览器试图下载，但尚未收到数据 |
| abort | 下载中断 |


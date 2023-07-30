'use client'

import * as React from 'react'
import type { LottiePlayer } from 'lottie-web'

interface ILottiePlayer {
  src: string
}

const LottiePlayer = ({ src }: ILottiePlayer) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = React.useState<LottiePlayer | null>(null)

  React.useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])

  React.useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: src,
      })

      return () => animation.destroy()
    }
  }, [lottie, src])

  return <div className="w-1/2" ref={ref}></div>
}

export default LottiePlayer

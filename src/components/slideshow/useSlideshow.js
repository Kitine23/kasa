import { useState } from 'react'

export const useSlideshow = (images) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const next = () => {
    if (slideIndex >= images.length - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (slideIndex <= 0) {
      setSlideIndex(images.length - 1)
    } else {
      setSlideIndex((prev) => prev - 1)
    }
  }

  return {
    slideIndex,
    next,
    prev,
  }
}

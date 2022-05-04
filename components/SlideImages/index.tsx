import Image from "next/image"
import { useState } from "react"

type Props = {
  images: string
  alt: string
}
const SlideImages: React.FC<Props> = ({ images, alt }) => {
  const [index, setIndex] = useState(0)
  const sumIndex = () => {
    let newIndex
    if (index === images.length - 1) {
      newIndex = 0
    } else {
      newIndex = index + 1
    }
    setIndex(newIndex)
  }
  return (
    <Image
      height={300}
      width={500}
      onClick={() => sumIndex()}
      className="slide"
      src={images[index]}
      alt={alt + index}
      layout="intrinsic"
    />
  )
}
export default SlideImages

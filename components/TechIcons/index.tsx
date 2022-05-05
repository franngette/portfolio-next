import React from "react"
import { Icons } from "./iconPath"
import Image from "next/image"

type Props = {
  tech: string[]
}

const TechIcons: React.FC<Props> = ({ tech }) => {
  const renderIcons = () => {
    return tech.map((el, i) => (
      <div
        key={i + el}
        className="techicons_container"
        style={{ backgroundColor: el === "reactnative" ? "#222" : "white" }}
      >
        <Image src={Icons[el]} alt={el} title={el} placeholder="blur" blurDataURL={Icons[el]} height={30} width={30} />
      </div>
    ))
  }
  return <div className="techicons">{renderIcons()}</div>
}

export default TechIcons

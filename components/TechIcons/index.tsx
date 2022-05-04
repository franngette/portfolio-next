import React from "react"
import { Icons } from "./iconPath"

type Props = {
  tech: string[]
}

const TechIcons: React.FC<Props> = ({ tech }) => {
  const renderIcons = () => {
    return tech.map((el, i) => (
      <div key={i + el} className="techicons_container" style={{ backgroundColor: el === "reactnative" ? "#222" : "white" }}>
        <img src={Icons[el]} alt={el} className="techicons_container_item" title={el} />
      </div>
    ))
  }
  return <div className="techicons">{renderIcons()}</div>
}

export default TechIcons

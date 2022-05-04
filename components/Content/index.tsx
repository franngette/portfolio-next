import React, { useEffect, useRef } from "react"
import Project from "../Project"
import Presentation from "../Presentation"
import About from "../About"
import Technologies from "../Technologies"
import ProjectsContainer from "../ProjectsContainer"

const Content: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  const intersectionHandler = (entry: any) => {
    if (contentRef.current !== null) {
      contentRef.current.removeAttribute("class")
      contentRef.current.classList.add("content__" + entry.target.id)
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll("article")
    let observer = new IntersectionObserver(
      (entries, self) => {
        entries.forEach((element) => {
          if (element.isIntersecting) {
            intersectionHandler(element)
          }
        })
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    )
    sections.forEach((section) => {
      observer.observe(section)
    })
    loadPolyfills()
  }, [])

  async function loadPolyfills() {
    if (typeof window.IntersectionObserver === "undefined") {
      await import("intersection-observer")
    }
  }

  return (
    <section ref={contentRef} id="content" className="content">
      <article id="presentation">
        <Presentation />
      </article>
      <article id="about">
        <About />
      </article>
      <div className="content__wrapper">
        <article id="projects" className="content__wrapper__element">
          <div className="content__wrapper__element__projects">
            <ProjectsContainer>
              <Project
                link="https://github.com/franngette/monitor-front-end"
                title="Monitor"
                tech={["react"]}
                color="#08415c"
              />
              <Project
                title="TaskManager"
                tech={["react"]}
                color="#08415c"
                link="https://github.com/franngette/task-manager"
              />
              <Project title="Kino" tech={["react"]} color="#08415c" link="https://github.com/franngette/kino" />
              <Project
                link="https://github.com/franngette/coin-trace"
                title="CoinTrace"
                tech={["reactnative"]}
                color="#4b88a2"
              />
              <Project
                link="https://github.com/franngette"
                title="CoursesApps"
                tech={["reactnative"]}
                color="#4b88a2"
              />
            </ProjectsContainer>
          </div>
        </article>
        <article id="tecnologies" className="content__wrapper__element">
          <div className="content__wrapper__element__projects">
            <Technologies />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Content

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About(props) {
  const gsapControlledRef = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: gsapControlledRef.current,
      toggleClass: "active",
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);

  return (
    <div className="container">
      {props.children}
      <div className="gsap-controlled" ref={gsapControlledRef}>
        gsap-controlled thing
      </div>
      <style jsx>{`
        .gsap-controlled {
          position: fixed;
          top: 40vh;
          right: 20vw;
          width: 10vw;
          height: 10vw;
          background-color: black;
          color: white;
          padding: 0.5rem;
          text-align: center;
          display: flex;
          align-items: center;
        }
        .gsap-controlled.active {
          background-color: white;
          color: black;
        }
      `}</style>
    </div>
  );
}

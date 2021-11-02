import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

function Sections() {
  const containerRef = useRef();
  const secRef1 = useRef();
  const secRef2 = useRef();
  const secRef3 = useRef();
  const tl = gsap.timeline(); //timeline

  useEffect(() => {
    const fa = tl.from(secRef1.current, { xPercent: -100 });
    const sa = tl.from(secRef2.current, { xPercent: 100 });
    const ta = tl.from(secRef3.current, { yPercent: -100 });

    ScrollTrigger.create({
      animation: fa,
      trigger: secRef1.current,
      start: "top top",
      // end: "+=4000",
      markers: true,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onEnter: () => console.log("Enter"),
      onLeave: () => console.log("Leave"),
      onEnterBack: () => console.log("Enter Back"),
      onLeaveBack: () => console.log("Leave Back"),
    });
    ScrollTrigger.create({
      animation: sa,
      trigger: secRef2.current,
      start: "top top",
      // end: "+=4000",
      markers: true,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onEnter: () => console.log("Enter"),
      onLeave: () => console.log("Leave"),
      onEnterBack: () => console.log("Enter Back"),
      onLeaveBack: () => console.log("Leave Back"),
    });
    ScrollTrigger.create({
      animation: ta,
      trigger: secRef3.current,
      start: "top top",
      // end: "+=4000",
      markers: true,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onEnter: () => console.log("Enter"),
      onLeave: () => console.log("Leave"),
      onEnterBack: () => console.log("Enter Back"),
      onLeaveBack: () => console.log("Leave Back"),
    });
  }, [tl]);

  return (
    <div ref={containerRef}>
      <div
        ref={secRef1}
        className="flex items-center justify-center min-h-screen text-3xl font-semibold text-center uppercase bg-green-400 text-gray-50"
      >
        Section 1
      </div>
      <div
        ref={secRef2}
        className="flex items-center justify-center min-h-screen text-3xl font-semibold text-center uppercase bg-blue-400 text-gray-50"
      >
        Section 2
      </div>
      <div
        ref={secRef3}
        className="flex items-center justify-center min-h-screen text-3xl font-semibold text-center uppercase bg-red-400 text-gray-50"
      >
        Section 3
      </div>
    </div>
  );
}

export default Sections;

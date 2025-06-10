import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


// import components
import Header from './components/header';
import Footer from './components/footer';


function App() {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
  }, { dependencies: [] });

  return (
    <>
      <Header />
      <main className="flex items-center justify-center h-[500px] bg-gray-100">
        <div className="">
          <h1
            ref={titleRef}
            style={{ opacity: 0, transform: "translateY(-50px)" }}
            className="text-3xl font-bold text-amber-500"
          >
            Personal Diary App
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
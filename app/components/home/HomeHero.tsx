"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { HomeHeroCta } from "../";

const HomeHero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const videoFramesRef = useRef<{ frame: number }>({ frame: 0 });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      contextRef.current = context;

      const setCanvasSize = () => {
        const canvasEl = canvasRef.current;
        const ctx = contextRef.current;
        if (!canvasEl || !ctx) return;

        const pixelRatio = window.devicePixelRatio || 1;
        // Set backing store size (physical pixels)
        canvasEl.width = Math.floor(window.innerWidth * pixelRatio);
        canvasEl.height = Math.floor(window.innerHeight * pixelRatio);
        // Set CSS size (logical pixels)
        canvasEl.style.width = window.innerWidth + "px";
        canvasEl.style.height = window.innerHeight + "px";

        // Reset any previous transforms before scaling for DPR
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(pixelRatio, pixelRatio);

        // Improve resampling quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      };

      setCanvasSize();

      const frameCount = 25;
      const currentFrame = (index: number): string =>
        `/hero-frames/frames${(index + 1).toString().padStart(4, "0")}.jpg`;

      const images: HTMLImageElement[] = [];
      let imagesToLoad: number = frameCount;

      const onLoad = () => {
        imagesToLoad--;
        if (!imagesToLoad) {
          render();
          setupScrollTrigger();
        }
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = onLoad;
        img.onerror = function () {
          onLoad.call(this);
        };
        img.src = currentFrame(i);
        images.push(img);
      }

      imagesRef.current = images;

      const render = () => {
        const ctx = contextRef.current;
        if (!ctx) return;

        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        const img = images[videoFramesRef.current.frame];
        if (img && img.complete && img.naturalWidth > 0) {
          const imageAspect = img.naturalWidth / img.naturalHeight;
          const canvasAspect = canvasWidth / canvasHeight;

          let drawWidth: number,
            drawHeight: number,
            drawX: number,
            drawY: number;

          if (imageAspect > canvasAspect) {
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imageAspect;
            drawX = (canvasWidth - drawWidth) / 2;
            drawY = 0;
          } else {
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imageAspect;
            drawX = 0;
            drawY = (canvasHeight - drawHeight) / 2;
          }

          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
      };

      // --- rAF batching to avoid redundant draws during scroll ---
      let needsRender = false;
      const renderOnce = () => {
        if (needsRender) return;
        needsRender = true;
        requestAnimationFrame(() => {
          needsRender = false;
          render();
        });
      };

      const setupScrollTrigger = () => {
        ScrollTrigger.create({
          trigger: ".hero",
          start: "top top",
          end: `+=${window.innerHeight * 1.0}px`,
          pin: true,
          pinSpacing: true,
          scrub: 0.2,
          onUpdate: (self) => {
            const progress = self.progress;

            const headerEl = headerRef.current;
            const heroEl = heroImgRef.current;

            const animationProgress = Math.min(progress / 0.6, 1);
            const targetFrame = Math.min(
              Math.floor(animationProgress * (frameCount - 1)),
              frameCount - 1
            );
            videoFramesRef.current.frame = targetFrame;
            renderOnce();

            if (progress <= 0.25) {
              const zProgress = progress / 0.25;
              const translateZ = zProgress * -500;

              let opacity = 1;
              if (progress >= 0.2) {
                const fadeProgress = Math.min(
                  (progress - 0.2) / (0.25 - 0.2),
                  1
                );
                opacity = 1 - fadeProgress;
              }

              if (headerEl) {
                gsap.set(headerEl, {
                  transform: `translate(-50%, -50%) translateZ(${translateZ}px)`,
                  opacity,
                });
              }
            } else {
              if (headerEl) {
                gsap.set(headerEl, { opacity: 0 });
              }
            }

            // --- Image reveal synced to title fade end (smoother) ---
            if (progress < 0.25) {
              // Before title fade completes: keep image hidden
              if (heroEl) {
                gsap.set(heroEl, {
                  transform: "translateZ(1000px)",
                  opacity: 0,
                });
              }
            } else if (progress >= 0.25 && progress <= 1) {
              const raw = (progress - 0.25) / (1 - 0.25); // 0 -> 1
              const t = gsap.parseEase("power2.out")(raw); // eased 0 -> 1
              const translateZ = 1000 - t * 1000;
              const opacity = t;

              if (heroEl) {
                gsap.set(heroEl, {
                  transform: `translateZ(${translateZ}px)`,
                  opacity,
                });
              }
            } else {
              // Fully revealed
              if (heroEl) {
                gsap.set(heroEl, {
                  transform: "translateZ(0px)",
                  opacity: 1,
                });
              }
            }
          },
        });
      };

      const handleResize = () => {
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <section className="hero overflow-hidden relative w-[100vw] h-[100svh] bg-[#0e0004]">
        <canvas
          className="block w-full h-full object-cover opacity-80"
          ref={canvasRef}
        ></canvas>

        <div className="hero-content z-50">
          <div className="header max-w-7xl" ref={headerRef}>
            <HomeHeroCta />
          </div>
        </div>
        <div className="hero-img-container">
          <div className="hero-img" ref={heroImgRef}>
            <img src="/logo-white.png" alt="website logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;

/* import './MatrixRainingCode.css'
import { useEffect, useRef } from "react";

const MatrixRainingCode = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        let width = (canvas.width = window.innerWidth - 3)
        let height = (canvas.height = window.innerHeight - 3)
        let columns = Math.floor(width / 20)
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
        const charArray = characters.split("")
        let drops = []

        for (let i = 0; i < columns; i++) {
            drops[i] = 1
        }

        let frameRate = 25
        let lastFrameTime = Date.now()

        const draw = () => {
            const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--matrix-background-color')
            ctx.fillStyle = backgroundColor
            ctx.fillRect(0, 0, width, height)
            ctx.fillStyle = "#283AFF"
            ctx.font = "16px monospace"

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)]
                ctx.fillText(text, i * 20, drops[i] * 20)

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0
                }

                drops[i]++
            }
        }

        const animate = () => {
            const currentTime = Date.now()
            const elapsedTime = currentTime - lastFrameTime

            if (elapsedTime > 1000 / frameRate) {
                draw()
                lastFrameTime = currentTime
            }
            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
            columns = Math.floor(width / 20)
            drops = []
            for (let i = 0; i < columns; i++) {
                drops[i] = 1
            }
        }

        const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
        if (!isMobileDevice) {
            window.addEventListener("resize", handleResize)
        }

        return () => {
            if (!isMobileDevice) {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [])

    return (
        <div className='container-matrix'>
            <canvas ref={canvasRef} className='matrix-canvas'></canvas>
        </div>
    )
}

export default MatrixRainingCode */

import './MatrixRainingCode.css'
import { useEffect, useRef, useMemo } from "react";

const FRAME_RATE = 25;
const CHAR_SIZE = 20;
const CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";
const FONT_STYLE = "16px monospace";
const DROP_RESET_PROBABILITY = 0.975;

const MatrixRainingCode = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    const charArray = useMemo(() => CHARACTERS.split(""), []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth - 3;
        let height = canvas.height = window.innerHeight - 3;
        let columns = Math.floor(width / CHAR_SIZE);
        let drops = Array(columns).fill(1);
        let lastFrameTime = Date.now();

        const draw = () => {
            try {
                const currentTime = Date.now();
                const elapsedTime = currentTime - lastFrameTime;

                if (elapsedTime > 1000 / FRAME_RATE) {
                    const backgroundColor = getComputedStyle(document.documentElement)
                        .getPropertyValue('--matrix-background-color');

                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(0, 0, width, height);
                    ctx.fillStyle = "#283AFF";
                    ctx.font = FONT_STYLE;

                    for (let i = 0; i < drops.length; i++) {
                        const text = charArray[Math.floor(Math.random() * charArray.length)];
                        const x = i * CHAR_SIZE;
                        const y = drops[i] * CHAR_SIZE;

                        ctx.fillText(text, x, y);

                        if (y > height && Math.random() > DROP_RESET_PROBABILITY) {
                            drops[i] = 0;
                        }

                        drops[i]++;
                    }

                    lastFrameTime = currentTime;
                }
            } catch (error) {
                console.error('Error in matrix animation:', error);
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        const resizeObserver = new ResizeObserver(() => {
            width = canvas.width = window.innerWidth - 3;
            height = canvas.height = window.innerHeight - 3;
            columns = Math.floor(width / CHAR_SIZE);
            drops = Array(columns).fill(1);
        });

        resizeObserver.observe(document.body);
        animationRef.current = requestAnimationFrame(draw);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            resizeObserver.disconnect();
        };
    }, [charArray]);

    return (
        <div className='container-matrix'>
            <canvas
                ref={canvasRef}
                id="matrix-canvas"
                aria-label="Matrix Rain Animation"
                role="img"
            />
        </div>
    );
};

export default MatrixRainingCode;
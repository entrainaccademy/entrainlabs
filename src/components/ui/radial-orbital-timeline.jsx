"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export default function RadialOrbitalTimeline({ timelineData, }) {
    const [expandedItems, setExpandedItems] = useState({});
    const [rotationAngle, setRotationAngle] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [pulseEffect, setPulseEffect] = useState({});
    const [centerOffset] = useState({ x: 0, y: 0 });
    const [activeNodeId, setActiveNodeId] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef(null);
    const orbitRef = useRef(null);
    const nodeRefs = useRef({});
    // Lighter color mapping for each course
    const courseColors = {
        1: { bg: 'bg-blue-100/95', border: 'border-blue-200', text: 'text-blue-900' },
        2: { bg: 'bg-purple-100/95', border: 'border-purple-200', text: 'text-purple-900' },
        3: { bg: 'bg-green-100/95', border: 'border-green-200', text: 'text-green-900' },
        4: { bg: 'bg-orange-100/95', border: 'border-orange-200', text: 'text-orange-900' },
        5: { bg: 'bg-pink-100/95', border: 'border-pink-200', text: 'text-pink-900' },
        6: { bg: 'bg-indigo-100/95', border: 'border-indigo-200', text: 'text-indigo-900' },
    };
    // Set mounted state on client side only
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const handleContainerClick = (e) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };
    const toggleItem = (id) => {
        setExpandedItems((prev) => {
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) {
                    newState[parseInt(key)] = false;
                }
            });
            newState[id] = !prev[id];
            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);
                const relatedItems = getRelatedItems(id);
                const newPulseEffect = {};
                relatedItems.forEach((relId) => {
                    newPulseEffect[relId] = true;
                });
                setPulseEffect(newPulseEffect);
                centerViewOnNode(id);
            }
            else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }
            return newState;
        });
    };
    useEffect(() => {
        let rotationTimer;
        if (autoRotate && isMounted) {
            // Detect if mobile for smoother animation
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const rotationSpeed = isMobile ? 0.2 : 0.3; // Slower on mobile
            const interval = isMobile ? 60 : 50; // Less frequent updates on mobile
            rotationTimer = setInterval(() => {
                setRotationAngle((prev) => {
                    const newAngle = (prev + rotationSpeed) % 360;
                    return Number(newAngle.toFixed(3));
                });
            }, interval);
        }
        return () => {
            if (rotationTimer)
                clearInterval(rotationTimer);
        };
    }, [autoRotate, isMounted]);
    const centerViewOnNode = (nodeId) => {
        if (!nodeRefs.current[nodeId])
            return;
        const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
        const totalNodes = timelineData.length;
        const targetAngle = (nodeIndex / totalNodes) * 360;
        setRotationAngle(270 - targetAngle);
    };
    const calculateNodePosition = (index, total) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        // Use default radius for SSR, then responsive radius on client
        const radius = isMounted && typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 200;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian) + centerOffset.x;
        const y = radius * Math.sin(radian) + centerOffset.y;
        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
        return { x, y, angle, zIndex, opacity };
    };
    const getRelatedItems = (itemId) => {
        const currentItem = timelineData.find((item) => item.id === itemId);
        return currentItem ? currentItem.relatedIds : [];
    };
    const isRelatedToActive = (itemId) => {
        if (!activeNodeId)
            return false;
        return getRelatedItems(activeNodeId).includes(itemId);
    };
    return (<div className="w-full h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-transparent" ref={containerRef} onClick={handleContainerClick}>
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div className="absolute w-full h-full flex items-center justify-center" ref={orbitRef} style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
        }}>
          {/* Central orb with logo */}
          <div className="absolute w-16 h-16 rounded-full bg-white flex items-center justify-center z-10 shadow-lg shadow-white/20">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
            <img src="/New-logo.png" alt="Entrain Labs" className="w-12 h-12 object-contain relative z-10"/>
          </div>

          {/* Orbit ring */}
          <div className="absolute w-60 h-60 sm:w-96 sm:h-96 rounded-full border border-white/10"></div>

          {/* Nodes - only render after mount to avoid hydration issues */}
          {isMounted && timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            return (<div key={item.id} ref={(el) => {
                    nodeRefs.current[item.id] = el;
                }} className="absolute cursor-pointer will-change-transform" style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    zIndex: isExpanded ? 200 : position.zIndex,
                    opacity: isExpanded ? 1 : position.opacity,
                    transition: 'opacity 0.7s ease-out, z-index 0s',
                }} onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                }}>
                {/* Energy aura */}
                <div className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`} style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                }}/>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${isExpanded
                    ? "bg-white text-black border-white shadow-lg shadow-white/30 scale-150"
                    : isRelated
                        ? "bg-white/50 text-black border-white animate-pulse"
                        : "bg-black text-white border-white/40"}`}>
                    {React.createElement(item.icon, { size: 16 })}
                  </div>

                {/* Label */}
                <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300
                    ${isExpanded ? "text-white scale-125" : "text-white/70"}`}>
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (<Card className={`absolute top-20 left-1/2 -translate-x-1/2 w-64 ${courseColors[item.id]?.bg || 'bg-black/90'} backdrop-blur-lg ${courseColors[item.id]?.border || 'border-white/30'} shadow-xl overflow-visible`}>
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 ${courseColors[item.id]?.text.replace('text-', 'bg-') || 'bg-white/50'}`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-mono ${courseColors[item.id]?.text || 'text-white/50'} opacity-60`}>{item.date}</span>
                      </div>
                      <p className={`text-sm font-semibold mt-1 ${courseColors[item.id]?.text || 'text-white'}`}>{item.title}</p>
                    </CardHeader>
                    <CardContent className={`text-xs ${courseColors[item.id]?.text || 'text-white/90'} opacity-80`}>
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>)}
              </div>);
        })}
        </div>
      </div>
    </div>);
}

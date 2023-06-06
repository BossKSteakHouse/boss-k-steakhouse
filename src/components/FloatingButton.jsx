import React, { useEffect, useState } from 'react';

export default function FloatingButton() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust the scroll position as needed
        setShowBackToTop(true);
        } else {
        setShowBackToTop(false);
        }
    };

    return (
        <div>
        {/* component content */}
        {showBackToTop && (
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                class={`back-to-top ${showBackToTop ? 'show' : ''} btn btn-secondary btn-sm`}
            >
                <span>Back To Top</span>
            </button>
        )}
        </div>
    );
}
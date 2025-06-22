import { useEffect, useState } from "react";

const PromoBanner = ({ message = "🎉 Get 10% bonus on first top-up!", countdownEnd }) => {
    const [timeLeft, setTimeLeft] = useState({});
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!countdownEnd) return;

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = new Date(countdownEnd).getTime() - now;

            if (distance < 0) {
                setVisible(false);
                return;
            }

            setTimeLeft({
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        };

        updateTimer();
        const intervalId = setInterval(updateTimer, 1000);

        return () => clearInterval(intervalId);
    }, [countdownEnd]);

    if (!visible) return null;

    return (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold flex items-center justify-between px-6 py-3 shadow-lg select-none">
            <div className="flex items-center gap-3">
                <span className="text-2xl">{message}</span>

                {countdownEnd && (
                    <span className="ml-4 bg-black bg-opacity-20 px-3 py-1 rounded-md font-mono">
                        ⏳ {String(timeLeft.hours).padStart(2, "0")}:
                        {String(timeLeft.minutes).padStart(2, "0")}:
                        {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                )}
            </div>
            <button
                onClick={() => setVisible(false)}
                aria-label="Close promo banner"
                className="text-black font-bold text-xl hover:text-red-600 transition-colors"
            >
                ×
            </button>
        </div>
    );
};

export default PromoBanner;

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        uid: "345****89",
        name: "Raj",
        rating: 5,
        review: "Super fast delivery! Got my diamonds in under 2 minutes.",
        avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
        uid: "897****12",
        name: "Sneha",
        rating: 4,
        review: "Very smooth transaction and trusted site. Will buy again!",
        avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
        uid: "192****45",
        name: "Dev",
        rating: 5,
        review: "Amazing support team. Helped me late at night with payment!",
        avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
        uid: "558****23",
        name: "Zara",
        rating: 4,
        review: "I was hesitant but it worked like magic. Thank you!",
        avatar: "https://i.pravatar.cc/100?img=4",
    },
];

const CustomerReviews = () => {
    return (
        <section className="py-20 px-4 bg-transparent text-white max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gold mb-4 text-center">Customer Reviews</h2>
            <p className="text-gray-300 mb-12 text-center">
                Here’s what our satisfied players are saying.
            </p>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ paddingBottom: "3rem" }}
            >
                {reviews.map((user, i) => (
                    <SwiperSlide key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300 text-left mx-2"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={user.avatar}
                                    alt={`${user.name} avatar`}
                                    className="h-12 w-12 rounded-full border border-white/30"
                                />
                                <div>
                                    <p className="font-semibold text-white">{user.name}</p>
                                    <p className="text-sm text-gray-400">UID: {user.uid}</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                {[...Array(user.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-200 text-sm italic">“{user.review}”</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CustomerReviews;

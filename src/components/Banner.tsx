import bannerImg from "../assets/banner-main.png";

const Banner = () => {
    return (
        <div className="container mx-auto relative overflow-hidden rounded-2xl bg-[#111111] px-4 py-10 text-center sm:px-6 sm:py-12 md:px-10 md:py-16 lg:py-20">

            {/* Background Glow */}
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/40 blur-[80px] sm:-bottom-32 sm:-left-32 sm:h-80 sm:w-80 sm:blur-[100px]"></div>

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pink-400/30 blur-[80px] sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 sm:blur-[100px]"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl">

                {/* Cricket Logo/Image */}
                <img
                    src={bannerImg}
                    alt="Cricket"
                    className="mx-auto mb-5 h-15 w-auto object-contain sm:mb-6 md:h-20 lg:h-24"
                />

                {/* Heading */}
                <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-sm text-gray-300 sm:text-base md:mt-4 md:text-xl lg:text-2xl">
                    Beyond Boundaries Beyond Limits
                </p>

                {/* Button */}
                <button
                    className="
                        mt-6 rounded-xl
                        border border-lime-400
                        cursor-pointer
                        bg-lime-400
                        px-5 py-2.5
                        text-sm font-bold text-black
                        shadow-[0_0_20px_rgba(163,230,53,0.35)]
                        transition
                        hover:bg-lime-300
                        hover:shadow-[0_0_30px_rgba(163,230,53,0.55)]
                        sm:mt-7 sm:px-6 sm:py-3 sm:text-base
                        lg:px-8 lg:py-3.5
                    "
                >
                    Claim Free Credit →
                </button>

            </div>
        </div>
    );
};

export default Banner;
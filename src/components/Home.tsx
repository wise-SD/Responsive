import hero from '../assets/images/hero-image.png';

export const Home = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center p-4 text-center md:text-left md:flex-row md:gap-20 mx-auto max-w-screen-xl min-h-screen h-screen">
        <div className="md:w-[434px] order-2 md:order-1">
          <h1 className="font-Inter font-bold text-2xl mb-3 md:text-5xl md:mb-8">
            Virtual healthcare for you
          </h1>
          <p className="text-[#7D7987] text-sm md:text-lg mb-6 md:mb-9">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="text-white font-bold text-center py-3 px-6 rounded-2xl bg-[#458FF6] md:btn-desktop ">
            Consult today
          </button>
        </div>
        <div className="order-1 mb-9">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

import bannerBg from "../../assets/Home/bannerBg.png";
import bannerImg from "../../assets/Home/bannerImg.png";

const SalesBanner = () => {
  return (
    <section className="">
      <div className="container py-15">
        <div
          className="flex flex-col items-center justify-between bg-cover p-6 sm:flex-row sm:px-14 sm:py-[70px]"
          style={{ backgroundImage: `url("${bannerBg}")` }}
        >
          <div className="w-[45%]">
            <p className="text-ButtonGreen text-[16px] font-semibold font-popins">
              Categories
            </p>
            <h2 className="text-[70px]  font-inter font-semibold text-TextWhite leading-[80px] mt-[32px] mb-[32px]">
              Enhance Your Music Experience
            </h2>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <div className="bg-BGWhite flex h-13 md:h-16 w-13 md:w-16 flex-col items-center justify-center rounded-full p-4">
                <span className="text-[16px] font-bold font-popins leading-4">
                  05
                </span>
                <span className="text-[11px] font-normal font-popins">
                  Days
                </span>
              </div>
              <div className="bg-BGWhite flex h-13 md:h-16 w-13 md:w-16 flex-col items-center justify-center rounded-full p-3.5">
                <span className="text-[16px] font-bold font-popins leading-4">
                  23
                </span>
                <span className="text-[11px] font-normal font-popins">
                  Hours
                </span>
              </div>
              <div className="bg-BGWhite flex h-13 md:h-16 w-13 md:w-16 flex-col items-center justify-center rounded-full p-3.5">
                <span className="text-[16px] font-bold font-popins leading-4">
                  59
                </span>
                <span className="text-[11px] font-normal font-popins">
                  Minutes
                </span>
              </div>
              <div className="bg-BGWhite flex h-13 md:h-16 w-13 md:w-16 flex-col items-center justify-center rounded-full p-6">
                <span className="text-[16px] font-bold font-popins leading-4">
                  35
                </span>
                <span className="text-[11px] font-normal font-popins">
                  Seconds
                </span>
              </div>
            </div>
            <button className="bg-ButtonGreen text-TextWhite px-12 py-4 rounded cursor-pointer">
              Buy Now!
            </button>
          </div>

          <div className="hidden h-full w-[50%] mr-15 items-center justify-center sm:flex">
            <img className="w-full" src={bannerImg} alt="Banner Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesBanner;

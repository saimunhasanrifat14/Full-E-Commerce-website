import attractiveWomenImg from "../../../assets/Home/attractiveWomenImg.png";
import ecoPodImg from "../../../assets/Home/ecoPodImg.png";
import ps5Img from "../../../assets/Home/ps5Img.png";
import perfumeImg from "../../../assets/Home/perfumeImg.png";
import { Link } from "react-router";
import AllComponentHeading from "../../../Components/CommonComponents/AllComponentHeading";

const NewArrival = () => {
  return (
    <section>
      <div className="container py-15">
        <AllComponentHeading title="Featured" description="New Arrival" />

        <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-4 mt-10">
          {/* FIRST CARD */}
          <div className="bg-BGBlack/95 col-span-2 flex min-h-[380px] pt-[20%] sm:row-span-2">
            <div className="relative flex h-full w-full items-end">
              <div className="w-full">
                <img
                  src={ps5Img}
                  alt="Ps5"
                  className="mx-auto min-h-[280px] w-auto object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full space-y-4 p-8">
                <h3 className="text-TextWhite font-popins font-semibold text-[24px]">
                  Playstation 5
                </h3>
                <p className="text-GrayLight font-popins font-normal text-[14px] max-w-[250px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link
                  to="/shop"
                  className="text-GrayLight font-popins font-normal text-[14px] hover:text-ButtonGreen underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="bg-BGBlack/95 relative col-span-2 min-h-[280px]">
            <div className="h-full">
              <img
                src={attractiveWomenImg}
                alt="Ps5"
                className="ms-auto h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="max-w-[260px] space-y-4">
                <h3 className="text-TextWhite font-popins font-semibold text-[24px]">
                  Women’s Collections
                </h3>
                <p className="text-GrayLight font-popins font-normal text-[14px]">
                  Featured woman collections that give you another vibe.
                </p>
                <Link
                  to="/shop"
                  className="text-GrayLight font-popins font-normal text-[14px] hover:text-ButtonGreen underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="bg-BGBlack/95 relative flex min-h-[284px] p-[30px]">
            <div className="w-full">
              <img
                src={ecoPodImg}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6">
              <div className="space-y-2">
                <h3 className="text-TextWhite font-popins font-semibold text-[24px]">
                  Speakers
                </h3>
                <p className="text-GrayLight font-popins font-normal text-[14px]">
                  Amazon's Wireless Speakers
                </p>
                <Link
                  to="/shop"
                  className="text-GrayLight font-popins font-normal text-[14px] hover:text-ButtonGreen underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* FOURTH CARD */}
          <div className="bg-BGBlack/95 relative flex min-h-[284px] p-[30px]">
            <div className="w-full">
              <img
                src={perfumeImg}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6">
              <div className="space-y-2">
                <h3 className="text-TextWhite font-popins font-semibold text-[24px]">
                  Perfume
                </h3>
                <p className="text-GrayLight font-popins font-normal text-[14px]">
                  GUCCI INTENSE OUD EDP
                </p>
                <Link
                  to="/shop"
                  className="text-GrayLight font-popins font-normal text-[14px] hover:text-ButtonGreen underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

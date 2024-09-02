import { Separator } from "@/components/ui/separator";
import YouTubePlayer from "@/components/YouTubePlayer";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="bg-white rounded-lgs shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-[#800080]">
          Tuck into takeaway today{" "}
        </h1>
        <span className="text-xl">Your claim is just a click away! </span>
      </div>

      <div className="grid md:grid-cols gap-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center gap-4 text-center">
            <div className="container  md:w-[400px] sm:w-[200px] mx-auto">
              <img
                className="object-contain h-48 w-96"
                src="/assets/billing.jpeg"
                alt="billing"
              />
              <p>
                {" "}
                Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti
                pharetra in risus sagittis lacinia et vivamus phasellus.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 text-center">
            <div className="container md:w-[400px] sm:w-[200px] mx-auto">
              <img
                className="object-contain h-48 w-96"
                src="/assets/doctor_bill.jpeg"
                alt="doctor_bill"
              />
              <p>
                {" "}
                Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti
                pharetra in risus sagittis lacinia et vivamus phasellus.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 text-center">
            <div className="container  md:w-[400px] sm:w-[200px] mx-auto">
              <img
                className="object-contain h-48 w-96"
                src="/assets/hospital_bill.jpg"
                alt="hospital_bill"
              />

              <p>
                {" "}
                Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti
                pharetra in risus sagittis lacinia et vivamus phasellus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="grid md:grid-cols gap-5">
        <div className="flex flex-col justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Get your bills even faster!
          </span>
          <span>
            {" "}
            Download MedBill App for faster ordering and personalised
            recommendations
          </span>
        </div>
      </div>
      <Separator />

      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col justify-center gap-4 text-center">
          <div className="container  md:w-[400px] sm:w-[200px] mx-auto">
            <img
              className="object-contain h-48 w-96"
              src="/assets/hospital_bill.jpg"
              alt="hospital_bill"
            />

            <p>
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti
              pharetra in risus sagittis lacinia et vivamus phasellus.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 text-center">
          <YouTubePlayer videoId="bVyh2inalvg" />
        </div>
      </div>
      <Separator />
    </div>
  );
}

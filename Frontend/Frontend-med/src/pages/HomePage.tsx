

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
    </div>
  );
}

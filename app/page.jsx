import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="text-white h-[44vh] gap-4 justify-center items-center flex flex-col">
        <div className="text-5xl font-bold justify-center items-center gap-2 flex text-center" >Support Creators <span><img className="invertimg" src="tea.gif" width={88} alt="" /></span></div>
        <p className="text-center mx-3">
       Connect with supporters, receive donations, and grow your impact. Whether you're a creator, nonprofit, or community project, we're here to help you reach your goals.
        </p>

        <div className="">
          <Link href="/login" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl  font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2">Start Here</Link>
          <Link
            href="/About"
            className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2"
          >
            About Us
          </Link>        </div>
      </div>

      <div className=" bg-white h-1 opacity-10 my-5"></div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-2xl text-center font-bold mb-14">Why Choose Our Platform?</h1>
        <div className="flex gap-4 justify-around">
          <div className="items space-y-3 items-center justify-center flex flex-col">
            <img className="bg-slate-400 rounded-full p-2 text-black " width={88} src="man.gif" alt="" />
            <p className="font-bold text-center">Support From Your Community</p>
            <p className="text-center">People who believe in your work can contribute and help you achieve your goals.</p>
          </div>
          <div className="items space-y-3 items-center justify-center flex flex-col">
            <img className="bg-slate-400 rounded-full p-2 text-black " width={88} src="group.gif" alt="" />
            <p className="font-bold text-center">Build Meaningful Connections</p>
            <p className="text-center">Engage with supporters and create a stronger community around your mission.</p>
          </div>
          <div className="items space-y-3 items-center justify-center flex flex-col">
            <img className="bg-slate-400 rounded-full p-2 text-black " width={88} src="coin.gif" alt="" />
            <p className="font-bold text-center">Receive Secure Donations</p>
            <p className="text-center">Collect contributions safely and transparently through our trusted platform.</p>
          </div>
        </div>
      </div>

      <div className=" bg-white h-1 opacity-10"></div>

      <div className="text-white justify-center items-center flex flex-col container mx-auto py-32">
        <h1 className="text-2xl text-center font-bold mb-14">Learn more about us</h1>
        <iframe className="w-full max-w-4xl h-[250px] md:h-[400px] lg:h-[500px]" src="https://www.youtube.com/embed/nIYFa2YF55U?si=r-XXsyu2K0fCHPCO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}

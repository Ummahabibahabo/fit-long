import FooterImg from "@/app/assests/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="fixed bg-black bottom-0 left-0 right-0 z-50 flex justify-between border-t-2 border-[#232732] mt-10 py-4">
      <div className="flex items-center gap-4">
        <Image src={FooterImg} alt="name" width={15} height={15}></Image>
        <p className="font-bold text-[14px] text-white">FITLOG</p>
      </div>
      <div>
        <div>
          <p className="font-normal text-[14px] text-[#8A92A0]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

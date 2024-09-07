import getpartners from "@/lib/getpartners";
import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";
import Marquee from "react-fast-marquee";


export default async function HomePartners() {
    const partners = await getpartners();
    
    const language = 'en';
    return(
        <div className="my-10 md:my-20 ">
            <h3 className="text-center font-bold text-[30px]">
                {language === "bn" ? "আমাদের পার্টনারসমূহ" : "Our Partners"}
            </h3>
            <div className="md:flex items-center justify-center flex-wrap gap-6 mt-[40px]">
                <Marquee speed={70}>
                    {
                    partners?.map((p) =>(
                    <div key={p._id}>
                    <ExportedImage
                        src={p.imageURL}
                        alt="aiec_partners_logo"
                        className="mr-7"
                        width={150}
                        height={1}
                    />
                    </div>))
                    }
                </Marquee>
            </div>  
        </div>
    )
};

import Container from "@/components/Container";
import FadeIn, {FadeInStagger} from "@/components/FadeIn";
import logoBrightPath from "../../public/images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "../../public/images/clients/family-fund/logo-light.svg";
import logoGreenLife from "../../public/images/clients/green-life/logo-light.svg";
import logoHomeWork from "../../public/images/clients/home-work/logo-light.svg";
import logoMailSmirk from "../../public/images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "../../public/images/clients/north-adventures/logo-light.svg";
import logoPhobiaLight from "../../public/images/clients/phobia/logo-light.svg";
import logoUnseal from "../../public/images/clients/unseal/logo-light.svg"
import Image from "next/image";
const clients = [
    ["Phobia", logoPhobiaLight],
    ["Family Fund", logoFamilyFund],
    ["Unseal", logoUnseal],
    ["Mail Smirk", logoMailSmirk],
    ["Home Work", logoHomeWork],
    ["Green Life", logoGreenLife],
    ["Bright Path", logoBrightPath],
    ["North Adventures", logoNorthAdventures],
];
export default function Clients(){
    return(
        <div className="mt-24 rounded-[50px] bg-gray-950 py-20 ">
            <Container>
                <div>
                    <FadeIn className="flex items-center gap-x-8">
                        <h2 className="text-white text-center text-sm font-semibold tracking-wider">We have worked with hundreds of amazing people.</h2>
                        <div className="h-px flex-auto bg-neutral-700" />
                    </FadeIn>
                    <FadeInStagger faster>
                        <ul role="list" className="mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 gap-10">
                            {
                                clients.map(([client, logo])=>(
                                    <li key={client}>
                                        <FadeIn>
                                            <Image src={logo} alt={client} />
                                        </FadeIn>
                                    </li>
                                ))
                            }
                        </ul>
                    </FadeInStagger>

                </div>
            </Container>
        </div>
    )
}
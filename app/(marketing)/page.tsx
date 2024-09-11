import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
            <div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mb-8 lg:mb-0">
                <Image src={"/hero.svg"} fill alt="Hero"/>
            </div>
        </main>
    );
}

// 55
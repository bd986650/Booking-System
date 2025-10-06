import Image from "next/image";
import Button from "@/shared/ui/Buttons/Button";
import Link from "next/link";
import LogoImage from "../../../../public/images/cube.png";

const LandingHeader: React.FC = () => {
    return (
        <header className="absolute top-6 left-0 right-0 flex justify-between items-center px-8 md:px-16 z-20">
            <Image src={LogoImage} alt="Cube logo" className="w-10 h-10" />
            <div className="flex gap-4">
                <Button asChild variant="filled" color="blue">
                    <Link href="/auth">Вход</Link>
                </Button>
                <Button asChild variant="outline" color="blue">
                    <Link href="/auth">Регистрация</Link>
                </Button>
            </div>
        </header>
    );
};

export default LandingHeader;

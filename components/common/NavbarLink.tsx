import AppLink from "@/components/common/AppLink";

type NavbarLinkType = {
    title: string;
    destination: string;
}

export default function NavbarLink({ destination, title}: NavbarLinkType) {
    return (
        <AppLink destination={destination} classNames="mr-5 hover:text-white">{title}</AppLink>
    )
}
import React from "react";
import Link from "next/link";

type AppLinkType = {
    destination: string;
    classNames?: string;
    children: React.ReactNode
    target?: '_blank' | ''
}

export default function AppLink({ destination, classNames, children, target}: AppLinkType) {
    return (
        <Link href={destination} className={classNames} target={target} rel={target ?? 'noopener noreferrer'}>
            {children}
        </Link>
    )
}
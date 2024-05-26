// Byimaan
'use client';

import { CategoryTS } from "@/types/app";
import { ParamsPropOptionalTS } from "@/types/components";
import Link from "next/link";
import { useParams } from "next/navigation";

type NavbarLinkTS = CategoryTS & ParamsPropOptionalTS;

export default function NavbarLink({id, name}: NavbarLinkTS){
    
    const params = useParams();
    const isActive = params?.categoryId === id;

    return (
        <Link 
            href={`/${id}`}
            className={`text-lg font-semibold text-center flex items-center gap-2 ${isActive ? ' text-black ' : ' text-gray-500 '}`}
        >
            {name}
        </Link>
    )
};

"use client";
import { Breadcrumbs, Container } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x);

    return (

        <div className="about-layout">
            <Container maxWidth="lg" className="px-10 py-4">
                <Breadcrumbs aria-label="breadcrumb" className="mb-4">

                    {pathnames.map((value, index) => {
                        const isLast = index === pathnames.length - 1;
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

                        return isLast ? (
                            <span key={index} className="underline cursor-pointer capitalize text-orange-400">
                                {value}
                            </span>
                        ) : (
                            <Link
                                key={index}
                                href={routeTo}
                                className="underline cursor-pointer text-orange-400"
                            >
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </Container>
            <main>{children}</main>
        </div>

    );
}

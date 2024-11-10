"use client"

import { useParams } from "next/navigation"

export default function Page() {
    const search = useParams()
    // const search = searchParams.get('search')
    console.log(search)
};

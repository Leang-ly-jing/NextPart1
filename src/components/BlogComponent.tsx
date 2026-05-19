"use client"
import { blogType } from "@/lib/blog/blog-type";
import Image from "next/image";
import AddLoopyComponent from "./AddLoopyComponent";

export default function BlogComponent({profile,name,price}:blogType){
    return(
        <div className="border b p-8 gap-4 rounded-2xl bg-white shadow-xl text-center duration-300 hover:-translate-y-1 hover:shadow-2xl ">
            <Image
             src={profile}
             width= {200}
             height={200}
             alt="profile" />
            <h1>Name : {name} </h1>
            <h2>Price : {price}$</h2>
            <AddLoopyComponent/>
        </div>
    )
}
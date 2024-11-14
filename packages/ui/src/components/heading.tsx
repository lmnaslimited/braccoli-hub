import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function Heading(props: Tcomponent) {
    return (
        <p className="w-full font-extrabold leading-none tracking-tight text-th-textPrimary md:text-2xl lg:text-4xl">
            {props.title}
        </p>
    );
}

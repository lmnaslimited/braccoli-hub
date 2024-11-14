import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function Badge(props: Tcomponent) {
    return (
        <>
            <span className="bg-th-Primary text-th-textPrimary text-sm font-medium px-2.5 py-1 rounded">
                {props.title}
            </span>
        </>
    );
}

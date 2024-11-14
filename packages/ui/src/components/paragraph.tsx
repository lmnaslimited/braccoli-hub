import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function Paragraph(props: Tcomponent) {
    return (
        <>
            <p className="w-full text-md font-normal text-th-textTertiary lg:text-lg">
                {props.content}
            </p>
        </>
    );
}

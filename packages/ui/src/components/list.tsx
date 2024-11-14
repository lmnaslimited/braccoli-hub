import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function List(props: Tcomponent) {
    return (
        <>
            <ul className="max-w-md text-th-textTertiary list-disc list-inside">
                <li>{props.item}</li>
                <li>{props.item}</li>
                <li>{props.item}</li>
            </ul>
        </>
    );
}

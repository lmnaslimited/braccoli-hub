import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function Button(props: Tcomponent) {
    return (
        <button
            type="button"
            className="text-th-textPrimary bg-th-colormode border border-th-borderPrimary focus:outline-none hover:bg-th-backgroundSecondary font-medium rounded-lg text-sm px-5 py-2.5"
        >
            {props.title}
        </button>
    );
}

import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function Avatar(props: Tcomponent) {
    return (
        <>
            <div>
                <img className="w-10 h-10 rounded-full border border-th-borderSecondary"
                    src={props.link}
                    alt={props.title}
                />
            </div>
        </>
    );
}

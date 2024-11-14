import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function Input(props: Tcomponent) {
    return (
        <>
            <form className="max-w-sm mx-auto">
                <input
                    type="email"
                    className="bg-th-backgroundPrimary text-th-textPrimary text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                    placeholder={props.title}
                />
            </form>
        </>
    );
}

import React from "react";
import { Tcomponent } from "../typeScript/types";

export default function Toast(props: Tcomponent) {
    return (
        <>
            <div className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-th-textSenary bg-th-backgroundPrimary divide-x rtl:divide-x-reverse divide-th-borderPrimary rounded-lg shadow" role="alert">
                <svg className="w-5 h-5 text-th-primary rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                </svg>
                <div className="ps-4 text-sm font-normal text-th-textPrimary">{props.content}</div>
            </div>
        </>
    );
}

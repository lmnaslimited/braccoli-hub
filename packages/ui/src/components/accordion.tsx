import React from "react";
import { Tcomponent } from "../typeScript/types"

export default function Accordion(props: Tcomponent) {
    return (
        <>
            <div className="max-w-lg w-full mx-auto">
                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-th-textSecondary border border-th-borderPrimary rounded-t-xl hover:bg-th-backgroundSecondary gap-3">
                        <span>{props.title}</span>
                        <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className="p-5 border border-th-borderPrimary">
                    <p className="mb-2 text-th-textSecondary">{props.content}</p>
                </div>

                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-th-textSecondary border border-th-borderPrimary hover:bg-th-backgroundSecondary gap-3">
                        <span>{props.title}</span>
                        <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className="p-5 border border-th-borderPrimary">
                    <p className="mb-2 text-th-textSecondary">{props.content}</p>
                </div>

                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-th-textSecondary border border-th-borderPrimary hover:bg-th-backgroundSecondary gap-3">
                        <span>{props.title}</span>
                        <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className="p-5 border border-th-borderPrimary">
                    <p className="mb-2 text-th-textSecondary">{props.content}</p>
                </div>
            </div>
        </>
    )
}

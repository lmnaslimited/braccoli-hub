import React from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import { Tcomponent } from "../typeScript/types";

export default function Card(props: Tcomponent) {
    return (
        <>
            <div className="block max-w-sm p-6 bg-th-backgroundPrimary border border-th-borderPrimary rounded-lg shadow hover:bg-th-backgroundSecondary">
                <Heading title={props.title}></Heading>
                <Paragraph content={props.content}></Paragraph>
            </div>
        </>
    );
}

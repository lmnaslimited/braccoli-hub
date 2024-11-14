import React from "react";
import Button from "./button";
import Heading from "./heading";
import Paragraph from "./paragraph";
import { Thero } from "../typeScript/types";

export default function Jumbotron(props: Thero) {
    return (
        <section className="flex flex-col items-center justify-center px-6 py-12 bg-th-backgroundPrimary md:py-16 lg:py-24 text-th-textPrimary text-center space-y-6">
            <Heading title={props.title.title1} />
            <div className="w-2/3">
                <Paragraph content={props.content} />
            </div>
            <div className="flex space-x-2">
                <Button title={props.title.title2} />
                <Button title={props.title.title3} />
            </div>
        </section>
    );
}

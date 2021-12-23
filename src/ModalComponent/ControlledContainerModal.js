import React, { useState } from "react";
import { ControlledModal } from "./ControlledModal";

export const ControlledContainerModal = () => {
    const [setShow, shouldSetShow] = useState(false);
    return(
        <>
            <ControlledModal setShow={setShow} onRequestClose={() => shouldSetShow(false)} children={"Hello Boss"}/>
            <button onClick={() => shouldSetShow(true)}>{setShow ? "Hide Modal" : "Show Modal"}</button>
        </>
    );
};
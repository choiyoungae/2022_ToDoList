import React, { useState, useEffect } from "react";
import Clock from "./Clock";

const Test = () => {
    return <>
    <div id="clock">{Clock()}</div>
    </>
}

export default Test
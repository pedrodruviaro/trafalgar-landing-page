import React from "react";
import { Container } from "./styles.jsx";

export const LineTitle = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

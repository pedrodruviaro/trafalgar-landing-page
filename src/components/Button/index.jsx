import React from "react";
import { Container } from "./styles.jsx";

export const Button = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

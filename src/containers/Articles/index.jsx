import React from "react";
import { Container } from "./styles.jsx";
import { LineTitle } from "../../components/LineTitle";
import { articles } from "./data";
import { ArticleCard } from "../../components/ArticleCard";
import { Button } from "../../components/Button";
import { Dots } from "../../components/Dots";

export const Articles = () => {
    return (
        <Container>
            <LineTitle lineCenter>Check out our latest article</LineTitle>
            <div>
                {articles.map((article) => (
                    <ArticleCard key={article.title} {...article} />
                ))}
                <Dots />
            </div>
            <Button secondary>View all</Button>
        </Container>
    );
};

import React from "react";
import {Grid} from "@material-ui/core";
import Course, {Props as CourseProps} from "./components/CourseListItemView";

export default () => {

    const dummy = [];
    for (let i = 0; i < 20; i++) {
        dummy.push(i);
    }

    const obj: CourseProps = {
        name: "john",
        description: "john e prost",
        preview: "https://fireship.io/lessons/fauna-db-quickstart/img/featured.webp",
        tags: ["john", "e", "prost"]
    }

    return (
        <Grid container justify="center">
            {dummy.map(x => (
                    <Grid item xs={12} md={6} lg={4}>
                        <Course {...obj}/>
                    </Grid>
                )
            )}
        </Grid>
    )
}
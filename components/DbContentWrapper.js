import { GlobalContext } from "../state/GlobalContext";
import { useContext } from "react";
import DbContentSection from "./DbContentSection";
import { Loader } from "@mantine/core";

const DbContentWrapper = ({ details, slug }) => {

    const { state } = useContext(GlobalContext);
    const { results } = state

    if(!results) {
        return(
            <Loader />
        )
    }

    return (
        <DbContentSection details={details} slug={slug} />
    )
}

export default DbContentWrapper
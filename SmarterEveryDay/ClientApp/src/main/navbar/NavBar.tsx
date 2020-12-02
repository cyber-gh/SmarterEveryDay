import React from "react";
import {Box} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default () => {
    return (
        <>
            <div className="nav">
                <div className="logo-box">
                    <Box fontWeight="fontWeightBold" fontSize={25}>
                        Smarter Every Day
                        {/*<Typography variant={"h5"} >Smarter Every Day </Typography>*/}
                    </Box>
                </div>
                <div className="elements">


                    <div className="el">
                        <LocalOfferIcon fontSize={"large"}/>
                    </div>

                    <div className="el">
                        <VideoLibraryIcon fontSize={"large"}/>
                    </div>

                    <div className="el">
                        <SearchIcon fontSize={"large"}/>

                        {/*<SearchBar*/}
                        {/*    value={""}*/}
                        {/*    onChange={(v) => {}}*/}
                        {/*    onRequestSearch={() => {}}*/}
                        {/*/>*/}
                    </div>

                </div>
            </div>
        </>
    )
}
import React from "react";
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import {Box} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

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
                        <AccessAlarmsIcon/>
                        <SearchIcon/>
                    </div>

                </div>
            </div>
        </>
    )
}
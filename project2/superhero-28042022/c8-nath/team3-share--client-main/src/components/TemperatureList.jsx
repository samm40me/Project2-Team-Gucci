import React, { useEffect, useState } from "react";
import TemperatureData from "./TemperatureData";
import { Grid, Typography } from "@mui/material";

const SuperheroList = () => {
  const [temperatureList, setTemperatureList] = useState();

  console.log(`TEMPERATURE List: ${JSON.stringify(temperatureList)}`);

  useEffect ( () => {
    const getweather = async () =>{
try{
  let response = await fetch("https://api.weather.gc.ca/collections/climate-daily/items?CLIMATE_IDENTIFIER=3031094")
  let weatherresponse = await response.json()
  console.log (`THIS ---:`, weatherresponse)
 return setTemperatureList(weatherresponse)

} catch (ex) {
        console.log(ex);
      }
    }
    getweather()

  },[])

  return (
    <Grid container>
      {temperatureList ? (
        temperatureList.map((temperature) => {
          return (
            
              <Grid xs={12} sm={6} md={3} item>
                <TemperatureData weather={temperature} />
              </Grid>
            
          );
        })
      ) : (
        <Typography component="div" variant="h3">
          {" "}
          Loading...{" "}
        </Typography>
      )}
    </Grid>
  );
};

export default SuperheroList;

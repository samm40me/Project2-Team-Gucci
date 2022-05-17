import React, { useEffect, useState } from "react";
import ShelterData from "./ShelterData";
import { Grid, Typography } from "@mui/material";

const ShelterList = () => {
  const [shelterList, setShelterList] = useState();
  // const [data, setData] = useState()
  // const [error, setError] =useState()
  // const [loading, setLoading] = useState()



  console.log(`shelterlist List: ${JSON.stringify(shelterList)}`);

  useEffect ( () => {
    const getshelters = async () =>{
try{
  let response = await fetch('https://data.calgary.ca/resource/7u2t-3wxf.json')
  let shelterresponse = await response.json()
  console.log (`THIS ---:`, shelterresponse)
 return setShelterList(shelterresponse)

} catch (ex) {
        console.log(ex);
      }
    }
    getshelters()

  },[])


  return (
    <Grid container>
      
      {shelterList ? (
        shelterList.map((shelter) => {
          return (
            
              <Grid xs={12} sm={6} md={3} item>
                <ShelterData shelter={shelter} />
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

export default ShelterList;

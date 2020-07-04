import React, { Component } from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";

import SpaceCard from './spacecard';

const ROCKET_QUERY = gql`
{
    launches(limit: 3) {
      rocket {
        rocket {
          cost_per_launch
          name
          description
        }
      }
      links {
        flickr_images
      }
      mission_name
      launch_site {
        site_name_long
      }
    }
  }
`;

const CardGen = ({ data }) => {




    const rocketinfo = data.launches;
    console.log(rocketinfo)

    const getSpaceCardMaker = (spaceCardObj) => {
    return (
            <Grid item xs={12} sm={4}>
                <SpaceCard {...spaceCardObj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={2}>
            {rocketinfo.map(spaceCardObj => getSpaceCardMaker(spaceCardObj))}
        </Grid>
    )
//     return (
//         data.map((dataSet, index) => {
//             return (
//             <>
//                 <SpaceCard key={index.toString()} data={dataSet} index={index} />
//                 {index > 1 ? null : (
//                     <Divider key={index.toString() + "div"} variant="middle" />
//                 )}
//             </>
//             )
//     })
// )
    };

class RocketQuery extends Component {
    render() {
        return (

            <Query query={ROCKET_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    console.log(data)
                    return (
                        <>
                        <CardGen data={data} />
                        </>
                    );
                }}
            </Query>
        )
    }
};

export default RocketQuery;
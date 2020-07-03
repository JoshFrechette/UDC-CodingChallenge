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


    console.log(data)

    const rocketinfo = data.launches;

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
    //     data.map((dataSet, index) => {
    //         <>
    //             <spaceCard key={index.toString()} data={dataSet} index={index} />
    //             {index > 1 ? null : (
    //                 <Divider key={index.toString() + "div"} variant="middle" />
    //             )}
    //         </>
    // })

    };

class RocketQuery extends Component {
    render() {
        return (

            <Query query={ROCKET_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <CardGen data={data} />
                    );
                }}
            </Query>
        )
    }
};

export default RocketQuery;
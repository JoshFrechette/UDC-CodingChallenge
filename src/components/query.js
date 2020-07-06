import React, { Component } from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import ListItem from '@material-ui/core/ListItem';

// import SpaceCard from './spacecard';
import ShipItem from './shipitem';

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

const CardGen = ({ data, index}) => {





    const rocketinfo = data.launches;

    const getSpaceCardMaker = (spaceCardObj) => {
      console.log(rocketinfo.length)
      console.log(spaceCardObj)
      // if (!data.length) {
      return (
        <>
          <ListItem>
            <Grid item xs={12}>
              <ShipItem{...spaceCardObj} />
            </Grid>
          </ListItem>
          <Divider variant="middle" />
        </>
      )
      // } else {
      //   return (
      //   <>
      //   <ListItem>
      //     <Grid item xs={12}>
      //       <ShipItem{...spaceCardObj} />
      //     </Grid>
      //   </ListItem>

      // </>
      //   )
      // }
    }

    return (

        <Grid container direction="column">
            {rocketinfo.map(spaceCardObj => getSpaceCardMaker(spaceCardObj))}
        </Grid>

    )

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
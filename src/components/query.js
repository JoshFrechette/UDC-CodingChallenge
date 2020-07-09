import React, { Component } from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import ListItem from '@material-ui/core/ListItem';

import ShipItem from './shipitem';

const ROCKET_QUERY = gql`
{
  launches(limit: 3) {
    id
    links {
      flickr_images
    }
    rocket {
      rocket {
        cost_per_launch
        country
        description
        diameter {
          meters
        }
        height {
          meters
        }
        name
      }
    }
  }
}
`;

const CardGen = ({ data, index}) => {
  

    const rocketinfo = data.launches;

    const getSpaceCardMaker = (spaceCardObj) => {
      console.log(rocketinfo.length)
      console.log(index)
      // if (!data.length) {
      return (
        <>
          <ListItem>
            <Grid item xs={12}>
              <ShipItem key={index} {...spaceCardObj} />
            </Grid>
          </ListItem>
          <Divider variant="middle" />
        </>
      )
      // Code to prevent a divider on the last result
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
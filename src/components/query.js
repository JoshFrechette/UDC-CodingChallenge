import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { spaceCard } from './spacecard';

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
  }
`;

const CardGen = ({ data }) => {
    console.log(data)
    return data.map((dataSet, index) => {
        return (
            <>
                <spaceCard key={index.toString()} data={dataSet} index={index} />
                {index > 1 ? null : (
                    <Divider key={index.toString() + "div"} variant="middle" />
                )}
            </>
        );
    });
};

class rocketQuery extends Component {
    render() {
        return (

            <Query query={ROCKET_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <CardGen data={info} />
                    );
                }}
            </Query>
        )
    }
};

export default rocketQuery;
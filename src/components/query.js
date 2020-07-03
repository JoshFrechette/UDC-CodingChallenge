import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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



const rocket = ({ onRocketSelected }) => (
    <Query query={ROCKET_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
  
        return (
          <select name="rocket" onChange={onRocketSelected}>
            {data.dogs.map(dog => (
              <option key={dog.id} value={dog.breed}>
                {dog.breed}
              </option>
            ))}
          </select>
        );
      }}
    </Query>
  );

  export default query;
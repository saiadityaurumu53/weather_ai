import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
    params: {
      city: string;
      lat: string;
      long: string;
    };
};


async function WeatherPage({params: {city, lat, long}}: Props) {

  // const client = getClient();

  // const { data } = await client.query({
  //   query: fetchWeatherQuery,
  //   variables: {
  //     current: "true",
  //     longitude: long,
  //     latitude: lat,
  //     timezone: 'GMT',
  //   }
 // })


  return (
    <div>
      welcome to weather page: {city}, {lat}, {long}
    </div>
  )
}

export default WeatherPage;

import CalloutCard from "@/Components/CalloutCard";
import InformationPanel from "@/Components/InformationPanel";
import StatCard from "@/Components/StatCard";
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

  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    }
  })

  const results: Root = data.myQuery;

  console.log(results);


  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      
      <InformationPanel city={city} long={long} lat={lat} 
        results={results}
      />

      <div className="flex-1 p-5 lg:p-10">

        <div className="p-5">
            <div className="pb-5">
                  <h2 className="text-xl font-bold">Todays Overview</h2>
                  <p className="text-sm text-gray-400">
                    Last Updated at:{" "}
                    {new Date(results.current.time).toLocaleString()} (
                      {results.timezone})
                  </p>
            </div>

            <div>
              <CalloutCard message="This is where the ChatGPT Summary will go!" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                <StatCard 
                    title="Maximum Temperature"
                    metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                    color="yellow"
                />

                <StatCard 
                    title="Minimum Temperature"
                    metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
                    color="green"
                />

                <div>
                  <StatCard 
                      title="UV Index"
                      metric={`${results.daily.uv_index_max[0].toFixed(1)}°`}
                      color="rose"
                  />
                  {
                    Number(results.daily.uv_index_max[0].toFixed(1)) > 2 && (
                      <CalloutCard
                        message={"The UV index is really high today and be sure to wear Sunscreen SPF today!"}
                        warning
                      />
                    )
                  }
                </div>
                <div className="flex space-x-3">
                  <StatCard
                    title="Wind Speed"
                    metric={`${results.current.wind_speed_10m.toFixed(1)}m/s`}
                    color="cyan"
                  />

                  <StatCard
                    title="Wind Direction"
                    metric={`${results.current.wind_direction_10m.toFixed(1)}°`}
                    color="violet"
                  />



                </div>
            </div>

            <hr className="mb-5" />

            <div className="space-y-3">

                  {/* TempChart */}
                  {/* RainChart */}
                  {/* HumidityChart */}




            </div>



        </div>

      </div>
    </div>
  )
}

export default WeatherPage;

import { ApolloClient, InMemoryCache } from '@apollo/client';

let client: ApolloClient<any> | null = null;
//let initialize the client to null in the beginning and it can either be null or ApolloCLient


//this a a singleton
//we will use this function to get the instance of it 
//SERVER pattern
export const getClient = () => {
    const client = new ApolloClient({
        uri: process.env.API_URL,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
        },
    });

    return client;
};

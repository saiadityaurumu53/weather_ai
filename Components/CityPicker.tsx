"use client";

import {Country, City} from "country-state-city";
import { useRouter } from "next/navigation"; // since we are using next.js 13
import { useState } from "react";
import Select from "react-select";
//this is used to give the select options for the drop down which is the Select folder

import {GlobeIcon} from "@heroicons/react/solid";
//this package is for the globe icons and so on which is used in the block


type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;


//This option is for the Country and it will be by default NULL if nothing is selected
type option = {
  value : {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;
//this option format is given so that we won't do any type errors while doing it

//This is for the country option
const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,

  },
  label: country.name,
}))




function CityPicker() {


  //now we need a peice of state to track the state of input
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  //the last step in this page is to create a router 
  //that is when we take the information, once you select your country, then the city, I want to take that information and reroute it 
  const router = useRouter();


  const handleSelectedCountry = (option: option) => {
      setSelectedCountry(option);
      setSelectedCity(null); // this is because the next after selecting the country we need to be able to select the city next page
      //so when the selected city is null then we can go back when we want to select the country again
  };



  const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option);

        router.push(
          `/location/${option?.value.name}/${option?.value.latitude}/${option.value.longitude}`
        );
  };



  //we also need to use the hero icon
  return (

    <div className="space-y-4">

          <div className="space-y-4">

                <div className="space-y-2">

                            
                            <div className="flex items-center space-x-2 text-white/80">
                                <GlobeIcon className="h-5 w-5 text-white" />
                                <label htmlFor="country">Country</label>
                            </div>

                            <Select
                            className="text-black" 
                            value={selectedCountry}
                            onChange={handleSelectedCountry}
                            options={options} />

                </div>
          </div>

    
  
      
      {
        selectedCountry && (
          <div className="space-y-4">

            <div className="space-y-2">
      
                  <div className="flex items-center space-x-2 text-white/80">
                      <GlobeIcon className="h-5 w-5 text-white" />
                      <label htmlFor="country">City</label>
                  </div>
            
                  <Select 
                      value={selectedCity}
                      onChange= {handleSelectedCity}
                      
                      options={
                        City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(state => ({
                          value: {
                            latitude: state.latitude,
                            longitude: state.longitude,
                            countryCode: state.countryCode,
                            name: state.name,
                            stateCode: state.stateCode,
                          },
                          label: state.name,
                        }))
                      } 
                  
                  
                  />
      
            </div>
          </div>
        )
      }
      
  

  </div>


  )
};

export default CityPicker;

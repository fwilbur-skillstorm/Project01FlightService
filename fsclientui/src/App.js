import * as React from 'react';
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import {
  ChakraProvider,
  Image,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home'
import AboutAirports from './components/AboutAirports'
import AboutFlights from './components/AboutFlights'
import AboutPassengers from './components/AboutPassengers'
import AboutItineraries from './components/AboutItineraries'
import CreateAirport from './components/CreateAirport'
import CreateFlight from './components/CreateFlight'
import CreatePassenger from './components/CreatePassenger'
import CreateItinerary from './components/CreateItinerary'
import DeleteAirport from './components/DeleteAirport'
import DeleteFlight from './components/DeleteFlight'
import DeletePassenger from './components/DeletePassenger'
import DeleteItinerary from './components/DeleteItinerary'
import ViewAirports from './components/ViewAirports'
import ViewFlights from './components/ViewFlights'
import ViewPassengers from './components/ViewPassengers'
import ViewItineraries from './components/ViewItineraries'
import EditAirport from './components/EditAirport'
import EditFlight from './components/EditFlight'
import EditItinerary from './components/EditItinerary'
import EditPassenger from './components/EditPassenger'
import './App.css'

function App() {
  return (
    <div className='maincontainer'>
    <ChakraProvider theme={theme}>
      
          <ColorModeSwitcher justifySelf="flex-end" />
            <header>
              <Image alt='a helicopter' src='helicopter.png' className='helicopterimg' />
              <h1 className='brandingheader'>Not-Actually-Deathtraps Helicopter Service</h1>
            </header>
            <Routes>
              <Route path='/' element={<Outlet />}>
                <Route index element={<Home />} /> {/** This is not wholly necessary to be honest */}
                <Route path='/flights' element={<AboutFlights />} />
                <Route path='/flights/view' element={<ViewFlights />} />
                <Route path='/flights/edit/:flightId' element={<EditFlight />} /> 
                <Route path='/flights/create' element={<CreateFlight />} />
                <Route path='/flights/delete' element={<DeleteFlight />} />
                <Route path='/airports' element={<AboutAirports />} />
                <Route path='/airports/view' element={<ViewAirports />} />
                <Route path='/airports/edit/:airportId' element={<EditAirport />} />
                <Route path='/airports/create' element={<CreateAirport />} />
                <Route path='/airports/delete' element={<DeleteAirport />} />
                <Route path='/passengers' element={<AboutPassengers />} />
                <Route path='/passengers/view' element={<ViewPassengers />} />
                <Route path='/passengers/edit/:passengerId' element={<EditPassenger />} />
                <Route path='/passengers/create' element={<CreatePassenger />} />
                <Route path='/passengers/delete' element={<DeletePassenger />} />
                <Route path='/itineraries' element={<AboutItineraries />} />
                <Route path='/itineraries/view' element={<ViewItineraries />} />
                <Route path='/itineraries/edit/:itineraryId' element={<EditItinerary />} />
                <Route path='/itineraries/create' element={<CreateItinerary />} />
                <Route path='/itineraries/delete' element={<DeleteItinerary />} />
              </Route>
            </Routes>

    </ChakraProvider>
    </div>
  );
}

export default App;

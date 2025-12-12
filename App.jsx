import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import Layout from './layout.jsx'
import Home from './Pages/Home_Minimal.jsx'
import ByLocation from './Pages/ByLocation_Fixed.jsx'
import ByMonth from './Pages/ByMonth_Fixed.jsx'
import NationalParks from './Pages/NationalParks_Simple.jsx'
import MapExplore from './Pages/MapExplore_Fixed.jsx'
import NationalParksMapPage from './Pages/NationalParksMapPage_Debug.jsx'
import DatabaseDebug from './Pages/DatabaseDebug.jsx'
import DatabaseInspector from './Pages/DatabaseInspector.jsx'
import YellowstoneTemplate from './Pages/YellowstoneTemplate.jsx'
import YellowstoneItinerary from './Pages/YellowstoneItinerary.jsx'
import YellowstoneReactTemplate from './Pages/YellowstoneReactTemplate.jsx'
import GrandCanyonReactTemplate from './Pages/GrandCanyonReactTemplate.jsx'
import YosemiteReactTemplate from './Pages/YosemiteReactTemplate.jsx'
import ZionReactTemplate from './Pages/ZionReactTemplate.jsx'
import GlacierReactTemplate from './Pages/GlacierReactTemplate.jsx'
import GreatSmokyMountainsReactTemplate from './Pages/GreatSmokyMountainsReactTemplate.jsx'
import RockyMountainReactTemplate from './Pages/RockyMountainReactTemplate.jsx'
import AcadiaReactTemplate from './Pages/AcadiaReactTemplate.jsx'
import ArchesReactTemplate from './Pages/ArchesReactTemplate.jsx'
import CanyonlandsReactTemplate from './Pages/CanyonlandsReactTemplate.jsx'
import BryceCanyonReactTemplate from './Pages/BryceCanyonReactTemplate.jsx'
import JoshuaTreeReactTemplate from './Pages/JoshuaTreeReactTemplate.jsx'
import DeathValleyReactTemplate from './Pages/DeathValleyReactTemplate.jsx'
import GrandCanyonItinerary from './Pages/GrandCanyonItinerary.jsx'
import YosemiteItinerary from './Pages/YosemiteItinerary.jsx'
import ZionItinerary from './Pages/ZionItinerary.jsx'
import GlacierItinerary from './Pages/GlacierItinerary.jsx'
import GreatSmokyMountainsItinerary from './Pages/GreatSmokyMountainsItinerary.jsx'
import RockyMountainItinerary from './Pages/RockyMountainItinerary.jsx'
import AcadiaItinerary from './Pages/AcadiaItinerary.jsx'
import ArchesItinerary from './Pages/ArchesItinerary.jsx'
import CanyonlandsItinerary from './Pages/CanyonlandsItinerary.jsx'
import BryceCanyonItinerary from './Pages/BryceCanyonItinerary.jsx'
import JoshuaTreeItinerary from './Pages/JoshuaTreeItinerary.jsx'
import DeathValleyItinerary from './Pages/DeathValleyItinerary.jsx'
import SequoiaReactTemplate from './Pages/SequoiaReactTemplate.jsx'
import OlympicReactTemplate from './Pages/OlympicReactTemplate.jsx'
import MountRainierReactTemplate from './Pages/MountRainierReactTemplate.jsx'
import CraterLakeReactTemplate from './Pages/CraterLakeReactTemplate.jsx'
import BadlandsReactTemplate from './Pages/BadlandsReactTemplate.jsx'
import CapitolReefReactTemplate from './Pages/CapitolReefReactTemplate.jsx'
import SequoiaItinerary from './Pages/SequoiaItinerary.jsx'
import OlympicItinerary from './Pages/OlympicItinerary.jsx'
import MountRainierItinerary from './Pages/MountRainierItinerary.jsx'
import CraterLakeItinerary from './Pages/CraterLakeItinerary.jsx'
import BadlandsItinerary from './Pages/BadlandsItinerary.jsx'
import CapitolReefItinerary from './Pages/CapitolReefItinerary.jsx'
import BlackCanyonReactTemplate from './Pages/BlackCanyonReactTemplate.jsx'
import BlackCanyonItinerary from './Pages/BlackCanyonItinerary.jsx'
import GrandTetonReactTemplate from './Pages/GrandTetonReactTemplate.jsx'
import GrandTetonItinerary from './Pages/GrandTetonItinerary.jsx'
import GreatBasinReactTemplate from './Pages/GreatBasinReactTemplate.jsx'
import GreatBasinItinerary from './Pages/GreatBasinItinerary.jsx'
import DenaliReactTemplate from './Pages/DenaliReactTemplate.jsx'
import KatmaiReactTemplate from './Pages/KatmaiReactTemplate.jsx'
import KenaiFjordsReactTemplate from './Pages/KenaiFjordsReactTemplate.jsx'
import GlacierBayReactTemplate from './Pages/GlacierBayReactTemplate.jsx'
import GatesOfTheArcticReactTemplate from './Pages/GatesOfTheArcticReactTemplate.jsx'
import LakeClarkReactTemplate from './Pages/LakeClarkReactTemplate.jsx'
import KobukValleyReactTemplate from './Pages/KobukValleyReactTemplate.jsx'
import WrangellStEliasReactTemplate from './Pages/WrangellStEliasReactTemplate.jsx'
import DenaliItinerary from './Pages/DenaliItinerary.jsx'
import KatmaiItinerary from './Pages/KatmaiItinerary.jsx'
import KenaiFjordsItinerary from './Pages/KenaiFjordsItinerary.jsx'
import GlacierBayItinerary from './Pages/GlacierBayItinerary.jsx'
import GatesOfTheArcticItinerary from './Pages/GatesOfTheArcticItinerary.jsx'
import LakeClarkItinerary from './Pages/LakeClarkItinerary.jsx'
import KobukValleyItinerary from './Pages/KobukValleyItinerary.jsx'
import WrangellStEliasItinerary from './Pages/WrangellStEliasItinerary.jsx'
import EvergladesReactTemplate from './Pages/EvergladesReactTemplate.jsx'
import BiscayneReactTemplate from './Pages/BiscayneReactTemplate.jsx'
import DryTortugasReactTemplate from './Pages/DryTortugasReactTemplate.jsx'
import EvergladesItinerary from './Pages/EvergladesItinerary.jsx'
import BiscayneItinerary from './Pages/BiscayneItinerary.jsx'
import DryTortugasItinerary from './Pages/DryTortugasItinerary.jsx'
import BigBendReactTemplate from './Pages/BigBendReactTemplate.jsx'
import CarlsbadCavernsReactTemplate from './Pages/CarlsbadCavernsReactTemplate.jsx'
import GuadalupeMountainsReactTemplate from './Pages/GuadalupeMountainsReactTemplate.jsx'
import WhiteSandsReactTemplate from './Pages/WhiteSandsReactTemplate.jsx'
import BigBendItinerary from './Pages/BigBendItinerary.jsx'
import CarlsbadCavernsItinerary from './Pages/CarlsbadCavernsItinerary.jsx'
import GuadalupeMountainsItinerary from './Pages/GuadalupeMountainsItinerary.jsx'
import WhiteSandsItinerary from './Pages/WhiteSandsItinerary.jsx'
import LassenVolcanicReactTemplate from './Pages/LassenVolcanicReactTemplate.jsx'
import LassenVolcanicItinerary from './Pages/LassenVolcanicItinerary.jsx'
import KingsCanyonReactTemplate from './Pages/KingsCanyonReactTemplate.jsx'
import KingsCanyonItinerary from './Pages/KingsCanyonItinerary.jsx'
import PinnaclesReactTemplate from './Pages/PinnaclesReactTemplate.jsx'
import PinnaclesItinerary from './Pages/PinnaclesItinerary.jsx'
import ChannelIslandsReactTemplate from './Pages/ChannelIslandsReactTemplate.jsx'
import ChannelIslandsItinerary from './Pages/ChannelIslandsItinerary.jsx'

import FeedbackAdmin from './Pages/FeedbackAdmin.jsx'
import GreatSandDunesReactTemplate from './Pages/GreatSandDunesReactTemplate.jsx'
import GreatSandDunesItinerary from './Pages/GreatSandDunesItinerary.jsx'
import MesaVerdeReactTemplate from './Pages/MesaVerdeReactTemplate.jsx'
import MesaVerdeItinerary from './Pages/MesaVerdeItinerary.jsx'
import WindCaveReactTemplate from './Pages/WindCaveReactTemplate.jsx'
import WindCaveItinerary from './Pages/WindCaveItinerary.jsx'
import TheodoreRooseveltReactTemplate from './Pages/TheodoreRooseveltReactTemplate.jsx'
import TheodoreRooseveltItinerary from './Pages/TheodoreRooseveltItinerary.jsx'
import HotSpringsReactTemplate from './Pages/HotSpringsReactTemplate.jsx'
import GatewayArchReactTemplate from './Pages/GatewayArchReactTemplate.jsx'
import MammothCaveReactTemplate from './Pages/MammothCaveReactTemplate.jsx'
import CuyahogaValleyReactTemplate from './Pages/CuyahogaValleyReactTemplate.jsx'
import NewRiverGorgeReactTemplate from './Pages/NewRiverGorgeReactTemplate.jsx'
import ShenandoahReactTemplate from './Pages/ShenandoahReactTemplate.jsx'
import SaguaroReactTemplate from './Pages/SaguaroReactTemplate.jsx'
import PetrifiedForestReactTemplate from './Pages/PetrifiedForestReactTemplate.jsx'
import NorthCascadesReactTemplate from './Pages/NorthCascadesReactTemplate.jsx'
import IndianaDunesReactTemplate from './Pages/IndianaDunesReactTemplate.jsx'
import IndianaDunesItinerary from './Pages/IndianaDunesItinerary.jsx'
import IsleRoyaleReactTemplate from './Pages/IsleRoyaleReactTemplate.jsx'
import VoyageursReactTemplate from './Pages/VoyageursReactTemplate.jsx'
import HawaiiVolcanoesReactTemplate from './Pages/HawaiiVolcanoesReactTemplate.jsx'
import AmericanSamoaReactTemplate from './Pages/AmericanSamoaReactTemplate.jsx'
import HaleakalaReactTemplate from './Pages/HaleakalaReactTemplate.jsx'
import VirginIslandsReactTemplate from './Pages/VirginIslandsReactTemplate.jsx'
import RedwoodsReactTemplate from './Pages/RedwoodsReactTemplate.jsx'
import RedwoodsItinerary from './Pages/RedwoodsItinerary.jsx'

// Import GenericItinerary for the new parks
import GenericItinerary from './Components/ui/GenericItinerary.jsx'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout currentPageName="Home">
              <Home />
            </Layout>
          } />
          <Route path="/by-location" element={
            <Layout currentPageName="By Location">
              <ByLocation />
            </Layout>
          } />
          <Route path="/by-month" element={
            <Layout currentPageName="By Month">
              <ByMonth />
            </Layout>
          } />
          <Route path="/national-parks" element={
            <Layout currentPageName="National Parks">
              <NationalParks />
            </Layout>
          } />
          <Route path="/map-explore" element={
            <Layout currentPageName="Map Explore">
              <MapExplore />
            </Layout>
          } />
          <Route path="/national-parks-map" element={
            <Layout currentPageName="National Parks Map">
              <NationalParksMapPage />
            </Layout>
          } />
          <Route path="/debug" element={
            <Layout currentPageName="Database Debug">
              <DatabaseDebug />
            </Layout>
          } />
          <Route path="/db-inspector" element={
            <Layout currentPageName="Database Inspector">
              <DatabaseInspector />
            </Layout>
          } />
          <Route path="/yellowstone-template" element={<YellowstoneTemplate />} />
          <Route path="/yellowstone-itinerary" element={<YellowstoneItinerary />} />
          <Route path="/yellowstone-react" element={<Layout currentPageName="National Parks"><YellowstoneReactTemplate /></Layout>} />
          <Route path="/great-sand-dunes-react" element={<Layout currentPageName="National Parks"><GreatSandDunesReactTemplate /></Layout>} />
          <Route path="/great-sand-dunes-itinerary" element={<Layout currentPageName="National Parks"><GreatSandDunesItinerary /></Layout>} />
          <Route path="/mesa-verde-react" element={<Layout currentPageName="National Parks"><MesaVerdeReactTemplate /></Layout>} />
          <Route path="/mesa-verde-itinerary" element={<Layout currentPageName="National Parks"><MesaVerdeItinerary /></Layout>} />
          <Route path="/wind-cave-react" element={<Layout currentPageName="National Parks"><WindCaveReactTemplate /></Layout>} />
          <Route path="/wind-cave-itinerary" element={<Layout currentPageName="National Parks"><WindCaveItinerary /></Layout>} />
          <Route path="/theodore-roosevelt-react" element={<Layout currentPageName="National Parks"><TheodoreRooseveltReactTemplate /></Layout>} />
          <Route path="/theodore-roosevelt-itinerary" element={<Layout currentPageName="National Parks"><TheodoreRooseveltItinerary /></Layout>} />
          <Route path="/grand-canyon-react" element={<Layout currentPageName="National Parks"><GrandCanyonReactTemplate /></Layout>} />
          <Route path="/grand-canyon-itinerary" element={<Layout currentPageName="National Parks"><GrandCanyonItinerary /></Layout>} />
          <Route path="/yosemite-react" element={<Layout currentPageName="National Parks"><YosemiteReactTemplate /></Layout>} />
          <Route path="/yosemite-itinerary" element={<Layout currentPageName="National Parks"><YosemiteItinerary /></Layout>} />
          <Route path="/zion-react" element={<Layout currentPageName="National Parks"><ZionReactTemplate /></Layout>} />
          <Route path="/zion-itinerary" element={<Layout currentPageName="National Parks"><ZionItinerary /></Layout>} />
          <Route path="/glacier-react" element={<Layout currentPageName="National Parks"><GlacierReactTemplate /></Layout>} />
          <Route path="/glacier-itinerary" element={<Layout currentPageName="National Parks"><GlacierItinerary /></Layout>} />
          <Route path="/great-smoky-mountains-react" element={<Layout currentPageName="National Parks"><GreatSmokyMountainsReactTemplate /></Layout>} />
          <Route path="/great-smoky-mountains-itinerary" element={<Layout currentPageName="National Parks"><GreatSmokyMountainsItinerary /></Layout>} />
          <Route path="/rocky-mountain-react" element={<Layout currentPageName="National Parks"><RockyMountainReactTemplate /></Layout>} />
          <Route path="/rocky-mountain-itinerary" element={<Layout currentPageName="National Parks"><RockyMountainItinerary /></Layout>} />
          <Route path="/acadia-react" element={<Layout currentPageName="National Parks"><AcadiaReactTemplate /></Layout>} />
          <Route path="/acadia-itinerary" element={<Layout currentPageName="National Parks"><AcadiaItinerary /></Layout>} />
          <Route path="/arches-react" element={<Layout currentPageName="National Parks"><ArchesReactTemplate /></Layout>} />
          <Route path="/arches-itinerary" element={<Layout currentPageName="National Parks"><ArchesItinerary /></Layout>} />
          <Route path="/canyonlands-react" element={<Layout currentPageName="National Parks"><CanyonlandsReactTemplate /></Layout>} />
          <Route path="/canyonlands-itinerary" element={<Layout currentPageName="National Parks"><CanyonlandsItinerary /></Layout>} />
          <Route path="/bryce-canyon-react" element={<Layout currentPageName="National Parks"><BryceCanyonReactTemplate /></Layout>} />
          <Route path="/bryce-canyon-itinerary" element={<Layout currentPageName="National Parks"><BryceCanyonItinerary /></Layout>} />
          <Route path="/joshua-tree-react" element={<Layout currentPageName="National Parks"><JoshuaTreeReactTemplate /></Layout>} />
          <Route path="/joshua-tree-itinerary" element={<Layout currentPageName="National Parks"><JoshuaTreeItinerary /></Layout>} />
          <Route path="/death-valley-react" element={<Layout currentPageName="National Parks"><DeathValleyReactTemplate /></Layout>} />
          <Route path="/death-valley-itinerary" element={<Layout currentPageName="National Parks"><DeathValleyItinerary /></Layout>} />
          <Route path="/sequoia-react" element={<Layout currentPageName="National Parks"><SequoiaReactTemplate /></Layout>} />
          <Route path="/sequoia-itinerary" element={<Layout currentPageName="National Parks"><SequoiaItinerary /></Layout>} />
          <Route path="/olympic-react" element={<Layout currentPageName="National Parks"><OlympicReactTemplate /></Layout>} />
          <Route path="/olympic-itinerary" element={<Layout currentPageName="National Parks"><OlympicItinerary /></Layout>} />
          <Route path="/mount-rainier-react" element={<Layout currentPageName="National Parks"><MountRainierReactTemplate /></Layout>} />
          <Route path="/mount-rainier-itinerary" element={<Layout currentPageName="National Parks"><MountRainierItinerary /></Layout>} />
          <Route path="/crater-lake-react" element={<Layout currentPageName="National Parks"><CraterLakeReactTemplate /></Layout>} />
          <Route path="/crater-lake-itinerary" element={<Layout currentPageName="National Parks"><CraterLakeItinerary /></Layout>} />
          <Route path="/badlands-react" element={<Layout currentPageName="National Parks"><BadlandsReactTemplate /></Layout>} />
          <Route path="/badlands-itinerary" element={<Layout currentPageName="National Parks"><BadlandsItinerary /></Layout>} />
          <Route path="/capitol-reef-react" element={<Layout currentPageName="National Parks"><CapitolReefReactTemplate /></Layout>} />
          <Route path="/capitol-reef-itinerary" element={<Layout currentPageName="National Parks"><CapitolReefItinerary /></Layout>} />
          <Route path="/black-canyon-react" element={<Layout currentPageName="National Parks"><BlackCanyonReactTemplate /></Layout>} />
          <Route path="/black-canyon-itinerary" element={<Layout currentPageName="National Parks"><BlackCanyonItinerary /></Layout>} />
          <Route path="/grand-teton-react" element={<Layout currentPageName="National Parks"><GrandTetonReactTemplate /></Layout>} />
          <Route path="/grand-teton-itinerary" element={<Layout currentPageName="National Parks"><GrandTetonItinerary /></Layout>} />
          <Route path="/great-basin-react" element={<Layout currentPageName="National Parks"><GreatBasinReactTemplate /></Layout>} />
          <Route path="/great-basin-itinerary" element={<Layout currentPageName="National Parks"><GreatBasinItinerary /></Layout>} />
          <Route path="/denali-react" element={<Layout currentPageName="National Parks"><DenaliReactTemplate /></Layout>} />
          <Route path="/denali-itinerary" element={<Layout currentPageName="National Parks"><DenaliItinerary /></Layout>} />
          <Route path="/katmai-react" element={<Layout currentPageName="National Parks"><KatmaiReactTemplate /></Layout>} />
          <Route path="/katmai-itinerary" element={<Layout currentPageName="National Parks"><KatmaiItinerary /></Layout>} />
          <Route path="/kenai-fjords-react" element={<Layout currentPageName="National Parks"><KenaiFjordsReactTemplate /></Layout>} />
          <Route path="/kenai-fjords-itinerary" element={<Layout currentPageName="National Parks"><KenaiFjordsItinerary /></Layout>} />
          <Route path="/glacier-bay-react" element={<Layout currentPageName="National Parks"><GlacierBayReactTemplate /></Layout>} />
          <Route path="/glacier-bay-itinerary" element={<Layout currentPageName="National Parks"><GlacierBayItinerary /></Layout>} />
          <Route path="/gates-of-the-arctic-react" element={<Layout currentPageName="National Parks"><GatesOfTheArcticReactTemplate /></Layout>} />
          <Route path="/gates-of-the-arctic-itinerary" element={<Layout currentPageName="National Parks"><GatesOfTheArcticItinerary /></Layout>} />
          <Route path="/lake-clark-react" element={<Layout currentPageName="National Parks"><LakeClarkReactTemplate /></Layout>} />
          <Route path="/lake-clark-itinerary" element={<Layout currentPageName="National Parks"><LakeClarkItinerary /></Layout>} />
          <Route path="/kobuk-valley-react" element={<Layout currentPageName="National Parks"><KobukValleyReactTemplate /></Layout>} />
          <Route path="/kobuk-valley-itinerary" element={<Layout currentPageName="National Parks"><KobukValleyItinerary /></Layout>} />
          <Route path="/wrangell-st-elias-react" element={<Layout currentPageName="National Parks"><WrangellStEliasReactTemplate /></Layout>} />
          <Route path="/wrangell-st-elias-itinerary" element={<Layout currentPageName="National Parks"><WrangellStEliasItinerary /></Layout>} />
          <Route path="/everglades-react" element={<Layout currentPageName="National Parks"><EvergladesReactTemplate /></Layout>} />
          <Route path="/everglades-itinerary" element={<Layout currentPageName="National Parks"><EvergladesItinerary /></Layout>} />
          <Route path="/biscayne-react" element={<Layout currentPageName="National Parks"><BiscayneReactTemplate /></Layout>} />
          <Route path="/biscayne-itinerary" element={<Layout currentPageName="National Parks"><BiscayneItinerary /></Layout>} />
          <Route path="/dry-tortugas-react" element={<Layout currentPageName="National Parks"><DryTortugasReactTemplate /></Layout>} />
          <Route path="/dry-tortugas-itinerary" element={<Layout currentPageName="National Parks"><DryTortugasItinerary /></Layout>} />
          <Route path="/big-bend-react" element={<Layout currentPageName="National Parks"><BigBendReactTemplate /></Layout>} />
          <Route path="/big-bend-itinerary" element={<Layout currentPageName="National Parks"><BigBendItinerary /></Layout>} />
          <Route path="/carlsbad-caverns-react" element={<Layout currentPageName="National Parks"><CarlsbadCavernsReactTemplate /></Layout>} />
          <Route path="/carlsbad-caverns-itinerary" element={<Layout currentPageName="National Parks"><CarlsbadCavernsItinerary /></Layout>} />
          <Route path="/guadalupe-mountains-react" element={<Layout currentPageName="National Parks"><GuadalupeMountainsReactTemplate /></Layout>} />
          <Route path="/guadalupe-mountains-itinerary" element={<Layout currentPageName="National Parks"><GuadalupeMountainsItinerary /></Layout>} />
          <Route path="/white-sands-react" element={<Layout currentPageName="National Parks"><WhiteSandsReactTemplate /></Layout>} />
          <Route path="/white-sands-itinerary" element={<Layout currentPageName="National Parks"><WhiteSandsItinerary /></Layout>} />
          <Route path="/lassen-volcanic-react" element={<Layout currentPageName="National Parks"><LassenVolcanicReactTemplate /></Layout>} />
          <Route path="/lassen-volcanic-itinerary" element={<Layout currentPageName="National Parks"><LassenVolcanicItinerary /></Layout>} />
          <Route path="/kings-canyon-react" element={<Layout currentPageName="National Parks"><KingsCanyonReactTemplate /></Layout>} />
          <Route path="/kings-canyon-itinerary" element={<Layout currentPageName="National Parks"><KingsCanyonItinerary /></Layout>} />
          <Route path="/pinnacles-react" element={<Layout currentPageName="National Parks"><PinnaclesReactTemplate /></Layout>} />
          <Route path="/pinnacles-itinerary" element={<Layout currentPageName="National Parks"><PinnaclesItinerary /></Layout>} />
          <Route path="/channel-islands-react" element={<Layout currentPageName="National Parks"><ChannelIslandsReactTemplate /></Layout>} />
          <Route path="/channel-islands-itinerary" element={<Layout currentPageName="National Parks"><ChannelIslandsItinerary /></Layout>} />
          
          {/* New park templates and itineraries */}
          <Route path="/hot-springs-react" element={<Layout currentPageName="National Parks"><HotSpringsReactTemplate /></Layout>} />
          <Route path="/hot-springs-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="hot-springs" /></Layout>} />
          <Route path="/gateway-arch-react" element={<Layout currentPageName="National Parks"><GatewayArchReactTemplate /></Layout>} />
          <Route path="/gateway-arch-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="gateway-arch" /></Layout>} />
          <Route path="/indiana-dunes-react" element={<Layout currentPageName="National Parks"><IndianaDunesReactTemplate /></Layout>} />
          <Route path="/indiana-dunes-itinerary" element={<Layout currentPageName="National Parks"><IndianaDunesItinerary /></Layout>} />
          <Route path="/mammoth-cave-react" element={<Layout currentPageName="National Parks"><MammothCaveReactTemplate /></Layout>} />
          <Route path="/mammoth-cave-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="mammoth-cave" /></Layout>} />
          <Route path="/cuyahoga-valley-react" element={<Layout currentPageName="National Parks"><CuyahogaValleyReactTemplate /></Layout>} />
          <Route path="/cuyahoga-valley-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="cuyahoga-valley" /></Layout>} />
          <Route path="/new-river-gorge-react" element={<Layout currentPageName="National Parks"><NewRiverGorgeReactTemplate /></Layout>} />
          <Route path="/new-river-gorge-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="new-river-gorge" /></Layout>} />
          <Route path="/shenandoah-react" element={<Layout currentPageName="National Parks"><ShenandoahReactTemplate /></Layout>} />
          <Route path="/shenandoah-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="shenandoah" /></Layout>} />
          <Route path="/saguaro-react" element={<Layout currentPageName="National Parks"><SaguaroReactTemplate /></Layout>} />
          <Route path="/saguaro-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="saguaro" /></Layout>} />
          <Route path="/petrified-forest-react" element={<Layout currentPageName="National Parks"><PetrifiedForestReactTemplate /></Layout>} />
          <Route path="/petrified-forest-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="petrified-forest" /></Layout>} />
          <Route path="/north-cascades-react" element={<Layout currentPageName="National Parks"><NorthCascadesReactTemplate /></Layout>} />
          <Route path="/north-cascades-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="north-cascades" /></Layout>} />
          <Route path="/isle-royale-react" element={<Layout currentPageName="National Parks"><IsleRoyaleReactTemplate /></Layout>} />
          <Route path="/isle-royale-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="isle-royale" /></Layout>} />
          <Route path="/voyageurs-react" element={<Layout currentPageName="National Parks"><VoyageursReactTemplate /></Layout>} />
          <Route path="/voyageurs-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="voyageurs" /></Layout>} />
          <Route path="/hawaii-volcanoes-react" element={<Layout currentPageName="National Parks"><HawaiiVolcanoesReactTemplate /></Layout>} />
          <Route path="/hawaii-volcanoes-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="hawaii-volcanoes" /></Layout>} />
          <Route path="/american-samoa-react" element={<Layout currentPageName="National Parks"><AmericanSamoaReactTemplate /></Layout>} />
          <Route path="/american-samoa-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="american-samoa" /></Layout>} />
          <Route path="/haleakala-react" element={<Layout currentPageName="National Parks"><HaleakalaReactTemplate /></Layout>} />
          <Route path="/haleakala-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="haleakala" /></Layout>} />
          <Route path="/virgin-islands-react" element={<Layout currentPageName="National Parks"><VirginIslandsReactTemplate /></Layout>} />
          <Route path="/virgin-islands-itinerary" element={<Layout currentPageName="National Parks"><GenericItinerary parkSlug="virgin-islands" /></Layout>} />
          <Route path="/redwoods-react" element={<Layout currentPageName="National Parks"><RedwoodsReactTemplate /></Layout>} />
          <Route path="/redwoods-itinerary" element={<Layout currentPageName="National Parks"><RedwoodsItinerary /></Layout>} />

          <Route path="/feedback-admin" element={
            <Layout currentPageName="Feedback Admin">
              <FeedbackAdmin />
            </Layout>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
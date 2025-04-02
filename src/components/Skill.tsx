import Anime from "./skills/Anime";
import Dashboard from "./skills/Dashboard";
import React, { useEffect, useState, useMemo } from 'react';
import { faChartLine, faHexagonNodes, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card, CardBody, Image, Spacer, Button} from "@nextui-org/react";
import dynamic from 'next/dynamic'

const App = () => {
  const [tabActive, setTabActive] = useState(1);
  
  const changeTab = (tab = 1) => {
    setTabActive(tab);
  };

  const getActiveTab = (tab = 1) => {
    if(tabActive == tab) {
      return 'text-[#F1F0E8] hover:text-cyan-700';
    } else {
      return 'hover:text-[#F1F0E8] text-cyan-700';
    }
  };

  useEffect(() => {
    setTabActive(1);
  },[])

  const MapWithNoSSR = useMemo(() => dynamic(
    () => import('@/components/skills/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  
  let content
  if (tabActive === 1) {
      content = <Anime />;
  } else if (tabActive === 2) {
      content = <MapWithNoSSR />;
  } else {
      content = <Dashboard />;
  }
  return (
    <div className='flex justify-center w-full mt-3' id='skill'>
      <div className='md:w-[1024px] w-full'>
        <Card className="w-full border-none bg-[#B3C8CF] text-[#5C7285]" shadow='none'>
          <CardBody className="md:p-0">
            <div className="text-5xl font-semibold text-center" >My Skills</div>
            <Spacer y={8} />
            <div className="grid grid-cols-2 gap-4 text-cyan-700">
              <div className="text-center flex justify-center">
                <div className={`w-24 cursor-pointer ${getActiveTab(1)}`} onClick={() => changeTab(1)}>
                  <FontAwesomeIcon className="text-5xl mb-2" icon={faHexagonNodes} />
                  <div className="cursor-pointer">REST API</div>
                </div>
              </div>
              <div className="text-center justify-center hidden">
                <div className={`w-24 cursor-pointer ${getActiveTab(2)}`} onClick={() => changeTab(2)}>
                  <FontAwesomeIcon className="text-5xl mb-2" icon={faMapLocationDot} />
                  <div className="cursor-pointer">MAP</div>
                </div>
              </div>
              <div className="text-center flex justify-center">
                <div className={`w-28 cursor-pointer ${getActiveTab(3)}`} onClick={() => changeTab(3)}>
                  <FontAwesomeIcon className="text-5xl mb-2" icon={faChartLine} />
                  <div className="cursor-pointer">DASHBOARD</div>
                </div>
              </div>
            </div>
            <Spacer y={4} />

            {content}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;
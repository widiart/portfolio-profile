import React, { useEffect, useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Spacer, Button} from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faHtml5, faJs, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons'
import NextImage from "next/image";

const App = () => {
  const [isHoveredPDDIKTI, setIsHoveredPDDIKTI] = useState(false);
  const [isHoveredNGANTOR, setIsHoveredNGANTOR] = useState(false);
  const [isHoveredKORLANTAS, setIsHoveredKORLANTAS] = useState(false);
  const [isHoveredDJKN, setIsHoveredDJKN] = useState(false);

  return (
    <div className='flex justify-center w-full mt-3' id='project'>
      <div className='md:w-[1024px] w-full'>
        <Card className="w-full border-none bg-[#B3C8CF] text-[#5C7285]" shadow='none'>
          <CardBody className="md:p-0">
            <div className="text-5xl font-bold text-center">Project Participant</div>
            <Spacer y={8} />
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-4">
              <Card 
                  onMouseEnter={() => setIsHoveredPDDIKTI(true)}
                  onMouseLeave={() => setIsHoveredPDDIKTI(false)}
                  isFooterBlurred isBlurred className="border-none" shadow='sm'>
                <Image
                  width={1920}
                  height={1080}
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={isHoveredPDDIKTI ? '/image/portfolio/pddikti-hover.png' : '/image/portfolio/pddikti.png'}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-md font-medium">PDDIKTI UNS</p>
                  </div>
                </CardFooter>
              </Card>
              <Card 
                  onMouseEnter={() => setIsHoveredNGANTOR(true)}
                  onMouseLeave={() => setIsHoveredNGANTOR(false)}
                  isFooterBlurred isBlurred className="border-none" shadow='sm'>
                <Image
                  width={1920}
                  height={1080}
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={isHoveredNGANTOR ? '/image/portfolio/ngantor-hover.png' : '/image/portfolio/ngantor.png'}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-md font-medium">NGANTOR KESDM</p>
                  </div>
                </CardFooter>
              </Card>
              <Card 
                  onMouseEnter={() => setIsHoveredKORLANTAS(true)}
                  onMouseLeave={() => setIsHoveredKORLANTAS(false)}
                  isFooterBlurred isBlurred className="border-none" shadow='sm'>
                <Image
                  width={1920}
                  height={1080}
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={isHoveredKORLANTAS ? '/image/portfolio/korlantas-hover.png' : '/image/portfolio/korlantas.png'}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-md font-medium">KORLANTAS POLRI</p>
                  </div>
                </CardFooter>
              </Card>
              <Card 
                  onMouseEnter={() => setIsHoveredDJKN(true)}
                  onMouseLeave={() => setIsHoveredDJKN(false)}
                  isFooterBlurred isBlurred className="border-none" shadow='sm'>
                <Image
                  width={1920}
                  height={1080}
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={isHoveredDJKN ? '/image/portfolio/djkn-hover.png' : '/image/portfolio/djkn.png'}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-md font-medium">SIMPAN DJKN</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;
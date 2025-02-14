import React, { useEffect, useState } from 'react';
import {Card, CardBody, Image, Spacer, Button} from "@nextui-org/react";

const App = () => {

  return (
    <div>
      <div className='grid grid-cols-1 gap-4'>
        <Card isBlurred className="border-none" shadow='sm'>
          <CardBody>
            <div className='flex gap-4 animate-pulse'>
              <div className='h-64 w-40 min-w-40 overflow-hidden rounded-lg'>
                <div className='w-40 h-full bg-gray-200'>
                  &nbsp;
                </div>
              </div>
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90 w-64"></h3>
                <p className="text-small text-foreground/80 w-28"></p>
                <h1 className="text-medium font-medium mt-2 ">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-5 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 h-3 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={4}/>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3 h-3 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-3 rounded bg-gray-200"></div>
                    <div className="col-span-2 h-3 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-3 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-4 h-4 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-6 h-4 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-3 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-2 h-4 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-2 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-6 h-4 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-3 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-4 h-4 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-6 h-4 rounded bg-gray-200"></div>
                  </div>
                  <Spacer y={2}/>
                  <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-3 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-4 rounded bg-gray-200"></div>
                    <div className="col-span-2 h-4 rounded bg-gray-200"></div>
                  </div>
                </h1>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;
import {Card, CardBody, Image, Spacer, Button} from "@nextui-org/react";
import NextImage from "next/image";

const App = () => {
  return (
    <div className='flex justify-center w-full mt-3' id='about'>
      <div className='w-[1024px]'>
        <Card className="w-full border-none bg-[#B3C8CF] text-[#5C7285]" shadow='none'>
          <CardBody className="p-0">
            <div className="text-5xl font-semibold text-center" >About</div>
            <Spacer y={4} />
            <div className="text-center">
              <div className="text-lg">
                Having 
                <span className="text-cyan-900 font-semibold"> 8 years</span> experience as 
                <span className="text-cyan-900 font-semibold"> PHP Web Developer</span>. 
                Been working with many different environments from 
                individual to a company. Proficient with 
                <span className="text-cyan-900 font-semibold"> Laravel, Yii, CodeIgniter</span>. 
                have experience building and using <span className="text-cyan-900 font-semibold"> REST API</span>. 
                Have a strong fundamental programming skill. Like to learn new things and love 
                solving problem.
              </div>
            </div>
            <Spacer y={4} />
            <div className="text-center">
              <div className="text-lg">{
                `This Page is made with NextJs. Why I Use NextJs instead of Laravel ? I just want to show that
                I can also learn new things. This Page is my first time using NextJs. I'm still learning. :)`
                }
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;
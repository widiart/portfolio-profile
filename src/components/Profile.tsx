import {Card, CardBody, Image, Spacer, Button} from "@nextui-org/react";
import NextImage from "next/image";

const App = () => {
  return (
    <div className='flex justify-center w-full pt-3 shadow-md bg-[#89A8B2]'>
      <div className='w-[1024px]'>
        <Card className="w-full border-none bg-[#89A8B2]" shadow='none'>
          <CardBody className="h-96 p-0">
            <div className="absolute top-24 left-10">
              <p className="text-5xl text-[#F1F0E8]">Hi, I'M <span className="text-7xl font-semibold">Widiarto</span></p>
              <Spacer y={4} />
              <p className="text-4xl text-[#F1F0E8]">Fullstack Web Developer</p>
              <Spacer y={4} />
              <a href="mailto:widiartoputra@gmail.com">
                <Button className="bg-[#F1F0E8] border-[#F1F0E8] font-semibold" variant="ghost">
                  Contact Me
                </Button>
              </a>
            </div>
            <div className="absolute bottom-0 right-0">
              <Image
                alt="NextUI hero Image"
                as={NextImage}
                height={250}
                src="/image/profile.png"
                width={380}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;
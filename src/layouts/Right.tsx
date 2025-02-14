import {Card, CardBody} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";

const App = () => {
  return (
    <aside className="col-span-3">
      <div className="p-4">
        <Card shadow='none'>
          <CardBody className="h-96">
          <Image
            alt="NextUI hero Image"
            as={NextImage}
            height={300}
            src="/image/profile.png"
            width={400}
          />
          </CardBody>
        </Card>
      </div>
    </aside>
  );
};

export default App;
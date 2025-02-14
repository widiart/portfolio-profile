import {Card, CardBody, Image, Spacer, Button} from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faHtml5, faJs, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons'
import NextImage from "next/image";

const techStacks = [
  { name: 'Laravel', content: <FontAwesomeIcon icon={faLaravel} />, customClass: 'text-orange-700' },
  { name: 'CodeIgniter', content: <NextImage alt="CodeIgniter" height={60} src="/image/codeigniter.svg" width={60} /> },
  { name: 'ViteJs', content: <NextImage alt="ViteJs" height={60} src="/image/vitejs.svg" width={60} /> },
  { name: 'NextJs', content: <NextImage alt="NextJs" height={60} src="/image/nextjs.svg" width={60} /> },
];

const dbStacks = [
  { name: 'MySQL', content: <Image alt="MySQL" as={NextImage} height={60} src="/image/mysql.svg" width={60} /> },
  { name: 'PostgeSQL', content: <Image alt="PostgreSQL" as={NextImage} height={60} src="/image/postgresql.svg" width={60} /> },
  { name: 'ElasticSearch', content: <Image alt="ElasticSearch" as={NextImage} height={60} src="/image/elasticsearch.svg" width={60} /> },
];

const languageStacks = [
  { name: 'PHP', content: <FontAwesomeIcon icon={faPhp} className="w-[60px]"/>, customClass: 'text-cyan-700' },
  { name: 'HTML', content: <FontAwesomeIcon icon={faHtml5} className="w-[60px]"/>, customClass: 'text-cyan-700' },
  { name: 'JS', content: <FontAwesomeIcon icon={faJs} className="w-[60px]"/>, customClass: 'text-cyan-700' },
  { name: 'CSS', content: <FontAwesomeIcon icon={faCss} className="w-[60px]"/>, customClass: 'text-cyan-700' },
];

type TechCardProps = {
  children: any;
  customClass: string|undefined;
  name: string;
}

const TechCard = ({ children, customClass = '', name = '' }: TechCardProps) => (
  <Card shadow="none" radius="sm" className={`bg-[#F1F0E8] w-40 h-40 ${customClass}`}>
    <CardBody className="flex flex-col justify-center items-center">
      <div className="text-6xl p-4">{children}</div>
      {name && <span className="text-[#5C7285] font-semibold">{name}</span>}
    </CardBody>
  </Card>
);

const App = () => {
  return (
    <div className='flex justify-center w-full mt-3' id='stack'>
      <div className='w-[1024px]'>
        <Card className="w-full border-none bg-[#B3C8CF] text-[#5C7285]" shadow='none'>
          <CardBody className="p-0">
            <div className="text-5xl font-bold text-center">Tech Stacks</div>
            <Spacer y={8} />
            <div className="flex justify-center gap-4">
              {techStacks.map((stack, index) => (
                <TechCard key={index} customClass={stack.customClass} name={stack.name}>
                  {stack.content}
                </TechCard>
              ))}
            </div>

            <Spacer y={4} />
            <div className="flex justify-center gap-4">
              {dbStacks.map((stack, index) => (
                <TechCard key={index} name={stack.name} customClass="">
                  {stack.content}
                </TechCard>
              ))}
            </div>

            <Spacer y={4} />
            <div className="flex justify-center gap-4">
              {languageStacks.map((stack, index) => (
                <TechCard key={index} customClass={stack.customClass} name={stack.name}>
                  {stack.content}
                </TechCard>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default App;
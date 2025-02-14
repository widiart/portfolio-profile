import React, { useEffect, useState } from 'react';
import { getAnimesPage } from '@/services/jikanService';
import {Card, CardBody, Image, Spacer, Button} from "@nextui-org/react";

type ReadMoreProps = {
  content: string;
  maxCharacterCount?: number;
};

const ReadMore = ({ content, maxCharacterCount = 300 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  if (content.length <= maxCharacterCount) {
    return <p>{content}</p>;
  }

  return (
    <div>
      <p className='text-justify'>
        <span>{isExpanded ? content : content.slice(0, maxCharacterCount) + '...'}</span>
        <button onClick={toggleReadMore} className="text-cyan-500 underline ms-2 hidden">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </p>
    </div>
  );
};

const AnimeCard = ({title = '', cover = '', episodes = 0, description = ''}) => (
  <Card isBlurred className="border-none" shadow='sm'>
    <CardBody>
      <div className='flex gap-4'>
        <div className='h-64 w-40 min-w-40 overflow-hidden rounded-lg'>
          <Image
            alt="Image Cover" 
            className="h-full object-cover" 
            src={cover} />
        </div>
        <div className="flex flex-col gap-0">
            <h3 className="font-semibold text-foreground/90">{title}</h3>
            <p className="text-small text-foreground/80">Episodes: {episodes}</p>
            <h1 className="text-medium font-medium mt-2">
              <ReadMore content={description} />
            </h1>
          </div>
      </div>
    </CardBody>
  </Card>
);

const BlankCard = () => (
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
);

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const goToPage = (page = 1) => {
    setLoading(true);
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setLoading(true);
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setLoading(true);
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  useEffect(() => {
    const fetchData = async (page = 1) => {
      try {
        const data = await getAnimesPage(page);
        setCurrentPage(data.pagination.current_page)
        // setTotalPages(data.pagination.last_visible_page)
        setTotalPages(10)
        setAnimes(data.data);
      } catch (error) { 
      } finally {
        setLoading(false);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  if (loading) {
    return (
      <div>
        <div className='grid grid-cols-2 gap-4'>
          <BlankCard />
          <BlankCard />
        </div>
        <Spacer y={4} />
        <div className='flex w-full justify-center gap-2'>
          <Button className={`bg-cyan-700 text-cyan-100 ${currentPage == 1 && 'bg-[#F1F0E8] hover:bg-[#F1F0E8] text-cyan-700'}`} variant="solid" onClick={handlePrevPage} 
            disabled={currentPage == 1}>
            Prev
          </Button>
          {
            [1,2,3,4,5,6,7,8,9,10].map(page => (
              <Button key={page} isIconOnly onClick={() => goToPage(page)}
                className={`bg-cyan-700 text-cyan-100 ${currentPage == page && 'bg-[#F1F0E8] hover:bg-[#F1F0E8] text-cyan-700'}`} 
                variant="solid" disabled={currentPage == page}>
                {page}
              </Button>
            ))
          }
          <Button className={`bg-cyan-700 text-cyan-100 ${currentPage == totalPages && 'bg-[#F1F0E8] hover:bg-[#F1F0E8] text-cyan-700'}`} variant="solid" onClick={handleNextPage} 
            disabled={currentPage == totalPages}>
            Next
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-4'>
        {
          animes.map(anime => (
            <AnimeCard 
              key={anime['mal_id']}
              title={anime['title']}
              cover={anime['images']['jpg']['image_url']}
              episodes={anime['episodes']}
              description={anime['synopsis']}
            />
          ))
        }
      </div>
      <Spacer y={4} />
      <div className='flex w-full justify-center gap-2'>
        <Button className={`bg-cyan-700 text-cyan-100 ${currentPage == 1 && 'bg-[#F1F0E8] hover:bg-[#F1F0E8] text-cyan-700'}`} variant="solid" onClick={handlePrevPage} 
          disabled={currentPage == 1}>
          Prev
        </Button>
        {
          [1,2,3,4,5,6,7,8,9,10].map(page => (
            <Button key={page} isIconOnly onClick={() => goToPage(page)}
              className={`bg-cyan-700 text-cyan-100 ${currentPage == page && 'bg-[#F1F0E8] hover:bg-[#F1F0E8] text-cyan-700'}`} 
              variant="solid" disabled={currentPage == page}>
              {page}
            </Button>
          ))
        }
        <Button className={`bg-cyan-700 text-cyan-100 ${currentPage == totalPages && 'bg-[#F1F0E8] hover:bg-[#F1F0E8] text-cyan-700'}`} variant="solid" onClick={handleNextPage} 
          disabled={currentPage == totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default App;
import React from 'react';

const ServiceDetailPage = ({params}) => {
  const services = [
    {
      _id: "1",
      name: "Web Development",
      description: "Build modern and responsive websites using the latest technologies.",
      price: 500,
      img: "hhttps://i.ibb.co.com/4259t7d/product.webp",
    },
    {
      _id: "2",
      name: "SEO Optimization",
      description: "Improve your website ranking and visibility on search engines.",
      price: 300,
      img: "https://i.ibb.co.com/v1t77rF/social.jpg",
    },
    {
      _id: "3",
      name: "Graphic Design",
      description: "Create stunning visuals, logos, and branding materials for your business.",
      price: 400,
      img: "https://i.ibb.co.com/mCTPhnc/insta.jpg",
    },
  ];

  const id = params.id;
  const service = services.find(s=> s._id === id)
  return (
    <div className='max-w-6xl mx-auto py-12 grid grid-cols-2 gap-6'>
      <div className='flex flex-col items-start justify-center gap-3'>
        <p className='text-xl font-bold'>{service.name}</p>
        <p className='text-base font-thin'>Price: ${service.price}</p>
        <p className='text-base font-bold'>Details:- {service.description}</p>
      </div>
      <div className='p-6'>
        <img src={service.img} alt="serviceImg" className='w-full h-[400px] rounded-md' />
      </div>
    </div>
  );
};

export default ServiceDetailPage;
import Link from "next/link";

const ServicesPage = () => {
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
  
  
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl mb-5 font-bold">Services page</h2>
      <div className="grid grid-cols-3 gap-5">
      {
        services.map(service=><div key={service._id}>
          <Link href={`/services/${service._id}`}>
          <div className="flex flex-col gap-3 rounded-md border py-5 px-2">
          <img src={service.img} alt="serviceImg" className="w-full h-[200px] object-cover rounded-md"/>
          <p className="text-xl font-bold">{service.name}</p>
          <p className="text-base font-thin">Price: ${service.price}</p>
          </div></Link>
        </div>)
      }
      </div>
    </div>
  );
};

export default ServicesPage;
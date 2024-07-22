import chef1 from "../../public/asset/images/chef1.jpeg";
import chef2 from "../../public/asset/images/chef2.jpeg";
import chef3 from "../../public/asset/images/chef3.jpeg";

const Chefs = () => {
  const chefData = [
    {
      name: "John Doe",
      image: chef1,
      role: "Executive Chef",
    },
    {
      name: "Jane Smith",
      image: chef2,
      role: "Pastry Chef",
    },
    {
      name: "Mike Johnson",
      image: chef3,
      role: "Sous Chef",
    },
  ];

  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Meet Our Chefs
        </h2>
        <div className='flex flex-col md:flex-row gap-8 justify-center'>
          {chefData.map((chef, index) => (
            <div
              key={index}
              className='bg-white shadow-md rounded-lg overflow-hidden w-full md:w-[300px]'
            >
              <div className='p-6 text-center'>
                <img
                  className='object-cover rounded-full w-32 h-32 mx-auto mb-4'
                  src={chef.image}
                  alt={chef.name}
                />
                <h3 className='text-xl font-semibold mb-2'>
                  {chef.name}
                </h3>
                <p className='text-gray-600'>{chef.role}</p>
              </div>
              <div className='bg-gray-50 px-6 py-4'>
                <p className='text-sm text-gray-700'>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;

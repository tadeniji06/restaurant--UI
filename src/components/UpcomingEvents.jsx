import event from "../../public/asset/images/eve.jpeg";
import Card from "./Card";

const UpcomingEvents = () => {
  return (
    <section className='relative w-full h-[550px] rounded-md bg-slate-400 p-3'>
      <div className='w-full h-full'>
        <img
          className='w-full h-full object-cover blur-sm'
          src={event}
          alt=''
        />
        <span className='absolute inset-0 text-white text-center text-3xl font-bold pt-8'>
          Our Upcoming Events
        </span>
      </div>
      <Card
        className={
          "absolute max-w-[1000px] h-[300px] inset-0 m-auto p-3"
        }
      >
        <span>EVENTS</span>
      </Card>
    </section>
  );
};

export default UpcomingEvents;

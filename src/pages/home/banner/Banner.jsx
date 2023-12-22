import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div className="space-y-6 p-8 lg:px-3 absolute text-black md:w-2/5 mt-44 md:ml-10">
        <h1 className="text-4xl font-bold">ToDo List - Organize Your Tasks</h1>
        <p>
          Manage your tasks efficiently with our ToDo List application. Stay organized,
          boost productivity, and accomplish your goals. Simplify your life with easy-to-use
          task management. Get started now!
        </p>
        <Link to="/tasks">
          <button className="button text-bold text-black px-5 py-2 rounded border border-red-700 mt-9">
            Explore Now
          </button>
        </Link>
      </div>

      <div className="w-full h-[600px]">
        <img
          className="w-full h-[600px]"
          src="https://img.freepik.com/premium-vector/realistic-abstract-background-red-white-accent-shape_294571-1035.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=ais"
          alt="Banner Background"
        />
      </div>
    </div>
  );
};

export default Banner;

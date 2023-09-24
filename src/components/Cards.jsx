import data from '../data/data.json'

import avatar from "../assets/images/image-jeremy.png";
import work from "../assets/images/icon-work.svg";
import ellipsis from "../assets/images/icon-ellipsis.svg";

function Cards() {
  return (
    <section className="text-white flex items-center justify-center flex-col">
      <div className="flex items-center justify-center bg-neutral-dark-blue flex-col w-80 mt-20 mb-6 rounded-xl">
        <div className="flex place-items-center justify-center gap-5 bg-primary-blue w-full h-[133px] rounded-xl">
          <div>
            <img
              src={avatar}
              alt="Image of Jeremy"
              className="rounded-full border h-20 w-20"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-neutral-pale-blue">Report for</p>
            <h2 className="text-2xl">Jeremy Robson</h2>
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center w-full py-6 text-lg">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>

      <div className="bg-primary-light-red-work flex flex-col justify-between rounded-xl h-[166px] mb-5">
        <div className="flex items-end justify-end relative">
          <img src={work} alt="" className="absolute  top-0 right-[5%]" />
        </div>
        <div className=" bg-neutral-dark-blue rounded-lg w-80 h-[122px] z-10 ">
          <div className="flex flex-col gap-2 py-7 px-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Work</h2>
              <img src={ellipsis} alt="ellipsis" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-3xl">32hrs</p>
              <p className="text-neutral-pale-blue font-light">Last Week - 36hrs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;

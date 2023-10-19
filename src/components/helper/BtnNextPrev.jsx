/* eslint-disable react/prop-types */
import next from '../../assets/right.png'
import previous from '../../assets/left.png'

const btnStyle =
  'mx-3  p-4 slide-btn cursor-pointer rounded-full shadow-sm bg-white shadow-slate-700 active:scale-105 text-black '
export default function BtnNextPrev({ nextSlide, prevSlide }) {
  return (
    <div className="sm:w-[75%] w-fit gap-10  relative sm:absolute justify-between items-center  flex">
      <img
        src={previous}
        alt="previous"
        width={50}
        className={btnStyle}
        onClick={prevSlide}
      />
      <img
        src={next}
        alt="next"
        width={50}
        className={btnStyle}
        onClick={nextSlide}
      />
      {/* <button
            className="px-5 aspect-square rounded-full  bg-[#DDDCE0] "
            onClick={prevSlide}
          >
            &#x2190;
          </button>
          <button
            className=" px-5 bg-[#dddce0c5]  aspect-square rounded-full  "
            onClick={nextSlide}
          >
            &#x2192;
          </button> */}
    </div>
  )
}

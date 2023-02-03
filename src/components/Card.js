import React from 'react'

const Card = () => {
  return (
    <div className="flex p-3 m-auto text-center justify-center w-9/12">
      <div className="picture">
        <img src="https://picsum.photos/200" alt="" className='rounded-lg'/>
      </div>
      <div>
        <p className='p-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, nesciunt blanditiis explicabo magnam earum illo accusantium nihil rerum et sequi dignissimos quisquam expedita eligendi quae pariatur ut modi id in!
        </p>
      </div>
    </div>
  );
}

export default Card
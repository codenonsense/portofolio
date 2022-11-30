import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestiae debitis, pariatur quam placeat nobis ipsam eius blanditiis expedita cumque similique doloremque aliquam atque delectus quia nostrum! Minus voluptatum nobis ea culpa? Necessitatibus pariatur rerum inventore laudantium, beatae earum aut temporibus quia asperiores quas, eaque animi, vel ducimus quo doloremque.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi, nemo quis culpa, mollitia beatae debitis voluptate impedit a sit eos est enim voluptatibus vero sunt nostrum reprehenderit possimus voluptatem ipsa alias? Et nemo reprehenderit asperiores dicta aliquam doloremque minima eveniet dolore aliquid, tenetur consequatur at dignissimos earum ut rerum!
            </p>
        </div>
    </div>
  )
}

export default About;
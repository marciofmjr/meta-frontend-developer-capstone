import banner from './../images/banner.jpg';

function Banner () {
  return <div className="full-section bg-lime-100">
    {/* <div className="section-container flex gap-6 justify-between items-center"> */}
    <div className="section-container flex flex-col w-full gap-6 justify-between items-center lg:flex-row">
      <div className="w-full lg:w-6/12 p-8 flex flex-col gap-3">
        <h1 className="text-6xl font-bold text-lime-900">Little Lemon</h1>
        <h3 className="text-2xl text-lime-700">Chicago</h3>
        <p className='text-lime-700'>Et commodo proident exercitation consectetur ex officia ipsum aliquip est reprehenderit. Enim voluptate Lorem consectetur aliquip non proident ea fugiat non dolore nisi.</p>
      </div>
      <div className="w-full h-96 lg:w-6/12">
        <img src={banner} alt="Banner" className='w-full h-full object-cover object-center' />
      </div>
    </div>
  </div>
}

export default Banner;
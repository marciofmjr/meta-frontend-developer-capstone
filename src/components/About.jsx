import ImageAbout from './../images/about.jpg';

function About() {
  return (
    <div id="aboutSection" className="flex w-full flex-col justify-between gap-8 lg:flex-row">
      <div className="w-full lg:w-6/12 flex flex-col gap-4">
        <h3 className="font-bold text-4xl">About</h3>
        <p className="text-lime-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, molestiae nobis sed dolorem sequi repellat dolorum, illo velit minus
          eius numquam voluptatibus veniam. Tempore culpa harum libero doloribus quos porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos, molestiae nobis sed dolorem sequi repellat dolorum, illo velit minus eius numquam voluptatibus veniam. Tempore culpa harum
          libero doloribus quos porro. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, molestiae nobis sed dolorem sequi repellat dolorum, illo velit minus
          eius numquam voluptatibus veniam. Tempore culpa harum libero doloribus quos porro.
        </p>
      </div>
      <div className="w-full lg:w-6/12">
        <img src={ImageAbout} alt="About" />
      </div>
    </div>
  );
}

export default About;

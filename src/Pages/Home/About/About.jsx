import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";



const About = () => {
    return (
        <div className="bg-black">
            <div className="hero min-h-[520px] w-full  pt-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 items-center justify-center profile-img">
                    <div >
                        <img data-aos="fade-left" data-aos-duration="1000"  src="https://i.ibb.co/TB04Z4Y/IMG-20221107-114551-Bokeh.jpg" className="max-w-[280px] rounded-lg shadow-2xl" />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000"  className="w-[560px] ">
                        <h1 className="text-3xl font-bold text-white">About Me</h1>
                        <h1 className="text-5xl my-5 font-bold text-red-400">I am available for your Project
                        </h1>
                        <p className="py-6 text-white">Hello! I am Shuvojit Kumar Sana, from Khulna, Bangladesh.
                            I am dedicated to learning and mastering new technologies, and coding has become my true passion. <br></br>
                            I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I am all ears! Feel free to explore my resume below to gain a better understanding of my skills and experience. Let us connect and bring your project to life together!</p>
                        <Link to="https://drive.google.com/u/0/uc?id=1eznELqni58NnqWAorCSu91Q3KH2R0Tuk&export=download"><button className="btn "><FaDownload></FaDownload> Download Resume</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import { Link } from 'react-router-dom';
import img1 from "../../../assets/screencapture-summer-camp-client-8f6ae-web-app-2023-07-01-20_37_51.png"


const ProjectsId3 = () => {
    return (
        <div className="pb-20">
            <div className="carousel  w-full h-[680px] mt-10">
                <div id="slide1" className="carousel-item relative mx-auto w-full">
                    <img src={img1} className="w-[780px] h-[1280px] mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>



            </div>
            <div>
                <h1 className="text-4xl font-bold text-white mx-20">Summer Camp School : </h1>
                <div className="flex gap-4 pt-8">
                           <div>
                            <Link className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " to="https://github.com/shuvojitsana/summer-camp-client/" target="_blank">Client</Link>
                           </div>
                           <div>
                            <Link className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " to="https://github.com/shuvojitsana/summer-camp-server/" target="_blank">Server</Link>
                           </div>
                           <div>
                            <Link className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " to="https://summer-camp-client-8f6ae.web.app/" target="_blank">Demo</Link>
                           </div>
                            
                                
                        </div>

            </div>
            <div className="text-white mx-40 mt-10">
                <h3 className="text-2xl font-semibold">Frontend:</h3>
                <p> This site basically, mada by react, tailwind, react router dom,firebase Authentication,toast.React Tab category by filter data of database.</p>
                <h3 className="text-2xl mt-3 font-semibold">Backend:</h3>
                <p>
                    This backend site basically, mada by express JS, Node JS, MongoDB, JWT.
                    Created Restful api and all frontend data comes by database.And price sorting by show frontend and implements Search option.
                </p>
                <h3 className="text-2xl font-semibold mt-3">Details:</h3>
                <p>
                    This website three difference role as admin, instructor, student. Instructor can crud operation class. and by default all inserted class pending. admin can approved the class and all approved class show the frontend all classes. And all user by default student and admin can change the role instructor.Admin can deny the class and this class why deny this feedback seen this class.Student can select an class only one time. Student can remove class by his selected class. Student can Enroll class by the payment system I implements strip.and student can see his Enroll class and payment history see his enroll classes. Frontend home page Top six class and top six instructor base on the Enrol students.
                </p>
            </div>

        </div>
    );
};

export default ProjectsId3;
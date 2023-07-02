import Footer from "../../Shard/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactMe from "../Contact/ContactMe";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
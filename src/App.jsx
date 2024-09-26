import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  const projects = [
    {
      id: 1,
      title: "Blog 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-01-01",
      img: "",
      views: 20,
      likes: 10,
    },
    {
      id: 2,
      title: "Blog 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-02-01",
      img: "",
      views: 30,
      likes: 20,
    },
    {
      id: 3,
      title: "Blog 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-03-01",
      img: "",
      views: 15,
      likes: 5,
    },
    {
      id: 4,
      title: "Blog 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-04-01",
      img: "",
      views: 40,
      likes: 30,
    },
    {
      id: 5,
      title: "Blog 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-05-01",
      img: "",
      views: 25,
      likes: 15,
    },
    {
      id: 6,
      title: "Blog 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-06-01",
      img: "",
      views: 35,
      likes: 25,
    },
    {
      id: 7,
      title: "Blog 7",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-07-01",
      img: "",
      views: 45,
      likes: 35,
    },
    {
      id: 8,
      title: "Blog 8",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-08-01",
      img: "",
      views: 50,
      likes: 40,
    },
    {
      id: 9,
      title: "Blog 9",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-09-01",
      img: "",
      views: 30,
      likes: 20,
    },
    {
      id: 10,
      title: "Blog 10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-10-01",
      img: "",
      views: 25,
      likes: 15,
    },
    {
      id: 11,
      title: "Blog 11",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-11-01",
      img: "",
      views: 40,
      likes: 30,
    },
    {
      id: 12,
      title: "Blog 12",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2022-12-01",
      img: "",
      views: 20,
      likes: 10,
    },
    {
      id: 13,
      title: "Blog 13",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-01-01",
      img: "",
      views: 35,
      likes: 25,
    },
    {
      id: 14,
      title: "Blog 14",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-02-01",
      img: "",
      views: 45,
      likes: 35,
    },
    {
      id: 15,
      title: "Blog 15",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-03-01",
      img: "",
      views: 50,
      likes: 40,
    },
    {
      id: 16,
      title: "Blog 16",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-04-01",
      img: "",
      views: 30,
      likes: 20,
    },
    {
      id: 17,
      title: "Blog 17",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-05-01",
      img: "",
      views: 25,
      likes: 15,
    },
    {
      id: 18,
      title: "Blog 18",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-06-01",
      img: "",
      views: 40,
      likes: 30,
    },
    {
      id: 19,
      title: "Blog 19",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-07-01",
      img: "",
      views: 20,
      likes: 10,
    },
    {
      id: 20,
      title: "Blog 20",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-08-01",
      img: "",
      views: 35,
      likes: 25,
    },
    {
      id: 21,
      title: "Blog 21",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-09-01",
      img: "",
      views: 45,
      likes: 35,
    },
    {
      id: 22,
      title: "Blog 22",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero vel felis tristique faucibus. Donec eget consectetur tortor. Nulla facilisi. Donec dui justo, condimentum id facilisis vel, tristique et neque.",
      date: "2023-10-01",
      img: "",
      views: 50,
      likes: 40,
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog blogs={projects}/>} />
          <Route exact path="/projects" element={<Projects projects={projects} />} />
          <Route exact path="/projects/:id" element={<ProjectDetails projects={projects} />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

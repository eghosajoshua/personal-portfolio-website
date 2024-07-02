import NavBar from "./components/navbar";
import ProfileDetails from "./components/profile_details";
import About from "./components/about";
import Portfolio from "./components/portfolio";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="md:flex max-w-6xl mx-auto md:p-4 gap-4">
        <ProfileDetails />
        <div>
          <About />
          <Portfolio />
        </div>
      </div>
    </>
  );
};

export default App;

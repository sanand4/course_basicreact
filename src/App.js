import "./App.css";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      //console.log(data);
      setCourses(output);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        {" "}
        <Filter filterData={filterData} />
      </div>
      <div>
        {" "}
        <Cards courses={courses} />
      </div>
    </div>
  );
};

export default App;

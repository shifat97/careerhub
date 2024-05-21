import {useEffect, useState} from "react";
import Job from "./Job.jsx";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-center">Featured Job</h1>
      <p className="text-sm text-gray-600 text-center my-4">Explore thousands of job opportunities with all the
        information you need. Its your future</p>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          jobs.map((job) => (
            <Job key={job.id} job={job}/>
          ))
        }
      </div>
    </div>
  )
}
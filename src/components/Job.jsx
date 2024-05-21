import PropTypes from 'prop-types';
import LocationLogo from '../assets/icons/Location.png';
import MoneyLogo from '../assets/icons/money.png';

export default function Job({job}) {
  const {logo, job_title, company_name, remote_or_onsite, salary, contact_information} = job;

  return (
    <div className="border p-6">
      <img src={logo} alt=""/>
      <h3 className="font-bold mt-4">{job_title}</h3>
      <p className="mt-4">{company_name}</p>
      <p className="text-[#9676FF] px-2 border border-[#9676FF] inline-block mt-4">{remote_or_onsite}</p>
      <div className="mt-4 flex gap-6">
        <div className="flex items-center gap-2">
          <img src={LocationLogo} alt=""/>
          <p>{contact_information.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={MoneyLogo} alt=""/>
          <p>{salary}</p>
        </div>
      </div>
      <button className="bg-[#9676FF] text-white px-4 py-2 mt-4 rounded-md">View Details</button>
    </div>
  )
}

Job.propType = {
  job: PropTypes.object,
}
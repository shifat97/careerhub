import UserImage from '../assets/images/user.png';

export default function Banner() {
    return (
        <div className="lg:flex lg:justify-between lg:items-center mt-10 p-4">
            <div className="lg:max-w-[570px]">
                <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">One Step Closer to Your Dream Job</h1>
                <p className="text-sm text-gray-600 text-center lg:text-left my-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-[#9676FF] text-white px-4 py-2 rounded-md block mx-auto lg:mx-0">Get Started</button>
            </div>
            <div>
                <div>
                    <img className="block mx-auto" src={UserImage} alt=""/>
                </div>
            </div>
        </div>
    )
}
import Banner from "./Banner.jsx";
import CategoryList from "./CategoryList.jsx";
import Jobs from "./Jobs.jsx";

export default function Home() {
    return (
        <div>
            <Banner/>
            <CategoryList/>
            <Jobs/>
            <h1>This is home</h1>
        </div>
    );
}

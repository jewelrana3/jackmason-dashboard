import Card from './Card';
import Chart from './Chart';
import Post from './Post';

export default function Dashboard() {
    return (
        <div className="">
            <div className="col-span-4">
                <Card />
            </div>
            <div className="col-span-8">
                <Chart />
            </div>

            <div className=" rounded-lg">
                <Post />
            </div>
        </div>
    );
}

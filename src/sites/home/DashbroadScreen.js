import MainLayout from "../../layouts/MainLayout";
import {PieExample} from "../../charts/PieExample";
import {BarExample} from "../../charts/BarExamle";
import {DoughnutBarExample} from "../../charts/DoughnutExample";

const DashboardScreen = () => {
    return (
        <MainLayout>
            <div className={"mb-5 flex flex-wrap"}>
                <div className={"md:w-1/2 w-full mb-3"}>
                    <BarExample/>;
                </div>
                <div className={"md:w-1/4 w-full mb-3"}>
                    <PieExample/>
                </div>
                <div className={"md:w-1/4 w-full mb-3"}>
                    <DoughnutBarExample/>
                </div>
            </div>
        </MainLayout>
    )
}
export default DashboardScreen
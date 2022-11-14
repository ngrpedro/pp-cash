import SideBar from "../components/SideBar";
import Transactions from "../components/Transactions";
import Stats from "../components/Stats";
import Header from "../components/Header";
import TopBar from "../components/TopBar";

const Dashboard = () => {
  return (
    <div>
      <SideBar>
        <TopBar />
        <Header />
        <Stats />
        <Transactions />
      </SideBar>
    </div>
  );
};

export default Dashboard;

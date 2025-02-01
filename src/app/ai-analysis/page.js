import SideBar from '../components/SideBar';
import AnalysisMain from './ai-analysis-main';




export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <main className="ml-20 w-full">
        <AnalysisMain />
      </main>
    </div>
  );
}

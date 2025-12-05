import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import AllJobs from "./pages/AllJobs"
import MyJobs from "./pages/MyJobs"
import JobDetail from "./pages/JobDetail"
import Onboarding from "./pages/Onboarding"
import Applicant from "./pages/Applicant"
import PostJobs from "./pages/PostJobs"
import Header from "./layout/Header"
import Footer from "./layout/Footer"

function App() {
  

  return (
    <>
     <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="jobs" element={<AllJobs />} />
        <Route path="my-jobs" element={<MyJobs />} />
        <Route path="jobs/:id" element={<JobDetail />} />
        <Route path="onboard" element={<Onboarding />} />
        <Route path="applicants" element={<Applicant />} />
        <Route path="post-jobs" element={<PostJobs />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App

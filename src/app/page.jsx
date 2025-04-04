import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import dynamic from 'next/dynamic'
const HomePage = dynamic(() => import('@/app/component/HomePage'))
import axios from 'axios';
import {HomePageSections} from "@/example"
const currentSection = HomePageSections;

export async function generateMetadata() {


  return {
   title: 'Mindful TMS: rTMS | Therapists | Psychiatrists | Holistic Care',
   description:`Discover safe, medication-free rTMS treatment for depression, anxiety, and OCD in Delhi and Bengaluru. We also offer therapy, assessments and neurofeedback.`,
 };

}


export default async function Home() {

    let allSection = {};
  
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}homeSection/getHomeSection`);
      allSection = res.data;
    } catch (error) {
      console.error('Failed to fetch home section data:', error);
      // You can also handle what to render in case of an error
    }

  return (
   <>
    <HomePage allSection={allSection} />
    {/* <HomePage allSection={currentSection} /> */}
   </>
  );
}

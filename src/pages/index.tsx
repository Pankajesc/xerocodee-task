import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import MainSection from '@/components/Section1/mainSection';
import Team from '@/components/Section2/team';
import Services from '@/components/Section3/services';
import Technologies from '@/components/Section4/technologies';
import Transform from '@/components/Transform/transform';
import Footer from '@/components/Footer/footer';
import Crew from '@/components/Crew/crew';
import Links from '@/components/Section5/Links';

export default function Home() {
  return (
    <>
      <Head>
        <title>XeroCodee Internship</title>
      </Head>
      <main>
        <Navbar/>
        <MainSection/>
        <Team/>
        <Services/>
        <Technologies/>
        <Crew/>
        <Transform/>
        <Links/>
        <Footer/>
      </main>
    </>
  )
}

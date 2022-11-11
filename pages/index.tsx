import type { GetStaticProps, NextPage } from 'next'
import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { type } from 'os';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials} from '../utils/fetchSocials';
import { fetchProjects} from '../utils/fetchProjects';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { createClient } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}

const Home = ({pageInfo, skills, socials, experiences, projects}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white 
    h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2d858b]/80'>
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
          <ContactMe pageInfo={pageInfo}/>
      </section>

      {/* Footer */}
      <footer className='sticky bottom-1 w-20 h-24 mx-auto cursor-pointer'>
          <Link href="#hero">
              <div className='flex items-center justify-center'>
              <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
              cursor-pointer'
              src="/static/profile.jpg" alt="" />
              </div>
          </Link>
      </footer>

    </div>
  )
};

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
    pageInfo,
    skills,
    socials,
    experiences,
    projects
  },

  revalidate: 10
  }
}

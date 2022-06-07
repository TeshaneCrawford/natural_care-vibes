import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/Layout/Hero';
import { Box } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Box></Box>
    </React.Fragment>
  );
};

export default Home;

import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About',
      }}
    >
      <h1>About The Archive</h1>
      <p>Lorde Mail Archive was built in 2021 by Fluteds who simply wanted to archive the Emails in style.</p>
      <p>All content used belongs to Lorde. e.g Emails, Photos</p>
      <p>If you wish me to take it down, please contact me via Twitter.</p>

      <h1>Open Source</h1>
      <p>The archive is open sourced!</p>
      <p>If you&apos;d like to contribute to the archive please check out the GitHub.</p>
    </Layout>
  );
};

export default About;

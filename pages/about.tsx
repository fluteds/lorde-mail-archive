import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About',
      }}
    >
      <h1>ABOUT</h1>
      <p>Lorde Mail Archive was built in 2021 by Fluteds who simply wanted to archive the Emails. All content used belongs to Lorde. e.g Emails, Photos and Videos.</p>
      <p>This Website collects <b>no data</b> from you during your visit.</p>
  
      <h1>OPEN SOURCE</h1>
      <p>The archive is open sourced! If you&apos;d like to contribute to the archive please check out the
        <a href="https://github.com/fluteds/lorde-mail-archive"> GitHub. </a> 
        Majority of the posts are sourced from
      <a href="https://lordeemailarchive.tumblr.com/"> lordeemailarchive.tumblr.com.</a></p>
    </Layout>
  );
};

export default About;

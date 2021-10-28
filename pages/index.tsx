import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Image from 'next/image';


type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>

<Image
  alt={`Lorde`}
  src={`/images/logo.png`}
  width={1000}
  height={558}
  priority
/>
      
      <h1>SOLAR INSTITUTE</h1>

<Image
  alt={`Waves`}
  src={`/images/waves.png`}
  width={800}
  height={86}
  priority
/>      

      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-yellow-500 dark:text-yellow-400">
            {format(parseISO(post.date), 'dd MMMM, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-yellow-900 dark:text-yellow dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;

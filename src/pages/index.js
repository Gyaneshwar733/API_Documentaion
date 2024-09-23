import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = '/docs/';
  }, []);

  return (
    <Layout
      title='Dataseers'
      description="Description will go into a meta tag in <head />">
    </Layout>
  );
}

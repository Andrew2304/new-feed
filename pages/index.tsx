import { Card, Col, Row } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { getMatches } from '../services/football';
import { getRanks } from '../services/football';
import styles from '../styles/Home.module.scss';
import FootballComponent from './components/football';

const HomePage: NextPage = () => {
  const [matches, setMatches] = useState<any[]>([]);
  const [ranks, setRanks] = useState<any[]>([]);
  const [spanRanks, setSpanRanks] = useState<any[]>([]);
  const [gerRanks, setGerRanks] = useState<any[]>([]);
  const [itaRanks, setItaRanks] = useState<any[]>([]);
  const [freRanks, setFreRanks] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (params?: any) => {
    // const aa = await Promise.all([await getRanks()]);
    setMatches(await getMatches());
    setRanks(await getRanks());
    setSpanRanks(await getRanks({ competition_code: 'PD' }));
    setGerRanks(await getRanks({ competition_code: 'BL1' }));
    setItaRanks(await getRanks({ competition_code: 'SA' }));
    setFreRanks(await getRanks({ competition_code: 'FL1' }));
  };

  return (
    <Layout pageName='HomePage'>
      <Head>
        <title>NFT</title>
        <meta name='description' content='NFT' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.homePage}>
        <Row>
          <Col md={8} xs={24}>
            <Card title='Anh'>
              <FootballComponent matches={matches} ranks={ranks} tab={'1'} />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card title='Anh'>
              <FootballComponent matches={matches} ranks={ranks} tab={'2'} />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card title='Tây Ban Nha'>
              <FootballComponent matches={matches} ranks={spanRanks} tab={'2'} />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card title='Ý'>
              <FootballComponent matches={matches} ranks={itaRanks} tab={'2'} />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card title='Đức'>
              <FootballComponent matches={matches} ranks={gerRanks} tab={'2'} />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card title='Pháp'>
              <FootballComponent matches={matches} ranks={freRanks} tab={'2'} />
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default HomePage;

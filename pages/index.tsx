import { Card, Col, Row } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { getMatches } from '../services/football';
import { getRanks } from '../services/football';
import styles from '../styles/Home.module.scss';
import MatchComponent from '../components/football/match';
import RankComponent from '../components/football/rank';
import RankCoinComponent from '../components/coin/rank';

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
        <title>NewFeeds</title>
        <meta name='description' content='NewFeeds' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.homePage}>
        <Row>
          <Col md={8} xs={24}>
            <Card title='Matches'>
              <MatchComponent
                matches={{
                  engMatches: { title: 'Eng', data: matches },
                }}
                tab={'1'}
              />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card title='Ranks'>
              <RankComponent
                matches={matches}
                ranks={{
                  engRanks: { title: 'Eng', data: ranks },
                  spanRanks: { title: 'Span', data: spanRanks },
                  gerRanks: { title: 'Ger', data: gerRanks },
                  freRanks: { title: 'Fre', data: freRanks },
                  itaRanks: { title: 'Ita', data: itaRanks },
                }}
                tab={'2'}
              />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card title='Coin'>
              <RankCoinComponent
                matches={matches}
                ranks={{
                  engRanks: { title: 'Binance', data: ranks },
                }}
                tab={'2'}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default HomePage;

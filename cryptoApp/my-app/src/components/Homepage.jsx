import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/API';
import Marketplace from './Marketplace';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);

  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader/>;

  return (
    <div className="homepage">
      <div className="homepage__stats">
        <Title level={2} className="homepage__heading">
          Global Crypto Stats
        </Title>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Statistic title="Total Market Cap" value={`$${millify(globalStats.totalMarketCap)}`} />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
          </Col>
        </Row>
      </div>
      <div className="homepage__top-crypto">
        <Title level={2} className="homepage__heading">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="homepage__show-more">
          <Link to="/marketplace">Show More</Link>
        </Title>
        <Marketplace simplified />
      </div>
      <div className="homepage__latest-news">
        <Title level={2} className="homepage__heading">
          Latest Crypto News
        </Title>
        <Title level={3} className="homepage__show-more">
          <Link to="/news">Show More</Link>
        </Title>
        <News simplified />
      </div>
    </div>
  );
};

export default Homepage;

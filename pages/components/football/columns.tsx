import Image from 'next/image';
import { convertStringToDateTimeDisplay } from '../../../helpers/util';

export const useMatchColumns = () => {
  return [
    {
      title: 'homeTeamLogo',
      dataIndex: 'homeTeamLogo',
      key: 'homeTeamLogo',
      render: (text: any, record: any) => (
        <Image src={record.homeTeamLogo} width={40} height={40} />
      ),
    },
    {
      title: 'homeTeamName',
      dataIndex: 'homeTeamName',
      key: 'homeTeamName',
    },
    {
      title: 'matchDate',
      dataIndex: 'matchDate',
      key: 'matchDate',
      render: (text: any, record: any) => convertStringToDateTimeDisplay(record.matchDate),
    },
    {
      title: 'awayTeamLogo',
      dataIndex: 'awayTeamLogo',
      key: 'awayTeamLogo',
      render: (text: any, record: any) => (
        <Image src={record.awayTeamLogo} width={40} height={40} />
      ),
    },
    {
      title: 'awayTeamName',
      dataIndex: 'awayTeamName',
      key: 'awayTeamName',
    },
  ];
};

export const useRankColumns = () => {
  return [
    {
      title: 'position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'teamLogo',
      dataIndex: 'teamLogo',
      key: 'teamLogo',
      render: (text: any, record: any) => <Image src={record.teamLogo} width={40} height={40} />,
    },
    {
      title: 'teamName',
      dataIndex: 'teamName',
      key: 'teamName',
    },
    {
      title: 'playedGames',
      dataIndex: 'playedGames',
      key: 'playedGames',
    },
    {
      title: 'goalDifference',
      dataIndex: 'goalDifference',
      key: 'goalDifference',
    },
    {
      title: 'points',
      dataIndex: 'points',
      key: 'points',
    },
  ];
};

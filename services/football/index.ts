import dayjs from "dayjs";
import clientApi from "../client-api";

export const getMatches = async () => {
  const response = await clientApi.req('https://api.vieon.vn/backend/cm/v5/football/match', "GET");
  const records = await response.json();
  const fromDate = dayjs().format('YYYY-MM-DD 00:00');
  const toDate = dayjs().add(1, 'day').format('YYYY-MM-DD 23:59');
  const teams = ['ARS', 'LIV', 'MUN', 'MCI'];
  return records.filter((record: any) => fromDate < record.matchDate && record.matchDate < toDate)
    .filter((record: any) => teams.includes(record?.homeTeam?.tla) || teams.includes(record?.awayTeam?.tla))
    .map((record: any) => ({
      key: record.id,
      homeTeamLogo: record?.homeTeam?.crestUrl,
      homeTeamName: record?.homeTeam?.tla,
      matchDate: record.matchDate,
      awayTeamLogo: record?.awayTeam?.crestUrl,
      awayTeamName: record?.awayTeam?.tla,
    }));
};

export const getRanks = async (params: any = undefined) => {
  const response = await clientApi.req('https://api.vieon.vn/backend/cm/v5/football/ratings', "GET", "req", params);
  const records = await response.json()
  return records.map((record: any) => ({
    key: record.position,
    position: record.position,
    goalDifference: record.goalDifference,
    points: record.points,
    playedGames: record.playedGames,
    teamName: record?.team?.shortName,
    teamLogo: record?.team?.crestUrl,
  }));
};
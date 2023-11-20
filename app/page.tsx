import prisma from '@/prisma/client';
import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';
import IssueChart from './IssueChart';
import IssueSummary from './IssueSummary';
import LatestIssues from './LatestIssues';

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: 'OPEN',
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: 'IN_PROGRESS',
    },
  });
  const done = await prisma.issue.count({
    where: {
      status: 'DONE',
    },
  });
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} inProgress={inProgress} done={done} />
        <IssueChart open={open} inProgress={inProgress} done={done} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: 'Issue Tracker - Dashboard',
  description: 'View a summary of project issues and their status',
};

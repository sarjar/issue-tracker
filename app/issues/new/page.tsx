import dynamic from 'next/dynamic';
import IssueFormSkeleteon from './loading';

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleteon />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;

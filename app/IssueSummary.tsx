import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
  open: number;
  inProgress: number;
  done: number;
}

const IssueSummary = ({ open, inProgress, done }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: 'Open Issues', value: open, status: 'OPEN' },
    { label: 'In Progress Issues', value: inProgress, status: 'IN_PROGRESS' },
    { label: 'Resolved Issues', value: done, status: 'DONE' },
  ];
  return (
    <Flex gap="4">
      {containers.map((c) => (
        <Card key={c.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${c.status}`}
            >
              {c.label}
            </Link>
            <Text size="5" className="font-bold">
              {c.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;

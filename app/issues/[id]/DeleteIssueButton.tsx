'use client';
import { Spinner } from '@/app/components';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteIssue = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/issues/${issueId}`);
      router.push('/issues/list');
      router.refresh();
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={loading}>
            Delete Issue
            {loading && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This will delete the issue and all of its comments.
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="soft" color="red" onClick={deleteIssue}>
                Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Title>Error</AlertDialog.Title>
        <AlertDialog.Description>
          There was an error deleting the issue.
        </AlertDialog.Description>
        <AlertDialog.Action>
          <Button
            variant="soft"
            color="red"
            mt="2"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialog.Action>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;

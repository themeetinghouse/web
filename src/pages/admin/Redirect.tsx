import { Fragment, useEffect, useState } from 'react';
import { Button, Input, Alert } from 'reactstrap';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  createRedirect,
  updateRedirect,
  deleteRedirect as deleteRedirectMutation,
} from 'graphql/mutations';
import {
  CreateRedirectInput,
  UpdateRedirectInput,
  DeleteRedirectInput,
} from 'API';
import { getRedirects, Redirects } from 'pages/getRedirects';
import './Redirect.scss';

const SORT_RULE = {
  TO_ASC: 'TO_ASC',
  FROM_ASC: 'FROM_ASC',
  TO_DESC: 'TO_DESC',
  FROM_DESC: 'FROM_DESC',
} as const;

type Redirect = NonNullable<Redirects[0]>;

const RedirectDashboard = () => {
  const [redirects, setRedirects] = useState<Redirects>([]);
  const [to, setTo] = useState('');
  const [id, setId] = useState('');
  const [sortRule, setSortRule] = useState<keyof typeof SORT_RULE>(
    SORT_RULE.FROM_ASC
  );
  const [filter, setFilter] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });

  const externalRedirectRegex = new RegExp(/https?:|\.pdf/);

  useEffect(() => {
    getRedirects()
      .then(({ data }) => {
        if (data?.listRedirects?.items) {
          setRedirects(data.listRedirects.items);
        }
      })
      .catch((e: any) => {
        console.error(e);
      });
  }, []);

  const sortRedirects = (redirects: Redirects) => {
    switch (sortRule) {
      case SORT_RULE.TO_DESC:
        return redirects.sort((a, b) =>
          (b?.to ?? '').localeCompare(a?.to ?? '')
        );
      case SORT_RULE.TO_ASC:
        return redirects.sort((a, b) =>
          (a?.to ?? '').localeCompare(b?.to ?? '')
        );
      case SORT_RULE.FROM_DESC:
        return redirects.sort((a, b) =>
          (b?.id ?? '').localeCompare(a?.id ?? '')
        );
      case SORT_RULE.FROM_ASC:
        return redirects.sort((a, b) =>
          (a?.id ?? '').localeCompare(b?.id ?? '')
        );
      default:
        return redirects;
    }
  };

  const saveRedirect = async () => {
    if (!id || !to) {
      return;
    }

    const index = redirects.findIndex((redirect) => redirect?.id === id);

    try {
      if (index !== -1) {
        const input: UpdateRedirectInput = { id, to };

        await API.graphql({
          query: updateRedirect,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        const redirectsCopy = [...redirects];
        const { to: previousTo } = redirectsCopy[index] as Redirect;
        redirectsCopy[index] = { id, to } as Redirect;
        setRedirects(redirectsCopy);

        setAlert({
          message: `Updated redirect: ${id} to ${to} (previously ${previousTo})`,
          type: 'info',
        });
      } else {
        const input: CreateRedirectInput = { id, to };

        await API.graphql({
          query: createRedirect,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        setRedirects([...redirects, { id, to } as Redirect]);
        setAlert({
          message: `Added redirect: ${id} to ${to}`,
          type: 'success',
        });
      }
    } catch (e) {
      console.error(e);
      setAlert({ message: 'Error updating redirect', type: 'warning' });
    } finally {
      setTo('');
      setId('');
    }
  };

  const deleteRedirect = async (redirectToDelete: Redirects[0]) => {
    try {
      if (redirectToDelete?.id) {
        const input: DeleteRedirectInput = { id: redirectToDelete.id };

        await API.graphql({
          query: deleteRedirectMutation,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        setRedirects(
          redirects.filter((redirect) => redirect?.id !== redirectToDelete.id)
        );

        setAlert({
          message: `Deleted redirect: ${redirectToDelete.id} to ${redirectToDelete.to}`,
          type: 'danger',
        });
      }
    } catch (e) {
      console.error(e);
      setAlert({ message: 'Error deleting redirect', type: 'warning' });
    }
  };

  const isEdit = redirects.some((redirect) => redirect?.id === id);

  return (
    <Fragment>
      {alert.type && alert.message && (
        <Alert
          color={alert.type}
          style={{
            width: '65vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {alert.message}
          <Button
            onClick={() => {
              setAlert({ type: '', message: '' });
            }}
          >
            x
          </Button>
        </Alert>
      )}
      <Input
        placeholder="search"
        value={filter}
        onChange={(event) => setFilter(event.target.value.trim())}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Input
          value={id}
          onChange={(event) => setId(event.target.value.trim())}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              saveRedirect();
            }
          }}
          placeholder="from"
        />

        <Input
          value={to}
          onChange={(event) => setTo(event.target.value.trim())}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              saveRedirect();
            }
          }}
          placeholder="to"
        />

        <Button
          onClick={saveRedirect}
          color={isEdit ? 'info' : 'success'}
          style={{ width: 100 }}
        >
          {isEdit ? 'Update' : 'Save'}
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{ flex: 0.5 }}
          onClick={() =>
            setSortRule(
              sortRule === SORT_RULE.FROM_ASC
                ? SORT_RULE.FROM_DESC
                : SORT_RULE.FROM_ASC
            )
          }
        >
          From {sortRule === SORT_RULE.FROM_ASC && '⬆️'}
          {sortRule === SORT_RULE.FROM_DESC && '⬇️'}
        </div>
        <div
          style={{ flex: 1.1 }}
          onClick={() =>
            setSortRule(
              sortRule === SORT_RULE.TO_ASC
                ? SORT_RULE.TO_DESC
                : SORT_RULE.TO_ASC
            )
          }
        >
          To {sortRule === SORT_RULE.TO_ASC && '⬆️'}
          {sortRule === SORT_RULE.TO_DESC && '⬇️'}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {sortRedirects(redirects)
          .filter(
            (redirect) =>
              !filter ||
              redirect?.to.includes(filter) ||
              redirect?.id.includes(filter)
          )
          .map(
            (redirect) =>
              redirect && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 8,
                    flex: 1,
                  }}
                  key={redirect.id}
                  onClick={() => {
                    setTo(redirect.to);
                    setId(redirect.id);
                  }}
                >
                  <div style={{ flex: 0.5, width: 0 }}>{redirect.id}</div>

                  <a
                    style={{
                      flex: 1,
                      display: 'flex',
                      width: 0,
                      overflow: 'clip',
                    }}
                    href={
                      (externalRedirectRegex.test(redirect.to) ? '' : '/') +
                      redirect.to
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {redirect.to}
                  </a>

                  <div
                    style={{
                      textAlign: 'right',
                      flex: 0.1,
                      width: 0,
                    }}
                  >
                    <Button
                      onClick={(event) => {
                        event.stopPropagation();
                        deleteRedirect(redirect);
                      }}
                      color="danger"
                    >
                      x
                    </Button>
                  </div>
                </div>
              )
          )}
      </div>
    </Fragment>
  );
};

export default RedirectDashboard;

import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';

export const handler = async (event) => {
  try {
    try {
      const user = await TMHDB.getUser(event.identity.username);
      if (user.f1HouseholdId == null)
        return { statusCode: 402, error: { message: 'No Household Id found' } };
      const result = await TMHDB.f1SearchContributionReceipts(
        user.f1HouseholdId
      );
      const z = {
        statusCode: 200,
        results: result.results,
      };
      console.log(z);
      return z;
    } catch (e: any) {
      console.log({ error: e });
      return { statusCode: '401', error: 'Login Error' + e };
    }
  } catch (error: any) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};

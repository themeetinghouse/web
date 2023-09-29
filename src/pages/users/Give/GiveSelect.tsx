import { useEffect, useState } from 'react';
import './GiveSelect.scss';
import { tmhStripeListProducts } from 'graphql-custom/customQueries';
import { API, GraphQLResult } from '@aws-amplify/api';
import { TmhStripeListProductsQuery } from 'API';
type GiveSelectProps = {
  form: any;
  setForm: (a: any) => void; //setState type
};
export default function GiveSelect(props: GiveSelectProps) {
  const { form, setForm } = props;
  const [fundOptions, setFundOptions] = useState<
    Array<{ name: string; value: string }>
  >([]);
  useEffect(() => {
    const loadFundOptions = async () => {
      try {
        const result = (await API.graphql({
          query: tmhStripeListProducts,
        })) as GraphQLResult<TmhStripeListProductsQuery>;
        if (result.data?.tmhStripeListProducts?.error)
          throw result.data?.tmhStripeListProducts?.error;
        const products = result.data?.tmhStripeListProducts?.products ?? [];
        console.log({ products });
        const productOptions = products.map((product: any) => ({
          name: product.name,
          value: product.id,
        }));
        setFundOptions([
          { name: 'Please make a selection', value: '' },
          ...productOptions,
        ]);
      } catch (error) {
        console.error({ error });
      }
    };
    loadFundOptions();
  }, []);
  return (
    <select
      data-testid="FundType"
      value={form.fund.id ?? fundOptions?.[0]?.value ?? ''}
      onChange={(e) => {
        const selectedOption = fundOptions.find(
          (option) => option.value === e.target.value
        );

        setForm({
          ...form,
          fund: {
            name: selectedOption?.name ?? '',
            id: selectedOption?.value ?? '',
          },
        });
      }}
      className="GiveInput"
      style={{ padding: '0px 30px' }}
    >
      {!fundOptions.length ? (
        <option value="loading">Loading options...</option>
      ) : (
        fundOptions.map((fund, index) => {
          return (
            <option
              label={fund.name}
              disabled={index === 0}
              key={fund.value}
              value={fund.value}
            >
              {fund.name}
            </option>
          );
        })
      )}
    </select>
  );
}

import { useEffect, useState } from 'react';
import './GiveSelect.scss';
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
      setFundOptions([
        { name: 'Please make a selection', value: '' },
        { name: 'General Fund', value: 'prod_KInCIvOsifKMlP' },
        { name: 'Compassion Fund', value: 'prod_KInaLwdyfHnFNR' },
        { name: 'Go Fund', value: 'prod_KInZRDoUXidWHj' },
      ]);
    };
    loadFundOptions();
  }, []);
  return (
    <select
      data-testid="FundType"
      value={form.fund.name}
      onChange={(e) => setForm({ ...form, fund: { name: e.target.value } })}
      className="GiveInput"
      style={{ padding: '0px 30px' }}
    >
      {!fundOptions.length ? (
        <option value="loading">Loading options...</option>
      ) : (
        fundOptions.map((fundName) => {
          return (
            <option key={fundName.name} value={fundName.value}>
              {fundName.name}
            </option>
          );
        })
      )}
    </select>
  );
}

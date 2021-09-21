import { useEffect, useState } from 'react';
import './GiveSelect.scss';
type GiveSelectProps = {
  form: any;
  setForm: (a: any) => void; //setState type
};
export default function GiveSelect(props: GiveSelectProps) {
  const { form, setForm } = props;
  const [fundOptions, setFundOptions] = useState<Array<string>>([]);
  useEffect(() => {
    const loadFundOptions = async () => {
      setTimeout(() => {
        setFundOptions([
          'Please make a selection',
          'General',
          'Compassion',
          'Go',
          'Curriculum',
        ]);
      }, 500);
    };
    loadFundOptions();
  }, []);
  return (
    <select
      data-testID="FundType"
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
            <option key={fundName} value={fundName}>
              {fundName} fund
            </option>
          );
        })
      )}
    </select>
  );
}

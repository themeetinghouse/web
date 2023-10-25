import './SearchItem.scss';
export default function Pill({ title }: { title: string }) {
  return <span className="SearchItemPill">{title}</span>;
}

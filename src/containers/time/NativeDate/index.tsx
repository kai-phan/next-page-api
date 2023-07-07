import React from 'react';

export type Props = {
  className?: string;
  dateString: string;
};

const localToUTC = (date: Date) => {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
  );
};

const NativeDate: React.FC<Props> = ({ dateString }) => {
  const newDate = new Date(dateString);
  const [format, setFormat] = React.useState('');
  const [formatUTC, setFormatUTC] = React.useState('');

  return (
    <section>
      <h2 className="text-primary-500 font-bold">Native date</h2>
      <br />
      <p className="text-grey-500">
        <div className="text-grey-700">DateString: {dateString}</div>
        <select
          onChange={(e) => {
            setFormat(newDate[e.target.value]());
            setFormatUTC(localToUTC(newDate)[e.target.value]());
          }}
        >
          <option value="toString">toString()</option>
          <option value="toJSON">toJSON()</option>
          <option value="toUTCString">toUTCString()</option>
        </select>
        <br />
        <div className="flex justify-between">
          <span className="text-grey-700 basis-1/2">Local: {format}</span>
          <span className="text-grey-700 basis-1/2">
            Force to UTC: {formatUTC}
          </span>
        </div>
      </p>
    </section>
  );
};

export default NativeDate;

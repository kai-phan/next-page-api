import React from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

export type Props = {
  className?: string;
  dateString: string;
};

dayjs.extend(utc);

const WithDayjs: React.FC<Props> = ({ dateString }) => {
  const [format, setFormat] = React.useState('');
  const [formatUTC, setFormatUTC] = React.useState('');

  const date = new Date();

  return (
    <section>
      <h2 className="text-primary-500 font-bold">With dayjs</h2>
      <br />
      <p className="text-grey-500">
        <div className="text-grey-700">DateString: {date.toString()}</div>
        <select
          onChange={(e) => {
            setFormat(dayjs(date).local()[e.target.value]() as string);
            setFormatUTC(dayjs(date).utc(true)[e.target.value]() as string);
          }}
        >
          <option value="toString">toString()</option>
          <option value="format">format()</option>
          <option value="toJSON">toJSON()</option>
          <option value="toISOString">toISOString()</option>
        </select>{' '}
      </p>
      <div className="flex justify-between">
        <span className="text-grey-700 basis-1/2">Local: {format}</span>
        <span className="text-grey-700 basis-1/2">
          Force to UTC: {formatUTC}
        </span>
      </div>
    </section>
  );
};

export default WithDayjs;

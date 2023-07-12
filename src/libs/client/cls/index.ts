import cls from 'classnames';
import { twMerge } from 'tailwind-merge';

export default function mergeCls(...classes: any[]) {
  return twMerge(cls(...classes));
}
